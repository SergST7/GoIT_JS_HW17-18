/**
 * Created by SergST on 23.09.2016.
 */

;

'use strict';

$(function () {

	var $div = $('<h2>Плагин подключен</h2>');

	$('.wrapper').prepend($div);

	$('.pgwSlider').pgwSlider({
		displayList	:	false,
		displayControls	: true,
		adaptiveHeight : true
	});

});

