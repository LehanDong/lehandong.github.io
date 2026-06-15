/* =============================================================
   Rendering — you normally won't need to touch this file.
   It reads SITE (from data.js) and fills whichever page is open.
   ============================================================= */

(function () {
  function $(id) { return document.getElementById(id); }

  function contactLine() {
    const parts = [
      `<a href="mailto:${SITE.email}">${SITE.email}</a>`,
      `<a href="${SITE.linkedin}" target="_blank" rel="noopener">linkedin</a>`,
      `<a href="${SITE.github}" target="_blank" rel="noopener">github</a>`
    ];
    return parts.join("  ·  ");
  }

  function renderHome() {
    const photos = SITE.photos || [];
    const photoHtml = photos.length ? `
      <div class="photo-swap" id="photo-swap"${photos.length > 1 ? ' title="click to change photo"' : ""}>
        ${photos.map((src, i) => `<img src="${src}" alt="${SITE.name}"${i === 0 ? ' class="active"' : ""}>`).join("")}
        ${photos.length > 1 ? `<span class="photo-hint">↺ swap</span>` : ""}
      </div>` : "";

    const text = `
      <div class="home-text">
        <h1>${SITE.name}</h1>
        <p class="tagline">${SITE.tagline}</p>
        <div class="intro">${SITE.home.map(p => `<p>${p}</p>`).join("")}</div>
        <p class="contact-line">${contactLine()}</p>
      </div>`;

    $("home").innerHTML = photos.length
      ? `<div class="home-grid">${photoHtml}${text}</div>`
      : text;

    if (photos.length > 1) setupPhotoSwap();
  }

  function setupPhotoSwap() {
    const box = $("photo-swap");
    if (!box) return;
    const imgs = Array.prototype.slice.call(box.querySelectorAll("img"));
    if (imgs.length < 2) return;

    let i = 0;
    function show(n) {
      imgs.forEach(function (im, k) { im.classList.toggle("active", k === n); });
      i = n;
    }
    function next() { show((i + 1) % imgs.length); }

    box.addEventListener("click", next);

    const reduce = (typeof window !== "undefined" && window.matchMedia)
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;
    if (!reduce) setInterval(next, 4500);
  }

  function renderResearch() {
    const projects = SITE.research.map(r => `
      <div class="item">
        <div class="item-date">${r.date}</div>
        <div>
          <p class="item-title">${
            r.link
              ? `<a href="${r.link}" target="_blank" rel="noopener">${r.title}</a>`
              : r.title
          }</p>
          ${r.meta ? `<p class="item-meta">${r.meta}</p>` : ""}
          <p class="item-desc">${r.desc}</p>
        </div>
      </div>`).join("");

    let html = `<section><h2>Research Projects</h2>${projects}</section>`;

    if (SITE.presentations && SITE.presentations.length) {
      const pres = SITE.presentations.map(p => `
        <div class="item">
          <div class="item-date">${p.date}</div>
          <div>
            <p class="item-title" style="font-weight:400; font-style:italic;">${p.title}</p>
            <p class="item-desc">${p.venue}</p>
          </div>
        </div>`).join("");
      html += `<section><h2>Presentations</h2>${pres}</section>`;
    }

    $("research").innerHTML = html;
  }

  function renderCV() {
    $("cv").innerHTML =
      `<a class="cv-download" href="${SITE.cvFile}" target="_blank" rel="noopener">↓ Download PDF</a>` +
      `<iframe class="cv-frame" src="${SITE.cvFile}" title="Curriculum Vitae"></iframe>`;
  }

  function renderFooter() {
    const f = $("footer");
    if (f) f.innerHTML = `<span>Last updated: ${SITE.updated}</span><span>Built with HTML &amp; care.</span>`;
  }

  function renderNavName() {
    document.querySelectorAll(".nav-name").forEach(el => { el.textContent = SITE.name; });
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderNavName();
    if ($("home"))     renderHome();
    if ($("research")) renderResearch();
    if ($("cv"))       renderCV();
    renderFooter();
  });
})();
