$.fn.parallax=function(e){"undefined"==typeof e.opacity&&(e.opacity=!1),"undefined"==typeof e.resistance&&(e.resistance=1),"undefined"==typeof e.inverse&&(e.inverse=!0);var n=$(this),o=0;return $(window).on("scroll",function(){o=window.pageYOffset+window.innerHeight;var t=$(window).scrollTop(),i=e.inverse?-1:1,a=window.pageYOffset*i/e.resistance;if(e.opacity){var s=(100-t)/100;n.css({opacity:s})}n.css({transform:"translate(0, "+a+"px)"})}),$(this)},$(".feature").each(function(){var e=$(this);$(window).on("scroll",function(n){var o=$(window).scrollTop(),t=e.offset().top,i=o-t;e.hasClass("--active")||i>-250&&20>i&&(e.find(".feature__image").addClass("--active"),e.find(".feature__description").addClass("--active"))})}),$(window).on("scroll",function(e){var n=$(".peddling__image"),o=$(window).scrollTop(),t=n.offset().top,i=o-t;n.hasClass("--active")||i>-250&&20>i&&(n.addClass("--active"),console.error("test"))}),$(".product__order").on("click",function(e){e.preventDefault()}),$(".ice-cream").parallax({resistance:17}),$(".header__link.--about").on("click",function(e){e.preventDefault();var n=$(".section.about").offset().top;$("html, body").animate({scrollTop:n},1e3)}),$(".header__link.--peddling").on("click",function(e){e.preventDefault();var n=$(".section.peddling").offset().top;$("html, body").animate({scrollTop:n},1250)}),$(".header__link.--pricing").on("click",function(e){e.preventDefault();var n=$(".section.pricing").offset().top;$("html, body").animate({scrollTop:n},1500)});