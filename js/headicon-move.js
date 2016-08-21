//================================================================右边头像随鼠标位置变化
        
        function addEvent(obj, sEv, fn){
            if(obj.addEventListener){
                obj.addEventListener(sEv, fn, false);
            }else{
                obj.attachEvent('on'+sEv, fn);
            }
        }

        //获取拉钩效果的控制变量
        function hoverDir(obj, ev){
            var x=getPos(obj).left+obj.offsetWidth/2-ev.clientX;
            var y=getPos(obj).top+obj.offsetHeight/2-ev.clientY;

            return Math.round((Math.atan2(y, x)*180/Math.PI+180)/90)%4;
        }

      	function headmove(ev,obj){
      		var oEvent=ev || event;
            var n=hoverDir(obj, oEvent);

           
            switch(n){
                case 0:
                	obj.children[0].src="img/headicon/right-yf.png"
                   
                    break;
                case 1:
                    obj.children[0].src="img/headicon/down-yf.png"
                    break;
                case 2:
                    obj.children[0].src="img/headicon/left-yf.png"
                    break;
                case 3:
                    obj.children[0].src="img/headicon/up-yf.png"
                    break;
            }

        }