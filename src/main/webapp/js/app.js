ace.settings.check('sidebar' , 'collapsed')
    
function message(text) {
	$("#g-message").removeClass().addClass("alert alert-block alert-success").text(text).show(100);
	$("#g-message").click(function() {
		$("#g-message").hide();
	});
	setTimeout(function() {
		$("#g-message").fadeOut();
	}, 3000);
}

function error(text) {
	$("#g-message").text(text).removeClass().addClass("alert alert-block alert-danger").show(100);
	$("#g-message").click(function() {
		$("#g-message").hide();
	});
}
