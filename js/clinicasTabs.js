function mudarTabClinica(idClinica) {
  const unimedBtn = document.getElementById("tab-a");
  const providaBtn = document.getElementById("tab-b");

  const unimedPanel = document.getElementById("panel-a");
  const providaPanel = document.getElementById("panel-b");

  if (idClinica === "unimed") {
    unimedBtn.setAttribute("aria-selected", "true");
    providaBtn.setAttribute("aria-selected", "false");

    unimedPanel.removeAttribute("hidden");
    providaPanel.setAttribute("hidden", "true");
  } else if (idClinica === "provida") {
    providaBtn.setAttribute("aria-selected", "true");
    unimedBtn.setAttribute("aria-selected", "false");

    providaPanel.removeAttribute("hidden");
    unimedPanel.setAttribute("hidden", "true");
  }
}

  const track = document.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const dotsNav = document.querySelector('.carousel-dots');

  const visibleSlides = 2; // quantos cards aparecem por vez
  const totalDots = 3; // só 3 bolinhas
  let currentIndex = 0;

  // criar bolinhas (3)
  for (let i = 0; i < totalDots; i++) {
    const dot = document.createElement('button');
    if (i === 0) dot.classList.add('active');
    dotsNav.appendChild(dot);
  }

  const dots = Array.from(dotsNav.children);

  function updateCarousel() {
    const cardWidth = cards[0].getBoundingClientRect().width + 30;
    track.style.transform = `translateX(-${currentIndex * cardWidth * visibleSlides}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalDots;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalDots) % totalDots;
    updateCarousel();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
  });

