'use strict';

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
	'theme_maker'
],function(ThemeMaker) {

	var themeMaker = new ThemeMaker({
		backgroundImage: {
			effectedTarget: []
		},
		headerImage: {
			effectedTarget: []
		},
		backgroundGradient: {
			effectedTarget: []
		},
		themeColor: {
			effectedTarget: 'body'
		},
		preColor: {
			effectedTarget: []
		},
		boxed: {
			effectedTarget: []
		},
		streched: {

		},
		patterns: {

		},
		skinWidth: {
			effectedTarget: [],
			range: [0, 1500],
			start: 1000
		},
		contentWidth: {
			effectedTarget: [],
			range: [0, 1400],
			start: 1000
		},
		headerHeight: {
			effectedTarget: '.navbar',
			range: [0, 170],
			start: 100
		},
		titleSize: {
			effectedTarget: '',
			range: [12, 18],
			start: 16,
			step: 1
		},
		subtitleSize: {
			effectedTarget: '',
			range: [8, 16],
			start: 14,
			step: 1
		},
		titleColor: {
			effectedTarget: ''
		},
		subtitleColor: {
			effectedTarget: ''
		},
		titleFont: {
			effectedTarget: ''
		},
		subtitleFont: {
			effectedTarget: ''
		},
		bannerFontSize: {
			effectedTarget: ''	
		},
		bannerColor: {
			effectedTarget: ''
		},
		bannerFont: {
			effectedTarget: ''
		},
		// Container
		tileFontSize: {
			effectedTarget: ''
		},
		contentFontSize: {
			effectedTarget: ''
		},
		contentTitleFontSize: {
			effectedTarget: ''
		},
		contentColor: {
			effectedTarget: ''
		},
		contentTitleFont: {
			effectedTarget: ''	
		},
		contentFont: {
			effectedTarget: ''
		},
		// Footer
		tileFooterSize: {
			effectedTarget: ''
		},
		footerFontSize: {
			effectedTarget: ''
		},
		footerTileColor: {
			effectedTarget: ''
		},
		footerContentColor: {
			effectedTarget: ''
		},
		footerTileFont: {
			effectedTarget: ''
		},
		footerContentFont: {
			effectedTarget: ''
		}

	});

});