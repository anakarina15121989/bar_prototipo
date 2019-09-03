const textos = [

  "Disfruta tu tiempo como mereces",
  "Disfruta tu vida",
  "Disfruta tu comida",
];

var actualTexto = 0;
$(document).ready(function(){

   $(window).scroll(function(){
      var windowWidth = $(window).width();

    if (windowWidth > 800){
        var scroll = $(window).scrollTop();
        console.log("El scroll es de: "+ scroll);
        $('header .texto').css({
                'transform':'translate( 0px, '+ scroll / 2 +'%)'
        });

        $('.acerca-de article').css({
          'transform':'translate(0px, -'+ scroll / 4 +'%)'

        });

        if (scroll >= 1700){
          $('#parrafo').animate({
            left: "1000px",
            opacity: 1
          }, 11000, nextText);
         }
      }
  });


});

function nextText(){
  actualTexto++;
  $('#parrafo').text(textos[actualTexto]);
  $('#parrafo').css({left: 0});

}
