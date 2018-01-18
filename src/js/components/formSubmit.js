function formSubmit(){
	$('form').submit(function(e){
		e.preventDefault();

		var $thisForm = $(this);
		var $fields = $thisForm.find(".js-form-field");
		var formStatus = 1;
		var fieldStatus = 1;
		var errorTextInput = $(".js-form-field-error-text");
		var tempError = false;

		$fields.removeClass("error-field ");

		$thisForm.find(".js-form-field").each(function(){
			var $this = $(this);
			validateInput($this);
		});
		
		if(fieldStatus == 0){
			formStatus = 0;
		}

		if(formStatus == 1) {
			console.log("form status ok")
			var m_method = "POST"; 
			var m_action = $thisForm.attr('action'); 
			var m_data = $thisForm.serialize();
			$.ajax({
				type: m_method,
				url: m_action,
				data: m_data,
				success: function(result){ 
					$(`.js-popup[data-popup="popup-thanks"]`).fadeIn(300);
					$("body").addClass("is-hidden");
					$fields.removeClass('error-field');
					$thisForm.find("input, textarea").val("");
				}
			}); 
		};

		function validateInput(input){

			var val = input.val();
			var nameStr = input.attr("name");

			// if(nameStr == "name"){
			// 	if(!isValidGeneral(val)){
			// 		input.addClass('error-field');
			// 		fieldStatus = 0;
			// 	}
			// }else{

			// }

			switch (nameStr) {
				case "name":
				if(!isValidGeneral(val)){
					input.addClass('error-field');
					fieldStatus = 0;
				} break;

				case "email":
				if(!isValidEmail(val)){
					// input.addClass('error-field');
					tempError = true;
					// errorTextInput.addClass('error-field');
					// fieldStatus = 0;
				} break;
				case "phone":
				if(!isValidPhope(val)){
					// console.log(tempError);
					if(!tempError) return;
					input.addClass('error-field');
					errorTextInput.addClass('error-field');
					fieldStatus = 0;
				} break;

				default: ;
			};
		};
		// validateInput();

		function isValidGeneral(val) {
			if(val.length >= 2) return 1;
			return 0;
		};
		function isValidPhope(phone) {
			var regExp = new RegExp(/((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}/);
			return regExp.test(phone);
		};
		function isValidEmail(email) {
			var regExp = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
			return regExp.test(email);
		};
		/*callback validate*/



	});
}
module.exports = formSubmit;