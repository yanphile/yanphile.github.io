function picturezoom(boxid,pic_ulid){
            var oBox=document.getElementById(boxid);
            var oUl=document.getElementById(pic_ulid);
            var aLi=oUl.children;
            var aImg=oUl.getElementsByTagName('img');
            var aA=oUl.getElementsByTagName('a');


            oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
            var oBoxC=oBox.offsetWidth/2;
            
            // 拖拽

            oUl.onmousedown=function(ev){
                var oEvent=ev || event;
                var disX=oEvent.clientX-oUl.offsetLeft;

               
                document.onmousemove=function(ev){
                    var oEvent=ev || event;
                    var l=oEvent.clientX-disX;
                    // 限制范围
                    if(l>=oBoxC-(1-0.5)*aLi[0].offsetWidth){
                        l=oBoxC-(1-0.5)*aLi[0].offsetWidth;
                    }
                    if(l<=oBoxC-(aLi.length-0.5)*aLi[0].offsetWidth){
                        l=oBoxC-(aLi.length-0.5)*aLi[0].offsetWidth;
                    }
                    oUl.style.left=l+'px';
                    // 改变大小
                    setSize();
                    
                };
                document.onmouseup=function(){

                    document.onmousemove=null;
                    document.onmouseup=null;     
                };
                return false;
            };
            // 初始化ul的left
            oUl.style.left=oBoxC-(2-0.5)*aLi[0].offsetWidth+'px';
            function setSize(){
                for(var i=0; i<aLi.length; i++){
                    // 图片距离中心点的距离
                    var c=Math.abs(oBoxC-(aLi[i].offsetLeft+aLi[i].offsetWidth/2+oUl.offsetLeft));
                    // 比例
                    var scale=1-c/500;
                    scale<0.5 && (scale=0.5);
                    // 改变大小
                    aImg[i].style.width=scale*aLi[0].offsetWidth*2.2+'px';
                    // 让一个物体从中心变大  //图片比例与包它的容器的宽高比例一致
                    aImg[i].style.marginLeft=-(scale*aLi[0].offsetWidth*2.2-aLi[0].offsetWidth)/2+'px';
                    aImg[i].style.marginTop=-(scale*aLi[0].offsetHeight*2.2-aLi[0].offsetHeight)/2+'px';
                    aLi[i].style.zIndex=scale*1000;
                    aImg[i].style.opacity=scale;
                    //控制链接激活
                    if (scale>=0.8) {aA[i].href=aA[i].getAttribute('_href')}
                    else{aA[i].href='javascript:;'}
                }
            }
            setSize();
}