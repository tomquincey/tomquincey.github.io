$('a[href*=\\#]').click(function(){ // PA: changed 'a[href*=#]' to 'a[href*=\\#]'
  return false;
});



// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}
  



var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
  wrap: $('#people'),
  people: [
    {
      q_title: "Who discovered <b><i><u>Newton's</u></i></b> Laws of Motion?",
      age: 1,
      img: "newton.jpeg",
      A: "Sir Isaac Newton",
      A_height: "two",
      B: "Christopher Columbus",
      B_height: "two",
      C: "Mr. Thorax",
      C_height: "one",
      D: "Dwayne <br> ''the Rock'' <br> Johnson",
      D_height: "three",
      stars: 1,
      answer: 'A',
    }, 
    {
      q_title: "<b>How many</b> laws of motion are there?",
      age: 2,
      img: "question_bg.svg",
      A: "1",
      A_height: "one",
      B: "2",
      B_height: "one",
      C: "3",
      C_height: "one",
      D: "4",
      D_height: "one",
      stars: 2,
      answer: 'C', // placeholder; all correct
    }, 
    {
      q_title: "Question Title",
      name: 'B',
      age: 3,
      img: "Pingu_ad.jpg",
      A: "Answer A",
      A_height: "one",
      B: "Answer B",
      B_height: "one",
      C: "Answer C !",
      C_height: "one",
      D: "Answer D",
      D_height: "one",
      stars: 2,
      answer: 'C',
    },
    {
      q_title: "This is Question 4",
      name: 'D',
      age: 4,
      img: "Pingu_ad.jpg",
      A: "Answer A",
      A_height: "one",
      B: "Answer B",
      B_height: "one",
      C: "Answer C",
      C_height: "one",
      D: "Answer D !",
      D_height: "one",
      stars: 3,
      answer: 'D',
    }, 
  ],   
  
  // add i_th person: 
  
  add: function(i){
    
    /* so can select each option*/
    $('.childA').click(function(){
        $('.childA').addClass('activeA').siblings().removeClass('activeB activeC activeD');   
        App.yesButton.addClass('activeConfirmButton');   
    });
    $('.childB').click(function(){
        $('.childB').addClass('activeB').siblings().removeClass('activeA activeC activeD');       
        App.yesButton.addClass('activeConfirmButton');   
    });
    $('.childC').click(function(){
        $('.childC').addClass('activeC').siblings().removeClass('activeA activeB activeD');       
        App.yesButton.addClass('activeConfirmButton');   
    });
    $('.childD').click(function(){
        $('.childD').addClass('activeD').siblings().removeClass('activeA activeB activeC');       
        App.yesButton.addClass('activeConfirmButton');   
    });
    
    var person_i = this.people[i];
    this.wrap.append(
      "<div class='person'><h3 class='quiz-title'><span class='white-bubble-title-quiz'>" + person_i.age + ".</span><span><img src='question_stars_" + person_i.stars + ".svg' class='question_stars_" + person_i.stars + "'></span></h3><div style='padding: 25px; padding-top: 20px; text-align: left; height: 290px;'>"+person_i.q_title+"</div><form><img src='"+person_i.img+"' style='width: 100%; height: 180px; position: absolute; top: 118px; left: 0px;'><div class='parent'><label class='child childA "+person_i.A_height+"-line' for='question-1-answers-A'>" + person_i.A + "<input type='radio' id='question-1-answers-A' name='question-1-answers'  value='A' /></label><label class='child childB "+person_i.B_height+"-line' for='question-1-answers-B'>" + person_i.B + "<input type='radio' id='question-1-answers-B' name='question-1-answers'  value='B' /></label><label class='child childC "+person_i.C_height+"-line' for='question-1-answers-C'>" + person_i.C + "<input type='radio' id='question-1-answers-C' name='question-1-answers'  value='C' /></label><label class='child childD "+person_i.D_height+"-line' for='question-1-answers-D'>" + person_i.D + "<input type='radio' id='question-1-answers-D' name='question-1-answers'  value='D' /></label></div></form></div>");
  }
  
  
  /*
  
      "<div class='person'><h3 class='quiz-title'><span class='white-bubble-title-quiz'>" + person_i.age + ".</span><span><img src='question_stars_" + person_i.stars + ".svg' class='question_stars_" + person_i.stars + "'></span></h3><div style='padding: 25px; padding-top: 20px; text-align: left; height: 290px;'>"+person_i.q_title+"</div><form><div class='parent'><div><label class='child "+person_i.A_height+"-line' for='question-1-answers-A'>" + person_i.A + "<input type='radio' id='question-1-answers-A' name='question-1-answers'  value='A' /></label></div><div class='child "+person_i.B_height+"-line'><input type='radio' id='question-1-answers-B' name='question-1-answers'  value='B' /><label for='question-1-answers-B'>" + person_i.B + "</label></div><div class='child " + person_i.C_height + "-line'><input type='radio' id='question-1-answers-C' name='question-1-answers'  value='C' /><label for='question-1-answers-C'>" + person_i.C + "</label></div><div class='child " + person_i.D_height + "-line'><input type='radio' id='question-1-answers-D' name='question-1-answers'  value='D' /><label for='question-1-answers-D'>" + person_i.D + "</label></div></div></form></div>");
      */
  
  // add random person:
  
  /* add: function(){
    var random = this.people[Math.floor(Math.random() * this.people.length)];
    this.wrap.append(
      "<div class='person'><span><strong>" + random.name + "</strong>, " + random.age + "</span><img alt='" + random.name + "' src='" + random.img + "' /></div>");
  } */
};














        /* CONFETTI */


