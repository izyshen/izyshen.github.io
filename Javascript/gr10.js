	var text = '{"title": "Title: A Home of Magic", "medium": "Medium: pencil crayon", "inspiration": "Inspiration: Entry for an art contest", "notes": "Notes from the artist: I started getting into reading about fantasy books about this time and I really liked dragons. No message here except I wanted to draw something pretty and colourful".}'

			var obj = JSON.parse(text);

			document.getElementById("words").innerHTML = 
			obj.title + "<br>" +
			obj.medium + "<br>" + 
			obj.inspiration + "<br>" +
			obj.notes;