require.config({
	baseUrl: 'js',
	paths: {
		/* Vendor */
		jquery: 'vendor/jquery-1.10.2.min',
		colpick: 'vendor/colpick',
		nouislider: 'vendor/jquery.nouislider',

		/* Modules */
		theme_maker: 'modules/theme-maker'
	},
	shim: {
		colpick: {
			exports: 'colpick',
			deps: ['jquery']
		},
		slider: {
			exports: 'noUiSlider',
			deps: ['jquery']
		}
	}
});

require([
	'jquery',
	'colpick',
	'nouislider'
],function($, colpick, noUiSlider) {

	$('.panel-group h4').on('click', function() {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});

	$('.skin-panel-trigger').click(function() {
		var offset = '-300px',
			$this = $(this);
		if($this.hasClass('hide-panel')) offset = 0;
		$('.skin-panel').animate({
			left: offset 
		}, 1200, function() {
			$this.toggleClass('hide-panel');
		});
	});

	$('#picker').colpick();

	$('.skin-width').noUiSlider({
		range: [0, 1500],
		start: 1000,
		step: 10,
		handles: 1,
		slide: function() {
			$('.skin-width-val').text($('.skin-width').val()*1 + 'px');
		}
	});

	$('.content-width').noUiSlider({
		range: [0, 1400],
		start: 1000,
		step: 10,
		handles: 1,
		slide: function() {
			$('.content-width-val').text($('.content-width').val()*1 + 'px');
		}
	});

	$('.header-height').noUiSlider({
		range: [0, 170],
		start: 100,
		step: 10,
		handles: 1,
		slide: function() {
			$('.header-height-val').text($('.header-height').val()*1 + 'px');
		}
	});




});