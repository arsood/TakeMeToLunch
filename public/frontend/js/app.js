$(document).on("click", "#find-expert-button", function() {
	$("#home-search").animate({
		"margin-left":-2000
	}, 800, function() {
		$(this).hide();
	});
});