// =========================
// SUR TAAL STUDIO
// script.js
// =========================

// Equipment Popup Gallery

function openGallery(img){

document.getElementById("popup").style.display="flex";

document.getElementById("popup-img").src=
"images/"+img;

}

function closeGallery(){

document.getElementById("popup").style.display="none";

}

// Close popup when clicking outside image

window.addEventListener("click",function(e){

const popup=
document.getElementById("popup");

if(e.target===popup){

popup.style.display="none";

}

});

// WhatsApp Booking

function submitBooking(){

const name=
document.getElementById("name").value;

const phone=
document.getElementById("phone").value;

const date=
document.getElementById("date").value;

const time=
document.getElementById("time").value;

const session=
document.getElementById("session").value;

if(
name==="" ||
phone==="" ||
date==="" ||
time===""
){

alert("Please fill all fields");

return;

}

const message =

`🎵 SUR TAAL STUDIO BOOKING

Name: ${name}

Phone: ${phone}

Date: ${date}

Time: ${time}

Session: ${session}

Please confirm my booking.`;

window.open(

`https://wa.me/917044774652?text=${encodeURIComponent(message)}`,

"_blank"

);

}

// Smooth Scrolling

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target=
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Navbar Shadow Effect

window.addEventListener("scroll",()=>{

const navbar=
document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.boxShadow=
"0 5px 25px rgba(245,180,0,.25)";

}else{

navbar.style.boxShadow="none";

}

});

// Hero Text Animation

const heroTexts=[

"Practice. Create. Record. Perform.",

"Affordable Music Studio",

"Raw Audio Recording Included",

"Video Footage Available",

"Your Sound, Your Space"

];

let currentHeroText=0;

const heroSubtitle=
document.querySelector(".hero h2");

if(heroSubtitle){

setInterval(()=>{

heroSubtitle.style.opacity="0";

setTimeout(()=>{

currentHeroText++;

if(currentHeroText>=heroTexts.length){

currentHeroText=0;

}

heroSubtitle.innerText=
heroTexts[currentHeroText];

heroSubtitle.style.opacity="1";

},500);

},4000);

}

// Scroll Reveal Animation

const observer=

new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0px)";

}

});

},

{
threshold:0.15
}

);

document.querySelectorAll(

".equipment-card,.review-card,.contact-card,.rule-card,.price-card"

)

.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(40px)";

el.style.transition=
"all .8s ease";

observer.observe(el);

});

// Footer Year Auto Update

const footerText=

document.querySelector("footer p:last-child");

if(footerText){

footerText.innerHTML=

"© "+

new Date().getFullYear()+

" Sur Taal Studio";

}

console.log(
"🎵 Sur Taal Studio Loaded Successfully"
);