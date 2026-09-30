// PSIS Content Mentoring & Video OS - Core Application Logic
// Enterprise Edition with 4-phase checklist, Idea Generator, Do's/Don'ts, and Studio Builder

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
    currentTab: "lessons"
  };

  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);

  const elements = {
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
    
    // Checklist
    checklistPhasesContainer: $("#checklistPhasesContainer"),
    progressBarFill: $("#progressBarFill"),
    progressScoreText: $("#progressScoreText"),
    btnResetChecklist: $("#btnResetChecklist"),
    btnCopyChecklist: $("#btnCopyChecklist"),
    
    // Script Studio
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
  // Toast Notification
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
  // Category Segmented Chips
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

  // ==========================================
  // Category Meta Mapping
  // ==========================================
  const categoryMeta = {
    foundation: { label: "មូលដ្ឋានគ្រឹះ", color: "#d97706", bg: "#fef3c7" },
    audience: { label: "Audience & Pain", color: "#db2777", bg: "#fce7f3" },
    strategy: { label: "Strategy & Funnel", color: "#2563eb", bg: "#eff6ff" },
    storytelling: { label: "Hook & Story", color: "#7c3aed", bg: "#f5f3ff" },
    trust: { label: "Trust & Value", color: "#059669", bg: "#ecfdf5" },
    optimization: { label: "Optimize & Ads", color: "#0891b2", bg: "#ecfeff" }
  };

  // ==========================================
  // Render Lesson Cards Grid
  // ==========================================
  function renderLessons() {
    if (!elements.lessonsGrid) return;
    elements.lessonsGrid.innerHTML = "";
    
    const query = state.searchQuery.toLowerCase().trim();
    
    const filtered = PSIS_DATA.lessons.filter(item => {
      const matchesCategory = 
        state.currentCategory === "all" || 
        item.category === state.currentCategory ||
        (state.currentCategory === "starred" && state.starredLessons.includes(item.id));
      
      const searchFields = [
        item.titleEn,
        item.titleKm,
        item.subtitle,
        item.core,
        item.learn,
        item.action,
        item.example,
        ...(item.tags || [])
      ].join(" ").toLowerCase();
      
      const matchesSearch = !query || searchFields.includes(query);
      return matchesCategory && matchesSearch;
    });

    if (elements.resultsStats) {
      elements.resultsStats.textContent = `${filtered.length} / ${PSIS_DATA.lessons.length} មេរៀន`;
    }

    if (filtered.length === 0) {
      elements.lessonsGrid.innerHTML = `
        <div class="empty-state">
          <p style="font-size: 28px; margin-bottom: 8px;">🔍</p>
          <h3>រកមិនឃើញមេរៀនដែលត្រូវនឹង "${state.searchQuery}"</h3>
          <p>សូមសាកល្បងស្វែងរកដោយប្រើពាក្យផ្សេង ដូចជា Hook, Story, Trust, Persona ឬជ្រើសប្រភេទមេរៀនទាំងអស់។</p>
        </div>
      `;
      return;
    }

    filtered.forEach(lesson => {
      const isStarred = state.starredLessons.includes(lesson.id);
      const cat = categoryMeta[lesson.category] || { label: "PSIS", color: "#2563eb", bg: "#eff6ff" };
      const card = document.createElement("div");
      card.className = "enterprise-lesson-card";
      card.style.borderLeft = `4px solid ${cat.color}`;
      
      card.innerHTML = `
        <div class="card-top-status-row">
          <span class="lesson-index-tag">LESSON ${String(lesson.id).padStart(2, "0")}</span>
          <span class="category-indicator-pill" style="color:${cat.color}; background:${cat.bg};">${cat.label}</span>
          <button class="card-bookmark-btn ${isStarred ? "starred" : ""}" title="${isStarred ? "លុបចំណាំ" : "ចំណាំមេរៀន"}" data-id="${lesson.id}">
            ${isStarred ? "★" : "☆"}
          </button>
        </div>
        <h3 class="lesson-title-english">${lesson.titleEn}</h3>
        <div class="lesson-title-khmer">${lesson.titleKm}</div>
        <div class="lesson-core-quote">${lesson.core}</div>
        <div class="card-meta-footer-row">
          <span class="tag-label-text">🏷️ ${lesson.tags ? lesson.tags[0] : ""}</span>
          <span class="read-details-link">អានលម្អិត →</span>
        </div>
      `;

      card.addEventListener("click", (e) => {
        if (e.target.closest(".card-bookmark-btn")) return;
        openModal(lesson.id - 1);
      });

      const starBtn = card.querySelector(".card-bookmark-btn");
      starBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleStar(lesson.id);
      });

      elements.lessonsGrid.appendChild(card);
    });
  }

  function toggleStar(id) {
    if (state.starredLessons.includes(id)) {
      state.starredLessons = state.starredLessons.filter(item => item !== id);
      showToast(`បានដកមេរៀនទី ${id} ចេញពីបញ្ជីចំណាំ`);
    } else {
      state.starredLessons.push(id);
      showToast(`⭐ បានចំណាំមេរៀនទី ${id} ទុកមើលពេលក្រោយ`);
    }
    localStorage.setItem("psis_starred_lessons", JSON.stringify(state.starredLessons));
    renderLessons();
    updateModalStarButton();
  }

  // ==========================================
  // Creative Reel Idea Generator
  // ==========================================
  function generateRandomReelIdea() {
    const bank = PSIS_DATA.ideaBank;
    const prog = bank.programs[Math.floor(Math.random() * bank.programs.length)];
    const angle = bank.angles[Math.floor(Math.random() * bank.angles.length)];
    const pain = bank.painPoints[Math.floor(Math.random() * bank.painPoints.length)];

    const ideaText = `💡 គំនិតវីដេអូ Reel ថ្មី៖
• កម្មវិធីសិក្សា៖ ${prog}
• មុំសាច់រឿង (Angle)៖ ${angle}
• ដោះស្រាយកង្វល់ (Pain Point)៖ «${pain}»
• គន្លឹះថត៖ ចាប់ផ្តើមដោយសំណួរចាក់ដោត ឬទឹកមុខសិស្សកំពុងផ្ចង់គិត រួចបង្ហាញសកម្មភាពអនុវត្តជាក់ស្តែងក្នុងថ្នាក់ ${prog} និងបញ្ចប់ដោយសាររំលឹកពីតម្លៃសម្រាប់អនាគតកូន។`;

    if (elements.ideaOutputText) {
      elements.ideaOutputText.textContent = ideaText;
    }
    if (elements.ideaOutputCard) {
      elements.ideaOutputCard.classList.add("active");
    }
    showToast("🎲 បានបង្កើតគំនិតវីដេអូ Reel ថ្មី!");
  }

  if (elements.btnGenerateIdea) {
    elements.btnGenerateIdea.addEventListener("click", generateRandomReelIdea);
  }

  // ==========================================
  // Lesson Detail Modal
  // ==========================================
  function openModal(index) {
    if (index < 0 || index >= PSIS_DATA.lessons.length) return;
    state.activeLessonIndex = index;
    const lesson = PSIS_DATA.lessons[index];

    elements.modalBadge.textContent = `LESSON ${String(lesson.id).padStart(2, "0")} / ${PSIS_DATA.lessons.length}`;
    elements.modalTitle.textContent = lesson.titleEn;
    elements.modalKmTitle.textContent = lesson.titleKm + (lesson.subtitle ? ` — ${lesson.subtitle}` : "");
    elements.modalCore.textContent = `💡 គំនិតស្នូល៖ ${lesson.core}`;
    elements.modalLearn.textContent = lesson.learn;
    elements.modalAction.textContent = lesson.action;
    elements.modalExample.textContent = lesson.example;

    // Do's & Don'ts
    if (elements.modalDosList && elements.modalDontsList) {
      elements.modalDosList.innerHTML = "";
      (lesson.dos || ["អនុវត្តតាមជំហានដែលបានណែនាំ"]).forEach(d => {
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
  // Render Frameworks & Brand Panels
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
  // 4-Phase Quality Checklist Logic
  // ==========================================
  function renderChecklistPhases() {
    if (!elements.checklistPhasesContainer) return;
    elements.checklistPhasesContainer.innerHTML = "";

    let totalItems = 0;
    let checkedItems = 0;

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
        totalItems++;
        if (isChecked) checkedItems++;

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
  // Interactive Script Studio Planner
  // ==========================================
  function updateScriptStudio() {
    if (!elements.scriptOutput) return;

    const campus = elements.plannerCampus ? elements.plannerCampus.value : "Toul Kork (TK)";
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

  // ==========================================
  // Sidebar Tab Navigation
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

  // Init
  initCategories();
  renderLessons();
  renderFrameworksAndBrand();
  renderChecklistPhases();
  updateScriptStudio();
});
