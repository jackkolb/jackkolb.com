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
	githubLink.innerHTML = "<span style='float:right'><svg class='project-github-icon' fill='darkslategrey' viewBox='0 0 48 48' width='24' height='24'><path class='st0' d='M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z' clip-rule='evenodd' fill-rule='evenodd'/></svg></span>";

	var hackathonTag = document.createElement("div");
	hackathonTag.className = "project-entry-title";
	hackathonTag.setAttribute("style", "color:#ff33cc");
	hackathonTag.innerHTML = "<span><b>[Hackathon]</b></span>";

	var newProjectEntryTools = document.createElement("div");
	newProjectEntryTools.className = "project-entry-tools";
	var tools_listing = "";
	if (project_hackathon == "true") {
		tools_listing += "<span style='color:#ff33cc'><b>[Hackathon] </b></span>"
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
