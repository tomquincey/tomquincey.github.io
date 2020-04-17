// external js: flickity.pkgd.js

var carousel_1 = document.getElementById('carousel_1');
var flkty_1 = new Flickity( carousel_1 );

var carousel_2= document.getElementById('carousel_2');
var flkty_2 = new Flickity( carousel_2 );

var fButton = document.querySelector("input[name=flour]");
var bButton = document.querySelector("input[name=butter]");
var sButton = document.querySelector("input[name=sugar]");
var eButton = document.querySelector("input[name=eggs]");

fButton.addEventListener( 'change', function() {
  // un-hide carousel
  carousel_1.style.display = 'block';
  carousel_2.style.display = 'block';
  // Flickity resize
  flkty_1.resize();
  flkty_2.resize();
});

bButton.addEventListener( 'change', function() {
  // un-hide carousel
  carousel_1.style.display = 'block';
  carousel_2.style.display = 'block';
  // Flickity resize
  flkty_1.resize();
  flkty_2.resize();
});

sButton.addEventListener( 'change', function() {
  // un-hide carousel
  carousel_1.style.display = 'block';
  carousel_2.style.display = 'block';
  // Flickity resize
  flkty_1.resize();
  flkty_2.resize();
});

eButton.addEventListener( 'change', function() {
  // un-hide carousel
  carousel_1.style.display = 'block';
  carousel_2.style.display = 'block';
  // Flickity resize
  flkty_1.resize();
  flkty_2.resize();
});
