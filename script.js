const naviagtionBar = document.querySelector(".header-nav");
const naviagtionToggle = document.querySelector(".toggle");

naviagtionToggle.addEventListener("click", function () {
  const visibility = naviagtionToggle.getAttribute("data-toggle");
  console.log(visibility);
  if (visibility == "false") {
    naviagtionBar.setAttribute("data-expend", true);
    naviagtionToggle.setAttribute("data-toggle", true);
  } else {
    naviagtionBar.setAttribute("data-expend", false);
    naviagtionToggle.setAttribute("data-toggle", false);
  }
});

// -------------------------------------------------
const tabs = document.querySelectorAll(".artwork__tab");
const tabsContainer = document.querySelector(".artwork-tab-container");
const tabsContent = document.querySelectorAll(".artwork__content");

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".artwork__tab");
  console.log(clicked);
  if (!clicked) return;
  // active tab
  tabs.forEach((t) => t.classList.remove("artwork__tab--active"));
  clicked.classList.add("artwork__tab--active");
  tabsContent.forEach((c) => c.classList.remove("artwork__content--active"));
  tabsContent.forEach((c) => c.classList.add("artwork__content"));

  // console.log(clicked.dataset.tab);
  // activitated the area
  document
    .querySelector(`.artwork__content--${clicked.dataset.tab}`)
    .classList.add("artwork__content--active");
  document
    .querySelector(`.artwork__content--${clicked.dataset.tab}`)
    .classList.remove("artwork__content");
});
