/* To adjust the positon of the logo and Navigationm links based on the offset of the mid container*/
var window_width = 0,
    mid_container_offset = 0,
    mid_container_width = 0;

function setOffsets(){
  window_width = $(window).width();
  mid_container_offset = $(".mid-container").offset();
  mid_container_width = $(".mid-container").width();
  console.log(window_width);  //690px
}

function toggleVisible(){
  $(".logo").css("visibility","visible");
  $(".nav-links").css("visibility","visible");
}

$(document).ready(function(){
  setOffsets();
  if(window_width >= 675){
    $(".logo").css("margin-left",mid_container_offset.left-8);
    $(".nav-links").css("margin-right",((window_width - mid_container_width)/2)-38);
  }else{
    $(".logo").css("margin-left",0);
    $(".nav-links").css("margin-right",0);
  }
  toggleVisible();
});

$(window).resize(function(){
  setOffsets();

  if(window_width >= 675){
    $(".logo").css("margin-left",mid_container_offset.left-8);
    $(".nav-links").css("margin-right",((window_width - mid_container_width)/2)-38);
  }else{
    $(".logo").css("margin-left",0);
    $(".nav-links").css("margin-right",0);
  }


});
/***********************/
