var xmlhttp = new XMLHttpRequest();
var storage = "text.txt";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		textdisplay(myArr);
	}
};
xmlhttp.open("GET", storage, true);
xmlhttp.send();

// 		textdisplay([{
// 	"general" : { 
// 		"title" : "Title: ",
// 		"focus" : "Focus: ",
// 		"medium" : "Medium: ",
// 		"inspiration" : "Inspiration: ",
// 		"notes" : "Notes from the Artist: "
// 		},
// 	"flower" : {
// 		"title" : "Bouquet of Joy",
// 		"focus" : "the details on flowers",
// 		"medium" : "watercolour",
// 		"notes" : "One of my favourite things to draw are flowers because every fold creates so many dynamic shades of red in a rose."
// 		}, 
// 	"pinball" : {
// 		"title" : "Pinball Party",
// 		"medium" : "clay, pencil crayon, construction paper, wood, paint",
// 		"inspiration" : "Charles Bell - an incredible still life painter with extreme care for detail and love for bright colours.",
// 		"notes" : "The background of the board contains facts about Charles Bell. I always tried to add a little more in my art pieces made in school. The addition of wood was unique amonst my classmates; they stuck to using only clay. Believe me when I say I was extremely excited to see this design come to life."
// 		},
// 	"child" : {
// 		"title" : "Childhood",
// 		"medium" : "pencil crayons, oil pastel, charcoal",
// 		"inspiration" : "The impending evil that seems to come with life",
// 		"notes" : "It is peculiar how joyful and openminded children are when they are young but as we grow, we seem to lose that. That is what this drawing aims to capture: the brightness and optimism of children being corrupted. Not meant to be pessimistic but it is how life seems to be. That is why we should all tap into our inner child and see the world from their point of view from time to time."
// 		}
// }
// ]); 

function textdisplay(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i++) {
		out += arr[i].general.title + arr[i].flower.title + '<br>' + 
		arr[i].general.medium + arr[i].flower.medium + '<br>';
	}
	document.getElementById("desc").innerHTML = out;
}
	// document.getElementById("desc").innerHTML = 
	// 	myArr.general.title + "<br>" +
	// 	myArr.flower.title+ "<br>"; 

// var xmlhttp = new XMLHttpRequest();
// // var url = "text.txt";

// xmlhttp.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		var myArr = JSON.parse(this.responseText);
// 		textdisplay2(myArr);
// 	}
// };
// 		textdisplay2([{
// 	"general" : { 
// 		"title" : "Title: ",
// 		"focus" : "Focus: ",
// 		"medium" : "Medium: ",
// 		"inspiration" : "Inspiration: ",
// 		"notes" : "Notes from the Author: "
// 		},
// 	"flower" : {
// 		"title" : "Bouquet of Joy",
// 		"focus" : "the details on flowers",
// 		"medium" : "watercolour",
// 		"notes" : "One of my favourite things to draw are flowers because every fold creates so many dynamic shades of red in a rose."
// 		}, 
// 	"pinball" : {
// 		"title" : "Pinball Party",
// 		"medium" : "clay, pencil crayon, construction paper, wood, paint",
// 		"inspiration" : "Charles Bell - an incredible still life painter with extreme care for detail and love for bright colours.",
// 		"notes" : "The background of the board contains facts about Charles Bell. I always tried to add a little more in my art pieces made in school. The addition of wood was unique amonst my classmates; they stuck to using only clay. Believe me when I say I was extremely excited to see this design come to life."
// 		},
// 	"child" : {
// 		"title" : "Childhood",
// 		"medium" : "pencil crayons, oil pastel, charcoal",
// 		"inspiration" : "The impending evil that seems to come with life",
// 		"notes" : "It is peculiar how joyful and openminded children are when they are young but as we grow, we seem to lose that. That is what this drawing aims to capture: the brightness and optimism of children being corrupted. Not meant to be pessimistic but it is how life seems to be. That is why we should all tap into our inner child and see the world from their point of view from time to time."
// 		}
// }
// ]); 


// function textdisplay2(arr) {
// 	var out2 = "";
// 	var i;
// 	for(i = 0; i < arr.length; i++) {
// 		out2 += arr[i].general.title + arr[i].pinball.title + '<br>' + 
// 		arr[i].general.medium + arr[i].pinball.medium + '<br>';
// 	}
// 	document.getElementById("desc2").innerHTML = out2;
// }




// var description = '{
// 	"general" : { 
// 		"title" : "Title: ",
// 		"focus" : "Focus: ",
// 		"medium" : "Medium: ",
// 		"inspiration" : "Inspiration: ",
// 		"notes" : "Notes from the Author: "
// 		},
// 	"flower" : {
// 		"title" : "Bouquet of Joy",
// 		"focus" : "the details on flowers",
// 		"medium" : "watercolour",
// 		"notes" : "One of my favourite things to draw are flowers because every fold creates so many dynamic shades of red in a rose."
// 		}, 
// 	"pinball" : {
// 		"title" : "Pinball Party",
// 		"medium" : "clay, pencil crayon, construction paper, wood, paint",
// 		"inspiration" : "Charles Bell - an incredible still life painter with extreme care for detail and love for bright colours.",
// 		"notes" : "The background of the board contains facts about Charles Bell. I always tried to add a little more in my art pieces made in school. The addition of wood was unique amonst my classmates; they stuck to using only clay. Believe me when I say I was extremely excited to see this design come to life."
// 		},
// 	"child" : {
// 		"title" : "Childhood",
// 		"medium" : "pencil crayons, oil pastel, charcoal",
// 		"inspiration" : "The impending evil that seems to come with life",
// 		"notes" : "It is peculiar how joyful and openminded children are when they are young but as we grow, we seem to lose that. That is what this drawing aims to capture: the brightness and optimism of children being corrupted. Not meant to be pessimistic but it is how life seems to be. That is why we should all tap into our inner child and see the world from their point of view from time to time."
// 		}
// }'


// 		textdisplay([
// {
// 	"title" : "Flowers",
// 	"medium" : "Watercolour"
// }, 
// {
// 	"title" : "Pinball", 
// 	"medium" : "Wood, clay, paint, construction paper"
// }, 
// {
// 	"title" : "Childhood", 
// 	"medium" : "Oil Pastel"
// }
// ]); 

// 		function textdisplay(arr) {
// 	var out = "";
// 	var i;
// 	for(i = 0; i < arr.length; i++) {
// 		out += arr[i].title + '<br>' + 
// 		arr[i].medium + '<br>';
// 	}
// 	document.getElementById("desc").innerHTML = out;}
// 	// document.getElementById("desc").innerHTML = 
// 	// 	myArr.general.title + "<br>" +
// 	// 	myArr.flower.title+ "<br>"; 