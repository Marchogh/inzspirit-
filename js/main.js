const mobileBtn = document.querySelector(".mobile-menu");
const menu = document.querySelector(".menu");
const dropdownBtn = document.querySelector(".arrow-down");
const dropdown = document.querySelector(".dropdown");

mobileBtn.addEventListener("click", () => {
  menu.classList.toggle("open");

  if (menu.classList.contains("open")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("dropdown-open");
  dropdown.style.opacity = "1";
  if (dropdown.classList.contains("dropdown-open")) {
    dropdown.classList.remove("dropdown-hidden");
  } else {
    dropdown.style.opacity = "0";
  }
});