class Progress {
  constructor(param = {}) {
    this.timestamp = null;
    this.duration = param.duration || Progress.CONST.DURATION;
    this.progress = 0;
    this.delta = 0;
    this.progress = 0;
    this.isLoop = !!param.isLoop;

    this.reset();
  }

  static get CONST() {
    return {
      DURATION: 1000 };

  }

  reset() {
    this.timestamp = null;
  }

  start(now) {
    this.timestamp = now;
  }

  tick(now) {
    if (this.timestamp) {
      this.delta = now - this.timestamp;
      this.progress = Math.min(this.delta / this.duration, 1);

      if (this.progress >= 1 && this.isLoop) {
        this.start(now);
      }

      return this.progress;
    } else {
      return 0;
    }
  }}


class Confetti {
  constructor(param) {
    // this.parent = param.elm || document.body;
    this.parent = document.getElementById("confetti"); //new
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = param.width || this.parent.offsetWidth;
    this.height = param.height || this.parent.offsetHeight;
    this.length = param.length || Confetti.CONST.PAPER_LENGTH;
    this.yRange = param.yRange || this.height * 2;
    this.progress = new Progress({
      duration: param.duration,
      isLoop: false }); // true by default !

    this.rotationRange = typeof param.rotationLength === "number" ? param.rotationRange :
    10;
    this.speedRange = typeof param.speedRange === "number" ? param.speedRange :
    10;
    this.sprites = [];

    this.canvas.style.cssText = [
    "display: block",
    "position: absolute",
    "top: 0",
    "left: 0",
    "pointer-events: none"].
    join(";");

    this.render = this.render.bind(this);

    this.build();

    this.parent.appendChild(this.canvas);
    this.progress.start(performance.now());

    requestAnimationFrame(this.render);
  }

  static get CONST() {
    return {
      SPRITE_WIDTH: 9,
      SPRITE_HEIGHT: 16,
      PAPER_LENGTH: 100,
      DURATION: 8000,
      ROTATION_RATE: 50,
      COLORS: [
      "#EF5350",
      "#EC407A",
      "#AB47BC",
      "#7E57C2",
      "#5C6BC0",
      "#42A5F5",
      "#29B6F6",
      "#26C6DA",
      "#26A69A",
      "#66BB6A",
      "#9CCC65",
      "#D4E157",
      "#FFEE58",
      "#FFCA28",
      "#FFA726",
      "#FF7043",
      "#8D6E63",
      "#BDBDBD",
      "#78909C"] };


  }

  build() {
    for (let i = 0; i < this.length; ++i) {
      let canvas = document.createElement("canvas"),
      ctx = canvas.getContext("2d");

      canvas.width = Confetti.CONST.SPRITE_WIDTH;
      canvas.height = Confetti.CONST.SPRITE_HEIGHT;

      canvas.position = {
        initX: Math.random() * this.width,
        initY: -canvas.height - Math.random() * this.yRange };


      canvas.rotation = this.rotationRange / 2 - Math.random() * this.rotationRange;
      canvas.speed = this.speedRange / 2 + Math.random() * (this.speedRange / 2);

      ctx.save();
      ctx.fillStyle = Confetti.CONST.COLORS[Math.random() * Confetti.CONST.COLORS.length | 0];
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.restore();

      this.sprites.push(canvas);
    }
  }

