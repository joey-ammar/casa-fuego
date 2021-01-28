// Concerning the navigation
const specialIcon = document.querySelector(".specialIcon");
const anotherNav = document.querySelector(".anotherNav");
specialIcon.addEventListener("click", showLinks);
function showLinks(e) {
  e.preventDefault();
  anotherNav.classList.toggle("remove");
}
