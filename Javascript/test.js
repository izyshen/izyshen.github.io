// var descstorage = [
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
// ]; 

textdisplay([
{
	"title" : "Flowers",
	"medium" : "Watercolour"
}, 
{
	"title" : "Pinball", 
	"medium" : "Wood, clay, paint, construction paper"
}, 
{
	"title" : "Childhood", 
	"medium" : "Oil Pastel"
}
]); 

var xmlhttp = new XMLHttpRequest();
var url = "text.txt";

xmlhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		var myArr = JSON.parse(this.responseText);
		textdisplay(descstorage);
	}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

// textdisplay(descstorage);

function textdisplay(arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i++) {
		out += arr[i].title + arr[i].medium;
	}
	document.getElementById("desc").innerHTML = out;
}