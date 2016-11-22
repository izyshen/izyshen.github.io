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
		}
}
]); 

function textdisplay(arr) {
	var outflower = "";
	var outpinball = "";
	var outchild = "";		
	var i;
	for(i = 0; i < arr.length; i++) {
		outflower += 
		arr[i].general.title + arr[i].flower.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].flower.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].flower.focus + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].flower.notes + '<br>';

		outpinball += 
		arr[i].general.title + arr[i].pinball.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].pinball.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].pinball.inspiration + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].pinball.notes + '<br>';

		outchild += 
		arr[i].general.title + arr[i].child.title + '<br>' + 
		'<br>' + 
		arr[i].general.medium + arr[i].child.medium + '<br>' + 
		'<br>' + 		
		arr[i].general.focus + arr[i].child.inspiration + '<br>' + 
		'<br>' + 		
		arr[i].general.notes + arr[i].child.notes + '<br>';		
		}
	document.getElementById("desc-flower").innerHTML = outflower;
	document.getElementById("desc-pinball").innerHTML = outpinball;	
	document.getElementById("desc-child").innerHTML = outchild;
}

