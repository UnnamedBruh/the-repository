// This is an unfinished JavaScript optimizer
const JetEngine = (function(code, options = {}) {
	// just in case the options aren't defined yet or need other options
	function forOpt(property, defaultValue) {
		const $ = options[property]
		options[property] = $ !== undefined ? $ : defaultValue
	}
	forOpt("renameGlobalVariables", true)
	forOpt("renameLocalVariables", true)
	function lexerParser() {
		const reg = /(var|let)\s+([a-zA-Z_$][a-zA-Z_$0-9]*)(\s*=\s*)?|const\s+([a-zA-Z_$][a-zA-Z_$0-9]*)\s*=\s*|([a-zA-Z_$][a-zA-Z_$0-9]*)\s*=\s*/,
			values = /\d+(\.\d*)?|\.(\d+)|"((?:[^"\\\n]|\\(.|\\n))*)"|'((?:[^"\\\n]|\\(.|\\n))*)'|`((?:[^"\\]|\\.)*)`/
		return code.match(new RegExp(values.source + reg.source, "g")).map(token => {
			const broken = token.match(/\S+/g);
			if (token.startsWith("var") || token.startsWith("let") || token.startsWith("const")) {
				if (broken[1] === "=") {
					return `${broken[0]} is a reserved keyword or identifier`
				} else {
					return {
						token: 0,
						key: broken[0],
						name: broken[1]
					}
				}
			} else if (/^(\d+(\.\d*)?)|\.(\d+)/.test(token)) {
				return {
					token: 1,
					name: token.replace(/^0+/, "")
				}
			} else if (broken[1] === "=") {
				return {
					token: 2,
					key: broken[0]
				}
			}
		})
	}
	function compiler(tokens, isGl) {
		const availableNames = ["$","_","a","A","b","B","c","C","d","D","e","E","f","F","g","G","h","H","i","I","j","J","k","K","l","L","m","M","n","N","o","O","p","P","q","Q","r","R","s","S","t","T","u","U","v","V","w","W","x","X","y","Y","z","Z"]
		let currentVariableDefType = "", code = "", expectingValue = false, varsDefined = 0, varMap = {}
		for (const token of tokens) {
			if (expectingValue) {
				code += token.name + ";"
				expectingValue = false
			} else {
				switch (token.token) {
					case 0:
						if (varMap[token.name]) {
							return `CompilationError: ${token.name} is already a reserved variable`
						} else {
							code += `${currentVariableDefType == token.key ? "," : token.key + " "}${availableNames[varsDefined]}=`
							varMap[token.name] = availableNames[varsDefined]
							varsDefined++
							expectingValue = true
							currentVariableDefType = token.key
						}
						break
					case 2:
						if (varMap[token.name]) {
							code += `${varMap[token.name]}=`
							expectingValue = true
						} else {
							return `CompilationError: ${token.name} is not defined yet`
						}
						break
					case undefined:
						return `ParsingError: ${token}`
					default:
						return `CompilationError: Unexpected token ${token.name}`
				}
			}
		}
		return code.replace(/;,/g, ",")
	}
	return compiler(lexerParser(code))
})
