/* =========================
   BIRTHDAY COUNTDOWN
   ========================= */

const birthdayTime = new Date("2026-09-11T00:00:00+05:30");

const countdownScreen = document.getElementById("countdown-screen");

const birthdaySite = document.getElementById("birthday-site");

const daysElement = document.getElementById("days");

const hoursElement = document.getElementById("hours");

const minutesElement = document.getElementById("minutes");

const secondsElement = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date();

  const difference = birthdayTime.getTime() - now.getTime();

  /* Birthday has started */

  if (difference <= 0) {
    countdownScreen?.classList.add("hidden");

    birthdaySite?.classList.remove("hidden");

    return;
  }

  /* Birthday has not started yet */

  birthdaySite?.classList.add("hidden");

  countdownScreen?.classList.remove("hidden");

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));

  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

  const minutes = Math.floor((difference / (1000 * 60)) % 60);

  const seconds = Math.floor((difference / 1000) % 60);

  daysElement.textContent = String(days).padStart(2, "0");

  hoursElement.textContent = String(hours).padStart(2, "0");

  minutesElement.textContent = String(minutes).padStart(2, "0");

  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
/* =========================
   SCROLL TO LETTER
   ========================= */

const scrollCue = document.querySelector(".scroll-cue");
const letter = document.querySelector("#letter");

scrollCue?.addEventListener("click", () => {
  letter?.scrollIntoView({
    behavior: "smooth",
  });
});

/* =========================
   REVEAL ON SCROLL
   ========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.14,
  },
);

revealElements.forEach((element) => {
  observer.observe(element);
});

/* =========================
   CUSTOM CURSOR
   ========================= */

const customCursor = document.querySelector(".custom-cursor");

if (customCursor) {
  document.addEventListener("mousemove", (event) => {
    customCursor.style.left = `${event.clientX}px`;
    customCursor.style.top = `${event.clientY}px`;
  });

  document.addEventListener("mouseleave", () => {
    customCursor.style.opacity = "0";
  });

  document.addEventListener("mouseenter", () => {
    customCursor.style.opacity = "1";
  });
}

/* =========================
   LIGHTBOX
   ========================= */

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

/* Photos that can be opened fullscreen */

const lightboxPhotos = document.querySelectorAll(
  ".scatter-photo img, .chat-screenshot-frame img",
);

/* Open lightbox */

function openLightbox(image) {
  if (!lightbox || !lightboxImage || !image) return;

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt || "";

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.classList.add("lightbox-open");
}

/* Close lightbox */

function closeLightbox() {
  if (!lightbox || !lightboxImage) return;

  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.classList.remove("lightbox-open");

  /*
    Clear the image after the fade-out.
    This prevents the previous image flashing
    briefly when another one is opened.
  */

  setTimeout(() => {
    if (!lightbox.classList.contains("open")) {
      lightboxImage.src = "";
      lightboxImage.alt = "";
    }
  }, 220);
}

/* Attach click events to all images */

lightboxPhotos.forEach((photo) => {
  photo.addEventListener("click", () => {
    openLightbox(photo);
  });
});

/* Close button */

lightboxClose?.addEventListener("click", closeLightbox);

/* Clicking the dark backdrop closes the viewer */

lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

/* Escape key closes the viewer */

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox?.classList.contains("open")) {
    closeLightbox();
  }
});
