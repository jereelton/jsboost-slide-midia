
//import {jsBoost} from './jsboost.js';

function openModal(context, video) {

	jsBoost().slideOpen({
		bgscreen: "#bg",
		boxmodel: "#box",
		cssMarginLeft: "-360px",
		cssHeight: "200px",
		// Accordion Settings, when effect = accordion
		effect: "accordion",
		effectTransition: "all .5s ease-in",
		effectHeight: "800px"
	});

	jsBoost("#h1-target").append(context);
	$("#video").attr("src", video);

}

function closeModal(context) {

	jsBoost().slideClose({
		bgscreen: "#bg",
		boxmodel: "#box",
		cssMarginLeft: "-6000px",
		cssHeight: "800px",
		// Accordion Settings, when effect = accordion
		effect: "accordion",
		effectTransition: "all .5s ease-in",
		effectHeight: "200px"
	});

	jsBoost("#h1-target").html(context);
	setTimeout(function(){
		$("#video").attr("src", "");
	}, 1500);

}

//;(function() {
$(document).ready(function() {

	$data_button_click = $('[data-button-click]');
	$data_close_slide  = $('[data-close-slide]');

	$data_button_click.click(function(){
		//console.log(this.textContent);
		//console.log($data_button_click.text());
		//console.log(this.value);
		//console.log($data_button_click.val());
		var data = this.value.split(';');
		var context = data[0];
		var midia   = data[1];
		openModal(context, midia);
	});

	$data_close_slide.click(function(){
		//console.log(this.textContent);
		//console.log($data_button_click.text());
		//console.log(this.value);
		//console.log($data_button_click.val());
		closeModal('Modal HTML + CSS');
	});

	//onclick="return openModal('<br />Parametro: VGA 1');"
});
//})();
