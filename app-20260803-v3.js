(function () {
  const byId = (id) => document.getElementById(id);

  function renderAbout() {
    const target = byId("about");
    if (!target) return;

    const contactLinks = SITE.contacts.map((item) =>
      `<a href="${item.href}"${item.href.startsWith("http") ? ' target="_blank" rel="noopener"' : ""}>${item.label}</a>`
    ).join("<span aria-hidden=\"true\">/</span>");

    target.innerHTML = `
      <div class="about-copy">
        <p class="eyebrow">${SITE.tagline}</p>
        <h1 id="about-heading">${SITE.name}</h1>
        <p class="role">${SITE.role}</p>
        <div class="bio">${SITE.bio.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
        <p class="interest-line"><strong>Research interests:</strong> ${SITE.interestSummary.join(" · ")}</p>
        <div class="contact-links" aria-label="Contact links">${contactLinks}</div>
      </div>
      <figure class="profile-card" id="profile-carousel" aria-label="Profile photo carousel">
        <div class="profile-slides">
          ${SITE.profilePhotos.map((photo, index) => `
            <img class="profile-slide${index === 0 ? " is-active" : ""}"
              src="${photo}" alt="Portrait of ${SITE.name}, photo ${index + 1}">
          `).join("")}
        </div>
        <button class="profile-nav profile-prev" type="button" aria-label="Previous photo">&#8249;</button>
        <button class="profile-nav profile-next" type="button" aria-label="Next photo">&#8250;</button>
        <div class="profile-dots" aria-label="Choose a profile photo">
          ${SITE.profilePhotos.map((_, index) => `
            <button class="profile-dot${index === 0 ? " is-active" : ""}" type="button"
              aria-label="Show photo ${index + 1}" aria-pressed="${index === 0}"></button>
          `).join("")}
        </div>
      </figure>`;

    setupProfileCarousel();
  }

  function setupProfileCarousel() {
    const carousel = byId("profile-carousel");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll(".profile-slide"));
    const dots = Array.from(carousel.querySelectorAll(".profile-dot"));
    const previous = carousel.querySelector(".profile-prev");
    const next = carousel.querySelector(".profile-next");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let activeIndex = 0;
    let timer;

    function showPhoto(index) {
      activeIndex = (index + slides.length) % slides.length;
      slides.forEach((slide, slideIndex) => {
        slide.classList.toggle("is-active", slideIndex === activeIndex);
      });
      dots.forEach((dot, dotIndex) => {
        const isActive = dotIndex === activeIndex;
        dot.classList.toggle("is-active", isActive);
        dot.setAttribute("aria-pressed", String(isActive));
      });
    }

    function stopRotation() {
      window.clearInterval(timer);
    }

    function startRotation() {
      stopRotation();
      if (!reducedMotion && slides.length > 1) {
        timer = window.setInterval(() => showPhoto(activeIndex + 1), 5000);
      }
    }

    previous.addEventListener("click", () => {
      showPhoto(activeIndex - 1);
      startRotation();
    });
    next.addEventListener("click", () => {
      showPhoto(activeIndex + 1);
      startRotation();
    });
    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showPhoto(index);
        startRotation();
      });
    });
    carousel.addEventListener("mouseenter", stopRotation);
    carousel.addEventListener("mouseleave", startRotation);
    carousel.addEventListener("focusin", stopRotation);
    carousel.addEventListener("focusout", startRotation);

    startRotation();
  }

  function renderNews() {
    const target = byId("news");
    if (!target) return;

    target.innerHTML = `
      <h2 id="news-heading" class="section-title">News</h2>
      <div class="news-list">
        ${SITE.news.map((item) => `
          <article class="news-item">
            <img class="news-image" src="${item.image}" alt="${item.venue} — ${item.date}">
            <div class="news-copy">
              <p class="news-date">${item.date}</p>
              <h3>${item.title}</h3>
              <p class="news-venue">${item.venue}</p>
              <p>${item.description}</p>
            </div>
          </article>`).join("")}
      </div>`;
  }

  function renderResearch() {
    const target = byId("research-interests");
    if (!target) return;

    target.innerHTML = SITE.researchInterests.map((item) => `
      <section class="interest-section">
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </section>`).join("");
  }

  function renderProjects() {
    const target = byId("projects");
    if (!target) return;

    target.innerHTML = `<div class="project-list">${SITE.projects.map((item) => `
      <article class="project-item">
        <div class="project-date">${item.date}</div>
        <div>
          <h2>${item.title}</h2>
          <p class="project-meta">${item.meta}</p>
          <p>${item.description}</p>
        </div>
      </article>`).join("")}</div>`;
  }

  function renderCV() {
    const target = byId("cv");
    if (!target) return;

    target.innerHTML = `<iframe class="cv-frame" src="${SITE.cvFile}#view=FitH"
      title="Curriculum Vitae"></iframe>`;
  }

  function renderFooter() {
    const target = byId("footer");
    if (!target) return;
    target.innerHTML = `<p>© ${new Date().getFullYear()} ${SITE.name}</p><p>Last updated: ${SITE.updated}</p>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAbout();
    renderNews();
    renderResearch();
    renderProjects();
    renderCV();
    renderFooter();
  });
})();
