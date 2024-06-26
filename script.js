//------------------------------------- Time ----------------------------------------------
let time = document.querySelector('.home-right-content');

setInterval( () => {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
},1000)

//------------------------------------- Responsive Slidebar ----------------------------------------------
function showSlidebar() {
  const slidebar = document.querySelector(".dropdown-menu");
  slidebar.style.display = "flex";
}

function closeSlidebar() {
  const slidebar = document.querySelector(".dropdown-menu");
  slidebar.style.display = "none";
}

//------------------------------------- Active Navbar ----------------------------------------------
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("#nav ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
};

//------------------------------------- Home Page and Project Page Animation  ----------------------------------------------
function homepageanimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
  })
    .to(".boundingelement", {
      y: 0,
      ease: Expo.easeInOut,
      duration: 2,
      delay: -1,
      stagger: 0.1
    })
    .from(".home-footer", {
      y: "-10",
      opacity: 0,
      duration: 1.5,
      delay: -1,
      ease: Expo.easeInOut,
    });
}
homepageanimation();  

//------------------------------------- Cursor Move ----------------------------------------------
var timeout;
function curosorskew() {
  //default scale value
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    clearTimeout(timeout);

    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    cursormove(xscale, yscale);

    timeout = setTimeout(function () {
      document.querySelector(
        "#cursor"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
    }, 100);
  });
}

function cursormove(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#cursor"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}
curosorskew();
cursormove();

//------------------------------------- Project Page Animation  ----------------------------------------------
document.querySelectorAll(".project-title").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});
