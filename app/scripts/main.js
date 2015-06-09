$(function() {
	var toggle = $('.sliding-navbar-toggle');
	var main = $('.sliding-navbar-main');

	toggle.click(function() {
		main.toggleClass('sliding-navbar-active');
	});
});