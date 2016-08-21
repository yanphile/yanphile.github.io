// 事件绑定
function addEvent(obj, sEv, fn){
    if(obj.addEventListener){
        obj.addEventListener(sEv, fn, false);
    }else{
        obj.attachEvent('on'+sEv, fn);
    }
}

 // 事件解绑定
function removeEvent(obj, sEv, fn){
    if(obj.removeEventListener){
        obj.removeEventListener(sEv, fn, false);
    }else{
        obj.detachEvent('on'+sEv, fn);
    }
}
// 至窗口边距
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
 // 单数字变双
 function toDouble(n){
            return n<10?'0'+n:''+n;
 }
// 获取元素样式
 function getStyle(obj,name){
            return (obj.currentStyle || getComputedStyle(obj,false))[name];
 }