function sidePanelTutorial1() {
    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Tutorial</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "#E8E8E8";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>These are warehouses. Warehouses have a shape and a color. You will be watching packages sent through a warehouse network for processing.";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>When a package arrives at a warehouse, it will be processed if the shape and color match. Processed packages will disappear. Otherwise, the package will be stored in the bar to the right of the warehouse and sent to a downstream warehouse.";
    var text3 = document.createElement("div"); text3.innerHTML = "<br>Warehouses will try to forward packages to the best fit warehouse: first priority is by matching shape and color, then shape, then color, and lastly randomly."
    var text4 = document.createElement("div"); text4.innerHTML = "<br>If a warehouse is at maximum capacity, it will be unable to receive packages. Click \"Play\" to see this demo simulation.";

    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(text3);
    content.appendChild(text4);

    document.getElementById("gtid-input").style.display = "none";

    document.getElementById("sagat-resume").style.display = "block";
    document.getElementById("sagat-resume").innerHTML = "Play";
    document.getElementById("sagat-resume").onclick = function () {  sidePanelTutorial2(); gameActive = true; };
}

function sidePanelTutorial2() {
    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Tutorial</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "#E8E8E8";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>Take a minute to watch the simulation, to gain an understanding of how packages are stored in warehouses, how packages are forwarded, and what happens when a warehouse is full.";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>When you are ready, click \"Continue\".";

    content.appendChild(text1);
    content.appendChild(text2);

    document.getElementById("gtid-input").style.display = "none";

    document.getElementById("sagat-resume").style.display = "block";
    document.getElementById("sagat-resume").innerHTML = "Continue";
    document.getElementById("sagat-resume").onclick = function () {
        gameActive = true;
        sagat.freeze();
        sidePanelTutorial3();
    };
}

function sidePanelTutorial3() {
    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Tutorial</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "#E8E8E8";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>After watching the simulation for 30 seconds, you will be asked to color the warehouses based on how full they are. Try it now, by clicking the warehouses to cycle their colors to green, red, orange, or grey.";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>When you are ready, click \"Continue\".";

    content.appendChild(text1);
    content.appendChild(text2);

    document.getElementById("gtid-input").style.display = "none";

    document.getElementById("sagat-resume").style.display = "block";
    document.getElementById("sagat-resume").innerHTML = "Continue";
    document.getElementById("sagat-resume").onclick = function () {
        gameboard = new Gameboard(context);
        gameboard.generateGameboard();
        gameActive = false;
        tutorialActive = false;
        sagat = new SAGAT(30);
        sidePanelShowIntro();
    };
}

function sidePanelShowIntro() {
    // reset the random number generator
    seed = xmur3("RAIL Lab");  // use xmur3 to create a seed hash
    rand = mulberry32(seed());  // use the mulberry32 algorithm for the random number generator

    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Introduction</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "#E8E8E8";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>Now for the actual game! Welcome!";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>If you wish to redo the demo simulation, just refresh this page.";
    var text3 = document.createElement("div"); text3.innerHTML = "<br>You will watch the warehouse simulation on the left for 30 seconds, and then you be asked to mark warehouses as full, nearing capacity, or not nearing capacity.";
    var text4 = document.createElement("div"); text4.innerHTML = "<br>Trying to memorize the state of every warehouse will be difficult, so instead focus on understanding the network overall.";
    var text5 = document.createElement("div"); text5.innerHTML = "<br>When you are ready, click \"Continue\" to review the instructions.";

    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(text3);
    content.appendChild(text4);
    content.appendChild(text5);

    document.getElementById("gtid-input").style.display = "none";

    document.getElementById("sagat-resume").style.display = "block";
    document.getElementById("sagat-resume").innerHTML = "Continue";
    document.getElementById("sagat-resume").onclick = function () { document.getElementById("gtid-input").style.display = "none"; sidePanelShowInformation(); };
}


