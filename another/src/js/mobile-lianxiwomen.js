/**
        * 加载指定城市区域的地图
        */
function initialize() {


    const point = new sogou.maps.Point(13401623.046875, 3639248.53515625);
    const myOptions = {
        zoom: 10,
        center: point
    }
    const map = new sogou.maps.Map(document.getElementById("map"),
        myOptions);
    new sogou.maps.Marker({
        map: map,
        title: '',
        position: point
    });

    var request = {
        address: { //使用address参数
            addr: '上海市申滨南路998号龙湖虹桥天街E座',//kw 为输入框中的地址
            city: "上海" //建议添加城市，写了城市结果会更准确
        }
    }
    var geo = new sogou.maps.Geocoder();
    geo.geocode(request, callback);
    function callback(a) {//回调函数 标点
        if (a.status == 'ok') {//有结果返回
            var data = a.data;
            for (var i = 0; i < data.length; i++) {
                var geometry = a.data[0];//取出第一个结果
                marker = new sogou.maps.Marker({//以第一个数据结果为准，创建一个标记
                    map: map,
                    title: geometry.address,
                    label: {
                        visible: true
                    },
                    position: geometry.location,
                    visible: true
                });

                map.setCenter(marker.getPosition());//地图中心移至此处
            }
        }

    };

}