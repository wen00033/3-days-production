const naviagtionBar = document.querySelector(".header-nav");
const naviagtionToggle = document.querySelector(".toggle");

naviagtionToggle.addEventListener("click", function () {
  const visibility = naviagtionToggle.getAttribute("data-toggle");
  console.log(visibility);
  if (visibility == "false") {
    naviagtionBar.setAttribute("data-expend", true);
    naviagtionBar.setAttribute("aria-expend", true);
    naviagtionToggle.setAttribute("data-toggle", true);
    naviagtionToggle.setAttribute("aria-toggle", true);
  } else {
    naviagtionBar.setAttribute("data-expend", false);
    naviagtionBar.setAttribute("aria-expend", false);
    naviagtionToggle.setAttribute("data-toggle", false);
    naviagtionToggle.setAttribute("aria-toggle", false);
  }
});
