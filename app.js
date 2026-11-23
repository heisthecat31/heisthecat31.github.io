(() => {
  const USER = window.GITHUB_USER;
  const PROJECTS = window.PROJECTS;
  const $ = (s) => document.querySelector(s);

  const LANG_COLORS = {
    "C++": "#f34b7d", C: "#a8b9cc", "C#": "#178600", Python: "#3572A5", Go: "#00ADD8",
    Java: "#b07219", JavaScript: "#f1e05a", Kotlin: "#A97BFF", Dart: "#00B4AB", Rust: "#dea584",
  };
  const CATEGORIES = [
    { id: "all", label: "All" },
    { id: "mod", label: "Echo VR mods" },
    { id: "tool", label: "Tools & apps" },
    { id: "lone", label: "Lone Echo" },
    { id: "other", label: "Other" },
    { id: "fork", label: "Forks & contributions" },
  ];

  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const repoUrl = (p) => `https://github.com/${USER}/${p.repo}`;

  // Deterministic gradient cover for projects without images.
  function coverStyle(name) {
    let h = 0;
    for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
    const a = h % 360, b = (a + 40 + (h >> 8) % 80) % 360;
    return `background: linear-gradient(135deg, hsl(${a} 70% 35%), hsl(${b} 75% 18%))`;
  }
  function initials(name) {
    const words = name.replace(/[^A-Za-z0-9 ]/g, " ").split(/\s+/).filter(Boolean);
    return (words.length > 1 ? words[0][0] + words[1][0] : name.slice(0, 2)).toUpperCase();
  }

  function card(p) {
    const imgs = p.images || [];
    const media = imgs.length
      ? `<div class="media" data-repo="${esc(p.repo)}" role="button" tabindex="0" aria-label="View ${esc(p.name)} images">
           <img src="${esc(imgs[0])}" alt="${esc(p.name)} screenshot" loading="lazy">
           ${imgs.length > 1 ? `<div class="dots">${imgs.map((_, i) => `<i class="${i ? "" : "on"}"></i>`).join("")}</div>
           <span class="count">${imgs.length} images</span>` : ""}
         </div>`
      : `<div class="media"><div class="cover" style="${coverStyle(p.name)}"><div>${esc(initials(p.name))}<small>${esc(p.lang || "")}</small></div></div></div>`;

    const tags = [
      p.lang && `<span class="tag lang" style="--dot:${LANG_COLORS[p.lang] || "#888"}">${esc(p.lang)}</span>`,
      p.fork && `<span class="tag fork">fork</span>`,
      p.obsolete && `<span class="tag old">obsolete</span>`,
      `<span class="tag stars" data-stars="${esc(p.repo)}" hidden></span>`,
    ].filter(Boolean).join("");

    return `<article class="card">
      ${media}
      <div class="body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.desc)}</p>
        <div class="meta">${tags}</div>
        <div class="links">
          <a href="${repoUrl(p)}" target="_blank" rel="noopener">Source</a>
          <a href="${repoUrl(p)}/releases" target="_blank" rel="noopener">Releases</a>
          ${p.homepage ? `<a href="${esc(p.homepage)}" target="_blank" rel="noopener">Website</a>` : ""}
        </div>
      </div>
    </article>`;
  }

  // ---------- render ----------
  $("#featured").innerHTML = PROJECTS.filter((p) => p.featured).map(card).join("");

  let starMap = null;
  function applyStars() {
    if (!starMap) return;
    document.querySelectorAll("[data-stars]").forEach((el) => {
      const n = starMap[el.dataset.stars];
      if (n > 0) { el.textContent = `★ ${n}`; el.hidden = false; }
    });
  }

  let category = "all";
  const matches = (p, cat) =>
    cat === "all" || (cat === "fork" ? p.fork : p.category === cat);

  $("#chips").innerHTML = CATEGORIES.map((c) =>
    `<button class="chip" role="tab" data-cat="${c.id}" aria-selected="${c.id === "all"}">${c.label}<b>${PROJECTS.filter((p) => matches(p, c.id)).length}</b></button>`
  ).join("");

  function renderGrid() {
    const q = $("#search").value.trim().toLowerCase();
    const list = PROJECTS.filter((p) => matches(p, category) &&
      (!q || [p.name, p.desc, p.lang, p.repo].join(" ").toLowerCase().includes(q)));
    $("#grid").innerHTML = list.map(card).join("");
    $("#empty").hidden = list.length > 0;
    applyStars();
  }

  $("#chips").addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (!btn) return;
    category = btn.dataset.cat;
    document.querySelectorAll(".chip").forEach((c) => c.setAttribute("aria-selected", c === btn));
    renderGrid();
  });
  $("#search").addEventListener("input", renderGrid);
  renderGrid();

  // ---------- stats ----------
  const langs = new Set(PROJECTS.map((p) => p.lang).filter(Boolean));
  const stat = (n, l) => `<div><b>${n}</b>${l}</div>`;
  function renderStats(stars) {
    $("#stats").innerHTML =
      stat(PROJECTS.length, "projects") +
      stat(PROJECTS.filter((p) => !p.fork).length, "originals") +
      stat(langs.size, "languages") +
      (stars != null ? stat(stars, "stars") : "");
  }
  renderStats();

  // ---------- live star counts (optional; fails quietly) ----------
  fetch(`https://api.github.com/users/${USER}/repos?per_page=100`)
    .then((r) => (r.ok ? r.json() : Promise.reject()))
    .then((repos) => {
      starMap = Object.fromEntries(repos.map((r) => [r.name, r.stargazers_count]));
      renderStats(repos.reduce((s, r) => s + r.stargazers_count, 0));
      applyStars();
    })
    .catch(() => {});

  // ---------- slideshow on hover ----------
  const timers = new WeakMap();
  document.addEventListener("mouseover", (e) => {
    const m = e.target.closest(".media[data-repo]");
    if (!m || timers.has(m)) return;
    const imgs = PROJECTS.find((p) => p.repo === m.dataset.repo).images;
    if (imgs.length < 2) return;
    const img = m.querySelector("img");
    const dots = m.querySelectorAll(".dots i");
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % imgs.length;
      img.src = imgs[i];
      dots.forEach((d, j) => d.classList.toggle("on", j === i));
    }, 1300);
    timers.set(m, t);
    m.addEventListener("mouseleave", () => { clearInterval(t); timers.delete(m); }, { once: true });
  });

  // ---------- lightbox ----------
  const lb = $("#lightbox"), lbImg = $("#lb-img"), lbCap = $("#lb-cap");
  let lbList = [], lbIdx = 0, lbName = "";
  function show(i) {
    lbIdx = (i + lbList.length) % lbList.length;
    lbImg.src = lbList[lbIdx];
    lbImg.alt = `${lbName} image ${lbIdx + 1}`;
    lbCap.textContent = `${lbName} — ${lbIdx + 1} / ${lbList.length}`;
    $("#lb-prev").hidden = $("#lb-next").hidden = lbList.length < 2;
  }
  function open(repo) {
    const p = PROJECTS.find((x) => x.repo === repo);
    lbList = p.images; lbName = p.name;
    show(0);
    lb.hidden = false;
    document.body.style.overflow = "hidden";
  }
  function close() { lb.hidden = true; document.body.style.overflow = ""; }
  document.addEventListener("click", (e) => {
    const m = e.target.closest(".media[data-repo]");
    if (m) open(m.dataset.repo);
  });
  document.addEventListener("keydown", (e) => {
    const m = e.target.closest?.(".media[data-repo]");
    if (m && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); open(m.dataset.repo); }
    if (lb.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(lbIdx - 1);
    if (e.key === "ArrowRight") show(lbIdx + 1);
  });
  $("#lb-close").onclick = close;
  $("#lb-prev").onclick = () => show(lbIdx - 1);
  $("#lb-next").onclick = () => show(lbIdx + 1);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
})();
