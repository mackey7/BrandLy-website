const menu = document.querySelector(".header-navigation-menu"),
  hamburger = document.querySelector("#hamburger");

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
