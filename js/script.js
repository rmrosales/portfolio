function getRandomPosition(wrapper, div) {
    const wrapperRect = wrapper.getBoundingClientRect();
    const maxX = wrapperRect.width - div.clientWidth;
    const maxY = wrapperRect.height - div.clientHeight;
    return {
        x: Math.random() * maxX,
        y: Math.random() * maxY,
        rotation: Math.random() * 120 // Random rotation angle
    };
}

function scatterDivsOnLoad() {
    const wrapper = document.querySelector(".banner-container");

    document.querySelectorAll(".animated-icons").forEach(div => {
        // Randomize initial position with different starting delays
        const { x, y, rotation } = getRandomPosition(wrapper, div);
        div.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

        // Fade in after 2 seconds
        setTimeout(() => {
            div.style.opacity = 1; // Trigger fade-in effect
        }, 2000); // Fade in after 2 seconds
    });
}

function moveDivsRandomly() {
    const wrapper = document.querySelector(".banner-container");
    document.querySelectorAll(".animated-icons").forEach(div => {
        const { x, y, rotation } = getRandomPosition(wrapper, div);
        div.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    });
}

// Scatter on load
window.addEventListener("DOMContentLoaded", scatterDivsOnLoad);

// Move elements with rotation every 3 seconds
setInterval(moveDivsRandomly, 4000);




document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    function updateActiveLink() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", updateActiveLink);
});


//add button states

// const button = document.getElementById('myButton');
// let isClicked = false; // Initialize the state

// button.addEventListener('click', () => {
//     if (!isClicked) {
//         // Button is not clicked yet, update the state and appearance
//         button.textContent = 'Clicked!';
//         button.style.backgroundColor = 'green';
//         isClicked = true;
//     } else {
//         // Button is already clicked, update the state and appearance
//         button.textContent = 'Click Me';
//         button.style.backgroundColor = 'blue';
//         isClicked = false;
//     }
// });

//navigation mobile fix
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-link");
//querySelectorAll to target all links with class .nav-link

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");

    if (hamburger.classList.contains("active")) {
        document.body.style.position = "fixed";
        document.body.style.overflow = "hidden";
        document.body.style.left = "0";
        document.body.style.right = "0";
    } else {
        document.body.style.position = "static";
        document.body.style.overflow = "visible";
    }
    // document.getElementById("header").style.height = "100vh";
}

menuItems.forEach(item => {
    item.addEventListener("click", closeMobileMenu);
});
//close mobileMenu to show scroll section

function closeMobileMenu() {

    hamburger.classList.remove("active");
    navMenu.classList.remove("active");

    document.body.style.position = "static";
    document.body.style.overflow = "visible";
    document.body.style.left = "0";
    document.body.style.right = "0";
}


//text typewriter effect
var i = 0;
var txt = 'Problem-Solver';
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("green-gradient").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Trigger typewriter effect on page load
window.onload = typeWriter;

// Fade in animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // Trigger animation only once
        }
    });
}, { threshold: 0.1 });

// Apply observer to sections
document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});