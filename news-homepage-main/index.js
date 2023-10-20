const burgerMenu = document.querySelector(".nav-burger");
const navItems = document.querySelector(".nav-items");
const navExit = document.getElementById("exit-nav-items");

burgerMenu.addEventListener("click", () => {
  if (window.innerWidth > 768) return;
  navItems.style.display = "block";
});

navExit.addEventListener("click", () => {
  if (window.innerWidth > 768) return;
  navItems.style.display = "none";
});
