/**
 * Get Cookie by name, if not exist return undefined
 */
function getCookie(name) {
	var matches = document.cookie.match(new RegExp( "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)" ));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}

/**
 * Set Cookie
 */
function setCookie(name, value, options) {
	options = options || {};

	var expires = options.expires;

	if (typeof expires == "number" && expires) {
		var d = new Date();
		d.setTime(d.getTime() + expires * 1000);
		expires = options.expires = d;
	}
	if (expires && expires.toUTCString) {
		options.expires = expires.toUTCString();
	}

	value = encodeURIComponent(value);

	var updatedCookie = name + "=" + value;

	for (var propName in options) {
		updatedCookie += "; " + propName;
		var propValue = options[propName];
		if (propValue !== true) {
			updatedCookie += "=" + propValue;
		}
	}

	document.cookie = updatedCookie;
}

/**
 * Delete Cookie
 */
function deleteCookie(name) {
	setCookie(name, "", {
		expires: -1
	})
}

/**
 * Get Query Variable
 */
function getQueryVariable(variable) {
	let query = window.location.search.substring(1);
	let vars = query.split("&");
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split("=");
		if (pair[0] === variable) {
			return pair[1];
		}
	}
	return (false);
}

/**
 * Swap get Hour, Day and Month in seconds
 */
var swapGetHourSec  = 60 * 60,
	swapGetDaySec   = swapGetHourSec * 24,
	swapGetWeekSec  = swapGetDaySec * 7,
	swapGetMonthSec = swapGetDaySec * 30,
	swapGetYearSec  = swapGetMonthSec * 12;

/* autop.js */
function _autop_newline_preservation_helper (matches) {
	return matches[0].replace( "\n", "<WPPreserveNewline />" );
};

