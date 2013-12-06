'use strict';

require.config({
	baseUrl: 'js',
	paths: {
		/* Vendor */
		jquery: 'vendor/jquery-1.10.2.min',
		colpick: 'vendor/colpick',
		nouislider: 'vendor/jquery.nouislider',
		underscore: 'vendor/underscore',
		icheck: 'vendor/jquery.icheck',
		text: 'vendor/text',
		carousel: 'vendor/carousel',
		dropdown: 'vendor/dropdown',

		/* Modules */
		theme_maker: 'modules/theme-maker'
	},
	shim: {
		colpick: {
			exports: 'colpick',
			deps: ['jquery']
		},
		nouislider: {
			exports: 'noUiSlider',
			deps: ['jquery']
		},
		underscore: {
			exports: '_'
		},
		icheck: {
			exports: 'iCheck',
			deps: ['jquery']
		},
		carousel: {
			exports: 'carousel',
			deps: ['jquery']
		},
		dropdown: {
			exports: 'dropdown',
			deps: ['jquery']
		}
	}
});

require([
	'theme_maker'
],function(ThemeMaker) {

	var themeMaker = new ThemeMaker({
		themeElements: [
			{
				EL: 'backgroundImage',
				effectedTarget: []
			},
			{
				EL: 'headerImage',
				effectedTarget: []
			},
			{	
				EL: 'backgroundGradient',
				effectedTarget: []
			},
			{
				EL: 'theme-color',
				type: 'background-color',
				colorPicker: true,
				effectedTarget: '.theme'
			},
			{	
				EL: 'theme-pre-color',
				type: 'background-color',
				effectedTarget: '.theme'
			},
			{
				EL: 'boxed',
				effectedTarget: []
			},
			{
				EL: 'streched'
			},
			{
				EL: 'patterns',
				type: 'background'
			},
			{
				EL: 'skin-width',
				type: 'width',
				effectedTarget: [],
				range: [0, 1500],
				start: 1000
			},
			{
				EL: 'content-width',
				type: 'width',
				effectedTarget: [],
				range: [0, 1400],
				start: 1000
			},
			{
				EL: 'header-height',
				type: 'height',
				effectedTarget: '.navbar',
				range: [40, 170],
				start: 100
			},
			{
				EL: 'title-size',
				type: 'font-size',
				effectedTarget: '.navbar',
				range: [12, 18],
				start: 16,
				step: 1
			},
			{
				EL: 'subtitle-size',
				type: 'font-size',
				effectedTarget: '.sub-title',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'title-color',
				type: 'color',
				colorPicker: true,
				effectedTarget: '.title'
			},
			{
				EL: 'subtitle-color',
				colorPicker: true,
				type: 'color',
				effectedTarget: '.sub-title'
			},
			{
				EL: 'title-font',
				type: 'font-family',
				effectedTarget: '.title'
			},
			{
				EL: 'subtitle-font',
				type: 'font-family',
				effectedTarget: '.sub-title'
			},
			{
				EL: 'banner-font-size',
				type: 'font-size',
				effectedTarget: '.banner',
				range: [15, 60],
				start: 36,
				step: 1
			},
			{
				EL: 'banner-color',
				type: 'color',
				colorPicker: true,
				effectedTarget: '.banner'
			},
			{
				EL: 'banner-font',
				type: 'font-family',
				effectedTarget: '.banner'
			},
			// Container
			{
				EL: 'content-tile-font-size',
				type: 'font-size',
				effectedTarget: '.content-tile',
				range: [16, 36],
				start: 16,
				step: 1
			},
			{
				EL: 'content-title-color',
				type: 'color',
				colorPicker: true,
				effectedTarget: '.content-tile'
			},
			{
				EL: 'content-font-size',
				type: 'font-size',
				effectedTarget: '.content',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'content-color',
				type: 'color',
				colorPicker: true,
				effectedTarget: '.content'
			},
			{
				EL: 'content-title-font',
				type: 'font-family',
				effectedTarget: '.content-tile'	
			},
			{
				EL: 'content-font',
				type: 'font-family',
				effectedTarget: '.content'
			},
			// Footer
			{
				EL: 'footerTileSize',
				type: 'font-size',
				effectedTarget: '',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'footerFontSize',
				type: 'font-size',
				effectedTarget: '',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'footerTileColor',
				type: 'color',
				effectedTarget: ''
			},
			{
				EL: 'footerContentColor',
				type: 'color',
				effectedTarget: ''
			},
			{
				EL: 'footerTileFont',
				type: 'font-family',
				effectedTarget: ''
			},
			{
				EL: 'footerContentFont',
				type: 'font-family',
				effectedTarget: ''
			},
			// DNN Tokends
			{
				EL: 'dnn-tokens',
				type: 'display'
			},
			// Social Links
			{
				EL: 'social-links',
				type: 'href'
			}
		]
	});

	themeMaker.trigger();

});