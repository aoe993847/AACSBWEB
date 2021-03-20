$(document).ready(function() { 
    var a = $("#pagelink").offset().top; 

    $(document).scroll(function(){ 
     if($(this).scrollTop() > 50) 
     { 
      $('#pagelink').css({"background":"rgba(0, 0, 0, 0.541)"}); 
     } else { 
      $('#pagelink').css({"background":"black"}); 
     } 
    }); 
   }); 