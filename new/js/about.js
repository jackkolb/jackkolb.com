// javascript functions for about tab

// handles the 
function handleAbout() {
	removeAll();
	loadAbout();
	showBar("about-button");
	about_active = true;
	return;
}


function loadAbout() {
	var majenta_color = "<span style='color:#ff33cc'>"
	var green_color = "<span style='color:#5cd65c'>"
	var gold_color = "<span style='color:#ffcc66'>"
	var red_color = "<span style='color:#dd0000'>"
	var blue_color = "<span style='color:#4477ff'>"

	var about = document.createElement("div");
		about.id = "about";
		about.className = "about-box"
	
	var school = document.createElement("div");
		school.className = "school-about";
		school.innerHTML = "University of California, Riverside";

	var major = document.createElement("div");
		major.className = "major-about";
		major.innerHTML = "Mechanical Engineering (2020)<br><br>";

	var work_title_1 = document.createElement("div");
		work_title_1.className = "intro-about";
		work_title_1.innerHTML = majenta_color + "Project Lead</span> for " + blue_color + "UCR RoboSub</span><br>";	  			

	var work_title_2 = document.createElement("div");
		work_title_2.className = "intro-about";
		work_title_2.innerHTML = green_color + "Resident Advisor</span> for " + red_color + "UCR Residential Life</span><br>";

	var work_title_3 = document.createElement("div");
		work_title_3.className = "intro-about";
		work_title_3.innerHTML = blue_color + "Projects Coordinator</span> for " + gold_color + "IEEE at UCR</span><br>";

	var org_title = document.createElement("div");
	    org_title.className = "org-title";
	    org_title.innerHTML = "My interests are in " + blue_color + "robotics</span>, " + majenta_color + "software engineering</span>, " + green_color + "AI</span>, and " + red_color + "entrepreneurship</span>. I am actively involved in:<br><br>"

	var orgs = generateOrgs();

	var intro = document.createElement("div");
	    intro.className = "intro-about";
	    intro.innerHTML = "<br><br>When not in class, I can be found coding, RoboSubing, playing piano, attending student org meetings and campus events, sitting in on lectures, and learning new languages... probably coding. Check out the projects section!<br><br>"
    
    var breakpoint = document.createElement("br");

	var courses = document.createElement("div");

	about.append(breakpoint);
    about.append(breakpoint);
    about.append(school);
	about.append(major);
    about.append(breakpoint);
	about.append(work_title_1);
	about.append(work_title_2);
	about.append(work_title_3);
	about.append(breakpoint);
    about.append(org_title);
	about.append(orgs);
	about.append(intro);
	about.append(courses);

	document.body.insertBefore(about, document.getElementById("content"));

	return about;
}


function removeAbout() {
  if (about_active) {
	var element = document.getElementById("about");
	element.parentNode.removeChild(element);
	about_active = false;
	hideBar("about-button");
  }
  return;
}


function generateOrgs() {
	var orgs = document.createElement("div");
	fetch('json/orgs.json')
	.then(response => response.text())
	.then(function(text) {
		var mydata = JSON.parse(text);
		mydata["orgs"].forEach(function(entry) {
			var org = document.createElement("a");
				org.className = "org-about";
				org.setAttribute("href", entry.link);
				org.setAttribute("target", "_blank");
				org.innerHTML = "[" + entry.title + "] - " + "<span style='color:grey; font-size:11pt; vertical-align:middle'>" + entry.name + "</span><br>";
			orgs.append(org);
		});
	});
	return orgs;
}



function generateMECourses() {
	var courses = document.createElement("div");
	fetch('json/me_courses.json')
	.then(response => response.text())
	.then(function(text) {
		var mydata = JSON.parse(text);

		var me_courses_title = document.createElement("div");
		    me_courses_title.className = "me-courses-title";
		    me_courses_title.innerHTML = "<br>Mechanical Engineering Courses:<br>";
		courses.append(me_courses_title);

		mydata["courses"].forEach(function(entry) {
			var course = document.createElement("div");
				course.className = "me-course";
				course.innerHTML = entry.name + "<br>";
			courses.append(course);
		});
	});
	return courses;
}


function generateCSCourses() {
	var courses = document.createElement("div");
	fetch('json/cs_courses.json')
	.then(response => response.text())
	.then(function(text) {
		var mydata = JSON.parse(text);

		var cs_courses_title = document.createElement("div");
		  cs_courses_title.className = "cs-courses-title";
		  cs_courses_title.innerHTML = "<br>Computer Science Courses:<br>";
		courses.append(cs_courses_title);

		mydata["courses"].forEach(function(entry) {
			var course = document.createElement("div");
		  	course.className = "cs-course";
				course.innerHTML = entry.name + "<br>";
			courses.append(course);
		});
	});
	return courses;
}
