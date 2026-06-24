// ===============================
// SUR TAAL STUDIO
// script.js
// ===============================

// Equipment Image Modal

function openModal(imageSrc){

const modal =
document.getElementById("modal");

const modalImage =
document.getElementById("modalImage");

modal.style.display = "flex";

modalImage.src = imageSrc;

}

function closeModal(){

document.getElementById("modal")
.style.display = "none";

}

// Close Modal On Background Click

window.addEventListener("click",(e)=>{

const modal =
document.getElementById("modal");

if(e.target === modal){

modal.style.display = "none";

}

});

// Navbar Shadow On Scroll

window.addEventListener("scroll",()=>{

const nav =
document.querySelector("nav");

if(window.scrollY > 50){

nav.style.boxShadow =
"0 5px 25px rgba(245,180,0,.25)";

}
else{

nav.style.boxShadow =
"none";

}

});

// Smooth Scrolling

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor=>{

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
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

// Booking Form

const bookingForm =
document.querySelector(".booking-form");

if(bookingForm){

bookingForm.addEventListener(
"submit",
function(e){

e.preventDefault();

const name =
this.querySelector(
'input[type="text"]'
).value;

alert(
"Thank you " +
name +
"! Your booking request has been received. Please confirm via WhatsApp."
);

window.open(
"https://wa.me/917044774652",
"_blank"
);

});

}

// Gallery Light Animation

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);

galleryImages.forEach(img=>{

img.addEventListener(
"mouseenter",
()=>{

img.style.boxShadow =
"0 0 25px rgba(245,180,0,.5)";

});

img.addEventListener(
"mouseleave",
()=>{

img.style.boxShadow =
"none";

});

});

// Hero Text Rotation

const heroTexts = [

"Professional Jam Room & Recording Studio",

"Practice • Create • Record • Perform",

"Affordable Music Space For Everyone",

"Raw Audio Recording Included",

"Book Your Session Today"

];

let currentText = 0;

const heroSubtitle =
document.querySelector(".hero h2");

if(heroSubtitle){

setInterval(()=>{

heroSubtitle.style.opacity = "0";

setTimeout(()=>{

currentText++;

if(currentText >= heroTexts.length){

currentText = 0;

}

heroSubtitle.innerText =
heroTexts[currentText];

heroSubtitle.style.opacity = "1";

},500);

},4000);

}

// Fade In Animation

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";

entry.target.style.transform =
"translateY(0px)";

}

});

},

{
threshold:0.15
}

);

document
.querySelectorAll(
".card,.review-card,.price-card,.addon-grid div,.founder-box,.contact-box"
)
.forEach(el=>{

el.style.opacity = "0";

el.style.transform =
"translateY(40px)";

el.style.transition =
"all 0.8s ease";

observer.observe(el);

});

// Current Year Footer

const footer =
document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML =
"© " +
new Date().getFullYear() +
" Sur Taal Studio";

}

// Console Message

console.log(
"🎵 Sur Taal Studio Website Loaded Successfully"
);