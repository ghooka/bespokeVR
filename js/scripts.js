



$(function () {
    $(document).scroll(function () {
      var $nav = $("nav");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  $('.carousel').carousel({
    interval: 2000
  })


  $(function () {
  $('.nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});  });