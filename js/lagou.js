
		//获取至窗口的边距
		function getPos(obj){
            var l=0;
            var t=0;
            while(obj){
                l+=obj.offsetLeft;
                t+=obj.offsetTop;
                obj=obj.offsetParent;
            }
            return {left:l,top:t};
        }
        //获取拉钩效果的控制变量
        function hoverDir(obj, ev){
            var x=getPos(obj).left+obj.offsetWidth/2-ev.clientX;
            var y=getPos(obj).top+obj.offsetHeight/2-ev.clientY;

            return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;
        }


//===============拉钩函数

        function lagou(obj){  
        	for(var i=0; i<obj.length; i++){
                obj[i].onmouseenter=function(ev){
                    var oEvent=ev || event;
                    var n=hoverDir(this, oEvent);
                    var oSpan=this.getElementsByTagName('span')[0];
                    switch(n){
                        case 0:
                        	// oSpan.style.background='rgba(255, 0, 0, .3)';
                            oSpan.style.left=this.offsetWidth+'px';
                            oSpan.style.top=0;
                            break;
                        case 1:
                            // oSpan.style.background='rgba(255, 0, 0, .3)';
                            oSpan.style.left=0;
                            oSpan.style.top=this.offsetHeight+'px';
                            break;
                        case 2:
                        	// oSpan.style.background='rgba(255, 0, 0, .3)';
                            oSpan.style.left=-this.offsetWidth+'px';
                            oSpan.style.top=0;
                            break;
                        case 3:
                        	// oSpan.style.background='rgba(255, 0, 0, .3)';
                            oSpan.style.left=0;
                            oSpan.style.top=-this.offsetHeight+'px';
                            break;
                    }
                    move(oSpan, {left: 0, top: 0});
                };
                obj[i].onmouseleave=function(ev){
                    var oEvent=ev || event;
                    var n=hoverDir(this, oEvent);

                    var oSpan=this.getElementsByTagName('span')[0];
                    switch(n){
                        case 0:
                            move(oSpan, {left: this.offsetWidth, top: 0});
                            break;
                        case 1:
                            move(oSpan, {left: 0, top: this.offsetHeight});
                            break;
                        case 2:
                            move(oSpan, {left: -this.offsetWidth, top: 0});
                            break;
                        case 3:
                            move(oSpan, {left: 0, top: -this.offsetHeight});
                            break;
                    }
                };
            }
        }
        