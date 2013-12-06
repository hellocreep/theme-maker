'use strict';

define([
	'jquery',
	'underscore',
	'colpick',
	'nouislider',
	'icheck',
	'text!tmpl/theme-maker.html'
], function($, _, colpick, noUiSlider, iCheck, tmpl) {

	$('body').append(tmpl);

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

		_.forEach(conf.themeElements, function(item) {
			var type = item.type;
			switch(type) {
				case 'color':
					_this.renderColor(item);
					break;
				case 'font':
					break;
				case 'font-size':
					// _this.renderFontSize(item);
					_this.renderSize(item);
					break;
				case 'font-family':
					break;
				case 'background':
					break;
				case 'background-color':
					_this.renderColor(item);
					break;
				case 'height':
					_this.renderSize(item);
					break;
				case 'width':
					_this.renderSize(item);
					break;
				case 'display':
					_this.renderDisplay(item);
				case 'href':
					_this.changeAttr(item);
			}
		});
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
			_.forEach(target, function(item) {
				$(item).css(attrs);
			});
		}
	};

	// ThemeMaker.prototype.renderFontSize = function(opts) {
	// 	var _this = this,
	// 		attrs = {};
	// 	_this._showSlider({
	// 		target: '.' + opts.EL,
	// 		range: opts.range,
	// 		start: opts.start,
	// 		cb: function(val) {
	// 			attrs[opts.type] = val;
	// 			_this._change(opts.effectedTarget, attrs);
	// 		}
	// 	});
	// };

	ThemeMaker.prototype.renderColor = function(opts) {
		var _this = this,
			conf = this.conf,
			attrs = {};
		if(opts.colorPicker) {
			_this._showColpicker({
				target: '.' + opts.EL,
				cb: function(val) {
					attrs[opts.type] = val;
					_this._change(opts.effectedTarget, attrs);
				}
			});
		} else {
			$(document).on('click', '.'+opts.EL, function() {
				attrs[opts.type] = $(this).css(opts.type);
				_this._change(opts.effectedTarget, attrs);
			});
		}
	};

	ThemeMaker.prototype.renderSize = function(opts) {
		var _this = this,
			attrs = {};
		_this._showSlider({
			target: '.' + opts.EL,
			range: opts.range,
			start: opts.start,
			step: opts.step || 10,
			cb: function(val) {
				attrs[opts.type] = val;
				_this._change(opts.effectedTarget, attrs);
			}
		});
	};

	ThemeMaker.prototype.renderDisplay = function(opts) {
		var _this = this,
			$themeContent = _this.conf.$themeContent,
			attrs = {};
		$themeContent.find('.'+opts.EL).iCheck({
			checkboxClass: 'icheckbox_minimal-blue'
		}).on('ifToggled', function(e) {
			if(e.currentTarget.checked) {
				attrs[opts.type] = 'block';
			} else {
				attrs[opts.type] = 'none';
			}
			_this._change(e.currentTarget.value, attrs);
		});
	};

	ThemeMaker.prototype.changeAttr = function(opts) {
		var _this = this,
			$themeContent = _this.conf.$themeContent,
			attrs = {};
		$themeContent.find('.'+opts.EL).on('change', function() {
			var $this = $(this);
			$($this.attr('name')).attr('href', $this.val());
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