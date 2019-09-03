$(document).ready(function() {
   $('.menu a').each(function(index,elemento) {
     $(this).css({
       'top':'-200px'
     });

    $(this).animate({
       top:'0'
    }, 1700 + (index * 500));
  });

//header--------------------------------------------

    if( $(window).width() > 800 ){
        $('header .texto').css({
          opacity: 0,
          marginTop:0,
     });

       $('header .texto').animate({
          opacity: 1,
          marginTop:'-60px',
     }, 1500);
   }

   //scroll elementos menu
  var acercaDe = $('#acerca-de').offset().top;

  $('#btn-acerca-de').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 300
    },500);
    });

    var menu = $('#menu').offset().top;

    $('#btn-menu').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 970
      },500);
      });

    var galeria = $('#parrafo').offset().top;

    $('#btn-galeria').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 1700
      },500);
      });

    var ubicacion = $('#ubicacion').offset().top;

    $('#btn-ubicacion').on('click', function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: 2497
      },500);
      });
});
