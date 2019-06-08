// utility functions


function removeAll() {
	removeProjects();
	removeProjectPage();
	removeAbout();
	return;
}

function showBar(name) {
	document.getElementById(name).setAttribute("style", "margin: 10px; border-bottom: 1px solid white");
	return;
}

function hideBar(name) {
	document.getElementById(name).setAttribute("style", "margin: 10px");
	return;
}