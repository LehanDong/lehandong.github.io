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
      <figure class="profile-card">
        <img src="${SITE.profilePhoto}" alt="Portrait of ${SITE.name}">
      </figure>`;
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

    const isLocal = ["localhost", "127.0.0.1", ""].includes(window.location.hostname);
    const pdfUrl = new URL(SITE.cvFile, window.location.href).href;
    const viewerUrl = isLocal
      ? SITE.cvFile
      : `https://docs.google.com/gview?embedded=1&url=${encodeURIComponent(pdfUrl)}`;

    target.innerHTML = `<iframe class="cv-frame" src="${viewerUrl}" title="Curriculum Vitae"></iframe>`;
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
