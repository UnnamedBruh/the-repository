// Basic 1.1. :/
const setup = (function(inst, ai) {
	let users = ["null"], instructions = [], data = [], aboutUsers = {"null": []}, ainame = ai ? ai : "UnnamedAI", aliveUsers = []
	function rand(arrayorstring) {
		return arrayorstring[Math.floor(Math.random() * arrayorstring.length)]
	}
	const info = {
		regex: /h(?:i|e(?:y|llo)|o(?:i|wdy))(?:\s*the(?:re|ir))?\s*(?:,?)\s*(\w*)/gi,
		response: function(match) {
			if (match[1] || /^(hi|hey|hello|howdy)/.test(match[0])) {
				if (aliveUsers.includes(match[1].toLowerCase())) {
					return "[no response]"
				} else {
					if (match[1].length === 0) {
						const well = rand(["Well, ", "Well ", ""])
						return well + (well.length > 0 ? "h" : "H") + rand(["ello", "i", "ey"]) + rand([".", "!"])
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
