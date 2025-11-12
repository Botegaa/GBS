function mudarTabClinica(idClinica) {
  const unimedBtn = document.getElementById("tab-a");
  const providaBtn = document.getElementById("tab-b");

  const unimedPanel = document.getElementById("panel-a");
  const providaPanel = document.getElementById("panel-b");

  const unimedMap = document.getElementById("mapasUnimed")
  const providaMap = document.getElementById("mapasProvida")

  if (idClinica === "unimed") {
    unimedBtn.setAttribute("aria-selected", "true");
    providaBtn.setAttribute("aria-selected", "false");

    unimedPanel.removeAttribute("hidden");
    providaPanel.setAttribute("hidden", "true");

    unimedMap.removeAttribute("hidden");
    providaMap.setAttribute("hidden", "true");
  } else if (idClinica === "provida") {
    providaBtn.setAttribute("aria-selected", "true");
    unimedBtn.setAttribute("aria-selected", "false");

    providaPanel.removeAttribute("hidden");
    unimedPanel.setAttribute("hidden", "true");

    providaMap.removeAttribute("hidden");
    unimedMap.setAttribute("hidden", "true");

  }
}

 const track = document.querySelector(".carousel-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const card = document.querySelector(".area-card");
const cardWidth = card.offsetWidth;
const gap = parseFloat(getComputedStyle(track).gap);
const step = track.clientWidth / 2;

const paginationContainer = document.querySelector(".carousel-dots");
const totalSteps = Math.ceil(track.scrollWidth / step);
let currentStep = 0;

let scrollPosition = 0;

nextBtn.addEventListener("click", () => {
  const maxScroll = track.scrollWidth - track.clientWidth;
  const nextPosition = scrollPosition + step;

  scrollPosition = nextPosition >= maxScroll ? maxScroll : nextPosition;
  track.scrollTo({ left: scrollPosition, behavior: "smooth" });

  currentStep = Math.round(scrollPosition / step);
  updatePagination(currentStep);
});

prevBtn.addEventListener("click", () => {
  const prevPosition = scrollPosition - step;

  scrollPosition = prevPosition <= 0 ? 0 : prevPosition;
  track.scrollTo({ left: scrollPosition, behavior: "smooth" });
  currentStep = Math.round(scrollPosition / step);
  updatePagination(currentStep);
});

for (let i = 1; i < totalSteps; i++) {
  const dot = document.createElement("button");
  if (i === 1) dot.classList.add("active");
  paginationContainer.appendChild(dot);

  dot.addEventListener("click", () => {
    scrollPosition = (i - 1) * step;
    track.scrollTo({ left: scrollPosition, behavior: "smooth" });

    updatePagination(i - 1);
  });
}

function updatePagination(current) {
  document.querySelectorAll(".carousel-dots button").forEach((dot, index) => {
    if (index === current) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

  const allDetails = document.querySelectorAll("details");

  allDetails.forEach((targetDetail) => {
    targetDetail.addEventListener("toggle", () => {
      if (targetDetail.open) {
        allDetails.forEach((detail) => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      }
    });
  });

