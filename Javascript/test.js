// var xmlhttp = new XMLHttpRequest();
// // var url = "text.txt";

// xmlhttp.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		var myArr = JSON.parse(this.responseText);
// 		textdisplay(myArr);
// 	}
// };
// 	captiondisplay([
// 	{
// 		"nature" : "I feel most at peace when surrounded by nature",
// 		"sing" : "A tell-tale sign of my happiness is that I'll be singing!"
// 	}
// 	]); 

// function captiondisplay(arr) {
// 	var = "caption_nature";
// 	var = "caption_sing";	
// 	var i;
// 	for(i = 0; i < arr.length; i++) {
// 		caption_nature += arr[i].nature;
// 		caption_sing += arr[i].sing;
// 	}
// 	document.getElementById("cap_nat").innerHTML = caption_nature;
// 	document.getElementById("cap_sing").innerHTML = caption_sing;
// }	

// var captiondisplay = 
// 		{"nature" : "I feel most at peace when surrounded by nature",
// 		"sing" : "A tell-tale sign of my happiness is that I'll be singing!"}
// var obj = JSON.parse(text);
// document.getElementById("cap_nat").innerHTML = obj.nature;


jQuery(document).ready(function($) {
	$('.lightbox_trigger').click(function(e) {
		e.preventDefault();
		var image_href = $(this).attr("href");
		if ($('#lightbox').length > 0) { // #lightbox exists
			//insert img tag with clicked link's href as src value
			$('#content').html('<img src="'+ image_href + '" />');
		   	
			//show lightbox window - you can use a transition here if you want, i.e. .show('fast')
			$('#lightbox').show();
		}
		else { //#lightbox does not exist 

			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' + 
				'<p id="nature-description">I feel most at peace when surrounded by nature</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';

			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
	});
		$('#lightbox').live('click', function() {
			$('#lightbox').hide();
	});
});

