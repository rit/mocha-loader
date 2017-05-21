process.nextTick(function() {
	delete require.cache[module.id];
	if(typeof window !== "undefined" && window.mochaPhantomJS)
		mochaPhantomJS.run();
	else if (typeof window !== "undefined" && window.mochaEndedCallback)
		mocha.run(window.mochaEndedCallback)
	else
		mocha.run();
});
