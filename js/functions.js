window.onload = function() {
  (function($){
    var randomFixedInteger = function (length) {
      //return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
      return Math.floor(Math.random() * length) + 1
    }
    
    function reset() {
      $(".main-app .start").removeClass("hidden");
      $(".mgw-content img").remove();
    }
    
    $(document).on("click", ".mgw-nav.next", function(){
      if($(".mgw-content img.active").next().hasClass("exercise")){
        $(".mgw-content img.active").removeClass("active").next().addClass("active");
      }
      else {
        $(".mgw-content img.active").removeClass("active");
        $(".mgw-content img:first").addClass("active")
      }
      return false;
    });
    $(document).on("click", ".mgw-nav.prev", function(){
      if($(".mgw-content img.active").prev().hasClass("exercise")){
        $(".mgw-content img.active").removeClass("active").prev().addClass("active");
      }
      else {
        $(".mgw-content img.active").removeClass("active");
        $(".mgw-content img:last").addClass("active")
      }
      return false;
    });
    $(document).on("click", ".main-app .start", function(){
      $(this).addClass("hidden");
      for (i = 0; i < 6; i++) {
        $(".mgw-content").append("<img src='ex/ex-"+randomFixedInteger(114)+".gif' class='exercise'>");
      }
      $(".mgw-content img:first").addClass("active");
      $(".ma-grid-wrapper").removeClass("hidden");
    });
    $(document).on("click", ".main-app .reset", function(){
      $(".mgw-content img").remove();
      for (i = 0; i < 6; i++) {
        $(".mgw-content").append("<img src='ex/ex-"+randomFixedInteger(114)+".gif' class='exercise'>");
      }
      $(".mgw-content img:first").addClass("active");
    });
    
  
  
  })(jQuery);
}
