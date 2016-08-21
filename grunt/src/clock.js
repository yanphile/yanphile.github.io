function toDou(n){
			return n<10?'0'+ n : ''+n;
		}

		function clock(oYear,oTime){
			
			var aYearImage=oYear.getElementsByTagName('img');
			var oNowdate=new Date();
			var oY=oNowdate.getFullYear();
			var oM=oNowdate.getMonth()+1;
			var oD=oNowdate.getDate();
			var yString=oY+':'+toDou(oM)+':'+toDou(oD)+':';
			for (var i = 0; i < aYearImage.length; i++) {
				if(yString.charAt(i)==':'){
						continue;
				}
				aYearImage[i].src='img/clockimg/'+yString.charAt(i)+'.png'
			}
			
			var aTimeImage=oTime.getElementsByTagName('img');
			
			function showtime(){
				var oNowdate=new Date();
				var oH=oNowdate.getHours();
				var oMin=oNowdate.getMinutes();
				var oSec=oNowdate.getSeconds();
				var oWk=oNowdate.getDay();
				
				var tString=toDou(oH)+':'+toDou(oMin)+':'+toDou(oSec);
				for (var i = 0; i < 8; i++) {
					if(tString.charAt(i)==':'){
						continue;
					}
					// console.log(aTimeImage[0].getAttribute('src'))
					// console.log(tString.charAt(0))
					if(aTimeImage[i].getAttribute('src') !== ('img/clockimg/'+tString.charAt(i)+'.png')){
						aTimeImage[i].src='img/clockimg/'+tString.charAt(i)+'.png'
						aTimeImage[i].style.marginTop=aTimeImage[0].offsetHeight+'px';
						doMove(aTimeImage[i],{marginTop:0},{easing:Tween.Elastic.easeOut})
					}
					
				}
				//星期单独算
				var aweek=['seven','one','two','three','four','five','six']
				aTimeImage[aTimeImage.length-1].src='img/clockimg/'+aweek[oWk]+'.png'
			}
			showtime();
			timer=setInterval(showtime,1000)
		}