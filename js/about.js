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
	var majenta_color = "<span style='color:#ff33cc'>";
	var green_color = "<span style='color:#4ac44a'>";
	var gold_color = "<span style='color:#f4c15a'>";
	var tech_gold_color = "<span style='color:#b3a369'>";
	var red_color = "<span style='color:#dd0000'>";
	var blue_color = "<span style='color:#4477ff'>";
	var slate_color = "<span style='color:darkslateblue'>";

	var link_ucr = "<a href='https://ucr.edu' target='_blank'>";
	var link_ucr_me = "<a href='https://www.me.ucr.edu' target='_blank'>";

	var link_robosub = "<a href='https://robosub.ucr.edu' target='_blank'>";
	var link_gatech = "<a href='https://gatech.edu' target='_blank'>";
	var link_gatech_robotics = "<a href='https://robotics.gatech.edu' target='_blank'>";
	var link_chernova = "<a href='https://www.cc.gatech.edu/~chernova' target='_blank'>";
	var link_robograds = "<a href='https://robograds.gatech.edu' target='_blank'>"
	var link_rail = "<a href='https://rail.gatech.edu' target='_blank'>"

	var link_reslife = "<a href='https://housing.ucr.edu/residential-life' target='_blank'>";
	var link_ieee = "<a href='https://ieeeucr.org' target='_blank'>";
	var link_asme = "<a href='https://asmeucr.com' target='_blank'>";
	var link_acm = "<a href='https://acmucr.org' target='_blank'>";
	var link_nrhh = "<a href='https://nrhh.ucr.edu/home.html' target='_blank'>";
	var link_honors = "<a href='https://honors.ucr.edu' target='_blank'>";

	var about = document.createElement("div");
		about.id = "about";
		about.className = "about-box"

	var education_intro = document.createElement("div");
		education_intro.className = "intro-about";
	    education_intro.innerHTML = "I am a second-year " + blue_color + link_gatech_robotics + "<b>Robotics</b></a></span> PhD student at " + tech_gold_color + link_gatech + "<b>Georgia Tech</b></a></span>, advised by " + majenta_color + link_chernova + "<b>Sonia Chernova</b></a></span>. ";
		education_intro.innerHTML += "I am part of the " + green_color + link_rail + "<b>RAIL Lab</b></a></span>, where my research uses human cognitive traits to predict performance in human-robot interactive teams. ";
		education_intro.innerHTML += "More broadly, I am interested in everything " + red_color + "<b>artificial intelligence</b></span>, " + blue_color + "<b>robotics</b></span>, and " + majenta_color + "<b>entrepreneurship</b></span>.";

	var undergrad = document.createElement("div");
		undergrad.className = "org-title";
		undergrad.innerHTML = "<br>I received a bachelors degree in " + red_color + link_ucr_me + "<b>mechanical engineering</b></a></span> from the " + blue_color + link_ucr + "<b>University of California</b></span> at " + gold_color + "<b>Riverside</b></a></span>.<br><br>";

	var work_title = document.createElement("div");
		work_title.className = "org-title";
		work_title.innerHTML = "While at " + blue_color + link_ucr + "<b>UCR</b></a></span> I was involved with " + blue_color + link_robosub + "<b>RoboSub</b></a></span>, " + red_color + link_reslife + "<b>Residential Life</b></a></span>, and " + gold_color + link_ieee + "<b>IEEE@UCR</b></a></span>.<br>";

	var intro = document.createElement("div");
	    intro.className = "intro-about";
	    intro.innerHTML = "<br><br>I spend most of my spare time working on side projects, playing piano, and being involved in student organizations. Check out the projects section!<br><br>"
    
    var breakpoint = document.createElement("br");

	about.append(education_intro);
    about.append(undergrad);
	about.append(work_title);
	//about.append(work_title_1);
	//about.append(work_title_2);
	//about.append(work_title_3);
	//about.append(orgs);

	
	about.append(intro);

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
