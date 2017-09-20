
$('.parallax-window').parallax({imageSrc: 'img/gatien2.jpg'});


window.onresize = resize;

function resize() {
  if($(window).width()<631){
    $("header #headermobile").removeClass('hide');
  }

}

resize();

$('.collapsible').collapsible();

 $('.modal').modal();
