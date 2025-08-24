function submitForm(event) {
  event.preventDefault();
  alert("Thank you! Your message has been sent.");
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const backToTop = document.getElementById("backToTop");

// Show button when scrolling down
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

// Scroll back to hero when clicked
backToTop.addEventListener("click", () => {
  const hero = document.getElementById("hero");
  if (hero) {
    hero.scrollIntoView({ behavior: "smooth" });
  } else {
    // fallback: scroll to very top
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});