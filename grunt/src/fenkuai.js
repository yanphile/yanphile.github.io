		function shuttle(obj) {
			// 布局
            var R=obj.offsetHeight/100*4;//=======================数字能被大块的高整除，否则小块最终填不满大块
            var C=obj.offsetWidth/100*2;//=======================数字能被大块的宽整除，否则小块最终填不满大块
            for(var r=0; r<R; r++){
                for(var c=0; c<C; c++){
                    var oSpan=document.createElement('span');
                    oSpan.style.width=obj.offsetWidth/C+'px';
                    oSpan.style.height=obj.offsetHeight/R+'px';
                    oSpan.style.position='absolute'
                    obj.appendChild(oSpan);
                    // 改变位置
                    oSpan.style.left=oSpan.offsetWidth*c+'px';
                    oSpan.style.top=oSpan.offsetHeight*r+'px';
                    //===========================================注意背景图片大小与父级一致
                    oSpan.style.backgroundSize='800px 600px'
                    oSpan.style.backgroundPosition=-oSpan.offsetWidth*c+'px '+-oSpan.offsetHeight*r+'px';
                    oSpan.time=Math.abs(parseInt(Math.sqrt((r-R/2)*(r-R/2)+(c-C/2)*(c-C/2))))
                    oSpan.r=r;
                    oSpan.c=c;
                }
            }
            obj.style.backgroundImage='url(img/shuttle/0.jpg)';
            var aSpan=obj.children;
            // 下一页
            var n=0;
            bflag=false;
            obj.onclick=function(){
            	if(bflag)return;
            	bflag=true;
                n++;
                this.style.backgroundImage='url(img/shuttle/'+(n-1)%10+'.jpg)';
                for(var i=0; i<aSpan.length; i++){
                    ;(function(i){
                        setTimeout(function(){
                            aSpan[i].style.opacity=0;
                            move(aSpan[i], {opacity: 1},{complete:function(){if (i==aSpan.length-1) {bflag=false}}});
                            aSpan[i].style.backgroundImage='url(img/shuttle/'+n%10+'.jpg)';
                        }, 100*aSpan[i].time);
                    })(i);
                }
            };
		}