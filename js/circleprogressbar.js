
function addPercent(obj,percent){
            var rotateN=0;
            clearInterval(obj.timer);
            obj.timer=setInterval(function(){
                  rotateN++;        
                  obj.getElementsByTagName("span")[0].innerHTML=rotateN;
                  num=rotateN*3.6;
                  if(num<=180){
                    obj.getElementsByClassName("right_half")[0].style.transform="rotate(" + num + "deg)";
                    obj.getElementsByClassName("left_half")[0].style.transform="rotate(0deg)";
                  }else{
                    obj.getElementsByClassName("right_half")[0].style.transform="rotate(180deg)";
                    obj.getElementsByClassName("left_half")[0].style.transform="rotate(" + (num - 180) + "deg)";
                  }

                  if(rotateN>=percent){clearInterval(obj.timer)}
            },30);
                  
                  var ospan=obj.querySelector('span');
                  $(obj).clear();
                   $(obj).tween({
                     backgroundColor:{
                        start:function(){
                          return '#cccccc'
                        },
                        stop:function(){
                          if(percent<=80){return '#FF9900'}
                            else if(percent<=85){return '#ffff33'}
                              else if(percent<=90){return '#FF3300'}
                                else{return '#cccccc'}
                          
                        },
                        time: 0,
                        duration: percent*30/1000
                        // effect:'easeInOut'
                     }
                  });
                   $(ospan).clear();
                   $(ospan).tween({
                     color:{
                        start:function(){
                          return '#cccccc'
                        },
                        stop:function(){
                          if(percent<=80){return '#FF9900'}
                            else if(percent<=85){return '#ffff33'}
                              else if(percent<=90){return '#FF3300'}
                                else{return '#cccccc'}
                          
                        },
                        time: 0,
                        duration: percent*30/1000
                        // effect:'easeInOut'
                     },
                     fontSize:{
                        start:20,
                        stop:36,
                        duration: percent*30/1000
                     }
                  });
                  

                  $.play();  

                 




        }