function picRing_3D(id,obj){
                    var oUl=document.querySelector(id);
                    oUl.innerHTML='';
                    clearInterval(oUl.autoslidetimer);
                    clearInterval(oUl.fadeslidetimer);
                    var N=11; 
                    var arr=['爆炸','百叶窗','翻页']
                    oUl.style.transform='perspective(1200px) rotateY(0deg) rotateX(-15deg)';
                    for(var i=0; i<N; i++){
                        var oLi=document.createElement('li');
                        oLi.innerHTML='<a target=_blank href="work/css3/'+arr[i%3]+'.html">'+arr[i%3]+'</a>'
                        oLi.style.backgroundImage='url(img/3dring/'+(i+1)+'.jpg)';
                        oUl.appendChild(oLi);
                        oLi.style.transition='1s all ease '+200*(N-i)+'ms';
                        (function(oLi, i){
                            setTimeout(function(){
                                oLi.style.transform='perspective(1200px)  rotateY('+360/11*i+'deg) translateZ(260px)'
                            }, 0)
                        })(oLi, i);
                    }

                    var aLi=oUl.children;
                    var y=0;
                    var x=-15;
                    var iSpeedX=0;
                    var iSpeedY=0;
                    var lastX=0;
                    var lastY=0;
                   
                    var bFlag=false;
                    // 关灯
                    aLi[0].addEventListener('transitionend', function(){
                        
                        for(var i=0; i<aLi.length; i++){
                            aLi[i].style.transition='none';
                        }
                                clearInterval(oUl.autoslidetimer)
                                oUl.autoslidetimer=setInterval(function(){
                                    y+=0.5;
                                    turn(-x, y);
                                },30)

                        bFlag=true;
                    }, false);
                    
                    obj.onmousedown=function(ev){
                        if(bFlag==false)return;
                         clearInterval(oUl.fadeslidetimer);
                         clearInterval(oUl.autoslidetimer);
                        var oEvent=ev || event;
                        var disX=oEvent.clientX-y;
                        var disY=oEvent.clientY-x;
                        for(var i=0; i<aLi.length; i++){
                            aLi[i].style.transition='none';
                        }
                        obj.onmousemove=function(ev){
                            var oEvent=ev || event;

                            

                            x=oEvent.clientY-disY;
                            y=oEvent.clientX-disX;
                            turn(x/3, y/3);
                            iSpeedX=oEvent.clientX-lastX;
                            iSpeedY=oEvent.clientY-lastY;

                            lastX=oEvent.clientX;
                            lastY=oEvent.clientY;
                            
                        };
                        obj.onmouseup=function(){
                            obj.onmousemove=null;
                            obj.onmouseup=null;
                            clearInterval(oUl.fadeslidetimer)
                            oUl.fadeslidetimer=setInterval(function(){
                                y+=iSpeedX;
                                x+=iSpeedY;

                                iSpeedX*=0.95;
                                iSpeedY*=0.95;

                                turn(x/3, y/3);
                            }, 30);
                            
                            
                        };
                        return false;
                    };


                    function turn(x, y){
                        for(var i=0; i<aLi.length; i++){
                            aLi[i].style.transform='perspective(1200px) rotateY('+(360/11*i+y)+'deg) translateZ(260px)';
                            oUl.style.transform='perspective(1200px) rotateY(0deg) rotateX('+-x+'deg)';

                            // 角度
                            var scale=Math.abs(Math.abs((360/11*i+y)%360)-180)/180;
                            scale<0.3 && (scale=0.3);
                            aLi[i].style.opacity=scale;
                        }
                    }
                };