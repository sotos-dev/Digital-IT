const sandwichButton = document.querySelector(".sandwich-button")
const mobileNav = document.querySelector(".mobile-nav")
const searchIcon = document.querySelector(".search-icon")
const searchInput = document.querySelector(".search-input")

// Sandwich button & mobile menu links functionality
sandwichButton.addEventListener("click", () => {
  sandwichButton.firstElementChild.classList.toggle("line1")
  sandwichButton.firstElementChild.nextElementSibling.classList.toggle("line2")
  sandwichButton.lastElementChild.classList.toggle("line3")

  mobileNav.classList.toggle("active-mobile-nav")
})

// Search icon & bar functionality
searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active-search-input")
})
