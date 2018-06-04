var textlist = ["caption1", "caption2", "caption3", "caption4", "caption5", "caption6"]
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
/*							'<div id="lightbox">' +
				'<p id="nature-description">caption</p>' +
				'<div id="content">' + //insert clicked link's href into img src
				'<img src="' + image_href +'" />' +
				'</div>' +	
				'</div>';*/
			
			'<div id="lightbox">' +
				'<p>'+ '</p>' +
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


//var items = ["fish", "dog", "cat", "tom"];
//var text = "";
//var i;
//for(i = 0; i < items.length; i++) {
//    text += items[i] + "<br>";
//}
//document.getElementById("test").innerHTML = text;

