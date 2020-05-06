/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/
const navBar=document.getElementById('#navbar__list'); /* <ul id="navbar__list"> */
const sectionCollection=document.getElementsByClassName('.landing__container');  /*<div class="landing__container">
                                                                                    <h2>Section 1</h2> */

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function collectAllSectionNames(){
/*     <ul id="navbar__list">
            <li class="navbar__menu"><a class ="menu__link" href="#section2">Landing Page</a></li>
        </ul> */    
    for(const section in sectionCollection){
        const linkName=document.createElement('a'); /** <a> </a> */
        linkName.innerText=section.firstElementChild.innerText;/** <a>Section 1 </a> */
        linkName.setAttribute('href','#');/**  <a href="#">Section 1 </a> */
        linkName.setAttribute('class','menu__link');/**  <a class ="menu__link" href="#">Section 1 </a> */
        const liName=document.createElement('li');/** <li> </li> */
        liName.setAttribute('class','navbar__menu');/** <li class="navbar__menu"> </li> */
        liName.appendChild(linkName);/** <li class="navbar__menu"> <a class ="menu__link" href="#">Section 1 </a> </li> */
        navBar.appendChild(liName);/** <ul id="navbar__list"><li class="navbar__menu"> <a class ="menu__link" href="#">Section 1 </a> </li> */
    }
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
document.addEventListener('DOMContentLoaded', collectAllSectionNames);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


