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
    github_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='#ffffff' d='M20.38,8.53C20.54,8.13 21.06,6.54 20.21,4.39C20.21,4.39 18.9,4 15.91,6C14.66,5.67 13.33,5.62 12,5.62C10.68,5.62 9.34,5.67 8.09,6C5.1,3.97 3.79,4.39 3.79,4.39C2.94,6.54 3.46,8.13 3.63,8.53C2.61,9.62 2,11 2,12.72C2,19.16 6.16,20.61 12,20.61C17.79,20.61 22,19.16 22,12.72C22,11 21.39,9.62 20.38,8.53M12,19.38C7.88,19.38 4.53,19.19 4.53,15.19C4.53,14.24 5,13.34 5.8,12.61C7.14,11.38 9.43,12.03 12,12.03C14.59,12.03 16.85,11.38 18.2,12.61C19,13.34 19.5,14.23 19.5,15.19C19.5,19.18 16.13,19.38 12,19.38M8.86,13.12C8.04,13.12 7.36,14.12 7.36,15.34C7.36,16.57 8.04,17.58 8.86,17.58C9.69,17.58 10.36,16.58 10.36,15.34C10.36,14.11 9.69,13.12 8.86,13.12M15.14,13.12C14.31,13.12 13.64,14.11 13.64,15.34C13.64,16.58 14.31,17.58 15.14,17.58C15.96,17.58 16.64,16.58 16.64,15.34C16.64,14.11 16,13.12 15.14,13.12Z' /></svg>"

  var linkedin_icon = document.createElement("a");
    linkedin_icon.setAttribute("href", "https://www.linkedin.com/in/jack-kolb-786134b8/");
    linkedin_icon.setAttribute("target", "_blank");
    linkedin_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    linkedin_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='#ffffff' d='M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z' /></svg>";

  var facebook_icon = document.createElement("a");
    facebook_icon.setAttribute("href", "https://facebook.com/jackhkolb");
    facebook_icon.setAttribute("target", "_blank");
    facebook_icon.setAttribute("style", "text-decoration: none;  margin: 10px");
    facebook_icon.innerHTML = "<svg style='width:24px;height:24px' viewBox='0 0 24 24'><path fill='#ffffff' d='M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z'/></svg>"

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
