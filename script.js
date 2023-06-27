$(function(){
  $(".menubar").on("click", function(){
    if($(".menu").hasClass("active")){
      $(".menu").removeClass("active");
      $(this).find("a").html("<i class='fa fa-times'></i>");
    }else{
      $(".menu").addClass("active");
      $(this).find("a").html("<i class='fa fa-bars'></i>");
    }
  });
});
// in order for the code to work, the i tag  
//must have it's own parent tag (say a tag or 
//div tag) seperate from it's grandparent div 
//tag that contain class of menu



