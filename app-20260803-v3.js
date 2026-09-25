(function () {
  const byId = (id) => document.getElementById(id);

  function contactIcon(name) {
    const icons = {
      identity: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"></circle><path d="M4 21a8 8 0 0 1 16 0"></path></svg>`,
      email: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path></svg>`,
      linkedin: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M8 11v6M8 8v.01M12 17v-6M12 14a3 3 0 0 1 6 0v3"></path></svg>`,
      github: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 3 5 5 0 0 0 19.3 1S18.2.6 15 2.7a15.4 15.4 0 0 0-8 0C3.8.6 2.7 1 2.7 1a5 5 0 0 0-.1 2 5.4 5.4 0 0 0-1.4 3.7c0 5.4 3.5 6.6 6.8 7C7.4 14.4 7 15.4 7 16.4V22"></path><path d="M7 19c-3 .9-3-1.5-4-2"></path></svg>`
    };
    return icons[name] || "";
  }

  function renderContacts() {
    return SITE.contacts.map((item) => {
      const icon = contactIcon(item.icon);
      if (item.type === "text") {
        return `<span class="contact-item contact-text">${icon}<span>${item.label}</span></span>`;
      }
      return `<a class="contact-item" href="${item.href}" target="_blank" rel="noopener">${icon}<span>${item.label}</span></a>`;
    }).join("");
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
      </div>
      <figure class="profile-card">
        <img src="${SITE.profilePhoto}" alt="Portrait of ${SITE.name}">
        <figcaption class="contact-links" aria-label="Contact information">${renderContacts()}</figcaption>
      </figure>`;
  }

  function renderResearchItem(item) {
    return `
      <article class="research-item">
        <h4>${item.title}. <span class="research-status">${item.status}</span></h4>
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
      <h2 id="news-heading" class="section-title"><span aria-hidden="true">🔥</span> News</h2>
      <ul class="news-list">
        ${SITE.news.map((item) => `
          <li class="news-item"><em>${item.date}:</em> ${item.text}</li>`).join("")}
      </ul>`;
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
