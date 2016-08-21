//==========主页面选项卡滑动效果


		function continuousSlide(aBig,aSmall){
            // 向上按钮oup,向下运动
            var iNow=0;
            var height=aBig[0].offsetHeight;
           
            function tab(){
                for(var i=0; i<aSmall.length; i++){
                    aSmall[i].className='';
                }
                aSmall[iNow].className='active';
            }
            // Small按钮
            for(var i=0; i<aSmall.length; i++){
                aSmall[i].index=i;
                aSmall[i].onclick=function(){
                    // up
                    if(this.index<iNow){
                        doMove(aBig[iNow], {top:height},{duration:4000,easing:Tween.Elastic.easeOut});
                        aBig[this.index].style.top=-height+'px';
                        doMove(aBig[this.index], {top: 0},{duration:4000,easing:Tween.Elastic.easeOut});
                    // 右边
                    }else if(this.index>iNow){
                        doMove(aBig[iNow], {top: -height},{duration:4000,easing:Tween.Elastic.easeOut});
                        aBig[this.index].style.top=height+'px';
                        doMove(aBig[this.index], {top: 0},{duration:4000,easing:Tween.Elastic.easeOut});
                    }
                    iNow=this.index;
                    tab();
                };
            }
        }
