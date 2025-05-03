// Toggle menu on mobile
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.querySelector('#navbar ul');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
});



let slideIndex = 0;

function showSlides() {
  const slides = document.getElementsByClassName("mySlide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change every 5 seconds
}

document.addEventListener("DOMContentLoaded", showSlides);

let roomIndex = 0;

function showRoomSlides() {
  const slides = document.getElementsByClassName("roomSlide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  roomIndex++;
  if (roomIndex > slides.length) {
    roomIndex = 1;
  }
  slides[roomIndex - 1].style.display = "block";
  setTimeout(showRoomSlides, 4000); // Change slide every 4 seconds
}

document.addEventListener("DOMContentLoaded", showRoomSlides);

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    const checkin = new Date(document.getElementById("checkin").value);
    const checkout = new Date(document.getElementById("checkout").value);
    const guests = document.getElementById("guests").value;
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (checkout <= checkin) {
      alert("Check-out date must be after check-in date.");
      e.preventDefault();
      return;
    }

    if (guests < 1) {
      alert("Please enter at least 1 guest.");
      e.preventDefault();
      return;
    }

    if (!name || !email || !phone) {
      alert("Please fill out all required fields.");
      e.preventDefault();
      return;
    }

    alert(`Thank you, ${name}! Your booking from ${checkin.toDateString()} to ${checkout.toDateString()} for ${guests} guest(s) has been submitted.`);
    // Optional: Comment out next line to allow real form submission
    // e.preventDefault();
  });
});

// Contact form handling
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.querySelector("#contact-form form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from submitting

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields before submitting.");
      } else {
        alert("Thank you for contacting Serenity Hotel! We will get back to you shortly.");
        contactForm.reset(); // Clear the form
      }
    });
  }
});

// Image Fade-In Effect
document.addEventListener("DOMContentLoaded", () => {
  const hotelImage = document.getElementById("hotelImage");
  hotelImage.style.opacity = 0;
  hotelImage.style.transition = "opacity 2s ease-in";

  setTimeout(() => {
    hotelImage.style.opacity = 1;
  }, 100);

  // If you want more content interaction (e.g., displaying more info after a button click)
  const showMoreBtn = document.createElement("button");
  showMoreBtn.innerText = "Show More";
  document.querySelector(".info-left").appendChild(showMoreBtn);

  showMoreBtn.addEventListener("click", () => {
    const extraContent = document.createElement("p");
    extraContent.innerText = "Serenity Hotel is committed to sustainability and eco-friendly practices. We ensure that our services are not only luxurious but also environmentally conscious.";
    document.querySelector(".info-left").appendChild(extraContent);
    showMoreBtn.style.display = "none"; // Hide the button after content is shown
  });
});

// Smooth Scrolling for anchor links (if you add any navigation links with a hash)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
