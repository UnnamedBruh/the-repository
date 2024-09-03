// Basic 1.1. :/
const setup = (function(inst, ai) {
	let users = ["null"], instructions = [], data = [], aboutUsers = {"null": []}, ainame = ai ? ai : "UnnamedAI", aliveUsers = []
	function rand(arrayorstring) {
		return arrayorstring[Math.floor(Math.random() * arrayorstring.length)]
	}
	const info = {
		regex: /(h(?:i|e(?:y|llo)|o(?:i|wdy))\s*(?:,\s*)?(?:\s*the(?:re|ir))?\s*(?:,?)\s*(\w*))/gi,
		response: function(match) {
			if (match[1]) {
				if (match[2] && aliveUsers.includes(match[2].toLowerCase())) {
					return "[no response]"
				} else {
					if (!match[2] || match[2].length === 0 || match[2].toLowerCase() === ainame.toLowerCase()) {
						const well = rand(["Well, ", "Well ", "", ""])
						return well + (well.length > 0 ? "h" : "H") + rand(["ello", "i", "ey"]) + rand([".", "!"])
					} else {
						return "[no response]"
					}
				}
			}
		}
	}
	return function(userReply) {
		let responseResult = ""
		const matches = userReply.replace(info.regex, function(...obj) {
			responseResult += info.response(obj) + " "
		})
		return responseResult.trim()
	}
})
