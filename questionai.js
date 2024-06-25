// This AI is meant to solve questions.

function r(array) {
	return array[Math.floor(Math.random() * array.length)]
}
const SOURCE = {
	regexes: [
		[
			/what('s|\s*is)the\s+((\s+true|\s+exact)*)(meaning|definition)\s+of((\s+our)?)\s+(life|purpose|goal\s+in\s+life)/i,
			function() {
				return r(["The true/exact ", "The "]) + r(["meaning of life ", "definition of life "]) + r(["is to ", "is probably to "]) + r(["explore the vast wonders of the world", "see and solve the mysteries of what lies" + r([" ahead ", " "]) + "in a location you wish to find", "travel to anywhere you want, experiencing the place you wanted"]) + r([".", "!"])
			}
		],
		[
			/who\s+(made|invented|created)\s+you/i,
			function() {
				return (r(["My creator, ", "The user who made me, "]) + "UnnamedBruh " + r(["has made me", "has created me", "has invented me"]) + r([".", "!"])).replace(/user who made me, UnnamedBruh has made me/, "user who made me, Unnamedbruh, " + r(["has decided to create me to solve questions", "has decided to make me to solve problems", "has decided to invent me to solve tasks"]) + r([".", "!"]))
			}
		],
		[
			/how\s+(?:should|can|do)\s+i\s+(?:(help\s+)?)(?:debug|fix\s+((my\s+)?)\s+errors)\s+in\s+(javascript|lua|python)/i,
			function(programminglanguage) {
				return r(["To help/try to debug your code ", "To try to debug code ", "To try to resolve the errors ", "To try to fix the errors ", "To try to solve those errors ", "To try to debug your code written in ", "To try to solve which errors you have in "]) + programminglanguage[0].toUpperCase() + programminglanguage.slice(1).toLowerCase() + ", " + r(["you can follow ", "you can try to use ", "you can use "]) + r(["the provided ", "the shown "]) + r(["steps ", "solutions "]) + r(["to the problems", "for the errors", "for the problems", "to the errors"]) + "."
			}
		]
	],
	main: function() {
		return r(["If you want to ask another question, ", "If you still need help, ", "If you want more help, ", "If you need me still, ", "If you still need me for something, ", "If you still want me for a task, "]) + r(["feel free to ask", "let me know and I'll " + r(["assist", "help", "solve your"]) + r([" needs", " problems"])]) + r([".", "!"])
	}
}
