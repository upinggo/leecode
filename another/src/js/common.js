// to top
$('.to-top').click(function () {
    window.scrollTo(0, 0);
});


// only this work
document.addEventListener('scroll', function (e) {
    //console.log($(window).scrollTop());
});


// amount
// minus 
$('body').on('click', '.number-change-group .minus', function () {
    var n = Number($(this).parent('.number-change-group').children('.number').val());
    if (Number(n)) {
        $(this).parent('.number-change-group').children('.number').val(0 === n ? 0 : n - 1);
    }
});

// add
$('body').on('click', '.number-change-group .add', function () {
    var n = Number($(this).parent('.number-change-group').children('.number').val());
    if (Number(n) || Number(n) === 0) {
        $(this).parent('.number-change-group').children('.number').val(n + 1);
    }
});

// tabs
$('.tab').click(function () {
    // tabs must follow tab directly
    // tab-template must follow tab-containers directly
    // tab-template must not follow tabs directly

    const id = $(this).attr('data-tab');
    const tabs = $(this).parent('.tabs');
    const tabTemplate = $(tabs.parents('.tab-template')[0]);
    tabs.children('.tab').removeClass('active');
    $(this).addClass('active');
    tabTemplate.children('.tab-containers')
        .children('.tab-container')
        .removeClass('active');
    tabTemplate.children('.tab-containers')
        .children('.tab-container[data-tab="' + id + '"]')
        .addClass('active');
});



// modals
$('.bk-cover').click(function () {
    $('.modal').hide();
    $('.bk-cover').hide();
});

// open modal
$('.btn-modal').click(function () {
    const name = $(this).attr('data-modal');
    if ($('.' + name).css('display') !== 'none') {
        $('.modal').hide();
        $('.bk-cover').hide();
        $('.' + name).hide();
    } else {
        $('.modal').hide();
        $('.bk-cover').show();
        $('.' + name).show();
    }
});

//  close modal
$('.modal .btn-cancel').click(function () {
    $('.bk-cover').hide();
    $(this).parents('.modal').hide();
});
$('.modal .btn-ok').click(function () {
    $('.bk-cover').hide();
    $(this).parents('.modal').hide();
});

// pannel
$('.pannel-head').click(function () {
    const ex = $(this).parent('.pannel').attr('data-expand');
    $(this).parent('.pannel').attr('data-expand', 'true' === ex ? false : true)
});



// link get parameter
function getParameter(name) {
    var url = document.location.href;
    var start = url.indexOf("?") + 1;
    if (start == 0) {
        return "";
    }
    var value = "";
    var queryString = url.substring(start);
    var paraNames = queryString.split("&");
    for (var i = 0; i < paraNames.length; i++) {
        if (name == getParameterName(paraNames[i])) {
            value = getParameterValue(paraNames[i])
        }
    }
    return value;
}
// link get parameter -2
function getParameterName(str) {
    var start = str.indexOf("=");
    if (start == -1) {
        return str;
    }
    return str.substring(0, start);
}
// link get parameter -3
function getParameterValue(str) {
    var start = str.indexOf("=");
    if (start == -1) {
        return "";
    }
    return str.substring(start + 1);
}




// addEventListener 兼容各浏览器
function addEventListener(element, type, fn) {
    // 这个自定义的函数跟下面的方法重名注意区分
    if (typeof element.addEventListener != "undefined") {
        // 一定要注意，undefined是字符串类型，如果去掉在IE中死循环
        element.addEventListener(type, fn, false);

    } else if (typeof element.attachEvent != "undefined") {
        element.attachEvent("on" + type, fn);
        // 响应事件名字如click应该直接写也能直接表达他的意思，而微软非要在前面加一个"on"
    } else {
        element["on" + type] = fn;
        // 如果浏览器上面两个都不兼容，只能写这样一种
    }
}

function isEmail(str) {
    var re = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (re.test(str) != true) {
        return false;
    } else {
        return true;
    }
}


function IEVersion() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串  
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器  
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器  
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11  
    } else {
        return 1000;//不是ie浏览器
    }
}
var ie = IEVersion();


//// 上传图像
//$('.btn-upload input[type="file"]').change(function (event) {
//    const selectedFile = event.target.files[0];
//    const reader = new FileReader();
//    reader.onload = function (event) {
//        const html = '<img src = "' + event.target.result + '" />';
//        $('.btn-upload').before(html);
//    };
//    reader.readAsDataURL(selectedFile);
//});


$('.to-top').click(function () {
    $('.main').scrollTop(0);
});

$('.go-back').click(function () {
    window.history.go(-1);
    return false;
});



// count down 倒计时
var hour = 1;
var minute = 1;
var second = 1;
countDown(hour, minute, second);
function countDown(hour, minute, second) {
    var internal = setInterval(function () {
        if (0 === second) {
            if (0 === minute) {
                if (0 === hour) {
                    clearInterval(internal);
                } else {
                    hour--;
                    minute = 59;
                    second = 59;
                }
            } else {
                minute--;
                second = 59;
            }
        } else {
            second--;
        }

        $('#hour').text(hour < 10 ? '0' + hour : hour);
        $('#minute').text(minute < 10 ? '0' + minute : minute);
        $('#second').text(second < 10 ? '0' + second : second);
    }, 1000);
}

// search
$('.open-search').click(function () {
    $(this).parent().parent().children('.menu-group').removeClass('open');
    $(this).parent().addClass('open');
});

$('.close-search').click(function (event) {
    $(this).parent().parent().removeClass('open');
});

$('.search-btn').click(function (event) {

});

$('.open-menu-group').click(function (event) {
    $(this).parent().addClass('open');
    $(this).parent().parent().children('.search-group').removeClass('open');
});
$('.close-menu-group').click(function (event) {
    $(this).parent().removeClass('open');
});