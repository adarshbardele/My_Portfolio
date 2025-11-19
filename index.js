// Dynamic text animation
const dynamicText = document.getElementById("dynamic-text")
const roles = ["Full Stack Developer",  "Data Analyst"]
let currentIndex = 0
let charIndex = 0
let isDeleting = false

document.getElementsByClassName("btn-primary").onclick = function(event){
  btn = document.getElementsByClassName("btn-primary").onclick = 
  window.location.href = "/contact.html"
}


function typeWriter() {
  const currentRole = roles[currentIndex]

  if (isDeleting) {
    dynamicText.textContent = currentRole.substring(0, charIndex - 1)
    charIndex--
  } else {
    dynamicText.textContent = currentRole.substring(0, charIndex + 1)
    charIndex++
  }

  let typeSpeed = isDeleting ? 50 : 100

  if (!isDeleting && charIndex === currentRole.length) {
    typeSpeed = 2000 // Pause at end
    isDeleting = true
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false
    currentIndex = (currentIndex + 1) % roles.length
    typeSpeed = 500 // Pause before next word
  }

  setTimeout(typeWriter, typeSpeed)
}

// Start the typing animation
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, 1000)
})

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Skill bar animation on scroll
function animateSkillBars() {
  const skillBars = document.querySelectorAll(".skill-progress")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillBar = entry.target
          const width = skillBar.getAttribute("data-width")
          skillBar.style.width = width
        }
      })
    },
    { threshold: 0.5 },
  )

  skillBars.forEach((bar) => observer.observe(bar))
}

// Contact form handling
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault()

  // Get form data
  const formData = new FormData(this)
  const name = this.querySelector('input[type="text"]').value
  const email = this.querySelector('input[type="email"]').value
  const message = this.querySelector("textarea").value

  // Simple validation
  if (name && email && message) {
    alert("Thank you for your message! I will get back to you soon.")
    this.reset()
  } else {
    alert("Please fill in all fields.")
  }
})

// Initialize animations when page loads
document.addEventListener("DOMContentLoaded", () => {
  animateSkillBars()

  // Add fade-in animation to sections on scroll
  const sections = document.querySelectorAll("section")
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.1 },
  )

  sections.forEach((section) => {
    section.style.opacity = "0"
    section.style.transform = "translateY(20px)"
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(section)
  })
})

// Navbar background change on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
  }
})
