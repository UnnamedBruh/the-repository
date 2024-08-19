class InterpreterParserError extends Error {
	constructor(message) {
		super(message)
		this.name = "InterpreterParserError"
	}
}
const run = function(text) {
	const ret = /"((?:[^"\\]|\\.)*)"|'((?:[^"\\]|\\.)*)'|\d+|\d*\.(\d*)|\s*([\+\-\*\^]|and|or|xor|not|nand|nor|xnor|==|\^=)\s*|(?!define|lock|unlock|if|log|string)([a-zA-Z_]([a-zA-Z_0-9]*))|str\s*=>\s*/
	const keys = /define\s+([a-zA-Z_]([a-zA-Z_0-9]*))\s*=\s*|((un?)lock)\s+([a-zA-Z_]([a-zA-Z_0-9]*))|if\s+|log\s*=>\s*|end(\s+|;|\n)|getTime\s*=>\s*\(\)/
	const tokensRe = new RegExp(ret.source + "|" + keys.source + "|=", "gs")
	function lexer(c) {
		const a = c.match(tokensRe)
		return a
	}
	function parse(tokens) {
		let parses = [], i = 0
		const cache = tokens.length
		let varr = /define\s+([a-zA-Z_]([a-zA-Z_0-9]*))/, ints = /^[0-9]+$/, nums = /[0-9]+\.[0-9]*/, arithmetic = /[\+\-\*\/\^]/, vars = /[a-zA-Z_]([a-zA-Z_0-9]*)/
		for (; i < cache; i++) {
			const token = tokens[i]
			const c = token.match(varr)
			if (c) {
				parses.push({
					type: "newvar",
					identifier: c[1]
				})
			} else if (ints.test(token)) {
				parses.push({
					type: "val",
					value: "int",
					int: token
				})
			} else if (nums.test(token)) {
				parses.push({
					type: "val",
					value: "num",
					num: token
				})
			} else if (['"', "'"].includes(token[0]) && ['"', "'"].includes(token.at(-1))) {
				parses.push({
					type: "val",
					value: "string",
					string: token,
					stringV: token.slice(1, -1)
				})
			} else if (arithmetic.test(token)) {
				parses.push({
					type: "arith",
					operator: token.trim()
				})
			} else if (vars.test(token)) {
				parses.push({
					type: "val",
					value: "variable",
					variable: token
				})
			} else {
				throw new InterpreterParserError("Parser was about to convert token into a parsed token, but this token (" + token + ") is invalid.")
			}
		}
		return parses
	}
	const values = new Set(["arith", "val"])
	function enhanceParses(parses) {
		let pars = []
		let valueParses = []
		let count = 0
		for (const parse of parses) {
			if (values.has(parse.type)) {
				count++
				valueParses.push(parse)
			} else {
				if (count > 0) {
					pars.push({
						type: "equation",
						parses: valueParses
					})
					valueParses = []
				} else {
					pars.push(parse)
				}
				count = 0
			}
		}
		if (count > 0) {
			pars.push({
				type: "equation",
				parses: valueParses
			})
			valueParses = []
		} else {
			pars.push(parse)
		}
		return pars
	}
function exponent(a, b) {
	if (a === 0 && b === 0) {
		return 1
	} else if (a === 0) {
		return 0
	} else if (b === 0 || a === 1) {
		return 1
	} else if (b === 0.5) {
		return Math.sqrt(a)
	} else if (b % 1 === 0) {
		let result = a
		const cache = Math.abs(b) - 1
		for (let i = 0; i < cache; i++) {
			result = result * a
		}
		return b < 0 ? 1 / result : result
	} else {
		return Math.exp(b * Math.log(a))
	}
}
	function interpret(parses) {
		const variables = new Map()
		let defV = {ident: null, is: false}
		let result = null
		const cacheForms = new Set(["int", "num"])
		function parseEquation(parses) {
			let memory = {type: "", value: null}
			let type = null
			let result = null
			function parseEasy(token) {
				if (cacheForms.has(token.value)) {
					return Number(token[token.value])
				}
				return token[token.value]
			}
			const typesPossible = new Set(["int", "num", "string"])
			for (const parse of parses) {
				switch (parse.type) {
					case "val":
						const value = parse[parse.value]
						memory.value = parse.value === "string" ? parse.stringV : value
						memory.type = parse.value
						result = (result == null ? parseEasy(value) : result)
						if (type !== null) {
							if (typesPossible.has(memory.type)) {
								memory.value = memory.type == "string" ? memory.value : Number(memory.value)
								console.log(memory)
								if (memory.value) {
									if (type === "+") {
										result = result + parseEasy(memory)
									} else if (type === "-") {
										if (memory.value == "string") {
											result = result.slice(parseEasy(memory) * -1)
										} else {
											result = result + parseEasy(memory)
										}
									} else if (type === "*") {
										result = result * parseEasy(memory)
									} else if (type === "/") {
										result = result / parseEasy(memory)
									} else if (type === "^") {
										result = exponent(result, parseEasy(memory))
									}
								}
							} else {
								throw new SyntaxError(`The value (${prevMemory.value}) which is a '${prevMemory.type}' can't be used with operator '${type}' because it's not a number.`)
							}
							memory.value = result
						} else {
							result = memory.value
						}
						break;
					case "arith":
						if (typesPossible.has(memory.type)) {
							type = parse.operator
						} else {
							throw new SyntaxError(`The value (${memory.value}) which is a '${memory.type}' can't be used with operator '${parse.operator}' because it's not a number.`)
						}
						break
				}
			}
			return result
		}
		for (const parse of parses) {
			switch (parse.type) {
				case "newvar":
					defV.ident = parse.identifier
					defV.is = true
					break
				case "equation":
					if (defV.is) {
						variables.set(defV.ident, parseEquation(parse.parses))
						result = variables.get(defV.ident)
					} else {
						throw new SyntaxError("The value (" + parse.parses.map(i => ({"val": i[i.value], "arith": i.operand})[i.type]).join(" ") + ") is provided, but doesn't have any use in the code.")
					}
					break
			}
		}
		return result
	}
	return interpret(enhanceParses(parse(lexer(text))))
}
