const JetEngine = (function(code, options = {}) {
	// just in case the options aren't defined yet or need other options
	function forOpt(property, defaultValue) {
		const $ = options[property];
		options[property] = $ !== undefined ? $ : defaultValue;
	}
	forOpt("renameGlobalVariables", true);
	forOpt("renameLocalVariables", true);
	function lexer() {
		const reg = /(var|let)\s+([a-zA-Z_$][a-zA-Z_$0-9]*)(\s*=\s*)?|const\s+([a-zA-Z_$][a-zA-Z_$0-9]*)\s*=\s*/g
	}
})
