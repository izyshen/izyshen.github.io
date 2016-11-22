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

// store images in an array
// var xmlhttp = new XMLHttpRequest();
// // var url = "text.txt";

// xmlhttp.onreadystatechange = function() {
//   if (this.readyState == 4 && this.status == 200) {
//     var myArr = JSON.parse(this.responseText);
//     imgdisplay(myArr);
//   }
// };
//     textdisplay([{
//   "flower" : img src="image/IMG_2290.JPG"
// }
// ]); 

// function textdisplay(arr) {
//   var outflower = "";
//   var outpinball = "";
//   var outchild = "";    
//   var i;
//   for(i = 0; i < arr.length; i++) {
//     outflower += 
//     arr[i].general.title + arr[i].flower.title + '<br>' + 
//     '<br>' + 
//     arr[i].general.medium + arr[i].flower.medium + '<br>' + 
//     '<br>' +    
//     arr[i].general.focus + arr[i].flower.focus + '<br>' + 
//     '<br>' +    
//     arr[i].general.notes + arr[i].flower.notes + '<br>';

//     outpinball += 
//     arr[i].general.title + arr[i].pinball.title + '<br>' + 
//     '<br>' + 
//     arr[i].general.medium + arr[i].pinball.medium + '<br>' + 
//     '<br>' +    
//     arr[i].general.focus + arr[i].pinball.inspiration + '<br>' + 
//     '<br>' +    
//     arr[i].general.notes + arr[i].pinball.notes + '<br>';

//     outchild += 
//     arr[i].general.title + arr[i].child.title + '<br>' + 
//     '<br>' + 
//     arr[i].general.medium + arr[i].child.medium + '<br>' + 
//     '<br>' +    
//     arr[i].general.focus + arr[i].child.inspiration + '<br>' + 
//     '<br>' +    
//     arr[i].general.notes + arr[i].child.notes + '<br>';   
//     }
//   document.getElementById("desc-flower").innerHTML = outflower;
//   document.getElementById("desc-pinball").innerHTML = outpinball; 
//   document.getElementById("desc-child").innerHTML = outchild;
// }
