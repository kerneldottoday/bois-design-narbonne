function initNav() {
  const nav = document.querySelector(".nav");
  const toggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (nav) {
    window.addEventListener("scroll", () => {
      nav.classList.toggle("scrolled", window.scrollY > 40);
    });
  }

  if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
      document.body.style.overflow = mobileMenu.classList.contains("open")
        ? "hidden"
        : "";
    });

    mobileMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.classList.remove("open");
        mobileMenu.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a, .mobile-menu a").forEach((a) => {
    const href = a.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) {
      a.classList.add("active");
    }
  });
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );
  els.forEach((el) => observer.observe(el));
}

function initStickyCta() {
  const bar = document.querySelector(".sticky-cta");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    bar.classList.toggle("visible", window.scrollY > window.innerHeight * 0.5);
  });
}

function imageFallbackAttr() {
  return `onerror="this.onerror=null;this.src='${IMAGES.fallback}'"`;
}

function initImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "true";
    img.addEventListener("error", () => {
      if (img.src !== IMAGES.fallback) img.src = IMAGES.fallback;
    });
  });
}

function renderProjectCard(project) {
  const cat = CATEGORIES[project.categorie] || project.categorie;
  return `
    <a href="projet.html?slug=${project.slug}" class="project-card reveal">
      <div class="project-card__image">
        <img src="${project.image}" alt="${project.titre} — ${cat} sur mesure BOIS DESIGN" loading="lazy" ${imageFallbackAttr()}>
      </div>
      <div class="project-card__meta">
        <div class="project-card__cat">${cat}</div>
        <div class="project-card__title">${project.titre}</div>
        <div class="project-card__info">${project.annee} · ${project.lieu}</div>
      </div>
    </a>
  `;
}

function initHomeProjects() {
  const grid = document.getElementById("featured-projects");
  if (!grid) return;
  const featured = PROJECTS.filter((p) => p.featured);
  grid.innerHTML = featured.map(renderProjectCard).join("");
  initReveal();
}

function initRealisationsPage() {
  const grid = document.getElementById("all-projects");
  const filters = document.getElementById("filters");
  if (!grid) return;

  let active = "all";

  function render(filter) {
    const list =
      filter === "all"
        ? PROJECTS
        : PROJECTS.filter((p) => p.categorie === filter);
    grid.innerHTML = list.map(renderProjectCard).join("");
    initReveal();
  }

  if (filters) {
    filters.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;
      filters.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      active = btn.dataset.filter;
      render(active);
    });
  }

  render(active);
}

function initProjectDetail() {
  const params = new URLSearchParams(location.search);
  const slug = params.get("slug");
  const project = getProject(slug);

  if (!project) {
    document.getElementById("project-content").innerHTML =
      '<p>Projet introuvable. <a href="realisations.html">Retour aux réalisations</a></p>';
    return;
  }

  document.title = `${project.titre} — BOIS DESIGN`;

  const cat = CATEGORIES[project.categorie];
  const { prev, next } = getAdjacentProjects(slug);

  document.getElementById("project-content").innerHTML = `
    <div class="project-hero">
      <img src="${project.image}" alt="${project.titre}" ${imageFallbackAttr()}>
    </div>
    <div class="container section section--tight">
      <div class="overline">${cat}</div>
      <h1 class="h1">${project.titre}</h1>
      <div class="project-meta">
        <span>${project.annee}</span>
        <span>${project.lieu}</span>
        <span>${project.surface}</span>
        <span>${project.type_client}</span>
      </div>
      <div class="project-body">
        ${project.description.map((p) => `<p>${p}</p>`).join("")}
      </div>
      <div class="materials">
        ${project.materiaux.map((m) => `<span class="material-tag">${m}</span>`).join("")}
      </div>
      <div class="project-gallery">
        ${project.galerie.map((img, i) => `<img src="${img}" alt="${project.titre} — vue ${i + 1}" loading="lazy" ${imageFallbackAttr()}>`).join("")}
      </div>
      <div class="project-nav">
        <a href="projet.html?slug=${prev.slug}" class="btn--text">← ${prev.titre}</a>
        <a href="contact.html" class="btn btn--primary">Un projet similaire ?</a>
        <a href="projet.html?slug=${next.slug}" class="btn--text">${next.titre} →</a>
      </div>
    </div>
  `;
}

function initContactForm() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("form-success");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    form.style.display = "none";
    if (success) success.classList.add("visible");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initReveal();
  initStickyCta();
  initHomeProjects();
  initRealisationsPage();
  initProjectDetail();
  initContactForm();
  initImageFallbacks();
});
