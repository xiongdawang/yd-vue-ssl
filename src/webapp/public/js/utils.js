window.add = function(num) {
	return Number(num) + 1;
};

window.throttle = function(fun) {
	clearTimeout(fun.timer);
	fun.timer = setTimeout(function() {
		fun();
	}, 600);
};

