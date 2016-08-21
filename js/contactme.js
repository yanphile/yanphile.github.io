function contactme(){
   
	$('.target').css({left:-100,top:470,width:80,height:80,color:'rgba(0,0,0,0)'})
	$('.target').clear();
	$('.target').each(function(index,element){
		$(element).tween({
	   left:{
	      start: -100,
	      stop: 160,
	      time:1+index*0.1,
	      duration:0.1,
	      units: 'px',
	      effect:'linear',

	      
	   },
	 
	   onStop: function( element ){
	     $(element).tween({
		     top:{
		      start: 400,
		      stop: function(){
		      	return 40+index*110
		      },
		      time: 0.1,
		      // duration:index*0.5,
		      units: 'px',
		      
		   	},
			onStop: function( element ){
				     $(element).tween({
				     	width:{
				     		start:80,
				     		stop:300,
				     		// time:index*0.5,
				     		duration:1,
				     		effect:'elasticInOut'
				     	},
				     	marginLeft:{
				     		start:0,
				     		stop:-110,
				     		// time:index*0.5,
				     		duration:1,
				     		effect:'elasticInOut'
				     	},
				     	color:{
						      start:'rgba(0,255,0,0)',
						      stop: 'rgba(0,255,0,1)',
						      time: 0,
						      duration: 1,
						      effect:'easeInOut'
						},
						fontSize:{
							start:0,
							stop:20
						}
				    })
		    }
	     })
	   },

	    
	   
	});
	$.play();
	
	});
	


}
