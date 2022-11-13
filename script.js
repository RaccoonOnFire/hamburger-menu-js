const burgerBtn = document.querySelector(".burger")
const nav = document.querySelector("nav ul")

const showBurgerMenu = () => {
  nav.classList.toggle("active")
  burgerBtn.classList.toggle("active")

  if (burgerBtn.textContent == "<") {
    burgerBtn.textContent = ">"
  } else {
    burgerBtn.textContent = "<"
  }
}

burgerBtn.addEventListener("click", showBurgerMenu)
