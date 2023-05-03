const tween = KUTE.fromTo(
  "#blob1",
  { path: "#blob1" },
  { path: "#blob2" },
  { repeat: 9999, duration: 3000, yoyo: true }
);
tween.start();

// const tween1 = KUTE.fromTo(
//   "#blob1-1",
//   { path: "#blob1-1" },
//   { path: "#blob1-2" },
//   { repeat: 9999, duration: 1000, yoyo: true }
// );
// tween1.start();

// -------------------------------------------
const naviagtionBar = document.querySelector(".header-options");
const naviagtionToggle = document.querySelector(".mobile-nav-toggle");

naviagtionToggle.addEventListener("click", function () {
  const visibility = naviagtionBar.getAttribute("data-visibility");
  if (visibility === "false") {
    naviagtionBar.setAttribute("data-visibility", true);
    naviagtionToggle.setAttribute("aria-expanded", true);
  } else {
    naviagtionBar.setAttribute("data-visibility", false);
    naviagtionToggle.setAttribute("aria-expanded", false);
  }
});
