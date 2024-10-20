const UnnamedEngine = (function(id) {
	let canvas, ctx
	if (typeof id === "string") {
		canvas = document.getElementById(id)
		if (!canvas) {
			throw new DOMError("The canvas element isn't found in the current environment.")
		} else if (canvas.tagName.toLowerCase() !== "canvas") {
			throw new DOMError("The 'canvas' element picked is not a canvas element.")
		}
	} else if (id instanceof HTMLElement) {
		if (!id) {
			throw new TypeError("The canvas element isn't passed into the game engine.")
		}
		if (id.tagName.toLowerCase() !== "canvas") {
			throw new DOMError("The 'canvas' element passed into the game engine is not a canvas element.")
		}
	} else if (id === undefined) {
		canvas = document.createElement("canvas")
		document.body.appendChild(canvas)
	}
	if (!canvas.getContext) {
		throw new Error("The canvas element isn't supported in your browser, or the HTML runtime isn't working properly.")
	}
	ctx = canvas.getContext("2d")
	if (!ctx) {
		throw new Error("The canvas context (currently \"2d\") isn't available in the canvas element. Make sure your browser supports the canvas element.")
	}
	const children = [] // Stores all of the instances in the game
	const arr = new Set(["n", "s"])
	class Vector2 {
		#Xp = 0;
		#Yp = 0;
		constructor(x = 0, y = 0) {
			if (arr.has((typeof x)[0]) && arr.has((typeof y)[0])) {
				this.#Xp = Number(x)
				this.#Yp = Number(y)
				if (isNaN(this.#Xp)) {
					throw new TypeError(`The X for a Vector2 must be a number or a numeric string (this value is '${this.#Xp}')`)
				} else if (isNaN(this.#Yp)) {
					throw new TypeError(`The Y for a Vector2 must be a number or a numeric string (this value is '${this.#Yp}')`)
				}
			} else {
				throw new TypeError(`The X and Y must be numbers or numeric strings. The values were (${x}, ${y})`)
			}
		}
		get magnitude() {
			return Math.sqrt(this.#Xp * this.#Xp + this.#Yp * this.#Yp)
		}
		get unit() {
			const m = this.magnitude
			return new Vector2(this.#Xp / m, this.#Yp / m)
		}
		get x() {
			return this.#Xp
		}
		get y() {
			return this.#Yp
		}
		set x(val) {
			this.#Xp = Number(val)
			return this.#Xp
		}
		set y(val) {
			this.#Yp = Number(val)
			return this.#Yp
		}
		set magnitude(val) {
			if (arr.has((typeof val)[0])) {
				const th = Number(val)
				if (isNaN(th)) {
					throw new Error(`The value setting the magnitude of a Vector2 must be a number or a numeric string (this value is '${val}')`)
				}
				switch (th) {
					case 1:
						const u = this.unit
						this.#Xp = u.x
						this.#Yp = u.y
						return u
					case 0:
						this.#Xp = 0
						this.#Yp = 0
						return new Vector2(0, 0)
					default:
						const m = this.magnitude
						this.#Xp = (this.#Xp / m) * th
						this.#Yp = (this.#Yp / m) * th
						return new Vector2(this.#Xp, this.#Yp)
				}
			} else {
				throw new Error(`The value setting the magnitude of a Vector2 must be a number or a numeric string (this value is '${val}')`)
			}
		}
		sqrt() {
			return new Vector2(Math.sqrt(this.#Xp), Math.sqrt(this.#Yp))
		}
		toIntVector2() {
			return new IntVector2(this.#Xp, this.#Yp)
		}
		add(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x += vector.x
				vect.y += vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x += vector
				vect.y += vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x += vector
				vect.y += num2
				return vect
			} else {
				throw new TypeError("The 'add' function part of the Vector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		sub(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x -= vector.x
				vect.y -= vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x -= vector
				vect.y -= vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x -= vector
				vect.y -= num2
				return vect
			} else {
				throw new TypeError("The 'sub' function part of the Vector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		mul(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x *= vector.x
				vect.y *= vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x *= vector
				vect.y *= vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x *= vector
				vect.y *= num2
				return vect
			} else {
				throw new TypeError("The 'mul' function part of the Vector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		div(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x /= vector.x
				vect.y /= vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x /= vector
				vect.y /= vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x /= vector
				vect.y /= num2
				return vect
			} else {
				throw new TypeError("The 'div' function part of the Vector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		exp() {
			return new Vector2(Math.exp(this.#Xp), Math.exp(this.#Yp))
		}
		cbrt() {
			return new Vector2(Math.cbrt(this.#Xp), Math.cbrt(this.#Yp))
		}
	}
	class IntVector2 extends Vector2 {
		constructor(x = 0, y = 0) {
			super(x, y)
			this.#Xp = Math.floor(this.#x)
			this.#Yp = Math.floor(this.#y)
			delete this.toIntVector2
		}
		set x(val) {
			this.#Xp = Math.floor(Number(val))
			return this.#Xp
		}
		set y(val) {
			this.#Yp = Math.floor(Number(val))
			return this.#Yp
		}
		exp() {
			return new IntVector2(Math.exp(this.#Xp), Math.exp(this.#Yp))
		}
		cbrt() {
			return new IntVector2(Math.cbrt(this.#Xp), Math.cbrt(this.#Yp))
		}
		sqrt() {
			return new IntVector2(Math.sqrt(this.#Xp), Math.sqrt(this.#Yp))
		}
		set magnitude(val) {
			if (arr.has((typeof val)[0])) {
				const th = Number(val)
				if (isNaN(th)) {
					throw new Error(`The value setting the magnitude of a Vector2 must be a number or a numeric string (this value is '${val}')`)
				}
				switch (th) {
					case 1:
						const u = this.unit
						this.#Xp = u.x
						this.#Yp = u.y
						return u
					case 0:
						this.#Xp = 0
						this.#Yp = 0
						return new IntVector2(0, 0)
					default:
						const m = this.magnitude
						this.#Xp = (this.#Xp / m) * th
						this.#Yp = (this.#Yp / m) * th
						return new IntVector2(this.#Xp, this.#Yp)
				}
			} else {
				throw new Error(`The value setting the magnitude of a Vector2 must be a number or a numeric string (this value is '${val}')`)
			}
		}
		add(vector, num2) {
			if (vector instanceof IntVector2) {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x += vector.x
				vect.y += vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x += vector
				vect.y += vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x += vector
				vect.y += num2
				return vect
			} else {
				throw new TypeError("The 'add' function part of the IntVector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		sub(vector, num2) {
			if (vector instanceof IntVector2) {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x -= vector.x
				vect.y -= vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x -= vector
				vect.y -= vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x -= vector
				vect.y -= num2
				return vect
			} else {
				throw new TypeError("The 'sub' function part of the IntVector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		mul(vector, num2) {
			if (vector instanceof IntVector2) {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x *= vector.x
				vect.y *= vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x *= vector
				vect.y *= vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x *= vector
				vect.y *= num2
				return vect
			} else {
				throw new TypeError("The 'mul' function part of the IntVector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		div(vector, num2) {
			if (vector instanceof IntVector2) {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x /= vector.x
				vect.y /= vector.y
				return vect
			} else if (num2 === undefined && (typeof vector)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x /= vector
				vect.y /= vector
				return vect
			} else if ((typeof vector)[0] === "n" && (typeof num2)[0] === "n") {
				const vect = new IntVector2(this.#Xp, this.#Yp)
				vect.x /= vector
				vect.y /= num2
				return vect
			} else {
				throw new TypeError("The 'div' function part of the IntVector2 class must be provided with either:\n1. Another Vector2.\n2. A number.\n3. Two numbers.")
			}
		}
		toVector2() {
			return new Vector2(this.#Xp, this.#Yp)
		}
	}
	class Color3 {
		#r = 0;
		#g = 0;
		#b = 0;
		constructor(r = 0, g, b) {
			r = Number(r)
			if (!isNaN(r) && g === undefined && b === undefined) {
				r = Math.max(Math.min(Math.floor(r), 255), 0)
				this.#r = r
				this.#g = r
				this.#b = r
			} else {
				g = Number(g)
				b = Number(b)
				if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
					this.#r = Math.max(Math.min(Math.floor(r), 255), 0)
					this.#g = Math.max(Math.min(Math.floor(g), 255), 0)
					this.#b = Math.max(Math.min(Math.floor(b), 255), 0)
				} else {
					throw new TypeError("The Color3 class must be provided with: 1. One number or numerical string.\n2. Three values of any number or numerical string.")
				}
			}
		}
		get r() {
			return this.#r
		}
		get g() {
			return this.#g
		}
		get b() {
			return this.#b
		}
		get R() {
			return this.#r
		}
		get G() {
			return this.#g
		}
		get B() {
			return this.#b
		}
		set r(val) {
			val = Number(val)
			if (!isNaN(val)) {
				this.#r = Math.floor(val)
			} else {
				throw new TypeError("The provided value must be a number, or a numerical string (setting the 'r' component to '" + val + "' has been halted)")
			}
			return this.#r
		}
		set g(val) {
			val = Number(val)
			if (!isNaN(val)) {
				this.#g = Math.floor(val)
			} else {
				throw new TypeError("The provided value must be a number, or a numerical string (setting the 'g' component to '" + val + "' has been halted)")
			}
			return this.#g
		}
		set b(val) {
			val = Number(val)
			if (!isNaN(val)) {
				this.#b = Math.floor(val)
			} else {
				throw new TypeError("The provided value must be a number, or a numerical string (setting the 'b' component to '" + val + "' has been halted)")
			}
			return this.#b
		}
		static black() {
			return new Color3(0)
		}
		static white() {
			return new Color3(255)
		}
		static red() {
			return new Color3(255, 0, 0)
		}
		static yellow() {
			return new Color3(255, 255, 0)
		}
		static green() {
			return new Color3(0, 255, 0)
		}
		static aqua() {
			return new Color3(0, 255, 255)
		}
		static blue() {
			return new Color3(0, 0, 255)
		}
		static purple() {
			return new Color3(128, 0, 255)
		}
		static pink() {
			return new Color3(255, 0, 255)
		}
	}
	class SquareDisplay {
		#pos = null;
		#siz = null;
		constructor(x = 0, y = 0, width = 100, height = 100, color) {
			this.#pos = new IntVector2(x, y)
			this.#siz = new IntVector2(width, height)
			if (color instanceof Color3) {
				this.#col = color
			} else if (color === undefined) {
				this.#col = Color3.black()
			} else {
				throw new TypeError("The provided color must be a Color3 class to be used")
			}
			children.push(this)
		}
		get class() {
			return "SquareDisplay"
		}
		get position() {
			return this.#pos
		}
		get x() {
			return this.#pos.x
		}
		get y() {
			return this.#pos.y
		}
		set x(val) {
			this.#pos.x = val
			return this.#pos.x
		}
		set y(val) {
			this.#pos.y = val
			return this.#pos.y
		}
		get width() {
			return this.#siz.x
		}
		get height() {
			return this.#siz.y
		}
		set width(val) {
			this.#siz.x = val
			return this.#siz.x
		}
		set height(val) {
			this.#siz.y = val
			return this.#siz.y
		}
		get color() {
			return this.#col
		}
	}
	const json = {}
	json.version = 0;
	json.versionID = "V1.0";
	json.Instance = {
		SquareDisplay
	}
	return json
})()
