$(function () {

  function moveHeader() {
    $(".header-image")
      .animate(
        { left: "40px" },
        5000
      )
      .animate(
        { left: "0px" },
        5000,
        moveHeader
      );
  }

  moveHeader();

});
