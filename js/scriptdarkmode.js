$(document).ready(function () {
//Create the cookie object
 var cookieStorage = {
        setCookie: function setCookie(key, value, time, path) {
            var expires = new Date();
            expires.setTime(expires.getTime() + time);
            var pathValue = '';
            if (typeof path !== 'undefined') {
                pathValue = 'path=' + path + ';';
            }
            document.cookie = key + '=' + value + ';' + pathValue + 'expires=' + expires.toUTCString();
        },
        getCookie: function getCookie(key) {
            var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
            return keyValue ? keyValue[2] : null;
        },
        removeCookie: function removeCookie(key) {
            document.cookie = key + '=; Max-Age=0; path=/';
        }
    };
    //Click on dark mode icon. Add dark mode classes and wrappers. Store user preference through sessions
    $('.colorChange').click(function() {
        //Show either moon or sun
        $('.colorChange').toggleClass('active');
        //If dark mode is selected
        if ($('.colorChange').hasClass('active')) {

            //Add dark mode class to the body
            $('body').addClass('darkV');
            cookieStorage.setCookie('__dark-mode', 'DARK', 2628000000, '/');
			switchTweetTheme('light','dark');

        } else {
            $('body').removeClass('darkV');
             setTimeout(function() {
                cookieStorage.removeCookie('__dark-mode');
            }, 100);
			switchTweetTheme('dark','light');
        
		}
    }); 
var storedTheme = cookieStorage.getCookie('__dark-mode')  ? "dark" : "light";



if(window.matchMedia("(max-width: 767px)").matches){
    // The viewport is less than 768 pixels wide
    setTimeout(function() {
        var targetTheme = storedTheme == "dark" ? "light" : "dark";
        switchTweetTheme(targetTheme,storedTheme);
            
        }, 6000);
}else{
    setTimeout(function() {
        var targetTheme = storedTheme == "dark" ? "light" : "dark";
        switchTweetTheme(targetTheme,storedTheme);
            
        }, 2000);    
}


if(storedTheme == "dark"){
    $('body').addClass('darkV');
    $('.colorChange').addClass('active');
    
}

function switchTweetTheme(currentTheme,targetTheme) {
    var tweets = document.querySelectorAll('[data-tweet-id]');
    tweets.forEach(function(tweet) {
        var src = tweet.getAttribute("src");
        tweet.setAttribute("src", src.replace("theme=" + currentTheme, "theme=" + targetTheme));
    });
}
});