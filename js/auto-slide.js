			function autoSlide(boxid,bigul_id,smallol_id,leftkey_id,rightkey_id){
            var oBox=document.getElementById(boxid);
            var oLeft=document.getElementById(leftkey_id);
            var oRight=document.getElementById(rightkey_id);
            var oUl=document.getElementById(bigul_id);
            var aLi=oUl.children;
            var oOl=document.getElementById(smallol_id);
            var aBtn=oOl.children;

            // 右
            var iNow=0;
            var width=aLi[0].offsetWidth;
            oRight.onclick=next;
            // 左边
            oLeft.onclick=prev;
            function next(){
                // 当前这张走
                doMove(aLi[iNow], {left: -width},{duration:2000,easing:Tween.Back.easeOut});
                // 为下一张做准备
                iNow++;
                if(iNow>aLi.length-1){
                    iNow=0;
                }
                aLi[iNow].style.left=width+'px';
                doMove(aLi[iNow], {left: 0},{duration:2000,easing:Tween.Back.easeOut});
                tab();
            }
            function prev(){
                doMove(aLi[iNow], {left: width},{duration:2000,easing:Tween.Back.easeOut});
                // 为前一张左准备
                iNow--;
                if(iNow<0){
                    iNow=aLi.length-1;
                }
                aLi[iNow].style.left=-width+'px';
                doMove(aLi[iNow], {left: 0},{duration:2000,easing:Tween.Back.easeOut});
                tab();
            }
            function tab(){
                for(var i=0; i<aBtn.length; i++){
                    aBtn[i].className='';
                }
                aBtn[iNow].className='active';
            }
            // 圆点按钮
            for(var i=0; i<aBtn.length; i++){
                aBtn[i].index=i;
                aBtn[i].onclick=function(){
                    // 左边
                    if(this.index<iNow){
                        doMove(aLi[iNow], {left: width},{duration:2000,easing:Tween.Back.easeOut});
                        aLi[this.index].style.left=-width+'px';
                        doMove(aLi[this.index], {left: 0},{duration:2000,easing:Tween.Back.easeOut});
                    // 右边
                    }else if(this.index>iNow){
                        doMove(aLi[iNow], {left: -width},{duration:2000,easing:Tween.Back.easeOut});
                        aLi[this.index].style.left=width+'px';
                        doMove(aLi[this.index], {left: 0},{duration:2000,easing:Tween.Back.easeOut});
                    }
                    iNow=this.index;
                    tab();
                };
            }
                //启动自动播放
                // oBox.timer=setInterval(next,8000)
                // oBox.onmouseover=function(){clearInterval(oBox.timer)};
                // oBox.onmouseout=function(){oBox.timer=setInterval(next,8000)}

            }
