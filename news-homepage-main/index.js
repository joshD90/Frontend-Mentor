const burgerMenu = document.querySelector(".nav-burger");
const navItems = document.querySelector(".nav-items");
const navExit = document.getElementById("exit-nav-items");
// const shapesImage = document.getElementById("shapesImg");

burgerMenu.addEventListener("click", () => {
  if (window.innerWidth > 768) return;
  navItems.style.display = "block";
});

navExit.addEventListener("click", () => {
  if (window.innerWidth > 768) return;
  navItems.style.display = "none";
});

// const setImg = () => {
//   console.log(shapesImage);
//   const imgSrc =
//     window.innerWidth < 768
//       ? "./assets/images/image-web-3-mobile.jpg"
//       : "./assets/images/image-web-3-desktop.jpg";
//   ("./assets/images/image-web-3-desktop.jpg");
//   shapesImage.src = imgSrc;
// };
// window.addEventListener("load", () => setImg());
// window.addEventListener("resize", () => {
//   setImg();
// });
