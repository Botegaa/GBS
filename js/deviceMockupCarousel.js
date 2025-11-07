const instaTrack = document.querySelector(".mockup-track");
const mockup = document.querySelector(".phone-mockup");
// instaTrack.children returns an HTMLCollection which doesn't implement forEach
// Convert it to an array and guard against instaTrack being null so the script
// doesn't throw early and prevent later listeners from attaching.
const slides = instaTrack ? Array.from(instaTrack.children) : [];
let currentIndex = 0;

function showNext() {
  currentIndex = (currentIndex + 1) % slides.length;
  instaTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  slides[currentIndex].currentTime = 0;
}

// let interval = setInterval(showNext, 4000);

const playPause = document.querySelector(".play-pause");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

const prevButton = document.querySelector(".prev-video");
const nextButton = document.querySelector(".next-video");

if (playPause) {
  playPause.addEventListener("click", () => {
    if (play.classList.contains("hidden")) {
      if (slides[currentIndex]) slides[currentIndex].pause();
      play.classList.remove("hidden");
      if (prevButton) prevButton.classList.remove("hidden");
      if (nextButton) nextButton.classList.remove("hidden");
      pause.classList.add("hidden");

    } else {
      if (slides[currentIndex]) slides[currentIndex].play();
      play.classList.add("hidden");
      if (prevButton) prevButton.classList.add("hidden");
      if (nextButton) nextButton.classList.add("hidden");
      pause.classList.remove("hidden");
    }
  });
}




if (prevButton) {
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    if (instaTrack) instaTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}

if (nextButton) {
  nextButton.addEventListener("click", () => {
    console.log("Next button clicked");
    currentIndex = (currentIndex + 1) % slides.length;
    if (instaTrack) instaTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  });
}