  render(now) {
    let progress = this.progress.tick(now);

    this.canvas.width = this.width;
    this.canvas.height = this.height;

    for (let i = 0; i < this.length; ++i) {
      this.ctx.save();
      this.ctx.translate(
      this.sprites[i].position.initX + this.sprites[i].rotation * Confetti.CONST.ROTATION_RATE * progress,
      this.sprites[i].position.initY + progress * (this.height + this.yRange));

      this.ctx.rotate(this.sprites[i].rotation);
      this.ctx.drawImage(
      this.sprites[i],
      -Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)) / 2,
      -Confetti.CONST.SPRITE_HEIGHT / 2,
      Confetti.CONST.SPRITE_WIDTH * Math.abs(Math.sin(progress * Math.PI * 2 * this.sprites[i].speed)),
      Confetti.CONST.SPRITE_HEIGHT);

      this.ctx.restore();
    }

    requestAnimationFrame(this.render);
  }}

function makeConfetti() {
  
    (() => {
      const DURATION = 2900, // time to fall (8000)
      LENGTH = 70; // density of confetti (120)

      new Confetti({
        width: window.innerWidth,
        height: window.innerHeight,
        length: LENGTH,
        duration: DURATION });


      setTimeout(() => {
        new Confetti({
          width: window.innerWidth,
          height: window.innerHeight,
          length: LENGTH,
          duration: DURATION });

      }, DURATION / 2);
    })(); 
}
        /* end CONFETTI */











function doFinalAnim() {
    if (!this.blocked) {
      this.blocked = true;           
      $('.person').eq(0).addClass('animateNoFinal').one(animationEndEvent, function() {
        //$(this).remove();
        self.blocked = false;
      });
    }      
};

function resetFinalAnim() {
  $('.person').eq(0).removeClass('animateNoFinal');
};



function resetQuizTitle() {
  var quiz_title = document.getElementById("quiz-title-2");
  quiz_title.classList.add("fadeout");
};





var App = {
  
  yesButton: $('.button.yes .trigger'),
  skipButton: $('.button.no .trigger'),
  restartButton: $('.restart'), // new (tom)
  // submitButton: $('.submit'), // new (tom)
  blocked: false,
  like: function(liked, current_q){
    var animate = liked ? 'animateYes' : 'animateNo';
    var self = this;
    
    if (liked == false) {
      Person.add(current_q);
      
      if (question_list.length > 1) { // so can't skip when there's only one Q left
        setTimeout(selectSkip, 1200);
      }
    } else {
      if (question_list.length > 2) { // so can't skip when there's only one Q left
        setTimeout(selectSkip, 1200);
      }
    }
    
    if (!this.blocked) {
      this.blocked = true;           
      $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
        $(this).remove();
        self.blocked = false;
      });
    } 
  },
  
  likeFinal: function(liked){
    var self = this;
    doFinalAnim();
    setTimeout(resetFinalAnim, 1350); //resets just after animation ends
  },
  
  skip: function(current_q){
    var animate = 'animateSkip';
    var self = this;
    Person.add(current_q);
    if (!this.blocked) {
      this.blocked = true;           
      $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
        $(this).remove();
        self.blocked = false;
      });
    } 
  } 
};





function selectSkip() {
  App.skipButton.addClass('activeSkipButton');
};

function resetSkip() {
  App.skipButton.removeClass('activeSkipButton');
};

function selectRadio() {
  // clicking radio button changes class (& undos all others) to make it active
  $('.childA').click(function(){
      $('.childA').addClass('activeA').siblings().removeClass('activeB activeC activeD');       
      App.yesButton.addClass('activeConfirmButton');
  });
  $('.childB').click(function(){
      $('.childB').addClass('activeB').siblings().removeClass('activeA activeC activeD');     
      App.yesButton.addClass('activeConfirmButton');  
  });
  $('.childC').click(function(){
      $('.childC').addClass('activeC').siblings().removeClass('activeA activeB activeD');   
      App.yesButton.addClass('activeConfirmButton');    
  });
  $('.childD').click(function(){
      $('.childD').addClass('activeD').siblings().removeClass('activeA activeB activeC');   
      App.yesButton.addClass('activeConfirmButton');    
  });
};

