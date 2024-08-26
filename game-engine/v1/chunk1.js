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
					throw new Error(`The X for a Vector2 must be a number or a numeric string (this value is '${this.#Xp}')`)
				} else if (isNaN(this.#Yp)) {
					throw new Error(`The Y for a Vector2 must be a number or a numeric string (this value is '${this.#Yp}')`)
				}
			} else {
				throw new Error(`The X and Y must be a number or a numeric string. The values were (${x}, ${y})`)
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
			this.#Xp = Math.floor(Number(val))
			return this.#Xp
		}
		set y(val) {
			this.#Yp = Math.floor(Number(val))
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
		floor() {
			return new Vector2(Math.floor(this.#Xp), Math.floor(this.#Yp))
		}
		ceil() {
			return new Vector2(Math.ceil(this.#Xp), Math.ceil(this.#Yp))
		}
		add(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x += vector.x
				vect.y += vector.y
				return vect
			} else if (num2 === undefined) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x += vector
				vect.y += vector
				return vect
			} else {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x += vector
				vect.y += num2
				return vect
			}
		}
		sub(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x -= vector.x
				vect.y -= vector.y
				return vect
			} else if (num2 === undefined) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x -= vector
				vect.y -= vector
				return vect
			} else {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x -= vector
				vect.y -= num2
				return vect
			}
		}
		mul(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x *= vector.x
				vect.y *= vector.y
				return vect
			} else if (num2 === undefined) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x *= vector
				vect.y *= vector
				return vect
			} else {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x *= vector
				vect.y *= num2
				return vect
			}
		}
		div(vector, num2) {
			if (vector instanceof Vector2) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x /= vector.x
				vect.y /= vector.y
				return vect
			} else if (num2 === undefined) {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x /= vector
				vect.y /= vector
				return vect
			} else {
				const vect = new Vector2(this.#Xp, this.#Yp)
				vect.x /= vector
				vect.y /= num2
				return vect
			}
		}
		exp() {
			return new Vector2(Math.exp(this.#Xp), Math.exp(this.#Yp))
		}
	}
})()
