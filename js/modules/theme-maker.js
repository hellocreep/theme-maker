'use strict';

define([
	'jquery',
	'colpick',
	'nouislider'
], function($, colpick, noUiSlider) {
	var ThemeMaker = function(opts) {
		this.defaults = {
			$themeMaker: $('.theme-maker'),
			$themeContent: $('.theme-maker-content'),
			$themeTrigger: $('.theme-maker-trigger'),


			panelWidth: 300,
			panelSlideDuration: 800
		}

		this.init(opts);
	};

	ThemeMaker.prototype.init = function(opts) {
		this.conf = $.extend(true, this.defaults, opts);

		var _this = this,
			conf = _this.conf,
			$themeContent = conf.$themeContent,
			$themeTrigger = conf.$themeTrigger;


		/* Panel item accrodion */
		$themeContent.on('click', '.list-title', function() {
			$(this).parent().addClass('active').siblings().removeClass('active');
		});

		/* Trigger panel */
		$themeTrigger.click(function() {
			_this.trigger();	
		});

		/* Background colors */
		this.themeColorChange();

		/* Skin layout */
		this.skinWidthSlide();

		this.contentWidthSlide();

		this.headerHeightSlide();

		/* Menu */
		this.titleSizeSlide();

		this.subtitleSizeSlide();

		this.titleColorChange();

		this.subtitleColorChange();


		return this;
	};

	ThemeMaker.prototype.trigger = function() {
		var _this = this,
			conf = _this.conf,
			$themeMaker = conf.$themeMaker,
			$themeTrigger = conf.$themeTrigger,
			offset = 0;

		if($themeTrigger.hasClass('show-panel')) offset = '-'+ conf.panelWidth + 'px';
		$themeMaker.animate({
			left: offset 
		}, conf.panelSlideDuration, function() {
			$themeTrigger.toggleClass('show-panel');
		});
	}

	ThemeMaker.prototype._change = function(target, attrs) {
		if(typeof target === 'string') {
			$(target).css(attrs);
		} else {
			$.each(target, function(item) {
				$(item).css(attrs);
			});
		}
	};

	ThemeMaker.prototype.themeColorChange = function() {
		var _this = this,
			conf = _this.conf;
		_this._showColpicker({
			target: '.theme-color',
			cb: function(val) {
				_this._change(conf.themeColor.effectedTarget, {
					'background-color': val
				});
			}
		});
	};

	ThemeMaker.prototype.skinWidthSlide = function() {
		var _this = this,
			conf = _this.conf;
		_this._showSlider({
			target: '.skin-width',
			range: conf.skinWidth.range,
			start: conf.skinWidth.start,
			cb: function(val) {
				_this._change(conf.skinWidth.effectedTarget, {
					width: val
				});
			}
		});
	};

	ThemeMaker.prototype.contentWidthSlide = function() {
		var _this = this,
			conf = _this.conf;
		_this._showSlider({
			target: '.content-width',
			range: conf.contentWidth.range,
			start: conf.contentWidth.start,
			cb: function() {
				_this._change(conf.contentWidth.effectedTarget, {
					width: val
				});
			}
		});
	};

	ThemeMaker.prototype.headerHeightSlide = function() {
		var _this = this,
			conf = _this.conf;
		_this._showSlider({
			target: '.header-height',
			range: conf.headerHeight.range,
			start: conf.headerHeight.start,
			cb: function(val) {
				_this._change(conf.headerHeight.effectedTarget, {
					height: val
				});
			}
		});
	};

	/* Menu */
	ThemeMaker.prototype.titleSizeSlide = function() {
		var _this = this,
			conf = _this.conf;
		_this._showSlider({
			target: '.title-size',
			range: conf.titleSize.range,
			start: conf.titleSize.start,
			step: conf.titleSize.step,
			cb: function(val) {
				_this._change(conf.titleSize.effectedTarget, {
					'font-size': val
				});
			}
		});
	};

	ThemeMaker.prototype.subtitleSizeSlide = function() {
		var _this = this,
			conf = _this.conf;
		_this._showSlider({
			target: '.subtitle-size',
			range: conf.subtitleSize.range,
			start: conf.subtitleSize.start,
			step: conf.subtitleSize.step,
			cb: function(val) {
				_this._change(conf.subtitleSize.effectedTarget, {
					'font-size': val
				});
			}
		});
	};

	ThemeMaker.prototype.titleColorChange = function() {
		var _this = this,
			conf = _this.conf;
		_this._showColpicker({
			target: '.title-color',
			cb: function(val) {
				_this._change(conf.titleColor.effectedTarget, {
					'background-color': val
				});
			}
		});
	};

	ThemeMaker.prototype.subtitleColorChange = function() {
		var _this = this,
			conf = _this.conf;
		_this._showColpicker({
			target: '.subtitle-color',
			cb: function(val) {
				_this._change(conf.subtitleColor.effectedTarget, {
					'background-color': val
				});
			}
		});
	};

	ThemeMaker.prototype._showSlider = function(opts) {
		var _this = this,
			$target = $(opts.target);
		$target.noUiSlider({
			range: opts.range,
			start: opts.start || 0,
			step: opts.step || 10,
			handles: opts.handles || 1,
			slide: function() {
				var val = $(opts.target).val()*1;
				$target.next().text(val + 'px');
				opts.cb(val);
			}
		}).next().text(opts.start + 'px');
	};

	ThemeMaker.prototype._showColpicker = function(opts) {
		var _this = this,
			$target = $(opts.target);
		$target.colpick({
			onSubmit: function(hsb,hex,rgb,el) {
				$(el).css('background-color', '#'+hex).text('#'+hex);
				$(el).colpickHide();
				opts.cb('#'+hex);
			}
		});
	};

	return ThemeMaker;
});