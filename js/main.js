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
		},
		underscore: {
			exports: '_'
		},
		icheck: {
			exports: 'iCheck',
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
				effectedTarget: 'body'
			},
			{	
				EL: 'theme-pre-color',
				type: 'background-color',
				effectedTarget: 'body'
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
				EL: 'skinWidth',
				type: 'width',
				effectedTarget: [],
				range: [0, 1500],
				start: 1000
			},
			{
				EL: 'contentWidth',
				type: 'width',
				effectedTarget: [],
				range: [0, 1400],
				start: 1000
			},
			{
				EL: 'header-height',
				type: 'height',
				effectedTarget: '.navbar',
				range: [0, 170],
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
				EL: 'subtitleSize',
				type: 'font-size',
				effectedTarget: '',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'title-color',
				type: 'color',
				colorPicker: true,
				effectedTarget: ''
			},
			{
				EL: 'subtitle-color',
				colorPicker: true,
				type: 'color',
				effectedTarget: ''
			},
			{
				EL: 'titleFont',
				type: 'font-family',
				effectedTarget: ''
			},
			{
				EL: 'subtitleFont',
				type: 'font-family',
				effectedTarget: ''
			},
			{
				EL: 'bannerFontSize',
				type: 'font-size',
				effectedTarget: '',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'banner-color',
				type: 'color',
				colorPicker: true,
				effectedTarget: '.jumbotron'
			},
			{
				EL: 'bannerFont',
				type: 'font-family',
				effectedTarget: ''
			},
			// Container
			{
				EL: 'contentTileFontSize',
				type: 'font-size',
				effectedTarget: '',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'contentFontSize',
				type: 'font-size',
				effectedTarget: '',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'contentTitleFontSize',
				type: 'font-size',
				effectedTarget: '',
				range: [8, 16],
				start: 14,
				step: 1
			},
			{
				EL: 'contentColor',
				type: 'background-color',
				effectedTarget: ''
			},
			{
				EL: 'contentTitleFont',
				type: 'font-family',
				effectedTarget: ''	
			},
			{
				EL: 'contentFont',
				type: 'font-family',
				effectedTarget: ''
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