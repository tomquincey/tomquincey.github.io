
      var scaler = 0.7;
      
var controlsProgressEl = document.querySelector('.progress');
      
      var animationPlayButton1 = anime({
        targets: '.pb1',
        opacity: [
          {value: 1, duration: 0, easing: 'easeOutQuad'},
          {value: 0, duration: 150, easing: 'easeOutQuad'},
          {value: 1, delay: 2450, duration: 300, easing: 'easeOutQuad'}
        ],
        direction: 'normal',
        loop: false,
        easing: 'linear',
        autoplay: false,
      });
      var animationPlayButton2 = anime({
        targets: '.pb2',
        opacity: [
          {value: 1, duration: 0, easing: 'easeOutQuad'},
          {value: 0, duration: 150, easing: 'easeOutQuad'},
          {value: 1, delay: 4450, duration: 300, easing: 'easeOutQuad'}
        ],
        direction: 'normal',
        loop: false,
        easing: 'linear',
        autoplay: false,
      });
      var animationPlayButton3 = anime({
        targets: '.pb3',
        opacity: [
          {value: 1, duration: 0, easing: 'easeOutQuad'},
          {value: 0, duration: 150, easing: 'easeOutQuad'},
          {value: 1, delay: 2550, duration: 300, easing: 'easeOutQuad'}
        ],
        direction: 'normal',
        loop: false,
        easing: 'linear',
        autoplay: false,
      });


      var animation = anime({
        targets: '.el1',
        translateX: [
          {value: 250*scaler, duration: 2500},
          {value: 0, duration: 10,}
        ],
        opacity: [
          {value: 0, duration: 0, easing: 'easeOutQuad'},
          {value: 1, duration: 500, easing: 'easeOutQuad'},
          {value: 0, delay: 1500, duration: 500, easing: 'easeOutQuad'}
        ],
        direction: 'normal',
        loop: false,
        easing: 'linear',
        autoplay: false,
      });
      
      var animation2 = anime({
        targets: '.el2',
        translateX: [
        { value: 125*scaler, duration: 500, delay: 0, easing: 'linear'},
        { value: 250*scaler, duration: 1000, delay: 0, easing: 'easeOutQuad'},
        { value: 250*scaler, duration: 500, delay: 0, easing: 'linear'},
        { value: 150*scaler, duration: 800, delay: 0, easing: 'easeInQuad'},
        { value: 0, duration: 1500, delay: 0, easing: 'easeOutQuad'},
        ],
        opacity: [
          {value: 0, duration: 0, easing: 'easeOutQuad'},
          {value: 1, duration: 300, easing: 'easeOutQuad'},
          {value: 0, delay: 4000, duration: 300, easing: 'easeOutQuad'}
        ],
        direction: 'normal',
        loop: false,
        autoplay: false,
      });
      
      var animation2l = anime({
        targets: '.el2l',
        opacity: [
        { value: 0, duration: 0, delay: 0, easing: 'linear'},
        { value: 0, duration: 500, delay: 0, easing: 'linear'},
        { value: 1.0, duration: 500, delay: 0, easing: 'linear'},
        { value: 0, duration: 500, delay: 0, easing: 'linear'},
        { value: 0, duration: 500, delay: 0, easing: 'linear'},
        { value: 1.0, duration: 400, delay: 0, easing: 'linear'},
        { value: 0, duration: 400, delay: 0, easing: 'linear'},
        ],
        direction: 'normal',
        loop: false,
        autoplay: false,
      });
      
      var animation2r = anime({
        targets: '.el2r',
        opacity: [
        { value: 0, duration: 0, delay: 0, easing: 'linear'},
        { value: 0, duration: 3000, delay: 0, easing: 'linear'},
        { value: 0.4, duration: 550, delay: 0, easing: 'linear'},
        { value: 0, duration: 750, delay: 0, easing: 'linear'},
        ],
        direction: 'normal',
        loop: false,
        autoplay: false,
      });
      
      var animation3L = anime({
        targets: '.el3L',
        translateX: [
        { value: 40*scaler, duration: 300, delay: 0, easing: 'linear'},
        { value: 110*scaler, duration: 1000, delay: 0, easing: 'easeOutQuad'},
        { value: 40*scaler, duration: 1000, delay: 0, easing: 'easeInQuad'},
        { value: 0*scaler, duration: 300, delay: 0, easing: 'linear'},
        ],
        opacity: [
          {value: 0, duration: 0, easing: 'easeOutQuad'},
          {value: 1, duration: 300, easing: 'easeOutQuad'},
          {value: 0, delay: 2000, duration: 300, easing: 'easeOutQuad'}
        ],
        direction: 'normal',
        loop: false,
        autoplay: false,
      });
      
      var animation3R = anime({
        targets: '.el3R',
        translateX: [
        { value: 250*scaler, duration: 0, delay: 0, easing: 'linear'},
        { value: 210*scaler, duration: 300, delay: 0, easing: 'linear'},
        { value: 140*scaler, duration: 1000, delay: 0, easing: 'easeOutQuad'},
        { value: 210*scaler, duration: 1000, delay: 0, easing: 'easeInQuad'},
        { value: 250*scaler, duration: 300, delay: 0, easing: 'linear'},
        ],
        opacity: [
          {value: 0, duration: 0, easing: 'easeOutQuad'},
          {value: 1, duration: 300, easing: 'easeOutQuad'},
          {value: 0, delay: 2000, duration: 300, easing: 'easeOutQuad'}
        ],
        direction: 'normal',
        loop: false,
        autoplay: false,
      });
      
      
      
      var animation3l = anime({
        targets: '.el3l',
        opacity: [
        { value: 0, duration: 0, delay: 0, easing: 'linear'},
        { value: 0, duration: 300, delay: 0, easing: 'linear'},
        { value: 1.0, duration:  750, delay: 0, easing: 'linear'},
        { value: 1.0, duration: 750, delay: 0, easing: 'linear'},
        { value: 0, duration: 500, delay: 0, easing: 'linear'},
        ],
        direction: 'normal',
        loop: false,
        autoplay: false,
      });
      
      
      var animation3r = anime({
        targets: '.el3r',
        opacity: [
        { value: 0, duration: 0, delay: 0, easing: 'linear'},
        { value: 0, duration: 300, delay: 0, easing: 'linear'},
        { value: 1.0, duration:  750, delay: 0, easing: 'linear'},
        { value: 1.0, duration: 750, delay: 0, easing: 'linear'},
        { value: 0, duration: 500, delay: 0, easing: 'linear'},
        ],
        direction: 'normal',
        loop: false,
        autoplay: false,
      });
      
      
function FirstLawAnim() {
  animation.restart();
  animationPlayButton1.restart();
}
      
function SecondLawAnim() {
  animation2.restart();
  animation2l.restart();
  animation2r.restart();
  animationPlayButton2.restart();
}
     
function ThirdLawAnim() {
  animation3L.restart();
  animation3R.restart();
  animation3l.restart();
  animation3r.restart();
  animationPlayButton3.restart();
}
     
document.querySelector('.play').onclick = FirstLawAnim;
document.querySelector('.playAgain').onclick = FirstLawAnim;
/* document.querySelector('.pause').onclick = animation.pause; 
document.querySelector('.restart').onclick = animation.restart;*/
      
document.querySelector('.play2').onclick = SecondLawAnim;
document.querySelector('.play2Again').onclick = SecondLawAnim;
/* document.querySelector('.pause').onclick = animation.pause; 
document.querySelector('.restart2').onclick = animation2.restart;*/

document.querySelector('.play3').onclick = ThirdLawAnim;
document.querySelector('.play3Again').onclick = ThirdLawAnim;
 

/*     
controlsProgressEl.addEventListener('input', function() {
  animation.seek(animation.duration * (controlsProgressEl.value / 100));
});
*/
    