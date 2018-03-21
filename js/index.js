// functions for creating the home page

function loadHome() {
  var home = generateHome();
  document.body.insertBefore(home, document.getElementById("title"));

  handleAbout();
}


function generateHome() {
  var home = document.createElement("div");

  var name = document.createElement("div");
    name.className = "name-title";
    name.innerHTML = "Jack Kolb";

  var welcome = document.createElement("div");
    welcome.className = "welcome-title";
    welcome.innerHTML = "Welcome to this portfolio of my works<br>";

  var icons = document.createElement("div");
    icons.className = "icon-row";

  var github_icon = document.createElement("a");
    github_icon.setAttribute("href", "https://github.com/jackkolb");
    github_icon.setAttribute("target", "_blank");
    github_icon.setAttribute("style", "text-decoration: none; margin: 10px");
    github_icon.innerHTML = "<img src='img/github_white.png' height='100%'>";

  var linkedin_icon = document.createElement("a");
    linkedin_icon.setAttribute("href", "https://www.linkedin.com/in/jack-kolb-786134b8/");
    linkedin_icon.setAttribute("target", "_blank");
    linkedin_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    linkedin_icon.innerHTML = "<img src='img/linkedin_white.png' height='100%'>";

  var facebook_icon = document.createElement("a");
    facebook_icon.setAttribute("href", "https://facebook.com/jackhkolb");
    facebook_icon.setAttribute("target", "_blank");
    facebook_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    facebook_icon.innerHTML = "<img src='img/facebook_white.png' height='100%'>";

  icons.append(github_icon);
  icons.append(linkedin_icon);
  icons.append(facebook_icon);

  var buttons = document.createElement("div");
    buttons.className = "buttons";

  var about_div = document.createElement("div");
    about_div.className = "tab-title";

  var about_button = document.createElement("button");
    about_button.setAttribute("id", "about-button");
    about_button.setAttribute("onclick", "handleAbout()");
    about_button.setAttribute("style", "margin: 10px");
    about_button.innerHTML = "<b>About Me</b>";

  about_div.append(about_button);

  var projects_div = document.createElement("div");
    projects_div.className = "tab-title";

  var projects_button = document.createElement("button");
    projects_button.setAttribute("id", "projects-button");
    projects_button.setAttribute("onclick", "handleProjects()");
    projects_button.setAttribute("style", "margin: 10px");
    projects_button.innerHTML = "<b>Projects</b>";

  projects_div.append(projects_button);

  var resume_div = document.createElement("div");
    resume_div.className = "tab-title";

  var resume_button = document.createElement("button");
    resume_button.setAttribute("id", "resume-button");
    resume_button.setAttribute("onclick", "handleResume()");
    resume_button.setAttribute("style", "margin: 10px");
    resume_button.innerHTML = "<b>Resume</b>";

  resume_div.append(resume_button);

  buttons.append(about_div);
  buttons.append(projects_div);
  buttons.append(resume_div);

  var flag = document.createElement("div");
    flag.setAttribute("id", "flag")

  var js_projects = document.createElement("div");
    js_projects.setAttribute("src", "js/projects.js");
  var js_about = document.createElement("div");
    js_about.setAttribute("src", "js/about.js");
  var js_resume = document.createElement("div");
    js_resume.setAttribute("src", "js/resume.js");
  var js_orgs = document.createElement("div");
    js_orgs.setAttribute("src", "js/orgs.js");
  var js_utility = document.createElement("div");
    js_utility.setAttribute("src", "js/utility.js");


  home.append(name);
  home.append(welcome);
  home.append("<br>");
  home.append(icons);
  home.append("<br>");
  home.append(buttons);

  home.append(flag);

  home.append(js_projects);
  home.append(js_about);
  home.append(js_resume);
  home.append(js_orgs);
  home.append(js_utility);

  return home;
}
