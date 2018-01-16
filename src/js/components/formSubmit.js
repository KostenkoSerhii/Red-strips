function formSubmit(){
	$('form').submit(function(e){
		e.preventDefault(); 
		var form = $(this);
		var m_method="POST"; 
		var m_action=$(this).attr('action'); 
		var m_data=$(this).serialize();
		$.ajax({
			type: m_method,
			url: m_action,
			data: m_data,
			success: function(result){ 

				form.reset();
				openPopup("popup-thanks");
			}
		}); 
	});
}
module.exports = formSubmit;