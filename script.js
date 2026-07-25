// ==========================
// NORTHWOOD TIMBER LTD
// script.js
// ==========================

// Smooth scrolling for menu links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Header background on scroll

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.background="#222";

header.style.boxShadow="0 8px 20px rgba(0,0,0,.25)";

}else{

header.style.background="rgba(25,25,25,.85)";

header.style.boxShadow="none";

}

});


// Fade animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(50px)";

section.style.transition="1s";

observer.observe(section);

});