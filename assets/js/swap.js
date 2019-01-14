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

/**
 * Swap Modal
 */
var swapDisalbeStarter = getCookie('swapDisalbeStarter');
if( swapDisalbeStarter != 'true' ){
	document.getElementById('starter-modal').classList.remove('d-none');
	document.body.classList.add('overflow-hidden');
}
document.getElementById('swap-create-wallet').addEventListener('click', function(e){
	e.preventDefault();
	document.getElementById('starter-modal').classList.add('loading');
	setCookie('swapDisalbeStarter', 'true', { expires: swapGetYearSec } );
	setTimeout( function() {
		document.getElementById('starter-modal').classList.add('d-none');
		document.body.classList.remove('overflow-hidden');
	}, 3000 );
	if (typeof ga != undefined){
		ga('send', {
			hitType: 'event',
			eventCategory: 'Splash',
			eventAction: 'CreateWallet',
			eventLabel: 'CreateWallet'
		});
	}
});
document.getElementById('swap-has-wallet').addEventListener('click', function(e){
	e.preventDefault();
	setCookie('swapDisalbeStarter', 'true', { expires: swapGetYearSec } );
	document.getElementById('starter-modal').classList.add('d-none');
	document.body.classList.remove('overflow-hidden');
});

/**
 * Swap Alert
 */
var swapDisalbeAlert = getCookie('swapDisalbeAlert');
if( swapDisalbeAlert != 'true' ){
	document.getElementById('swap-alert').classList.add('d-md-block');
}
document.getElementById('swap-alert-close').addEventListener('click', function(){
	document.getElementById('swap-alert').classList.remove('d-md-block');
	setCookie('swapDisalbeAlert', 'true', { expires: swapGetYearSec } );
});

/**
 * Multilinguage Content
 */
var swap_l10n = {
	"extAlert": { 
		"msg": {
			"en": "Add Swap.Online extension to your Chrome browser for better security<br class=\"d-lg-none\"> and to unlock premium features",
			"ru": "Добавьте Swap.Online как расширение для хрома для большей безопасности",
		},
		"btn" : {
			"en": "Add to chrome",
			"ru": "Добавить в Chrome",
		},
	},
	"startModal": {
		"title" : {
			"en": "Multiple blockchains - multiple opportunities for profit",
			"ru": "Криптовалютный кошелек с встроенным обменником",
		"linktext" : {
			"en": "I already have a wallet on swap online",
			"ru": "У меня уже есть кошелек",
		},
		"desc" : {
			"one" : {
				"en": "Multiple blockchains - multiple opportunities for profit",
				"ru": "Поддерживает множество блокчейнов",
			},
			"two" : {
				"en": "Instant exchange:<br> no confirmation required",
				"ru": "Быстрый обмен между разными валютами",
			},
			"three" : {
				"en": "No middlemen, direct<br> wallet-to-wallet exchange",
				"ru": "Без посредника, обмен происходит между пользователями",
			},
		},
		"btn" : {
			"en": "Create new wallet",
			"ru": "Создать новый кошелек",
		},
	},
};
console.log(swap_l10n);
document.getElementById('swap-alert-title').innerHTML = swap_l10n.extAlert.title.ru;
document.getElementById('swap-alert-btn').innerHTML = swap_l10n.extAlert.btn.ru;
document.getElementById('start-modal-title').innerHTML = swap_l10n.startModal.title.ru;
document.getElementById('start-modal-linktext').innerHTML = swap_l10n.startModal.linktext.ru;
document.getElementById('start-modal-btn').innerHTML = swap_l10n.startModal.btn.ru;
document.getElementById('start-modal-desc-1').innerHTML = swap_l10n.startModal.desc.one.ru;
document.getElementById('start-modal-desc-2').innerHTML = swap_l10n.startModal.desc.two.ru;
document.getElementById('start-modal-desc-3').innerHTML = swap_l10n.startModal.desc.three.ru;
