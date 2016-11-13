function button1() {
  document.getElementById("incomplete").style.display='block';}
function button2() {
  document.getElementById("incomplete").style.display='none';}
  
carousel = (function(){
  var box = document.querySelector('.carouselbox1');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();

function button1() {
  document.getElementById("incomplete").style.display='block';}
function button2() {
  document.getElementById("incomplete").style.display='none';}

carousel = (function(){
  var box = document.querySelector('.carouselbox2');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();

carousel = (function(){
  var box = document.querySelector('.carouselbox3');
  var next = box.querySelector('.next');
  var prev = box.querySelector('.prev');
  var items = box.querySelectorAll('.content li');
  var counter = 0;
  var amount = items.length;
  var current = items[0];
  box.classList.add('active');
  function navigate(direction) {
    current.classList.remove('current');
    counter = counter + direction;
    if (direction === -1 && 
        counter < 0) { 
      counter = amount - 1; 
    }
    if (direction === 1 && 
        !items[counter]) { 
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }
  next.addEventListener('click', function(ev) {
    navigate(1);
  });
  prev.addEventListener('click', function(ev) {
    navigate(-1);
  });
  navigate(0);
})();
// JSON 
// var xobj = new XMLHttpRequest();
// var desc = "Javascript/text.txt";
// // xobj.overrideMimeType("application/json");
// // xobj.open('GET', 'Javascript/master.json', true);
// xobj.onreadystatechange = function () {
//   if (xobj.readyState == 4 && xobj.status == "200") {
//     // .open will NOT return a value but simply returns undefined in async mode so use a callback
//     var gr11 = JSON.parse(xobj.responseText);
//     myfunction(gr11);
//   }
// }
//   xobj.send(null);
//   xobj.open('GET', desc, true);  

// function myfunction(text) {
//   var out = "";
//   var i;
//   for (i = 0; i < text.length; i++) {
//     out += '<a href="' + text[i].url + '">' + text[i]display + '</a><br>';
//   }

// var obj = JSON.parse(desc);

// document.getElementById("title1").innerHTML = 
// obj.general.title + "<br>" + 
// obj.flower.title + "<br>"; 

// document.getElementById("medium1").innerHTML = 
// obj.general.medium + "<br>" +
// obj.flower.medium + "<br>"; 

// document.getElementById("focus1").innerHTML = 
// obj.general.focus + "<br>" +
// obj.flower.focus + "<br>"; 

// document.getElementById("notes1").innerHTML = 
// obj.general.notes + "<br>" + 
// obj.flower.notes + "<br>";

// document.getElementById("title2").innerHTML = 
// obj.general.title + "<br>" + 
// obj.pinball.title + "<br>";

// document.getElementById("medium2").innerHTML = 
// obj.general.medium + "<br>" +
// obj.pinball.medium + "<br>";

// document.getElementById("inspiration2").innerHTML = 
// obj.general.inspiration + "<br>" +
// obj.pinball.inspiration + "<br>";

// document.getElementById("notes2").innerHTML =
// obj.general.notes + "<br>" +
// obj.pinball.notes + "<br>";

// document.getElementById("title3").innerHTML = 
// obj.general.title + "<br>" +
// obj.child.title + "<br>";

// document.getElementById("medium3").innerHTML = 
// obj.general.medium + "<br>" +
// obj.child.medium + "<br>";

// document.getElementById("inspiration3").innerHTML = 
// obj.general.inspiration + "<br>" +
// obj.child.inspiration + "<br>";

// document.getElementById("notes3").innerHTML = 
// obj.general.notes + "<br>" +
// obj.child.notes + "<br>";
// }