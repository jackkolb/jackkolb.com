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
	var about = document.createElement("div");
		about.id = "about";
		about.className = "about-box"
	
	var school = document.createElement("div");
		school.className = "school-about";
		school.innerHTML = "University of California, Riverside";

	var major = document.createElement("div");
		major.className = "major-about";
		major.innerHTML = "Mechanical Engineering (2020)<br><br>";

	var work_title = document.createElement("div");
		work_title.className = "work-about";
		work_title.innerHTML = "Current Position: Mechanical Lead, <span style='color:#4477ff'>UCR Robosub<span><br><br>";	  			

	var org_title = document.createElement("div");
	    org_title.className = "org-title";
	    org_title.innerHTML = "My interests are in <span style='color:#dd0000'>robotics</span>, <span style='color:#ff33cc'>software engineering</span>, <span style='color:#5cd65c'>AI</span>, and <span style='color:#4477ff'>entrepreneurship</span>. I am actively involved in:<br><br>"

	var orgs = generateOrgs();

	var intro = document.createElement("div");
	    intro.className = "intro-about";
	    intro.innerHTML = "<br><br>When not in class, I can be found coding, Robosubing, playing piano, attending student org meetings and campus events, sitting in on CS lectures, and learning new languages... probably coding. Check out the projects section!<br><br>"


	var courses = document.createElement("div");

	var me_courses = generateMECourses();
	//courses.append(me_courses);
	var cs_courses = generateCSCourses();
	//courses.append(cs_courses);

	about.append("<br>");
	about.append(school);
	about.append(major);
	about.append(work_title);
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