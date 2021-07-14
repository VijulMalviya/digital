$(document).ready(function(){
    $("#bar").click(function(){
      $(".navlinksec").slideToggle("slow");
    });
    $(".navlinksec ul li").click(function(){
        if (window.matchMedia("(max-width: 576px)").matches) {
            $(".navlinksec").slideUp("slow");
          }
       
      });
      $(".navlinksec ul li").click(function(){
        if (window.matchMedia("(max-width: 1024 px)").matches) {
            $(".navlinksec").slideUp("slow");
          }
       
      });
  });