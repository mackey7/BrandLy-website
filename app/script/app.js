const menu = document.querySelector(".header-navigation-menu"),
  hamburger = document.querySelector("#hamburger"),
  navigationConatiner = document.querySelector(".header-navigation");

hamburger.addEventListener("click", function() {
  if (
    menu.style.display == "none" ||
    hamburger.classList.value === "fas fa-bars"
  ) {
    menu.style.display = "block";
    hamburger.classList.remove("fa-bars");
    hamburger.classList.add("fa-times-circle");
    console.log(hamburger.classList.value);
  } else {
    menu.style.display = "none";
    hamburger.classList.remove("fa-times-circle");
    hamburger.classList.add("fa-bars");
  }
});

window.addEventListener("scroll", function() {
  const menu = document.querySelectorAll(".header-navigation-menu li a");
  for (const menuItem of menu) {
    if (pageYOffset > 100) {
      navigationConatiner.style.background = "rgba(255, 255, 255, 0.596";
      menuItem.style.color = "#000";
    } else {
      navigationConatiner.style.background = "initial";
      menuItem.style.color = "#fff";
    }
  }
});
