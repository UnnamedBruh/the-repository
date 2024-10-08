// Basic 1.1. :/
const setup = (function(inst, ai) {
	let users = ["null"], instructions = [], aboutUsers = {"null": []}, ainame = ai ? ai : "UnnamedAI", aliveUsers = []
	function rand(arrayorstring) {
		return arrayorstring[Math.floor(Math.random() * arrayorstring.length)]
	}
	const info = {
		regex: /((?:h(?:i|e(?:y|llo)|o(?:i|wdy))\s*(?:,\s*)?(?:\s*the(?:re|ir))|greetings|aloha)?\s*(?:,?)\s*(\w*))|(how(?:'s|\s*is|\s*was)\s*your\s*day\s*((?:(?:next|last)?\s*)(month|day|year|week|century)?)?(?:\s*(?:,\s*)?(\w+)))/gi,
		response: function(match) {
			if (match[1]) {
				if (match[2] && aliveUsers.includes(match[2].toLowerCase())) {
					return "[no response]"
				} else {
					if (!match[2] || match[2].length === 0 || match[2].toLowerCase() === ainame.toLowerCase()) {
						const well = rand(["Well, ", "Well ", "", ""])
						const hello = (well.length > 0 ? "h" : "H") + rand(["ello", "i", "ey"])
						return (hello.toLowerCase() === "hey" ? hello[0].toUpperCase() + hello.slice(1) : well + hello) + rand([".", "!"])
					} else {
						return "[no response]"
					}
				}
			} else if (match[3]) {
				
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
