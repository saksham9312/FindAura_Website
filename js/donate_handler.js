$(document).ready(function() {
	$("#donate_form1").submit(function(event) {
		/* Act on the event */
		event.preventDefault();

		$("#donate_specify_amount_row").fadeOut('slow', function() {
			
		});(500);

		setTimeout(function(){
			$("#donate_detail_row").fadeIn('slow', function() {
				
			});(500);
		}, 700)
		
	});
});