function sidePanelShowInformation() {
    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Instructions</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "#E8E8E8";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>You are the manager for this warehouse distribution network!";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>Warehouses only accept packages of the correct shape and color.";
    var text3 = document.createElement("div"); text3.innerHTML = "<br>When a warehouse receives unwanted packages, it stores and forwards them to downstream warehouses. When a warehouse is full of unwanted packages, it will not accept any more packages."
    var text4 = document.createElement("div"); text4.innerHTML = "<br>When forwarding a package, warehouses prioritize sending to the correct shape/color, then the correct shape, then the correct color, and lastly randomly.";
    var text5 = document.createElement("div"); text5.innerHTML = "<br>Stay aware of the warehouse capacities and try to predict bottlenecks in the network."

    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(text3);
    content.appendChild(text4);
    content.appendChild(text5);

    // hide the resume button if game active
    document.getElementById("sagat-resume").style.display = gameActive ? "none" : "block";
    document.getElementById("sagat-resume").innerHTML = "Begin!";
    document.getElementById("sagat-resume").onclick = function() {
        sagat.start();
        sagat.isRunning = true;
        gameActive = true;
        sidePanelShowInformation();
    };
}

function sidePanelSAGATQuestions() {
    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Questions</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "aliceblue";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>Now, we need you to access the health of the network.";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>Clicking a warehouse will cycle its color from green, to red, to orange, to grey.";
    var text3 = document.createElement("div"); text3.innerHTML = "<br>Which warehouses are at capacity (>90%)? Color them red.";
    var text4 = document.createElement("div"); text4.innerHTML = "<br>Which warehouses are nearing capacity (>70%)? Color them orange.";
    var text5 = document.createElement("div"); text5.innerHTML = "<br>Which warehouses are not close to capacity? Color them green.";
    var text6 = document.createElement("div"); text6.innerHTML = "<br><b><u>Try to color in all the warehouses you can</u></b>, if you are unsure of the state of a warehouse, color it grey. When you have completed, click \"Resume\".";

    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(text3);
    content.appendChild(text4);
    content.appendChild(text5);
    content.appendChild(text6);

    document.getElementById("sagat-resume").style.display = "block";
    document.getElementById("sagat-resume").innerHTML = "Resume";
    document.getElementById("sagat-resume").onclick = function() { sagat.unfreeze(); };
}


function sidePanelFailedFirstCycle() {
    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Correctness Check</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "mistyrose";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>It seems there is a misunderstanding as to which warehouses to color.";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>As all the warehouses are currently at low capacity, they should <u>all</u> be colored green!";
    var text3 = document.createElement("div"); text3.innerHTML = "<br>Make sure to color all the warehouses that you are confident about.";
    var text4 = document.createElement("div"); text4.innerHTML = "<br>Click \"Resume\" to color the warehouses again.";

    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(text3);
    content.appendChild(text4);

    document.getElementById("sagat-resume").style.display = "block";
    document.getElementById("sagat-resume").innerHTML = "Resume";
    document.getElementById("sagat-resume").onclick = function() { sidePanelSAGATQuestions(); };
}


function sidePanelEndGame(scores) {
    var title = document.getElementById("SidePanelTitle");
    title.innerHTML = "<b>Results</b>";

    var content = document.getElementById("SidePanelContent");
    content.innerHTML = "";

    document.getElementById("SidePanel").style.backgroundColor = "lightyellow";

    var text1 = document.createElement("div"); text1.innerHTML = "<br>Congratulations! You completed the Situational Awareness test!";
    var text2 = document.createElement("div"); text2.innerHTML = "<br>";
    var text3 = document.createElement("div"); text3.innerHTML = "<br>Your total score is: <b>" + scores.reduce((a, b) => a + b, 0) + "</b>";
    //var text4 = document.createElement("div"); text4.innerHTML = "<br>If you are taking this test as part of CS 7633, please send this score to Jack Kolb (kolb@gatech.edu) with any comments or feedback for this test. Thank you!";
    var text5 = document.createElement("div"); text5.innerHTML = "<br>The game is now complete, and you may now close this browser window or wait to see how the simulation ends.";

    content.appendChild(text1);
    content.appendChild(text2);
    content.appendChild(text3);
    //content.appendChild(text4);
    content.appendChild(text5);

    document.getElementById("sagat-resume").style.display = "none";   
}