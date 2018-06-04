var xmlhttp = new XMLHttpRequest();
// var url = "text.txt";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		textdisplay(myArr);
	}
};

textdisplay([{
	"general" : { 
		"title" : "Title: ",
		"focus" : "Focus: ",
		"medium" : "Medium: ",
		"inspiration" : "Inspiration: ",
		"notes" : "Notes from the Author: "
	},
	"flower" : {
		"title" : "Bouquet of Joy",
		"focus" : "the details on flowers",
		"medium" : "watercolour",
		"notes" : "One of my favourite things to draw are flowers because every fold creates so many dynamic shades of red in a rose."
	}, 
	"pinball" : {
		"title" : "Pinball Party",
		"medium" : "clay, pencil crayon, construction paper, wood, paint",
		"inspiration" : "Charles Bell - an incredible still life painter with extreme care for detail and love for bright colours.",
		"notes" : "The background of the board contains facts about Charles Bell. I always tried to add a little more in my art pieces made in school. The addition of wood was unique amonst my classmates; they stuck to using only clay. Believe me when I say I was extremely excited to see this design come to life."
	},
	"child" : {
		"title" : "Childhood",
		"medium" : "pencil crayons, oil pastel, charcoal",
		"inspiration" : "The impending evil that seems to come with life",
		"notes" : "It is peculiar how joyful and openminded children are when they are young but as we grow, we seem to lose that. That is what this drawing aims to capture: the brightness and optimism of children being corrupted. Not meant to be pessimistic but it is how life seems to be. That is why we should all tap into our inner child and see the world from their point of view from time to time."
	},
	"phoenix" : {
		"title" : "Phoenix",
		"medium" : "oil pastel",
		"inspiration" : "Replication of an online image",
		"notes" : "This was made for my grade 9 art class. We went on a trip to the zoo to inspire us about the intricacies and detailing of various animals: the scales on a fish, the nice curvature of a tucan's beak and of course the beautiful feathers on a bird. I think it's obvious what I was inspired by. This may not be a real animal but nonetheless it's probably one of my favourites."
	}, 
	"fairyTale" : {
		"title" : "A Home of Magic",
		"medium" : "pencil crayon",
		"inspiration" : "Entry for an international art contest",
		"notes" : "I started getting into reading about fantasy books about this time and I really liked dragons. No message here except I wanted to draw something pretty and colourful. "
	}
}
]); 

function textdisplay(arr) {
	var outflower = "";
	var outpinball = "";
	var outchild = "";		
	var i;
	for(i = 0; i < arr.length; i++) {
		displayFlower += 
		arr[i].general.title + arr[i].flower.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].flower.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].flower.focus + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].flower.notes + '<br>';

		displayPinball += 
		arr[i].general.title + arr[i].pinball.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].pinball.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].pinball.inspiration + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].pinball.notes + '<br>';

		displayChild += 
		arr[i].general.title + arr[i].child.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].child.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].child.inspiration + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].child.notes + '<br>';	

		displayPhoenix +=
		arr[i].general.title + arr[i].phoenix.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].phoenix.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].phoenix.inspiration + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].phoenix.notes + '<br>';

		displayFairyTale += 
		arr[i].general.title + arr[i].fairyTale.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].fairyTale.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].fairyTale.inspiration + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].fairyTale.notes + '<br>';
		}
	document.getElementById("desc-flower").innerHTML = displayFlower;
	document.getElementById("desc-pinball").innerHTML = displayPinball;	
	document.getElementById("desc-child").innerHTML = displayChild;
	document.getElementById("desc-phoenix").innerHTML = displayPhoenix;
	document.getElementById("desc-fairyTale").innerHTML = displayFairyTale;
}

