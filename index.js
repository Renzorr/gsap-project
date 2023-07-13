const MenuOpen = document.querySelector(".menu-open");
const MenuClose = document.querySelector(".menu-close");

let tl = gsap.timeline({ paused: true, ease: "power4.inOut" });

tl.fromTo(
  ".menu-responsive",
  { clipPath: "circle(0.0% at 100% 0)" },
  {
    clipPath: "circle(141.2% at 100% 0)",
    duration: 1,
  }
);

tl.fromTo(
  ".hide",
  { y: -50 },
  {
    y: 0,
    delay: 0.2,
  }
);

tl.reverse();

MenuOpen.addEventListener("click", () => {
  tl.reversed(!tl.reversed());
});

MenuClose.addEventListener("click", () => {
  tl.reversed(!tl.reversed());
});
