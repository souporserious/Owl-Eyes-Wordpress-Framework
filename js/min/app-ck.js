!function(t){function n(n){var e=t(".progress"),o=e.attr("data-progress",n);e.css({})}var e=t(".field").length;t("input[type=button]").on("click",function(){var o=t(this),s=t(".num"),i=parseFloat(s.text());o.hasClass("last")&&(i>1?i--:i=1,n(i)),o.hasClass("next")&&i!==e&&(i++,n(i)),s.text(i)})}(jQuery),$.fn.autotype=function(t){function n(t,e,o,s){t.html(function(t,n){return n+e[o]}),o<e.length-1?setTimeout(function(){n(t,e,o+1,s)},u):s()}function e(t,n){var o;t.html(function(t,n){return o=n.length,n.substr(0,o-1)}),o>1?setTimeout(function(){e(t,n)},u/2):n()}function o(s){setTimeout(function(){n(s,t[r],0,function(){(a||r!==t.length-1)&&(r===t.length-1&&(r=0),setTimeout(function(){e(s,function(){r++,o(s)})},i))})},500)}var s=$(this),i=1500,a=!1,r=0,c=!1,u=Math.round(70*Math.random())+120;return this.each(function(){c&&$('<span class="cursor">'+c+"</span>").insertAfter(s),o(s)})},$.fn.smoothmove=function(t){var n=$("html, body"),e=$(this).height(),o={},s=$.extend({speed:700,param:"sec"},t);if(window.location.href.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(t,n,e,s){o[n]=s}),o[s.param]){var i=$("#"+o[s.param]).offset().top-e;$(window).scrollTop(i)}var a=$(this);return $("a[href*=#]:not([href=#])").click(function(t){t.preventDefault();var o=$.attr(this,"href"),i=$(o).offset().top-e;window.history&&history.pushState&&history.replaceState("","","?"+s.param+"="+o.substring(1)),n.animate({scrollTop:i},s.speed,function(){a.trigger("moby:close")})}),this},$.fn.stickly=function(){var t=$(this),n=$(this).height(),e=$("body"),o=t.offset().top;return $(window).scroll(function(){var s=$(window).scrollTop();s>o?(t.addClass("sticky"),e.css({paddingTop:n})):(t.removeClass("sticky"),e.css({paddingTop:0}))}),this},$.fn.moby=function(t){var n=$(this),e=$.extend({className:"menu",showTxt:!0,breakpoint:624},t);return n.addClass("has-mobile-menu").prepend('<span class="'+e.className+'"/>'),e.showTxt&&$("."+e.className).html("Menu"),$(".menu").on("click",function(){n.toggleClass("active")}),n.bind("moby:close",function(){n.removeClass("active")}),$(window).bind("resize",function(){var t=$(window).width();t>=e.breakpoint&&n.trigger("moby:close")}),this};