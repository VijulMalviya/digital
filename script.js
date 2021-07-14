AOS.init();

$(window).on("load",function(){
    $(".loader").fadeOut(3000);
  });


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