function resetRadio() {
  // reset all radio buttons 
  $('.childA').siblings().removeClass('activeA activeB activeC activeD');
  $('.childB').siblings().removeClass('activeA activeB activeC activeD');
  $('.childC').siblings().removeClass('activeA activeB activeC activeD');
  $('.childD').siblings().removeClass('activeA activeB activeC activeD');
  // reset confirm button
  App.yesButton.removeClass('activeConfirmButton');
};



// find whether quiz_complete exists (i.e. if page has been accessed before)
if (!sessionStorage.getItem('quiz_complete')) {
  sessionStorage.getItem('quiz_complete', 'false'); // no booleans allowed (needs to be a string)
};
/*
if (!sessionStorage.getItem('stored_question_list')) {
  sessionStorage.getItem('stored_question_list', 'none'); // no booleans allowed (needs to be a string)
}; */

var quiz_complete = sessionStorage.getItem('quiz_complete');
// var stored_question_list = sessionStorage.getItem('stored_question_list');

var no_of_questions = Person.people.length;
var element = document.getElementById("control");
var element2 = document.getElementById("quiz-bg");

var question_list = [];

if (quiz_complete == 'true') {
  element.classList.add("fadeout");
  element2.classList.add("fadein");
} else {
    var i = 0;
    for (i = 0; i < no_of_questions; i++) {
        Person.add(i);
        question_list.push(i);
       };
  // above code is a general version of:
  /*
  Person.add(0);
  Person.add(1);
  Person.add(2);
  Person.add(3);
  Person.add(4); */

};


App.yesButton.click(function() {
  
  resetSkip();
  //setTimeout(selectSkip, 900);
  
  
  if (App.yesButton.hasClass('activeConfirmButton')) { // so can't click when nothing is selected
    resetQuizTitle();
    
    var user_answer = 'N';  

    if ($(".activeA")[0]){ // If answer A is selected
      user_answer = 'A';
    } else if  ($(".activeB")[0]){
      user_answer = 'B';  
    } else if  ($(".activeC")[0]){
      user_answer = 'C';  
    } else if  ($(".activeD")[0]){
      user_answer = 'D';
    };

    var current_q = question_list[0];

    // compare confirmed user answer to actual question answer
    if (user_answer == Person.people[current_q].answer || Person.people[current_q].answer == 'All') {

      App.like(true, 0);
      question_list.shift();

      resetRadio();
      /*
      if (storageAvailable('sessionStorage')) { // Uses above script, "if there is storage available, then:"
        sessionStorage.setItem('stored_question_list', JSON.stringify(question_list));
      } */

      if (question_list.length == 1) {
        // need this so final question is selectable (for some reason)
        selectRadio();
      }

      if (question_list.length == 0) { // if all questions complete


        setTimeout(makeConfetti, 300); // delay 300ms, then make confetti
        question_list.push(9); // so can't repeatedly press button for more confetti
        question_list.push(9);
        question_list.push(9);
        if (storageAvailable('sessionStorage')) { // Uses above script, "if there is storage available, then:"
          sessionStorage.setItem('quiz_complete', 'true');
        }

        element.classList.add("fadeout");
        element2.classList.add("fadein");
      }
    } else { // answer is wrong, put question to back
      resetRadio();
      // current_q = question_list[0];
      var current_q = question_list[0];
      
      if (question_list.length > 1) { // so can't skip when there's only one Q left
        question_list.push(question_list.shift()); //put start at end
        App.like(false, current_q);
      } else {
        App.likeFinal(true, current_q);
             
      }
    }
  } else { // so clicking 'confirm' with nothing selected doesn't turn on skip button
    if (question_list.length > 1) {
      selectSkip();
    }
  }
});

App.skipButton.click(function() {
  
  
  if (App.skipButton.hasClass('activeSkipButton')) { // so can't click skip isn't possible
    resetQuizTitle();
    resetRadio();
    resetSkip();
    // current_q = question_list[0];
    var current_q = question_list[0];
    if (question_list.length > 1) { // so can't skip when there's only one Q left
      setTimeout(selectSkip, 1200);

      question_list.push(question_list.shift()); //put start at end
      App.skip(current_q);
    }
  }
  
});

App.restartButton.click(function() {
  if (storageAvailable('sessionStorage')) { // Uses above script, "if there is storage available, then:"
    sessionStorage.setItem('quiz_complete', 'false');
  }
  location.reload(); // refresh page
});

/*
$(document).ready(function(){
}); */


$(document).ready(function() {
  Person.people.forEach(function(person){
    new Image().src = person.img; 
  });
  //selectRadio();
  setTimeout(selectSkip, 0);
});
