// PSIS Content Mentoring & Video OS - Core Application Logic
// Enterprise Edition v2.5 with Dark/Light Theme, Campus Explorer, Battlecards, Idea Engine & Studio Tools

document.addEventListener("DOMContentLoaded", () => {
  if (typeof PSIS_DATA === "undefined") {
    console.error("PSIS_DATA not loaded!");
    return;
  }

  // State Management
  const state = {
    currentCategory: "all",
    searchQuery: "",
    starredLessons: JSON.parse(localStorage.getItem("psis_starred_lessons") || "[]"),
    checkedChecklist: JSON.parse(localStorage.getItem("psis_checklist_enterprise") || "{}"),
    activeLessonIndex: 0,
    currentTab: "lessons",
    currentTheme: localStorage.getItem("psis_theme") || "dark",
    activeWeekFilter: "all"
  };

  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);

  const elements = {
    // Theme Switcher
    btnThemeToggle: $("#btnThemeToggle"),
    themeIcon: $("#themeIcon"),
    themeLabel: $("#themeLabel"),

    // Navigation
    navButtons: $$(".nav-item-btn"),
    tabSections: $$(".tab-section-content"),
    
    // Lessons
    lessonsGrid: $("#lessonsGrid"),
    searchInput: $("#searchInput"),
    resultsStats: $("#resultsStats"),
    categoryChips: $("#categoryChips"),

    // Idea Generator
    btnGenerateIdea: $("#btnGenerateIdea"),
    ideaOutputCard: $("#ideaOutputCard"),
    ideaOutputText: $("#ideaOutputText"),
    
    // Frameworks & Brand
    processGrid: $("#processGrid"),
    flowContainer: $("#flowContainer"),
    funnelGrid: $("#funnelGrid"),
    colorPaletteGrid: $("#colorPaletteGrid"),
    facilitiesTags: $("#facilitiesTags"),
    programsTags: $("#programsTags"),

    // Campuses & Battlecards
    campusExplorerGrid: $("#campusExplorerGrid"),
    competitorBattlecardsGrid: $("#competitorBattlecardsGrid"),
    
    // Checklist
    checklistPhasesContainer: $("#checklistPhasesContainer"),
    progressBarFill: $("#progressBarFill"),
    progressScoreText: $("#progressScoreText"),
    checklistReadinessBadge: $("#checklistReadinessBadge"),
    btnResetChecklist: $("#btnResetChecklist"),
    btnCopyChecklist: $("#btnCopyChecklist"),
    
    // Script Studio
    plannerPresetSelector: $("#plannerPresetSelector"),
    plannerStatsBadge: $("#plannerStatsBadge"),
    plannerCampus: $("#plannerCampus"),
    plannerTopic: $("#plannerTopic"),
    plannerPersona: $("#plannerPersona"),
    plannerFunnel: $("#plannerFunnel"),
    plannerPainPoint: $("#plannerPainPoint"),
    plannerHookType: $("#plannerHookType"),
    plannerHookText: $("#plannerHookText"),
    plannerAction: $("#plannerAction"),
    plannerProof: $("#plannerProof"),
    plannerMeaning: $("#plannerMeaning"),
    plannerCTA: $("#plannerCTA"),
    scriptOutput: $("#scriptOutput"),
    btnCopyScript: $("#btnCopyScript"),
    btnDownloadTxt: $("#btnDownloadTxt"),
    btnDownloadMd: $("#btnDownloadMd"),

    // Roadmap
    weekNavigatorPills: $("#weekNavigatorPills"),
    roadmapTableBody: $("#roadmapTableBody"),
    
    // Modal
    lessonModal: $("#lessonModal"),
    btnCloseModal: $("#btnCloseModal"),
    btnModalPrev: $("#btnModalPrev"),
    btnModalNext: $("#btnModalNext"),
    btnModalStar: $("#btnModalStar"),
    btnModalCopy: $("#btnModalCopy"),
    modalBadge: $("#modalBadge"),
    modalTitle: $("#modalTitle"),
    modalKmTitle: $("#modalKmTitle"),
    modalCore: $("#modalCore"),
    modalLearn: $("#modalLearn"),
    modalAction: $("#modalAction"),
    modalDosList: $("#modalDosList"),
    modalDontsList: $("#modalDontsList"),
    modalExample: $("#modalExample"),
    modalTags: $("#modalTags"),
    
    // Toast
    toast: $("#toast"),
    toastMsg: $("#toastMsg"),
    
    // Global Actions
    btnPrintDoc: $("#btnPrintDoc"),
    btnHeaderPlanner: $("#btnHeaderPlanner")
  };

  // ==========================================
  // 1. Theme Management (Obsidian Dark / Light)
  // ==========================================
  function applyTheme(theme) {
    state.currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("psis_theme", theme);

    if (elements.themeIcon && elements.themeLabel) {
      if (theme === "dark") {
        elements.themeIcon.textContent = "☀️";
        elements.themeLabel.textContent = "Light Mode";
      } else {
        elements.themeIcon.textContent = "🌙";
        elements.themeLabel.textContent = "Dark Mode";
      }
    }
  }

  if (elements.btnThemeToggle) {
    elements.btnThemeToggle.addEventListener("click", () => {
      const nextTheme = state.currentTheme === "dark" ? "light" : "dark";
      applyTheme(nextTheme);
      showToast(`🎨 បានប្តូរទៅកាន់ ${nextTheme === "dark" ? "Obsidian Dark" : "Executive Light"} Theme`);
    });
  }

  applyTheme(state.currentTheme);

  // ==========================================
  // 2. Toast Notification
  // ==========================================
  function showToast(message) {
    if (!elements.toast) return;
    elements.toastMsg.textContent = message;
    elements.toast.classList.add("show");
    setTimeout(() => {
      elements.toast.classList.remove("show");
    }, 2800);
  }

  // ==========================================
  // 3. Category Segmented Chips
  // ==========================================
  const categories = [
    { id: "all", label: "មេរៀនទាំងអស់ (33)", icon: "📚" },
    { id: "foundation", label: "មូលដ្ឋានគ្រឹះ & Client", icon: "🏛️" },
    { id: "audience", label: "Audience & Persona", icon: "🎯" },
    { id: "strategy", label: "Strategy & Funnel", icon: "📈" },
    { id: "storytelling", label: "Hook & Storytelling", icon: "🎬" },
    { id: "trust", label: "Trust, Value & Teacher", icon: "🤝" },
    { id: "optimization", label: "Review & Optimize", icon: "⚙️" },
    { id: "starred", label: "បានចំណាំទុក ★", icon: "⭐" }
  ];

  function initCategories() {
    if (!elements.categoryChips) return;
    elements.categoryChips.innerHTML = "";
    
    categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `category-segment-btn ${cat.id === state.currentCategory ? "active" : ""}`;
      btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.label}</span>`;
      btn.addEventListener("click", () => {
        state.currentCategory = cat.id;
        $$(".category-segment-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderLessons();
      });
      elements.categoryChips.appendChild(btn);
    });
  }

  // Category Meta Mapping
  const categoryMeta = {
    foundation: { label: "មូលដ្ឋានគ្រឹះ", color: "#d97706", bg: "rgba(217, 119, 6, 0.15)" },
    audience: { label: "Audience & Pain", color: "#db2777", bg: "rgba(219, 39, 119, 0.15)" },
    strategy: { label: "Strategy & Funnel", color: "#2563eb", bg: "rgba(37, 99, 235, 0.15)" },
    storytelling: { label: "Hook & Story", color: "#7c3aed", bg: "rgba(124, 58, 237, 0.15)" },
    trust: { label: "Trust & Value", color: "#059669", bg: "rgba(5, 150, 105, 0.15)" },
    optimization: { label: "Optimize & Ads", color: "#0891b2", bg: "rgba(8, 145, 178, 0.15)" }
  };

  // ==========================================
  // 4. Render 33 Lessons Grid
  // ==========================================
  function renderLessons() {
    if (!elements.lessonsGrid) return;
    elements.lessonsGrid.innerHTML = "";

    const query = state.searchQuery.toLowerCase().trim();

    const filtered = PSIS_DATA.lessons.filter(lesson => {
      // Category match
      let matchesCat = true;
      if (state.currentCategory === "starred") {
        matchesCat = state.starredLessons.includes(lesson.id);
      } else if (state.currentCategory !== "all") {
        matchesCat = lesson.category === state.currentCategory;
      }

      if (!matchesCat) return false;

      // Search match
      if (!query) return true;
      const haystack = `${lesson.id} ${lesson.titleEn} ${lesson.titleKm} ${lesson.subtitle} ${lesson.core} ${lesson.learn} ${lesson.action} ${lesson.example} ${(lesson.tags || []).join(" ")}`.toLowerCase();
      return haystack.includes(query);
    });

    if (elements.resultsStats) {
      elements.resultsStats.textContent = `${filtered.length} / ${PSIS_DATA.lessons.length} មេរៀន`;
    }

    if (filtered.length === 0) {
      elements.lessonsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: var(--bg-surface); border: 1px dashed var(--border-subtle); border-radius: var(--radius-lg);">
          <span style="font-size: 38px;">🔍</span>
          <h3 style="margin-top: 10px; color: var(--text-title);">រកមិនឃើញមេរៀនដែលត្រូវនឹង «${state.searchQuery}» ទេ</h3>
          <p style="color: var(--text-muted); font-size: 14px;">សូមសាកល្បងពាក្យគន្លឹះផ្សេង ដូចជា Hook, Story, Trust, Persona, Campus ឬជ្រើសរើសប្រភេទទាំងអស់។</p>
        </div>
      `;
      return;
    }

    filtered.forEach(lesson => {
      const isStarred = state.starredLessons.includes(lesson.id);
      const meta = categoryMeta[lesson.category] || { label: "ទូទៅ", color: "#2563eb", bg: "rgba(37, 99, 235, 0.15)" };

      const card = document.createElement("article");
      card.className = "enterprise-lesson-card";
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", `បើកមើលមេរៀនទី ${lesson.id}: ${lesson.titleEn}`);

      card.innerHTML = `
        <div class="card-top-status-row">
          <div style="display:flex; align-items:center;">
            <span class="lesson-index-tag">LESSON ${String(lesson.id).padStart(2, "0")}</span>
            <span class="category-indicator-pill" style="color: ${meta.color}; background: ${meta.bg};">${meta.label}</span>
          </div>
          <button class="card-bookmark-btn ${isStarred ? "starred" : ""}" data-id="${lesson.id}" title="${isStarred ? "ដកចំណាំ" : "ចំណាំទុក"}">
            ${isStarred ? "★" : "☆"}
          </button>
        </div>

        <h3 class="lesson-title-english">${lesson.titleEn}</h3>
        <div class="lesson-title-khmer">${lesson.titleKm}</div>

        <div class="lesson-core-quote">${lesson.core}</div>

        <div class="card-meta-footer-row">
          <span class="tag-label-text">#${(lesson.tags && lesson.tags[0]) || "Mentoring"}</span>
          <span class="read-details-link">
            <span>អានលម្អិត</span>
            <span>→</span>
          </span>
        </div>
      `;

      // Bookmark action
      const bookmarkBtn = card.querySelector(".card-bookmark-btn");
      bookmarkBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleStar(lesson.id);
      });

      // Open Modal
      card.addEventListener("click", () => {
        const fullIndex = PSIS_DATA.lessons.findIndex(l => l.id === lesson.id);
        openModal(fullIndex);
      });

      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          const fullIndex = PSIS_DATA.lessons.findIndex(l => l.id === lesson.id);
          openModal(fullIndex);
        }
      });

      elements.lessonsGrid.appendChild(card);
    });
  }

  function toggleStar(lessonId) {
    const idx = state.starredLessons.indexOf(lessonId);
    if (idx > -1) {
      state.starredLessons.splice(idx, 1);
      showToast(`☆ បានដកមេរៀនទី ${lessonId} ចេញពីចំណាំ`);
    } else {
      state.starredLessons.push(lessonId);
      showToast(`★ បានចំណាំមេរៀនទី ${lessonId} ទុក`);
    }
    localStorage.setItem("psis_starred_lessons", JSON.stringify(state.starredLessons));
    renderLessons();
    updateModalStarButton();
  }

  // ==========================================
  // 5. Creative Reel Idea Engine (Interactive)
  // ==========================================
  const ideaHooks = [
    { hook: "«រៀនបានពិន្ទុល្អ… តែបើជួបបញ្ហាជាក់ស្តែង គាត់ចេះដោះស្រាយដោយរបៀបណា?»", program: "Coding & Robotics", angle: "សំណួរចាក់ដោត (Think)" },
    { hook: "«ម៉ាក់ប៉ាធ្វើការពេញមួយថ្ងៃ… តើកូននៅសាលាហូបបាយ និងគេងលក់ស្រួលដែរឬទេ?»", program: "Nap & Lunch Routine", angle: "កង្វល់ម៉ាក់ប៉ា (Pain Point)" },
    { hook: "«កូនទន្ទេញចាំ Vocabulary រាប់រយពាក្យ… តែហេតុអីពេលជួបជនបរទេសបែរជាងាកមុខចេញ?»", program: "ELIF Fun English", angle: "ភាពភ្ញាក់ផ្អើល (Shock)" },
    { hook: "«ពីក្មេងម្នាក់ដែលខ្លាចទឹក និងយំពេលចុះអាង… ឥឡូវហែលបាន ១០០ ម៉ែត្រយ៉ាងជឿជាក់!»", program: "Swimming Class", angle: "ដំណើរផ្លាស់ប្តូរ (Before/After)" },
    { hook: "«តើការរៀន Code តាំងពីអាយុ ៦ ឆ្នាំ ជួយអ្វីដល់ការគិតរបស់កុមារ?»", program: "CodeMonkey Challenge", angle: "ពន្យល់ពីអនាគត (Future Benefit)" },
    { hook: "«ពិភពលោកផ្លាស់ប្តូរលឿន… តើអ្វីដែលកូនត្រូវការបំផុតក្រៅពីពិន្ទុលេខ ១?»", program: "Traditional Morals & Meditation", angle: "សីលធម៌ និងគុណធម៌ (Character)" },
    { hook: "«ពេលសិស្សធ្វើការជាក្រុម ខ្វែងគំនិតគ្នា… តើលោកគ្រូអ្នកគ្រូជួយសម្របសម្រួលយ៉ាងដូចម្តេច?»", program: "Group Discussion & Teamwork", angle: "ភាពកក់ក្តៅរបស់គ្រូ (Teacher Compassion)" },
    { hook: "«មិនបាច់ទន្ទេញ… តែអាចនិយាយភាសាអង់គ្លេស និងចិនបានដោយធម្មជាតិ!»", program: "Trilingual Curriculum", angle: "ភាពខុសប្លែកគ្នា (Differentiation)" }
  ];

  if (elements.btnGenerateIdea) {
    elements.btnGenerateIdea.addEventListener("click", () => {
      const randomIdea = ideaHooks[Math.floor(Math.random() * ideaHooks.length)];
      if (elements.ideaOutputCard && elements.ideaOutputText) {
        elements.ideaOutputText.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 4px;">
            <b style="color: #7c3aed;">💡 មុំគំនិត Reel ណែនាំ៖ ${randomIdea.angle}</b>
            <span style="font-size:12px; color: var(--text-muted); background: var(--bg-page); padding: 2px 8px; border-radius: var(--radius-pill); border: 1px solid var(--border-subtle);">${randomIdea.program}</span>
          </div>
          <div style="font-size: 15.5px; font-weight: 600; color: var(--text-title); margin-top: 4px;">
            ${randomIdea.hook}
          </div>
          <div style="margin-top: 8px; font-size: 12.5px; color: var(--text-muted);">
            👉 <b>សកម្មភាពថតបន្ទាប់៖</b> ថត Close-up ទឹកមុខសិស្សកំពុងផ្ចង់គិត → បង្ហាញគ្រូជួយលើកទឹកចិត្ត → បញ្ចប់ដោយស្នាមញញឹមសម្រេចបានជោគជ័យ។
          </div>
        `;
        elements.ideaOutputCard.classList.add("active");
        showToast("🎲 បានបង្កើតគំនិត Reel ថ្មីជោគជ័យ!");
      }
    });
  }

  // ==========================================
  // 6. Lesson Detail Floating Sheet Modal
  // ==========================================
  function openModal(index) {
    if (index < 0 || index >= PSIS_DATA.lessons.length) return;
    state.activeLessonIndex = index;
    const lesson = PSIS_DATA.lessons[index];

    elements.modalBadge.textContent = `LESSON ${String(lesson.id).padStart(2, "0")} / 33`;
    elements.modalTitle.textContent = lesson.titleEn;
    elements.modalKmTitle.textContent = lesson.titleKm;
    elements.modalCore.textContent = lesson.core;
    elements.modalLearn.textContent = lesson.learn;
    elements.modalAction.textContent = lesson.action;
    elements.modalExample.textContent = lesson.example;

    // Do's and Don'ts
    if (elements.modalDosList && elements.modalDontsList) {
      elements.modalDosList.innerHTML = "";
      (lesson.dos || ["ផ្តោតលើគុណតម្លៃពិត"]).forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        elements.modalDosList.appendChild(li);
      });

      elements.modalDontsList.innerHTML = "";
      (lesson.donts || ["ចៀសវាងការខ្វះផែនការ"]).forEach(d => {
        const li = document.createElement("li");
        li.textContent = d;
        elements.modalDontsList.appendChild(li);
      });
    }

    // Tags
    if (elements.modalTags) {
      elements.modalTags.innerHTML = "";
      if (lesson.tags) {
        lesson.tags.forEach(t => {
          const sp = document.createElement("span");
          sp.className = "tag-badge-item";
          sp.textContent = `#${t}`;
          elements.modalTags.appendChild(sp);
        });
      }
    }

    elements.btnModalPrev.disabled = index === 0;
    elements.btnModalNext.disabled = index === PSIS_DATA.lessons.length - 1;

    updateModalStarButton();

    if (!elements.lessonModal.open) {
      elements.lessonModal.showModal();
    }
    elements.lessonModal.scrollTop = 0;
  }

  function updateModalStarButton() {
    const currentLesson = PSIS_DATA.lessons[state.activeLessonIndex];
    if (!currentLesson || !elements.btnModalStar) return;
    const isStarred = state.starredLessons.includes(currentLesson.id);
    elements.btnModalStar.textContent = isStarred ? "★ បានចំណាំទុក" : "☆ ចំណាំមេរៀន";
  }

  if (elements.btnCloseModal) {
    elements.btnCloseModal.addEventListener("click", () => elements.lessonModal.close());
  }

  if (elements.btnModalPrev) {
    elements.btnModalPrev.addEventListener("click", () => openModal(state.activeLessonIndex - 1));
  }

  if (elements.btnModalNext) {
    elements.btnModalNext.addEventListener("click", () => openModal(state.activeLessonIndex + 1));
  }

  if (elements.btnModalStar) {
    elements.btnModalStar.addEventListener("click", () => {
      const currentLesson = PSIS_DATA.lessons[state.activeLessonIndex];
      if (currentLesson) toggleStar(currentLesson.id);
    });
  }

  if (elements.btnModalCopy) {
    elements.btnModalCopy.addEventListener("click", () => {
      const l = PSIS_DATA.lessons[state.activeLessonIndex];
      const text = `[PSIS Content Playbook - Lesson ${l.id}] ${l.titleEn} (${l.titleKm})\n\n` +
        `• គំនិតស្នូល: ${l.core}\n\n` +
        `• អ្វីដែលត្រូវយល់: ${l.learn}\n\n` +
        `• យកទៅអនុវត្ត: ${l.action}\n\n` +
        `• ឧទាហរណ៍ជាក់ស្តែង: ${l.example}`;
      navigator.clipboard.writeText(text).then(() => {
        showToast("📋 បានចម្លងមេរៀននេះទៅ Clipboard រួចរាល់!");
      });
    });
  }

  if (elements.lessonModal) {
    elements.lessonModal.addEventListener("click", (e) => {
      if (e.target === elements.lessonModal) {
        elements.lessonModal.close();
      }
    });
  }

  // Keyboard Navigation & Shortcuts
  window.addEventListener("keydown", (e) => {
    // Ctrl+K / Cmd+K search shortcut
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      const lessonsNav = $(`[data-view="lessons"]`);
      if (lessonsNav) lessonsNav.click();
      if (elements.searchInput) {
        elements.searchInput.focus();
        elements.searchInput.select();
      }
      return;
    }

    if (elements.lessonModal && elements.lessonModal.open) {
      if (e.key === "ArrowLeft" && state.activeLessonIndex > 0) {
        openModal(state.activeLessonIndex - 1);
      } else if (e.key === "ArrowRight" && state.activeLessonIndex < PSIS_DATA.lessons.length - 1) {
        openModal(state.activeLessonIndex + 1);
      }
    }
  });

  if (elements.searchInput) {
    elements.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderLessons();
    });
  }

  // ==========================================
  // 7. Render Frameworks & Brand Panels
  // ==========================================
  function renderFrameworksAndBrand() {
    // 15-Step Content Process
    if (elements.processGrid) {
      elements.processGrid.innerHTML = "";
      PSIS_DATA.frameworks.processSteps.forEach(s => {
        const div = document.createElement("div");
        div.className = "process-matrix-item";
        div.innerHTML = `
          <span class="matrix-step-num">STEP ${String(s.step).padStart(2, "0")}</span>
          <div class="matrix-step-name">${s.title}</div>
          <div class="matrix-step-desc">${s.desc}</div>
        `;
        elements.processGrid.appendChild(div);
      });
    }

    // Video Blueprint Flow
    if (elements.flowContainer) {
      elements.flowContainer.innerHTML = "";
      PSIS_DATA.frameworks.videoStructure.forEach(step => {
        const div = document.createElement("div");
        div.className = "blueprint-flow-card";
        div.innerHTML = `
          <div class="flow-stage-badge">${step.stage} (${step.time})</div>
          <div class="flow-stage-details">
            <b>${step.km}</b>
            <p>${step.desc}</p>
          </div>
        `;
        elements.flowContainer.appendChild(div);
      });
    }

    // Funnel Grid
    if (elements.funnelGrid) {
      elements.funnelGrid.innerHTML = "";
      PSIS_DATA.frameworks.funnelStages.forEach(f => {
        const div = document.createElement("div");
        div.className = "funnel-stage-box";
        div.innerHTML = `
          <h4>${f.stage}</h4>
          <div class="stage-khmer-title">${f.km}</div>
          <p><b>គោលដៅ៖</b> ${f.objective}</p>
          <div class="format-tags-wrapper"><b>ទម្រង់៖</b> ${f.formats}</div>
        `;
        elements.funnelGrid.appendChild(div);
      });
    }

    // Color Swatches
    if (elements.colorPaletteGrid) {
      elements.colorPaletteGrid.innerHTML = "";
      PSIS_DATA.brand.colors.forEach(c => {
        const div = document.createElement("div");
        div.className = "swatch-item-card";
        div.innerHTML = `
          <div class="color-preview-block" style="background-color: ${c.hex};">
            <button class="btn-copy-hex" data-hex="${c.hex}">Copy ${c.hex}</button>
          </div>
          <div class="color-info-meta">
            <b>${c.name}</b>
            <code>${c.hex} • RGB(${c.rgb})</code>
            <p>${c.role}</p>
          </div>
        `;
        div.querySelector(".btn-copy-hex").addEventListener("click", () => {
          navigator.clipboard.writeText(c.hex).then(() => {
            showToast(`🎨 បានចម្លងកូដពណ៌ ${c.hex}`);
          });
        });
        elements.colorPaletteGrid.appendChild(div);
      });
    }

    // Facilities & Programs
    if (elements.facilitiesTags) {
      elements.facilitiesTags.innerHTML = "";
      PSIS_DATA.brand.facilities.forEach(fac => {
        const tag = document.createElement("span");
        tag.className = "tag-badge-item";
        tag.textContent = `📍 ${fac.name}`;
        tag.title = fac.desc;
        elements.facilitiesTags.appendChild(tag);
      });
    }

    if (elements.programsTags) {
      elements.programsTags.innerHTML = "";
      PSIS_DATA.brand.programs.forEach(prog => {
        const tag = document.createElement("span");
        tag.className = "tag-badge-item";
        tag.textContent = `🎓 ${prog.name}`;
        tag.title = prog.desc;
        elements.programsTags.appendChild(tag);
      });
    }
  }

  // ==========================================
  // 8. Render Campuses Explorer & Battlecards
  // ==========================================
  function renderCampusesAndBattlecards() {
    // 6 Campus Explorer Cards
    if (elements.campusExplorerGrid) {
      elements.campusExplorerGrid.innerHTML = "";
      PSIS_DATA.brand.campuses.forEach(c => {
        const card = document.createElement("div");
        card.className = "campus-profile-card";
        card.innerHTML = `
          <div class="campus-card-header">
            <span class="campus-code-pill">${c.code} CAMPUS</span>
            <span class="campus-grade-badge">${c.grades}</span>
          </div>
          <h3 class="campus-card-title">${c.name}</h3>
          <div class="campus-focus-text">${c.focus}</div>
          
          <div class="campus-features-box">
            <div><b>🏛️ បរិក្ខារចម្បង៖</b> ${c.highlights}</div>
            <div style="margin-top:4px;"><b>🎯 ក្រុមគ្រួសារគោលដៅ៖</b> ${c.targetFamilies}</div>
            <div style="margin-top:4px;"><b>✨ មុំមាតិកាត្រូវថត៖</b> ${c.bestContentAngle}</div>
          </div>

          <div class="campus-hook-quote">${c.sampleHook}</div>

          <button class="btn-use-campus" data-code="${c.code}" data-name="${c.name}">
            <span>✍️</span> យក Campus នេះទៅសរសេរ Script
          </button>
        `;

        card.querySelector(".btn-use-campus").addEventListener("click", () => {
          if (elements.plannerCampus) {
            elements.plannerCampus.value = `${c.code} (${c.name.split(" ")[0]})`;
            // Switch to planner tab
            const plannerNav = $(`[data-view="planner"]`);
            if (plannerNav) plannerNav.click();
            updateScriptStudio();
            showToast(`🏫 បានជ្រើសរើសសាខា ${c.code} សម្រាប់ Script Studio!`);
          }
        });

        elements.campusExplorerGrid.appendChild(card);
      });
    }

    // Competitor Battlecards
    if (elements.competitorBattlecardsGrid) {
      elements.competitorBattlecardsGrid.innerHTML = "";
      PSIS_DATA.brand.competitors.forEach(comp => {
        const card = document.createElement("div");
        card.className = "competitor-battlecard";
        card.innerHTML = `
          <div class="competitor-header">
            <span class="competitor-name">${comp.name}</span>
            <span class="competitor-tuition-pill">${comp.tuition}</span>
          </div>
          <div class="competitor-meta-row"><b>ប្រភេទ៖</b> ${comp.type} • ${comp.marketPosition}</div>
          
          <div class="battle-point-box">
            <b>💪 ចំណុចខ្លាំងរបស់គេ (Their Strength):</b>
            <p>${comp.keyStrength}</p>
          </div>

          <div class="battle-point-box weakness">
            <b>⚠️ ចំណុចខ្សោយរបស់គេ (Their Weakness):</b>
            <p>${comp.keyWeakness}</p>
          </div>

          <div class="battle-point-box counter">
            <b>🏆 យុទ្ធសាស្ត្រឈ្នះរបស់ PSIS (Our Winning Edge):</b>
            <p>${comp.counterStrategy}</p>
          </div>
        `;
        elements.competitorBattlecardsGrid.appendChild(card);
      });
    }
  }

  // ==========================================
  // 9. 4-Phase Quality Checklist Logic
  // ==========================================
  function renderChecklistPhases() {
    if (!elements.checklistPhasesContainer) return;
    elements.checklistPhasesContainer.innerHTML = "";

    PSIS_DATA.checklistPhases.forEach((phaseGroup, phaseIndex) => {
      const groupDiv = document.createElement("div");
      groupDiv.className = "phase-group-container";

      const title = document.createElement("div");
      title.className = "phase-group-title";
      title.textContent = phaseGroup.phase;
      groupDiv.appendChild(title);

      phaseGroup.items.forEach((item, itemIndex) => {
        const key = `p${phaseIndex}_i${itemIndex}`;
        const isChecked = !!state.checkedChecklist[key];

        const row = document.createElement("label");
        row.className = `checkbox-row-label ${isChecked ? "completed" : ""}`;
        row.innerHTML = `
          <input type="checkbox" data-key="${key}" ${isChecked ? "checked" : ""}>
          <span>${itemIndex + 1}. ${item}</span>
        `;

        row.querySelector("input").addEventListener("change", (e) => {
          state.checkedChecklist[key] = e.target.checked;
          if (e.target.checked) {
            row.classList.add("completed");
          } else {
            row.classList.remove("completed");
          }
          localStorage.setItem("psis_checklist_enterprise", JSON.stringify(state.checkedChecklist));
          updateChecklistScore();
        });

        groupDiv.appendChild(row);
      });

      elements.checklistPhasesContainer.appendChild(groupDiv);
    });

    updateChecklistScore();
  }

  function updateChecklistScore() {
    let total = 0;
    let checked = 0;
    PSIS_DATA.checklistPhases.forEach((p, pi) => {
      p.items.forEach((_, ii) => {
        total++;
        if (state.checkedChecklist[`p${pi}_i${ii}`]) checked++;
      });
    });

    const pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    if (elements.progressBarFill) {
      elements.progressBarFill.style.width = `${pct}%`;
    }
    if (elements.progressScoreText) {
      elements.progressScoreText.textContent = `${checked} / ${total} បានរួចរាល់ (${pct}%)`;
    }

    if (elements.checklistReadinessBadge) {
      elements.checklistReadinessBadge.className = "readiness-status-badge";
      if (pct === 100) {
        elements.checklistReadinessBadge.classList.add("ready");
        elements.checklistReadinessBadge.textContent = "🚀 ត្រៀមរួចរាល់ 100% សម្រាប់ការចេញផ្សាយ!";
      } else if (pct >= 60) {
        elements.checklistReadinessBadge.classList.add("in-progress");
        elements.checklistReadinessBadge.textContent = "✂️ កំពុងកាត់ត & ពិនិត្យ Safe Zones";
      } else if (pct >= 30) {
        elements.checklistReadinessBadge.classList.add("in-progress");
        elements.checklistReadinessBadge.textContent = "🎬 កំពុងស្ថិតក្នុងដំណាក់កាលផលិត";
      } else {
        elements.checklistReadinessBadge.classList.add("needs-work");
        elements.checklistReadinessBadge.textContent = "⚠️ ត្រូវការរៀបចំ Plan & Hook";
      }
    }
  }

  if (elements.btnResetChecklist) {
    elements.btnResetChecklist.addEventListener("click", () => {
      if (confirm("តើអ្នកពិតជាចង់ Reset Checklist ឡើងវិញទាំងអស់មែនទេ?")) {
        state.checkedChecklist = {};
        localStorage.removeItem("psis_checklist_enterprise");
        renderChecklistPhases();
        showToast("🔄 បាន Reset Checklist ជោគជ័យ");
      }
    });
  }

  if (elements.btnCopyChecklist) {
    elements.btnCopyChecklist.addEventListener("click", () => {
      let output = `📋 PSIS PRODUCTION QUALITY CHECKLIST\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
      PSIS_DATA.checklistPhases.forEach((phaseGroup, pi) => {
        output += `\n【${phaseGroup.phase}】\n`;
        phaseGroup.items.forEach((item, ii) => {
          const mark = state.checkedChecklist[`p${pi}_i${ii}`] ? "[✓]" : "[ ]";
          output += `${mark} ${ii + 1}. ${item}\n`;
        });
      });
      navigator.clipboard.writeText(output).then(() => {
        showToast("📋 បានចម្លងបញ្ជី Checklist ទៅ Clipboard រួចរាល់!");
      });
    });
  }

  // ==========================================
  // 10. Interactive Script Studio & Presets
  // ==========================================
  function updateScriptStudio() {
    if (!elements.scriptOutput) return;

    const campus = elements.plannerCampus ? elements.plannerCampus.value : "CAP (Chbar Ampov)";
    const topic = elements.plannerTopic ? elements.plannerTopic.value.trim() : "រៀនគិតជាប្រព័ន្ធតាមរយៈ Coding & Robotics";
    const persona = elements.plannerPersona ? elements.plannerPersona.value : "ប៉ា ពីទូ (រវល់ការងារការិយាល័យ ចង់ឱ្យកូនក្លាហាន និងមានជំនាញបច្ចេកវិទ្យា)";
    const funnel = elements.plannerFunnel ? elements.plannerFunnel.value : "Trust (កសាងទំនុកចិត្តលើការថែទាំ)";
    const painPoint = elements.plannerPainPoint ? elements.plannerPainPoint.value.trim() : "កូនរៀនតែទ្រឹស្តី មិនចេះអនុវត្តដោះស្រាយបញ្ហាពិត";
    const hookType = elements.plannerHookType ? elements.plannerHookType.value : "THINK (ធ្វើឱ្យគិត)";
    const hookText = elements.plannerHookText ? elements.plannerHookText.value.trim() : "«រៀនបានពិន្ទុល្អ… តែបើជួបបញ្ហាជាក់ស្តែង គាត់ចេះដោះស្រាយដោយរបៀបណា?»";
    const action = elements.plannerAction ? elements.plannerAction.value.trim() : "សិស្សអង្គុយសាកល្បងសរសេរ Code លើ CodeMonkey ខុសហើយកែឡើងវិញ ដោយមានគ្រូនៅក្បែរជួយលើកទឹកចិត្ត";
    const proof = elements.plannerProof ? elements.plannerProof.value.trim() : "ស្នាមញញឹមពេល Robot ដើរត្រូវទិសដៅ និងការទះដៃអបអរជាមួយមិត្តភក្តិ";
    const meaning = elements.plannerMeaning ? elements.plannerMeaning.value.trim() : "នៅ PSIS ការរៀនបច្ចេកវិទ្យាមិនមែនគ្រាន់តែមើលអេក្រង់ទេ គឺការហាត់គិតដោះស្រាយបញ្ហាសម្រាប់អនាគត";
    const cta = elements.plannerCTA ? elements.plannerCTA.value.trim() : "ស្វែងយល់បន្ថែមអំពីកម្មវិធីសិក្សាអន្តរជាតិនៅ PSIS តាមរយៈ Message ឬទស្សនាសាលាផ្ទាល់។";

    const script = `🎬 [PSIS VIDEO SCRIPT BRIEF & STORYBOARD]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏫 ទីតាំង Campus: ${campus}
📌 ប្រធានបទ (Topic): ${topic}
🎯 ទស្សនិកជនគោលដៅ (Persona): ${persona}
📊 ដំណាក់កាល Funnel: ${funnel}
⚠️ កង្វល់មាតាបិតា (Pain Point): ${painPoint}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏱️ 00:00 - 00:03 | 1. THE HOOK (${hookType})
   [Visual]: កាត់តរូបភាពប្លែក ឬទឹកមុខសិស្សកំពុងផ្ចង់គិត (Close-up shot)
   [Audio / Text on Screen]: ${hookText}

⏱️ 00:03 - 00:10 | 2. CONTEXT (បរិបទថ្នាក់រៀន)
   [Visual]: បរិយាកាសក្នុងថ្នាក់រៀននៅ PSIS Campus ${campus}
   [Voice/Subtitle]: នៅក្នុងថ្នាក់រៀន ${topic}...

⏱️ 00:10 - 00:28 | 3. ACTION / STORY (សកម្មភាពពិត)
   [Visual]: ${action}
   [Voice/Subtitle]: បង្ហាញពីការតស៊ូ និងការអនុវត្តជាក់ស្តែងរបស់សិស្ស

⏱️ 00:28 - 00:42 | 4. RESULT / PROOF (ភស្តុតាង និងលទ្ធផល)
   [Visual]: ${proof}

⏱️ 00:42 - 00:52 | 5. MEANING & BENEFIT (អត្ថន័យចំពោះអនាគត)
   [Visual]: គ្រូឱបលើកទឹកចិត្ត ឬសិស្សសហការគ្នា
   [Voice/Subtitle]: ${meaning}

⏱️ 00:52 - 01:00 | 6. CALL TO ACTION (CTA)
   [Audio / End Screen]: ${cta}
   [Branding]: Logo PSIS + Font Kantumruy Pro + Theme Navy & Gold
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    elements.scriptOutput.textContent = script;

    // Calculate word count & speech estimation
    const spokenText = `${hookText} ${action} ${meaning} ${cta}`;
    const words = spokenText.trim().split(/\s+/).filter(Boolean).length;
    const estSeconds = Math.round((words / 125) * 60) || 45;
    if (elements.plannerStatsBadge) {
      elements.plannerStatsBadge.textContent = `⏱️ ~${words} ពាក្យ (អានប្រហែល ${estSeconds} វិនាទី)`;
    }
  }

  // Preset selector
  if (elements.plannerPresetSelector) {
    elements.plannerPresetSelector.addEventListener("change", (e) => {
      const presetId = e.target.value;
      if (!presetId) return;

      const p = (PSIS_DATA.scriptPresets || []).find(x => x.id === presetId);
      if (p) {
        if (elements.plannerCampus) elements.plannerCampus.value = `${p.campus} (${p.campus === "TK" ? "Toul Kork" : p.campus === "CAP" ? "Chbar Ampov" : p.campus === "TTP" ? "Toul Tom Poung" : "Battambang"})`;
        if (elements.plannerTopic) elements.plannerTopic.value = p.topic;
        if (elements.plannerPersona) elements.plannerPersona.value = p.persona;
        if (elements.plannerFunnel) elements.plannerFunnel.value = p.funnel;
        if (elements.plannerPainPoint) elements.plannerPainPoint.value = p.painPoint;
        if (elements.plannerHookType) elements.plannerHookType.value = p.hookType;
        if (elements.plannerHookText) elements.plannerHookText.value = p.hookText;
        if (elements.plannerAction) elements.plannerAction.value = p.action;
        if (elements.plannerProof) elements.plannerProof.value = p.proof;
        if (elements.plannerMeaning) elements.plannerMeaning.value = p.meaning;
        if (elements.plannerCTA) elements.plannerCTA.value = p.cta;
        updateScriptStudio();
        showToast(`⚡ បានផ្ទុក Script Preset: ${p.label}`);
      }
    });
  }

  const studioInputs = [
    elements.plannerCampus, elements.plannerTopic, elements.plannerPersona, elements.plannerFunnel,
    elements.plannerPainPoint, elements.plannerHookType, elements.plannerHookText,
    elements.plannerAction, elements.plannerProof, elements.plannerMeaning, elements.plannerCTA
  ];

  studioInputs.forEach(inp => {
    if (inp) {
      inp.addEventListener("input", updateScriptStudio);
      inp.addEventListener("change", updateScriptStudio);
    }
  });

  if (elements.btnCopyScript) {
    elements.btnCopyScript.addEventListener("click", () => {
      if (elements.scriptOutput) {
        navigator.clipboard.writeText(elements.scriptOutput.textContent).then(() => {
          showToast("📝 បានចម្លង Script Brief ទៅ Clipboard រួចរាល់!");
        });
      }
    });
  }

  // Download .TXT
  if (elements.btnDownloadTxt) {
    elements.btnDownloadTxt.addEventListener("click", () => {
      if (!elements.scriptOutput) return;
      const content = elements.scriptOutput.textContent;
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `PSIS-Script-${(elements.plannerTopic ? elements.plannerTopic.value : "Brief").replace(/[^a-zA-Z0-9\u1780-\u17FF]/g, "_")}.txt`;
      a.click();
      showToast("💾 បានរក្សាទុក Script ជាឯកសារ .TXT ជោគជ័យ!");
    });
  }

  // Download .MD
  if (elements.btnDownloadMd) {
    elements.btnDownloadMd.addEventListener("click", () => {
      if (!elements.scriptOutput) return;
      const content = `# PSIS Video Script Brief\n\n\`\`\`\n${elements.scriptOutput.textContent}\n\`\`\`\n`;
      const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `PSIS-Script-${(elements.plannerTopic ? elements.plannerTopic.value : "Brief").replace(/[^a-zA-Z0-9\u1780-\u17FF]/g, "_")}.md`;
      a.click();
      showToast("📝 បានរក្សាទុក Script ជាឯកសារ .MD ជោគជ័យ!");
    });
  }

  // ==========================================
  // 11. 9-Week Mentoring Roadmap & Navigator
  // ==========================================
  function renderRoadmapTable() {
    if (!elements.roadmapTableBody) return;
    elements.roadmapTableBody.innerHTML = "";

    const syllabus = PSIS_DATA.syllabus || [];
    const filtered = state.activeWeekFilter === "all" 
      ? syllabus 
      : syllabus.filter(item => item.week === Number(state.activeWeekFilter));

    filtered.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><b>Week ${row.week}</b></td>
        <td>${row.dates}</td>
        <td>${row.title}</td>
        <td>${row.tasks}</td>
      `;
      elements.roadmapTableBody.appendChild(tr);
    });
  }

  function initWeekNavigator() {
    if (!elements.weekNavigatorPills) return;
    elements.weekNavigatorPills.innerHTML = "";

    const weekButtons = [
      { id: "all", label: "សប្តាហ៍ទាំងអស់ (All 9 Weeks)" },
      { id: "1", label: "Week 1" },
      { id: "2", label: "Week 2" },
      { id: "3", label: "Week 3" },
      { id: "4", label: "Week 4" },
      { id: "5", label: "Week 5" },
      { id: "6", label: "Week 6" },
      { id: "7", label: "Week 7" },
      { id: "8", label: "Week 8" },
      { id: "9", label: "Week 9" }
    ];

    weekButtons.forEach(wb => {
      const btn = document.createElement("button");
      btn.className = `week-nav-btn ${wb.id === state.activeWeekFilter ? "active" : ""}`;
      btn.textContent = wb.label;
      btn.addEventListener("click", () => {
        state.activeWeekFilter = wb.id;
        $$(".week-nav-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderRoadmapTable();
      });
      elements.weekNavigatorPills.appendChild(btn);
    });
  }

  // ==========================================
  // 12. Sidebar Tab Navigation
  // ==========================================
  elements.navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetView = btn.dataset.view;
      state.currentTab = targetView;

      elements.navButtons.forEach(b => b.classList.remove("active"));
      elements.tabSections.forEach(s => s.classList.remove("active"));

      btn.classList.add("active");
      const targetSection = $(`#${targetView}`);
      if (targetSection) {
        targetSection.classList.add("active");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    });
  });

  if (elements.btnPrintDoc) {
    elements.btnPrintDoc.addEventListener("click", () => window.print());
  }

  if (elements.btnHeaderPlanner) {
    elements.btnHeaderPlanner.addEventListener("click", () => {
      const plannerNav = $(`[data-view="planner"]`);
      if (plannerNav) plannerNav.click();
    });
  }

  // Initialization
  initCategories();
  renderLessons();
  renderFrameworksAndBrand();
  renderCampusesAndBattlecards();
  renderChecklistPhases();
  initWeekNavigator();
  renderRoadmapTable();
  updateScriptStudio();
});
