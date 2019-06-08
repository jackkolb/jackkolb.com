// javascript functions for projects tab


function handleProjects() {
	removeAll();
	loadProjects();
	showBar("projects-button");
	projects_active = true;
	return;
}


function loadProjects() {
	fetch('json/projects.json')
		.then(response => response.text())
		.then(function(text) {
			var mydata = JSON.parse(text);
			var projects = document.createElement("div");
			projects.append("<br>");
			projects.id = "projects";

			mydata["projects"].forEach(function(entry) {
				var newProject = generateProject(entry.name, entry.hackathon, entry.github, entry.tools, entry.short);
  				projects.append(newProject);
			});
			document.body.insertBefore(projects, document.getElementById("content"));
		});
	return;
}


function removeProjects() {
	if (projects_active) {
		var element = document.getElementById("projects");
		element.parentNode.removeChild(element);
		hideBar("projects-button");
		projects_active = false;
	}
	return;
}


function generateProject(project_name, project_hackathon, project_github, project_tools, project_description) {
	var newProject = document.createElement("div");

	var newProjectEntry = document.createElement("div");
	newProjectEntry.className = "project-entry";

	var newProjectEntryTitle = document.createElement("div");
	newProjectEntryTitle.className = "project-entry-title";
	newProjectEntryTitle.innerHTML = "<b>" + project_name + "</b>";

	var githubLink = document.createElement("a");
	githubLink.setAttribute("href", project_github);
	githubLink.setAttribute("target", "_blank");
	githubLink.innerHTML = "<span style='float:right'><img src='img/github_white.png' height='25'></span>";

	var hackathonTag = document.createElement("div");
	hackathonTag.className = "project-entry-title";
	hackathonTag.setAttribute("style", "color:#CC0066");
	hackathonTag.innerHTML = "<span><b>[Hackathon]</b></span>";

	var newProjectEntryTools = document.createElement("div");
	newProjectEntryTools.className = "project-entry-tools";
	var tools_listing = "";
	if (project_hackathon == "true") {
		tools_listing += "<span style='color:#ff33cc'>[Hackathon] </span>"
	}
	tools_listing += "<i>" + project_tools + "</i>";
	newProjectEntryTools.innerHTML = tools_listing;

	var preSpace = document.createElement("div");
	preSpace.className = "big-space";

	var newProjectEntryDescription = document.createElement("div");
	newProjectEntryDescription.className = "project-entry-desc";
	newProjectEntryDescription.innerHTML = project_description;

	var moreLink = document.createElement("button");
	moreLink.setAttribute("onclick", "learnMore(" + '"' + project_name + '"' + ")");
	moreLink.setAttribute("class", "learn-more");
	moreLink.innerHTML = "<i>(learn more)</i>";

	var postSpace = document.createElement("div");
	postSpace.className = "big-space";

	var breakSpace = document.createElement("div");
	breakSpace.className = "break-space";

	newProject.append(newProjectEntry);
		newProjectEntry.append(newProjectEntryTitle);
		if (project_github) {
			newProjectEntryTitle.append(githubLink);
		}
		newProjectEntry.append(newProjectEntryTools);
		newProjectEntry.append(preSpace);
		newProjectEntry.append(newProjectEntryDescription);
			newProjectEntryDescription.append(moreLink);
		newProjectEntry.append(postSpace);
	newProject.append(breakSpace);

	return newProject;
}
