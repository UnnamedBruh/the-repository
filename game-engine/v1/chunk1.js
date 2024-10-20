const UnnamedEngine = (function() {
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
})()
