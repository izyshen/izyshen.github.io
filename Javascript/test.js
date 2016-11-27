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
				'<p>title</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
/*			var lightbox = 
			'<div id="lightbox">' +
				'<p id=nature-description>I feel most at peace when surrounded by nature.</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';
			// this produces a lightbox with different images appearing but same text
*/
				
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
	});
		$('#lightbox').live('click', function() {
			$('#lightbox').hide();
	});
});

// $('.lightbox-trigger').featherlightGallery({
// 	filter: "a",
// 	afterContent: function() {
// 		this.$legend = this.$legend || $('<div class="legend"/>').insertAfter (this.$content);
// 		this.$legend.text(this.$currentTarget.attr('title'));
// 	}
// });