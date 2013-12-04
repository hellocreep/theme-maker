define([
	'jquery',
	'colpick'
], function($, colpick) {
	var ThemeMaker = function(opts) {
		/* Example */
		var opts = {
			themeColor: {
				effectTarget: ['.target', '#target'],
				cb: function() {
					// some
				}
			}
		}
	};

	ThemeMaker.prototype.init = function(opts) {

	};

	return ThemeMaker;
});