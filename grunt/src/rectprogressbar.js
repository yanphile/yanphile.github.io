function rect_bar(){
      $('.aboutme_rect i').each(function(index,element){
         $(element).css('width',0);
         $(element).animate({width:parseFloat($(this).html())*100},2000)
      })
}
