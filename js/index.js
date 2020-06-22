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
    name.id = "name-title";
    name.innerHTML = "Jack Kolb";
    name.setAttribute("onclick", "switchColorMode()");

  var welcome = document.createElement("div");
    welcome.className = "welcome-title";
    welcome.id = "welcome-title";
    welcome.innerHTML = "Welcome to this portfolio of my works<br>";

  var icons = document.createElement("div");
    icons.className = "icon-row";

  var github_icon = document.createElement("a");
    github_icon.setAttribute("href", "https://github.com/jackkolb");
    github_icon.setAttribute("target", "_blank");
    github_icon.setAttribute("style", "text-decoration: none; margin: 10px");
    github_icon.innerHTML = "<svg viewBox='0 0 48 48' width='24' height='24'><path class='st0' d='M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z' id='github-icon' fill='darkslategrey' clip-rule='evenodd' fill-rule='evenodd'/></svg>";

  var linkedin_icon = document.createElement("a");
    linkedin_icon.setAttribute("href", "https://www.linkedin.com/in/jack-kolb-786134b8/");
    linkedin_icon.setAttribute("target", "_blank");
    linkedin_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    linkedin_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path id='linkedin-icon' fill='darkslategrey' d='M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z' /></svg>";

  var facebook_icon = document.createElement("a");
    facebook_icon.setAttribute("href", "https://facebook.com/jackhkolb");
    facebook_icon.setAttribute("target", "_blank");
    facebook_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    facebook_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path id='facebook-icon' fill='darkslategrey' d='M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z'/></svg>"

  icons.append(github_icon);
  icons.append(linkedin_icon);
  icons.append(facebook_icon);
  icons.setAttribute("style", "padding: 15px 10px;");

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

  var breakpoint = document.createElement("br");

  home.append(name);
  home.append(welcome);
  home.append(icons);
  home.append(breakpoint);
  home.append(buttons);

  home.append(flag);

  home.append(breakpoint);

  home.append(js_projects);
  home.append(js_about);
  home.append(js_resume);
  home.append(js_orgs);
  home.append(js_utility);

  return home;
}
