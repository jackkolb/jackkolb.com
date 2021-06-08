# RAIL Lab at Georgia Tech's Situational Awareness Cognitive Test

Maintained by Jack Kolb (kolb@gatech.edu), copyright (C) 2021 RAIL Lab @ Georgia Tech


### Overview ###

This test quantifies a user's situational awareness cognitive trait. Specifically, it tests their ability to understand a system using the first two levels of Endsley's situational awareness model -- understanding the elements of a system, and understanding the context of a system. The user plays a puzzle game where they watch packages be distributed through a warehouse network. Packages that match a warehouse's shape and color are processed by the warehouse, or otherwise sent downstream. The user seeks to maintain an awareness of the capacity of each warehouse, and as warehouses fill up overtime are challenged to utilize subtleties of the network in their mental model.

The test follows the SAGAT format: the user watches the package distribution for 30 seconds, then the distribution freezes and the packages and warehouse colors are hidden, and the user is asked to identify the capacity level of each warehouse (low, medium, high). This repeats for 4 iterations. The user is scored by their number of correct identifications.

We have previous found a link between performance in this pre-test and performance in robot tasks involving a user's simulataneous tracking of multiple robots.


### How to Use ###

If you are looking to adapt this test for your own work, look into the adjustments below. We ask that you cite this GitHub repository if you use, modify, or create derivatives of this codebase for your own work.

Recommended adjustments:
1. In **index.html**, make sure you are importing the CSS/JS scripts correctly as per your webserver, an example is provided for Flask.
2. In **sagat.js**, several game parameters and functions are followed by a comment starting with `//SET THIS`, change these as you see fit.
3. In **utility.js**, you can change the log() function to whatever suits your needs. We used POST requests to our webserver. You may want to go through the JS files to update everywhere the log() function is called if your logging system varies substantially from ours.

Optional adjustments:
1. In **sidePanel.js**, you can change the side panel contents at the various game stages.
2. In **gameboard.js**, you can change the warehouse network structure, the canvas has dimensions 1200x800.
