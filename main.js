$(function () {

  $(function () {

  function move() {
    $(".header-image")
      .css("left", "-100px")
      .animate({ left: "100%" }, 15000, "linear", move);
  }

  move();

});

});

$("#work").click(function(){

  $("#work-modal").fadeIn();

});

$(".close").click(function(){

  $(".modal").fadeOut();

});
