import svgUseIt from 'svg-use-it';
import AOS from 'aos';
import formSubmit from './components/formSubmit.js';
// import scrollMagic from './components/scrollmagic.js';
// import techAnimation from './components/tech-animation.js';
// import slick from 'slick-carousel';

$(document).ready(function(){

	svgUseIt();
	AOS.init({
		 disable: 'mobile'

	})
	formSubmit();
	//end
});