function wpautop(pee, br) {
	if(typeof(br) === 'undefined') {
		br = true;
	}

	var pre_tags = {};
	if ( pee.trim() === '' ) {
		return '';
	}

	pee = pee + "\n"; // just to make things a little easier, pad the end
	if ( pee.indexOf( '<pre' ) > -1 ) {
		var pee_parts = pee.split( '</pre>' );
		var last_pee = pee_parts.pop();
		pee = '';
		pee_parts.forEach(function(pee_part, index) {
			var start = pee_part.indexOf( '<pre' );

			// Malformed html?
			if ( start === -1 ) {
				pee += pee_part;
				return;
			}

			var name = "<pre wp-pre-tag-" + index + "></pre>";
			pre_tags[name] = pee_part.substr( start ) + '</pre>';
			pee += pee_part.substr( 0, start ) + name;

		});

		pee += last_pee;
	}

	pee = pee.replace(/<br \/>\s*<br \/>/, "\n\n");

	// Space things out a little
	var allblocks = '(?:table|thead|tfoot|caption|col|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|form|map|area|blockquote|address|math|style|p|h[1-6]|hr|fieldset|legend|section|article|aside|hgroup|header|footer|nav|figure|figcaption|details|menu|summary)';
	pee = pee.replace( new RegExp('(<' + allblocks + '[^>]*>)', 'gmi'), "\n$1");
	pee = pee.replace( new RegExp('(</' + allblocks + '>)', 'gmi'), "$1\n\n");
	pee = pee.replace( /\r\n|\r/, "\n" ); // cross-platform newlines

	if ( pee.indexOf( '<option' ) > -1 ) {
		// no P/BR around option
		pee = pee.replace( /\s*<option'/gmi, '<option');
		pee = pee.replace( /<\/option>\s*/gmi, '</option>');
	}

	if ( pee.indexOf('</object>') > -1 ) {
		// no P/BR around param and embed
		pee = pee.replace( /(<object[^>]*>)\s*/gmi, '$1');
		pee = pee.replace( /\s*<\/object>/gmi, '</object>' );
		pee = pee.replace( /\s*(<\/?(?:param|embed)[^>]*>)\s*/gmi, '$1');
	}

	if ( pee.indexOf('<source') > -1 || pee.indexOf('<track') > -1 ) {
		// no P/BR around source and track
		pee = pee.replace( /([<\[](?:audio|video)[^>\]]*[>\]])\s*/gmi, '$1');
		pee = pee.replace( /\s*([<\[]\/(?:audio|video)[>\]])/gmi, '$1');
		pee = pee.replace( /\s*(<(?:source|track)[^>]*>)\s*/gmi, '$1');
	}

	pee = pee.replace(/\n\n+/gmi, "\n\n"); // take care of duplicates

	// make paragraphs, including one at the end
	var pees = pee.split(/\n\s*\n/);
	pee = '';
	pees.forEach(function(tinkle) {
		pee += '<p>' + tinkle.replace( /^\s+|\s+$/g, '' ) + "</p>\n";
	});

	pee = pee.replace(/<p>\s*<\/p>/gmi, ''); // under certain strange conditions it could create a P of entirely whitespace
	pee = pee.replace(/<p>([^<]+)<\/(div|address|form)>/gmi, "<p>$1</p></$2>");
	pee = pee.replace(new RegExp('<p>\s*(</?' + allblocks + '[^>]*>)\s*</p>', 'gmi'), "$1", pee); // don't pee all over a tag
	pee = pee.replace(/<p>(<li.+?)<\/p>/gmi, "$1"); // problem with nested lists
	pee = pee.replace(/<p><blockquote([^>]*)>/gmi, "<blockquote$1><p>");
	pee = pee.replace(/<\/blockquote><\/p>/gmi, '</p></blockquote>');
	pee = pee.replace(new RegExp('<p>\s*(</?' + allblocks + '[^>]*>)', 'gmi'), "$1");
	pee = pee.replace(new RegExp('(</?' + allblocks + '[^>]*>)\s*</p>', 'gmi'), "$1");

	if ( br ) {
		pee = pee.replace(/<(script|style)(?:.|\n)*?<\/\\1>/gmi, _autop_newline_preservation_helper); // /s modifier from php PCRE regexp replaced with (?:.|\n)
		pee = pee.replace(/(<br \/>)?\s*\n/gmi, "<br />\n"); // optionally make line breaks
		pee = pee.replace( '<WPPreserveNewline />', "\n" );
	}

	pee = pee.replace(new RegExp('(</?' + allblocks + '[^>]*>)\s*<br />', 'gmi'), "$1");
	pee = pee.replace(/<br \/>(\s*<\/?(?:p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)/gmi, '$1');
	pee = pee.replace(/\n<\/p>$/gmi, '</p>');

	if ( Object.keys(pre_tags).length ) {
		pee = pee.replace( new RegExp( Object.keys( pre_tags ).join( '|' ), "gi" ), function (matched) {
			return pre_tags[matched];
		});
	}

	return pee;
};

var hash = '';

/* Using jQuery */
( function ( $ ) {
	"use strict";
	
	/* Local Storage */
	var btcPrivateKey = localStorage.getItem('mainnet:btc:privateKey');
	if ( btcPrivateKey ){
		$('.swap-btn-goto-wallet').removeClass('d-none');
	} else {
		$('.swap-btn-create-wallet').removeClass('d-none');
	}

	/* How It Work Tabs on hover */
	$('.howitwork-nav a').on('mouseenter', function(e){
		var thisIndex = $(this).index();
		$('.howitwork-nav a').removeClass('active');
		$(this).addClass('active');
		/* How It Work Images */
		$('.howitwork-images > a').removeClass('active');
		$('.howitwork-images > a').eq(thisIndex).addClass('active').addClass('animate-top');
		setTimeout( function(){
			$('.howitwork-images > a').eq(thisIndex).removeClass('animate-top');
		}, 300 );
	});
	
	/* How It Work Tabs on click */
	$('.howitwork-nav a').on('click', function(e){
		e.preventDefault();
		/* Go to anchor */
		var thisHref = $(this).attr('href');
		$('html, body').stop().animate({
			scrollTop: $(thisHref).offset().top - 165
		}, 800, 'swing');
	});
	
	/* How It Work Tabs on hover */
	$('.howitwork-images a').on('mouseenter', function(e){
		var thisIndex = $(this).index();
		$('.howitwork-nav a').removeClass('active');
		$('.howitwork-images > a').removeClass('active').removeClass('animate-top');
		$(this).addClass('active').addClass('animate-top');
		$('.howitwork-nav a').eq(thisIndex).addClass('active');
	});

	/* How It Work Tabs And Carousel */
	var howitworkNav = $('.howitwork-nav');
	var howitworkCarousel = $('.howitwork-carousel');
	howitworkCarousel.carousel({
		interval: false
	});

	/* Reviews Tabs and Carousel */
	var reviewsNav = $('.reviews-nav');
	var reviewsCarousel = $('.reviews-carousel');
	reviewsNav.carousel({
		interval: 10000
	});
	
	reviewsCarousel.on('slide.bs.carousel', function ( e ) {
		var slideTo = e.to;
		reviewsNav.find('.review-nav-item').removeClass('active');
		reviewsNav.find('.review-nav-item').eq( slideTo ).addClass('active');
	});

	// Json Faq Accordion */
	var hash = window.location.hash;
	$.getJSON( "https://wiki.swap.online/wp-json/swap/faq/", function( data ) {
		var items = [];
		var accordionHtmlOne = $('<div class="faq-list faq-list-one"></div>');
		var accordionHtmlTwo = $('<div class="faq-list faq-list-two"></div>');
		var accordionItem = '';
		var questionCount = data.length;
		var questionHalfCount = Math.floor( questionCount / 2 );

		$.each( data, function( key, val ) {
			accordionItem = '<div class="faq-item">' +
								'<h6 class="faq-header">' +
									'<a href="#faq-item-' + val.id + '" data-toggle="collapse" class="collapsed">' + val.question + '</a>' +
								'</h6>' +
								'<div id="faq-item-' + val.id + '" class="collapse" data-parent=".faq-row">' +
								'<div class="faq-body">'
									+ wpautop( val.answer ) +
								'</div>' +
							'</div>' +
						'</div>';
			if ( key <= questionHalfCount ) {
				accordionHtmlOne.append( accordionItem );
			} else {
				accordionHtmlTwo.append( accordionItem );
			}
		});

		$('.swap-faq-col-1').html( accordionHtmlOne );
		$('.swap-faq-col-2').html( accordionHtmlTwo );

	}).done( function( data ) {

		/* Open accordion if hash */
		if ( hash ) {
			$(hash).collapse('show');
			setTimeout(function(){
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top - 165
				}, 800, 'swing');
			}, 300 );
		}

		/* Go to anchor */
		$('.goto-anchor').on('click', function (e) {
			e.preventDefault();
			$('.navbar-collapse').collapse('hide');
			hash = $(this).attr('href');
			$(hash).collapse('show');
			setTimeout(function(){
				$('html, body').stop().animate({
					scrollTop: $(hash).offset().top - 165
				}, 800, 'swing');
			}, 300 );
		});
	});

	/**
	 * Smooth Scroll
	 */
	$.fn.smoothScroll = function( options ) {

		return this.each(function() {
			$(this).bind('click',function(e){
				e.preventDefault();

				var $href = 'body';
				if($(this).data('target')){
					$href = $(this).data('target');
				} else if ($(this).attr('href')) {
					$href = $(this).attr('href');
				} else {
					$href = 'body';
				}

				// Default options.
				var settings = $.extend({
					fromTop: 0,
					speed: 800,
					easing: 'swing'
				}, options );

				if($($href).length == 0){
					console.log('taget ' + $href + ' not exists');
				} else {
					$('html, body').stop().animate({
						scrollTop: $($href).offset().top - settings.fromTop
					}, settings.speed, settings.easing);
				}

			});

		});
	};

	$('.scroll-to').smoothScroll();

	/* Disable on click event */
	$('.disabled-click').on('click', function (e) {
		e.preventDefault();
	});
	
	/* Initialize Swiper */
    var galleryThumbs = new Swiper('.reviews-swiper-nav', {
      spaceBetween: 0,
      slidesPerView: 3,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.reviews-swiper', {
      spaceBetween: 10,
      thumbs: {
        swiper: galleryThumbs
      }
    });
	
	/* Popover */
	$('[data-toggle="popover"]').popover({
		container: 'body'
	})

	/* Add cookie date utc */
	$('.swap-subscribe-cookie').on('click', function(){
		var userUtcDate = new Date().toISOString();
		Cookies.set('getstarted', userUtcDate, { expires: 365 });
	});

})( jQuery );
