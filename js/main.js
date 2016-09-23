/**
 * Created by SergST on 23.09.2016.
 */

;

'use strict';

$(function () {

	var $div = $('<h2>Фаил подключен</h2>');

	$('body').append($div);

	$('.pgwSlider').pgwSlider({
		displayList	:	false,
		displayControls	: true,
		adaptiveHeight : true
	});

});

