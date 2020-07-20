$('a[href*=\\#]').click(function(){ // PA: changed 'a[href*=#]' to 'a[href*=\\#]'
  return false;
});
  

var animationEndEvent = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var Person = {
  wrap: $('#people'),
  people: [
    {
      name: 'A',
      age: 1,
      img: "Pingu_ad.jpg"
    },
    {
      name: 'B',
      age: 2,
      img: "fake_bs_ad.png"
    },
    {
      name: 'C',
      age: 3,
      img: "Pingu_ad.jpg"
    },
    {
      name: 'D',
      age: 4,
      img: "fake_bs_ad.png"
    },
    {
      name: 'E',
      age: 5,
      img: "Pingu_ad.jpg"
    }
  ],   
  
  // add i_th person: 
  
  add: function(i){
    var person_i = this.people[i];
    this.wrap.append(
      "<div class='person'><h3 class='quiz-title'><span class='white-bubble-title-quiz'>Quiz • " + person_i.age + " / 5</span></h3><div style='padding: 25px; padding-top: 20px; text-align: left; height: 290px;'>Who discovered <b><i><u>Newton's</u></i></b> Laws of Motion?</div></div></div>");
  }
  
  // add random person:
  
  /* add: function(){
    var random = this.people[Math.floor(Math.random() * this.people.length)];
    this.wrap.append(
      "<div class='person'><span><strong>" + random.name + "</strong>, " + random.age + "</span><img alt='" + random.name + "' src='" + random.img + "' /></div>");
  } */
};



var App = {
  yesButton: $('.button.yes .trigger'),
  noButton: $('.button.no .trigger'),
  blocked: false,
  like: function(liked, current_q){
    var animate = liked ? 'animateYes' : 'animateNo';
    var self = this;
    
    if (liked == false) {
      Person.add(current_q);
    } 
    
    if (!this.blocked) {
      this.blocked = true;           
      $('.person').eq(0).addClass(animate).one(animationEndEvent, function() {
        $(this).remove();
        self.blocked = false;
      });
    }
  }
};

Person.add(0);
Person.add(1);
Person.add(2);
Person.add(3);
Person.add(4); 

var question_list = [0,1,2,3,4];
  
App.yesButton.on('mousedown', function() {
  App.like(true, 0);
  question_list.shift();
  if (question_list.length == 1) {
    // celebrate
  }
});

App.noButton.on('mousedown', function() {
  current_q = question_list[0];
  if (question_list.length > 1) { // so can't skip when there's only one Q left
    question_list.push(question_list.shift()); //put start at end
    App.like(false, current_q);
  }
});


$(document).ready(function() {
  Person.people.forEach(function(person){
    new Image().src = person.img; 
  });
  
  /* //attempt at doing the beneath:
  var i = 0;
  var i_max = People.person.length;
  for (i = 0; i < i_max; i++) {
    Person.add(i);
   } */
  
  /*
  Person.add(question_list[0]);
  Person.add(1);
  Person.add(2);
  Person.add(3);
  Person.add(4); */
});
