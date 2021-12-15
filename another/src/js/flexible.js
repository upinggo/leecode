$(function ($) {
    var tid;
    function refreshRem() {
        var width = window.innerWidth  ;
        var height = window.innerHeight ;
        
        if (width > 1280) {
            var font = width / 10;
            $('html').css('font-size', font + 'px');
        } else if (width <= 1280) {
            var rem = width * 100 / 750;
            $('html').css('font-size', rem + 'px');
        }
    }

    refreshRem();

    if (window.addEventListener) {
        window.addEventListener("resize", function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }, false);
        window.addEventListener("pageshow", function (e) {
            if (e.persisted) { // 浏览器后退的时候重新计算
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        }, false);
    } else {
        window.attachEvent("resize", function () {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        });
        window.attachEvent("pageshow", function (e) {
            if (e.persisted) { // 浏览器后退的时候重新计算
                clearTimeout(tid);
                tid = setTimeout(refreshRem, 300);
            }
        });
    }
    
});