/* =========================================================
 * bootstrap-modal.js v1.4.0
 * http://twitter.github.com/bootstrap/javascript.html#modal
 * =========================================================
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
(function(b){function j(){var a=this,b=setTimeout(function(){a.$element.unbind(d);e.call(a)},500);this.$element.one(d,function(){clearTimeout(b);e.call(a)})}function e(){this.$element.hide().trigger("hidden");g.call(this)}function g(a){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.settings.backdrop){var e=b.support.transition&&c;this.$backdrop=b('<div class="modal-backdrop '+c+'" />').appendTo(document.body);"static"!=this.settings.backdrop&&this.$backdrop.click(b.proxy(this.hide,
this));this.$backdrop.addClass("in");e?this.$backdrop.one(d,a):a()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),b.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(d,b.proxy(h,this)):h.call(this)):a&&a()}function h(){this.$backdrop.remove();this.$backdrop=null}function i(){var a=this;this.isShown&&this.settings.keyboard?b(document).bind("keyup.modal",function(b){27==b.which&&a.hide()}):this.isShown||b(document).unbind("keyup.modal")}var d;b(document).ready(function(){var a=
(document.body||document.documentElement).style;b.support.transition=void 0!==a.transition||void 0!==a.WebkitTransition||void 0!==a.MozTransition||void 0!==a.MsTransition||void 0!==a.OTransition;b.support.transition&&(d="TransitionEnd",b.browser.webkit?d="webkitTransitionEnd":b.browser.mozilla?d="transitionend":b.browser.opera&&(d="oTransitionEnd"))});var f=function(a,c){this.settings=b.extend({},b.fn.modal.defaults,c);this.$element=b(a).delegate(".close","click.modal",b.proxy(this.hide,this));this.settings.show&&
this.show();return this};f.prototype={toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var a=this;this.isShown=!0;this.$element.trigger("show");i.call(this);g.call(this,function(){var c=b.support.transition&&a.$element.hasClass("fade");a.$element.appendTo(document.body).show();a.$element.addClass("in");c?a.$element.one(d,function(){a.$element.trigger("shown")}):a.$element.trigger("shown")});return this},hide:function(a){a&&a.preventDefault();if(!this.isShown)return this;
this.isShown=!1;i.call(this);this.$element.trigger("hide").removeClass("in");b.support.transition&&this.$element.hasClass("fade")?j.call(this):e.call(this);return this}};b.fn.modal=function(a){var c=this.data("modal");if(!c)return"string"==typeof a&&(a={show:/show|toggle/.test(a)}),this.each(function(){b(this).data("modal",new f(this,a))});if(!0===a)return c;if("string"==typeof a)c[a]();else c&&c.toggle();return this};b.fn.modal.Modal=f;b.fn.modal.defaults={backdrop:!1,keyboard:!1,show:!1};b(document).ready(function(){b("body").delegate("[data-controls-modal]",
"click",function(a){a.preventDefault();a=b(this).data("show",!0);b("#"+a.attr("data-controls-modal")).modal(a.data())})})})(window.jQuery||window.ender);
