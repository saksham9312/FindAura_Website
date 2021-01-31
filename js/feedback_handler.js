$(document).ready(function () {
	$("#feedback_form1").submit(function(event) {
		event.preventDefault();

		$("#feedback_form1_row").fadeOut('slow', function() {
			
		});(500);

		setTimeout(function(){
			$("#feedback_form2_row").fadeIn('slow', function() {
				
			});(500);
		}, 800)
	});
});