// functions to generate a project page


function learnMore(project_name) {
  removeProjects();

  fetch('json/projects.json')
    .then(response => response.text())
   .then(function(text) {
      var mydata = JSON.parse(text);
      mydata["projects"].forEach(function(entry) {
        if (entry.name == project_name) {
          var project = generateProjectPage(project_title=entry.name, project_github=entry.github, project_tools=entry.tools, project_time=entry.time, project_status=entry.status, project_short=entry.short, project_long=entry.long, project_images=entry.images);
          document.body.insertBefore(project, document.getElementById("content"));
          projectpage_active = true;
          projects_active = false;
        };
      });
    });
  return;
}


function removeProjectPage() {
  if (projectpage_active) {
    var element = document.getElementById("project-page");
    element.parentNode.removeChild(element);
    projectpage_active = false;
  }
  return;
}


function generateProjectPage(project_title="", project_github="none", project_tools="", project_time="", project_status="", project_short="", project_long="", project_images=[]) {

  var project = document.createElement("div");
    project.id = "project-page";
  var title = document.createElement("div");
    title.className = "project-name-title";
    title.innerHTML = "<br>" + project_title;

  var return_button_div = document.createElement("div");
    return_button_div.className = "return-button-div";
    var return_button = document.createElement("button")
    return_button.setAttribute("class", "return-button");
    return_button.setAttribute("onClick", "handleProjects()");
    return_button.innerHTML = "(return)";

  var project_block = document.createElement("div");
    project_block.className = "project-block";

  var intro_block = document.createElement("div");
    intro_block.className = "project-intro-block";

  var intro_name = document.createElement("div");
    intro_name.className = "project-intro-title";
    if (project_title) {
      intro_name.innerHTML = "Name: ";
      intro_name.innerHTML += project_title;
    }

  var intro_link = document.createElement("a");
    intro_link.className = "project-intro-link";
    intro_link.setAttribute("href", project_github);
    intro_link.setAttribute("target", "_blank");
    intro_link.setAttribute("style", "text-decoration: none");
    if (project_github != "none") {
      intro_link.innerHTML = "Link: ";
      intro_link.innerHTML += project_github;
    }

  var intro_year = document.createElement("div");
    intro_year.className = "project-intro-year";
    if (project_time) {
      intro_year.innerHTML = "Time: ";
      intro_year.innerHTML += project_time;
    }

  var intro_status = document.createElement("div");
    intro_status.className = "project-intro-status";
    if (project_status) {
      intro_status.innerHTML = "Status: ";
      intro_status.innerHTML += project_status;
    }

  var intro_tools = document.createElement("div");
    intro_tools.className = "project-intro-tools";
    if (project_tools) {
      intro_tools.innerHTML = "Tools: ";
      intro_tools.innerHTML += project_tools;
    } 

  var intro_short = document.createElement("div");
    intro_short.className = "project-intro-short";
    if (project_short) {
      intro_short.innerHTML = "Description: ";
      intro_short.innerHTML += project_short;
    }

  var intro_long = document.createElement("div");
    intro_long.className = "project-intro-long";
    intro_long.innerHTML = project_long;


  var images = document.createElement("div");
    images.innerHTML = "<br><br>";
    images.className = "project-images";
    project_images.forEach(function(entry) {
      var image = document.createElement("img");
      image.setAttribute("src", entry);
      image.setAttribute("height", "250px");
      image.setAttribute("width", "auto");
      image.setAttribute("style", "margin: 10px; border: 1px solid white")
      images.append(image);
    });

  project.append(title);
  project.append(return_button_div);
  return_button_div.append(return_button);

  project.append(project_block);
  project_block.append(intro_block);

  intro_block.append(document.createElement("br"));
  intro_block.append(intro_name);
  intro_block.append(intro_year);
  intro_block.append(intro_status);
  intro_block.append(intro_link);
  intro_block.append(intro_tools);
  intro_block.append(intro_short);
  intro_block.append(document.createElement("br"));

  project_block.append(document.createElement("br"));
  project_block.append(intro_long);
  project_block.append(document.createElement("br"));
  project_block.append(images);


  return project;
}