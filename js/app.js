
$('.parallax-window').parallax({imageSrc: 'img/gatien2.jpg'});

console.log("coucou")


window.onresize = resize;

function resize()
{
  if($(window).width()<631){
    $("header #headermobile").removeClass('hide');
  }

}

resize();
