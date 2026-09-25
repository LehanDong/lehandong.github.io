(function () {
  const byId = (id) => document.getElementById(id);

  function renderContacts() {
    return SITE.contacts.map((item) => {
      if (item.type === "text") {
        return `<span class="contact-text">${item.label}</span>`;
      }
      return `<a href="${item.href}" target="_blank" rel="noopener">${item.label}</a>`;
    }).join('<span class="contact-divider" aria-hidden="true">/</span>');
  }

  function renderAbout() {
    const target = byId("about");
    if (!target) return;

    target.innerHTML = `
      <div class="about-copy">
        <p class="eyebrow">${SITE.tagline}</p>
        <h1 id="about-heading">${SITE.name}</h1>
        <p class="role">${SITE.role}</p>
        <div class="bio">${SITE.bio.map((paragraph) => `<p>${paragraph}</p>`).join("")}</div>
        <div class="contact-links" aria-label="Contact information">${renderContacts()}</div>
      </div>
      <figure class="profile-card">
        <img src="${SITE.profilePhoto}" alt="Portrait of ${SITE.name}">
      </figure>`;
  }

  function renderResearchItem(item) {
    return `
      <article class="research-item">
        <h4>${item.title}</h4>
        <p class="research-status">${item.status}</p>
      </article>`;
  }

  function renderResearch() {
    const target = byId("research");
    if (!target) return;

    target.innerHTML = `
      <h2 id="research-heading" class="section-title">Research</h2>
      <div class="research-group">
        <h3>Working Papers</h3>
        <div class="research-list">${SITE.workingPapers.map(renderResearchItem).join("")}</div>
      </div>
      <div class="research-group">
        <h3>Work in Progress</h3>
        <div class="research-list">${SITE.workInProgress.map(renderResearchItem).join("")}</div>
      </div>
      <div class="research-group">
        <h3>Selected Presentations</h3>
        <div class="presentation-list">
          ${SITE.presentations.map((item) => `
            <article class="presentation-item">
              <h4>${item.title}</h4>
              <p>${item.venue} · ${item.date}</p>
            </article>`).join("")}
        </div>
      </div>`;
  }

  function renderNews() {
    const target = byId("news");
    if (!target) return;

    target.innerHTML = `
      <h2 id="news-heading" class="section-title">News</h2>
      <div class="news-list">
        ${SITE.news.map((item) => `
          <p class="news-item"><em>${item.date}:</em> ${item.text}</p>`).join("")}
      </div>`;
  }

  function renderEducation() {
    const target = byId("education");
    if (!target) return;

    target.innerHTML = `
      <h2 id="education-heading" class="section-title">Education</h2>
      <div class="education-list">
        ${SITE.education.map((item) => `
          <article class="education-item">
            <div>
              <h3>${item.institution}</h3>
              <p>${item.degree}</p>
            </div>
            <p class="education-year">${item.year}</p>
          </article>`).join("")}
      </div>`;
  }

  function renderLife() {
    const target = byId("life");
    if (!target) return;

    target.innerHTML = `
      <h2 id="life-heading" class="section-title">Life</h2>
      <p class="life-copy">${SITE.life}</p>`;
  }

  function renderFooter() {
    const target = byId("footer");
    if (!target) return;
    target.innerHTML = `<p>© ${new Date().getFullYear()} ${SITE.name}</p><p>Last updated: ${SITE.updated}</p>`;
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAbout();
    renderResearch();
    renderNews();
    renderEducation();
    renderLife();
    renderFooter();
  });
})();
