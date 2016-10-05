var text = '{"title": "Title: A Home of Magic", 
"medium": "Medium : pencil crayon", 
"inspiration": "Inspiration:insert words here", 
"notes": "Notes from the author:more words here"}'

var obj = JSON.parse(text);

document.getElementById("words").innerHTML = 
obj.title + "<br>" +
obj.medium + "<br>" + 
obj.inspiration + "<br>" +
obj.notes;
