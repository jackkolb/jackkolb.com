// utility functions


function removeAll() {
	removeProjects();
	removeProjectPage();
	removeAbout();
	return;
}

function showBar(name) {
	var color = "green";
	if (name == "about-button") {
		color = "#4477ff";
	}
	if (name == "projects-button") {
		color = "#f4c15a";
	}
	document.getElementById(name).setAttribute("style", "margin: 10px; border-bottom: 3px solid " + color);
	return;
}

function hideBar(name) {
	document.getElementById(name).setAttribute("style", "margin: 10px");
	return;
}

function switchColorMode() {
	if (!(document.getElementById("about-button").classList.contains("dark"))) {
		document.body.classList.add('dark-body');

		document.getElementById("name-title").classList.add('dark');
		document.getElementById("welcome-title").classList.add('dark');
		document.getElementById("github-icon").setAttribute("fill", "#c9510c");
		document.getElementById("linkedin-icon").setAttribute("fill", "#007bb6");
		document.getElementById("facebook-icon").setAttribute("fill", "#3b5998");
		
		document.getElementById("about-button").classList.add('dark');
		document.getElementById("projects-button").classList.add('dark');
		document.getElementById("resume-button").classList.add('dark');
		
	}
	else {
		document.body.classList.remove('dark-body');

		document.getElementById("name-title").classList.remove('dark');
		document.getElementById("welcome-title").classList.remove('dark');
		document.getElementById("github-icon").setAttribute("fill", "darkslategrey");
		document.getElementById("linkedin-icon").setAttribute("fill", "darkslategrey");
		document.getElementById("facebook-icon").setAttribute("fill", "darkslategrey");

		document.getElementById("about-button").classList.remove('dark');
		document.getElementById("projects-button").classList.remove('dark');
		document.getElementById("resume-button").classList.remove('dark');
	}
}