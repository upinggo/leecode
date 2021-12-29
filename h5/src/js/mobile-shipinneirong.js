// media 
var player = videojs(document.getElementById('video'), {
    controls: true, // 是否显示控制条
    poster: 'image/shipinneirong/2.png', // 视频封面图地址
    preload: 'auto',
    autoplay: false,
    fluid: true, // 自适应宽高
    language: 'zh-CN', // 设置语言
    muted: false, // 是否静音
    inactivityTimeout: false,
    controlBar: { // 设置控制条组件
        /* 设置控制条里面组件的相关属性及显示与否
        'currentTimeDisplay':true,
        'timeDivider':true,
        'durationDisplay':true,
        'remainingTimeDisplay':false,
        volumePanel: {
          inline: false,
        }
        */
        /* 使用children的形式可以控制每一个控件的位置，以及显示与否 */
        children: [
            { name: 'playToggle' }, // 播放按钮
            { name: 'currentTimeDisplay' }, // 当前已播放时间
            { name: 'progressControl' }, // 播放进度条
            { name: 'durationDisplay' }, // 总时间
            { // 倍数播放
                name: 'playbackRateMenuButton',
                'playbackRates': [0.5, 1, 1.5, 2, 2.5]
            },
            {
                name: 'volumePanel', // 音量控制
                inline: false, // 不使用水平方式
            },
            { name: 'FullscreenToggle' } // 全屏
        ]
    },
    sources: [ // 视频源
        {
            src: './video/1.mp4',
            type: 'video/mp4',
            poster: './image/shipinneirong/2.png'
        }
    ]
}, function () {
    // call back
});

const plays = document.querySelectorAll('.play');
plays.forEach(play =>
    play.addEventListener('click', function (event) {
        $('.section-video').css('display', 'flex');
        const srcc = event.target.getAttribute('data-src');
        const typee = event.target.getAttribute('data-type');
        const imagee = event.target.getAttribute('data-image');
        var data = {
            src: srcc,
            type: typee
        };
        player.pause();
        player.load(data);
        // 动态切换poster
        player.posterImage.setSrc('image/shipinneirong/2.png');
        player.play();
    })
);

$('.section-video .close').click(function () {
    $('.section-video').css('display', 'none');
    player.pause();
});