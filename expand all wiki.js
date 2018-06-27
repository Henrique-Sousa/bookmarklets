//wiktionary

a = document.getElementsByClassName("NavToggle");
for (var i = 0; i <= a.length; i++){
	a[i].click();
}

//wikipedia

a = document.getElementsByClassName("collapseButton"); 
for (var i = 0; i <= a.length; i++){ 
	a[i].childNodes[1].click(); 
}

//wikipedia templates

a = document.getElementsByClassName("mw-collapsible-text");
for (var i = 0; i <= a.length; i++){ 
	a[i].click(); 
}
