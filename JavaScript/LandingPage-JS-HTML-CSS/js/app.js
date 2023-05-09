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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section');

const navbar = document.querySelector('#navbar__list');

const section4 = document.querySelector('#section4');

const pageHeader=document.querySelector('.page__header');


// Create navigation bar
function createLists() {

    const fragment = document.createDocumentFragment();

    for (const section of sections) {

        const newList = document.createElement('li');

        newList.innerHTML = `<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`;

        fragment.appendChild(newList);

    };
    navbar.appendChild(fragment);
};


// build the nav
window.addEventListener('DOMContentLoaded', createLists);


// Scroll to anchor ID using scrollTO event
// When the users click on nav links will go to the correct section smoothly
window.addEventListener('DOMContentLoaded', function() {

    elem = document.querySelectorAll('a[href^="#"]');

    for(const el of elem) {
        el.addEventListener('click', function(e) {
            e.preventDefault();

            const target = e.target.getAttribute('href');

            const targetTop = document.querySelector(target).getBoundingClientRect().top + window.pageYOffset;

            const scrollOptions = {
                left: 0,
                top: targetTop,
                behavior: 'smooth'
            };

            window.scrollTo(scrollOptions);
        });
    };
});


// Set sections as active when near top of viewport
function makeActive(){

    for (const section of sections) {
        const box = section.getBoundingClientRect();

        if (box.top <= 150 && box.bottom >= 150) {
        //apply active state on current section and corresponding Nav link
            section.classList.add('your-active-class');
        } else {
        //Remove active state from other section and corresponding Nav link
            section.classList.remove('your-active-class');
        };
    };
};


// Make sections active
document.addEventListener("scroll", makeActive);


// build the 'goTopBtn'
// When the users click this button will go to top of the page smoothly 
// This button is invisible placed at the right bottom of the page,
// only visible when the users scroll below the fold of the page
function goTopBtn() {

    section4.insertAdjacentHTML('beforeend', '<div class="btn" onclick="scrollToTop()"><p>Top</p></div>');

    const btnStyle = document.querySelector('.btn').style;

    const btnStyleOptions = {
    backgroundColor: '#111213',
    borderRadius: '5px',
    position: 'fixed',
    right: '50px',
    bottom: '50px',
    cursor: 'pointer',
    padding: '2rem',
    zIndex: '999',
    visibility: 'hidden'
    };

    // applying CSS styles by useing for in loop
    for (const prop in btnStyleOptions) {
        btnStyle[prop] = btnStyleOptions[prop];
    };
};

function scrollToTop() {
    const scrollOptions = {
        left: 0,
        top: 0,
        behavior: 'smooth'
    };

    scrollTo(scrollOptions);
};


// goTopBtn event
window.addEventListener('DOMContentLoaded', goTopBtn);


// controlls goTopBtn's visibility
// only visible when sec4Pos.top <= 640
function goTopBtnVisibility() {
    
    const sec4Pos = section4.getBoundingClientRect();
    
    const btn = document.querySelector('.btn');

    if (sec4Pos.top >= 641) {
        btn.style.visibility = 'hidden';
        btn.style.opacity = '0';
        btn.style.transition = '0.5s';
        
    } if (sec4Pos.top <= 640) {
        btn.style.visibility = 'visible';
        btn.style.opacity = '1';
        btn.style.transition = '0.5s'
    };
};


// goTopBtnVisibility event 
window.addEventListener('scroll', goTopBtnVisibility);


// controlls the visibility of the fixed navigation bar
// only appears when the users scroll or move mouse pointer, or touches smartphone's screen
// It will disappear after 4 seconds of users's action
sT = setTimeout(() => {
    pageHeader.style.visibility = 'hidden';
    pageHeader.style.opacity = '0';
    pageHeader.style.transition = '0.5s'
}, 4000);


function headerVisibility() {
    // added clearTimeout() function to clearing out the previously set time out time 
    // which was set by making use of the setTimeout() function => sT
    clearTimeout(sT);

    pageHeader.style.visibility = 'visible';
    pageHeader.style.opacity = '1';

    sT = setTimeout(() => {
        pageHeader.style.visibility = 'hidden';
        pageHeader.style.opacity = '0';
        pageHeader.style.transition = '0.5s'
    }, 4000);
};


// Navigation bar will apper when the users scroll or move mouse pointer, or touches smartphone's screen 
window.addEventListener('scroll', headerVisibility);
window.addEventListener('ontouchmove', headerVisibility);
window.addEventListener('mousemove', headerVisibility);
