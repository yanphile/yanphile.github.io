            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(function(ev){
                    // 1、生成地图
                    var map = new BMap.Map("baiduMap");
                    // 2、设置中心点,以及比例
                    var oPoint=new BMap.Point(ev.coords.longitude, ev.coords.latitude);
                    // alert(ev.coords.longitude, ev.coords.latitude);
                    map.centerAndZoom(oPoint, 16);
                    // 3、添加标注
                    var myIcon = new BMap.Icon("img/fox.gif", new BMap.Size(70,90));
                    var marker = new BMap.Marker(oPoint,{icon:myIcon});
                    map.addOverlay(marker);
                    // 跳动的动画
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                    map.enableScrollWheelZoom(true);
                }, function(){
                    // alert('获取地图信息失败');
                    // 1、生成地图
                    var map = new BMap.Map("baiduMap");
                    // 2、设置中心点,以及比例
                    var oPoint=new BMap.Point(116.365487, 40.099615);
                    map.centerAndZoom(oPoint, 15);
                    // 3、添加标注
                    var myIcon = new BMap.Icon("img/fox.gif", new BMap.Size(70,90));
                    var marker = new BMap.Marker(oPoint,{icon:myIcon});
                    map.addOverlay(marker);
                    // 跳动的动画
                    marker.setAnimation(BMAP_ANIMATION_BOUNCE);
                    map.enableScrollWheelZoom(true);
                        })
            }