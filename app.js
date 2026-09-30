// PSIS Content Mentoring Dashboard - Core Application Logic
// Handles rendering, search, filtering, bookmarks, modals, interactive checklist, and script generator

document.addEventListener("DOMContentLoaded", () => {
  // Check that PSIS_DATA is loaded
  if (typeof PSIS_DATA === "undefined") {
    console.error("PSIS_DATA not found!");
    return;
  }

  // State Management
  const state = {
    currentCategory: "all",
    searchQuery: "",
    starredLessons: JSON.parse(localStorage.getItem("psis_starred_lessons") || "[]"),
    checkedItems: JSON.parse(localStorage.getItem("psis_checklist_state") || "{}"),
    activeLessonIndex: 0,
    currentTab: "lessons"
  };

  // DOM Elements
  const $ = selector => document.querySelector(selector);
  const $$ = selector => document.querySelectorAll(selector);

  const elements = {
    // Navigation
    navButtons: $$(".nav-btn"),
    tabSections: $$(".tab-section"),
    
    // Lessons
    lessonsGrid: $("#lessonsGrid"),
    searchInput: $("#searchInput"),
    resultsStats: $("#resultsStats"),
    categoryChips: $("#categoryChips"),
    
    // Frameworks & Brand
    processGrid: $("#processGrid"),
    flowContainer: $("#flowContainer"),
    funnelGrid: $("#funnelGrid"),
    colorPaletteGrid: $("#colorPaletteGrid"),
    facilitiesTags: $("#facilitiesTags"),
    programsTags: $("#programsTags"),
    
    // Checklist
    checklistContainer: $("#checklistContainer"),
    progressBarFill: $("#progressBarFill"),
    progressText: $("#progressText"),
    btnResetChecklist: $("#btnResetChecklist"),
    btnCopyChecklist: $("#btnCopyChecklist"),
    
    // Script Planner
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
    modalExample: $("#modalExample"),
    modalTags: $("#modalTags"),
    
    // Toast
    toast: $("#toast"),
    toastMsg: $("#toastMsg"),
    
    // Global Actions
    btnPrintDoc: $("#btnPrintDoc")
  };

  // ==========================================
  // Toast Helper
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
  // Category Chips Setup
  // ==========================================
  function initCategories() {
    if (!elements.categoryChips) return;
    elements.categoryChips.innerHTML = "";
    
    PSIS_DATA.categories.forEach(cat => {
      const btn = document.createElement("button");
      btn.className = `chip-btn ${cat.id === state.currentCategory ? "active" : ""}`;
      btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.label}</span>`;
      btn.addEventListener("click", () => {
        state.currentCategory = cat.id;
        $$(".chip-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderLessons();
      });
      elements.categoryChips.appendChild(btn);
    });
  }

  // ==========================================
  // Render Lessons Grid
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

    // Update Stats
    if (elements.resultsStats) {
      elements.resultsStats.textContent = `${filtered.length} / ${PSIS_DATA.lessons.length} មេរៀន`;
    }

    if (filtered.length === 0) {
      elements.lessonsGrid.innerHTML = `
        <div class="empty-message">
          <p style="font-size: 24px; margin-bottom: 8px;">🔍</p>
          <h3>រកមិនឃើញមេរៀនដែលត្រូវនឹង "${state.searchQuery}"</h3>
          <p>សូមសាកល្បងស្វែងរកដោយប្រើពាក្យផ្សេង ដូចជា Hook, Story, Trust, Parent ឬជ្រើសប្រភេទមេរៀនទាំងអស់។</p>
        </div>
      `;
      return;
    }

    filtered.forEach(lesson => {
      const isStarred = state.starredLessons.includes(lesson.id);
      const card = document.createElement("div");
      card.className = "lesson-card";
      
      card.innerHTML = `
        <div class="card-top">
          <span class="card-num">LESSON ${String(lesson.id).padStart(2, "0")}</span>
          <button class="btn-star ${isStarred ? "starred" : ""}" title="${isStarred ? "លុបចំណាំ" : "ចំណាំមេរៀន"}" data-id="${lesson.id}">
            ${isStarred ? "★" : "☆"}
          </button>
        </div>
        <h3>${lesson.titleEn}</h3>
        <div class="card-km-title">${lesson.titleKm}</div>
        <p class="card-snippet">${lesson.core}</p>
        <div class="card-footer">
          <span class="card-tag">🏷️ ${lesson.tags ? lesson.tags[0] : ""}</span>
          <span class="card-action-text">អានលម្អិត →</span>
        </div>
      `;

      // Click card to open modal (unless clicking star)
      card.addEventListener("click", (e) => {
        if (e.target.closest(".btn-star")) return;
        openModal(lesson.id - 1);
      });

      // Click star to toggle bookmark
      const starBtn = card.querySelector(".btn-star");
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

    // Tags
    if (elements.modalTags) {
      elements.modalTags.innerHTML = "";
      if (lesson.tags) {
        lesson.tags.forEach(t => {
          const sp = document.createElement("span");
          sp.className = "tag-item";
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
    elements.btnModalStar.textContent = isStarred ? "★ បានចំណាំ" : "☆ ចំណាំមេរៀន";
  }

  // Modal Event Listeners
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
      const text = `[PSIS Mentoring - Lesson ${l.id}] ${l.titleEn} (${l.titleKm})\n\n` +
        `• គំនិតស្នូល: ${l.core}\n\n` +
        `• អ្វីដែលត្រូវយល់: ${l.learn}\n\n` +
        `• យកទៅអនុវត្ត: ${l.action}\n\n` +
        `• ឧទាហរណ៍: ${l.example}`;
      navigator.clipboard.writeText(text).then(() => {
        showToast("📋 បានចម្លងមេរៀននេះទៅកាន់ Clipboard រួចរាល់!");
      });
    });
  }

  // Backdrop click to close
  if (elements.lessonModal) {
    elements.lessonModal.addEventListener("click", (e) => {
      if (e.target === elements.lessonModal) {
        elements.lessonModal.close();
      }
    });
  }

  // Keyboard navigation
  window.addEventListener("keydown", (e) => {
    if (elements.lessonModal && elements.lessonModal.open) {
      if (e.key === "ArrowLeft" && state.activeLessonIndex > 0) {
        openModal(state.activeLessonIndex - 1);
      } else if (e.key === "ArrowRight" && state.activeLessonIndex < PSIS_DATA.lessons.length - 1) {
        openModal(state.activeLessonIndex + 1);
      }
    }
  });

  // Search input with debounce
  if (elements.searchInput) {
    elements.searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      renderLessons();
    });
  }

  // ==========================================
  // Render Frameworks & Brand Guidelines
  // ==========================================
  function renderFrameworksAndBrand() {
    // 15-step process
    if (elements.processGrid) {
      elements.processGrid.innerHTML = "";
      PSIS_DATA.frameworks.processSteps.forEach(s => {
        const div = document.createElement("div");
        div.className = "process-card";
        div.innerHTML = `
          <span class="step-num">STEP ${String(s.step).padStart(2, "0")}</span>
          <div class="step-title">${s.title}</div>
          <div class="step-desc">${s.desc}</div>
        `;
        elements.processGrid.appendChild(div);
      });
    }

    // Video Blueprint Flow
    if (elements.flowContainer) {
      elements.flowContainer.innerHTML = "";
      PSIS_DATA.frameworks.videoStructure.forEach(step => {
        const div = document.createElement("div");
        div.className = "flow-step-item";
        div.innerHTML = `
          <div class="flow-step-badge">${step.stage} (${step.km})</div>
          <div class="flow-step-content">
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
        div.className = "funnel-col";
        div.innerHTML = `
          <h4>${f.stage}</h4>
          <div class="stage-km">${f.km}</div>
          <p><b>គោលដៅ៖</b> ${f.objective}</p>
          <div class="format-box"><b>ទម្រង់៖</b> ${f.formats}</div>
        `;
        elements.funnelGrid.appendChild(div);
      });
    }

    // Brand Colors
    if (elements.colorPaletteGrid) {
      elements.colorPaletteGrid.innerHTML = "";
      PSIS_DATA.brand.colors.forEach(c => {
        const div = document.createElement("div");
        div.className = "color-card";
        div.innerHTML = `
          <div class="color-swatch" style="background-color: ${c.hex};">
            <button class="color-copy-btn" data-hex="${c.hex}">Copy ${c.hex}</button>
          </div>
          <div class="color-meta">
            <b>${c.name}</b>
            <code>${c.hex}</code>
            <p>${c.desc}</p>
          </div>
        `;
        div.querySelector(".color-copy-btn").addEventListener("click", () => {
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
        tag.className = "tag-item";
        tag.textContent = `📍 ${fac}`;
        elements.facilitiesTags.appendChild(tag);
      });
    }

    if (elements.programsTags) {
      elements.programsTags.innerHTML = "";
      PSIS_DATA.brand.programs.forEach(prog => {
        const tag = document.createElement("span");
        tag.className = "tag-item";
        tag.textContent = `🎓 ${prog}`;
        elements.programsTags.appendChild(tag);
      });
    }
  }

  // ==========================================
  // Interactive Checklist Logic
  // ==========================================
  function renderChecklist() {
    if (!elements.checklistContainer) return;
    elements.checklistContainer.innerHTML = "";

    PSIS_DATA.checklist.forEach((item, index) => {
      const isChecked = !!state.checkedItems[index];
      const row = document.createElement("label");
      row.className = `check-row ${isChecked ? "completed" : ""}`;
      
      row.innerHTML = `
        <input type="checkbox" data-index="${index}" ${isChecked ? "checked" : ""}>
        <span>${index + 1}. ${item}</span>
      `;

      const checkbox = row.querySelector("input");
      checkbox.addEventListener("change", (e) => {
        state.checkedItems[index] = e.target.checked;
        if (e.target.checked) {
          row.classList.add("completed");
        } else {
          row.classList.remove("completed");
        }
        localStorage.setItem("psis_checklist_state", JSON.stringify(state.checkedItems));
        updateChecklistProgress();
      });

      elements.checklistContainer.appendChild(row);
    });

    updateChecklistProgress();
  }

  function updateChecklistProgress() {
    const total = PSIS_DATA.checklist.length;
    const checkedCount = Object.values(state.checkedItems).filter(Boolean).length;
    const percentage = Math.round((checkedCount / total) * 100);

    if (elements.progressBarFill) {
      elements.progressBarFill.style.width = `${percentage}%`;
    }
    if (elements.progressText) {
      elements.progressText.textContent = `${checkedCount} / ${total} បានរួចរាល់ (${percentage}%)`;
    }
  }

  if (elements.btnResetChecklist) {
    elements.btnResetChecklist.addEventListener("click", () => {
      if (confirm("តើអ្នកពិតជាចង់កំណត់ Checklist ឡើងវិញទាំងអស់មែនទេ?")) {
        state.checkedItems = {};
        localStorage.removeItem("psis_checklist_state");
        renderChecklist();
        showToast("🔄 បានកំណត់ Checklist ឡើងវិញ");
      }
    });
  }

  if (elements.btnCopyChecklist) {
    elements.btnCopyChecklist.addEventListener("click", () => {
      const lines = PSIS_DATA.checklist.map((item, i) => {
        const mark = state.checkedItems[i] ? "[x]" : "[ ]";
        return `${mark} ${i + 1}. ${item}`;
      });
      const text = `📋 PSIS PRE-PRODUCTION CHECKLIST\n\n` + lines.join("\n");
      navigator.clipboard.writeText(text).then(() => {
        showToast("📋 បានចម្លងបញ្ជី Checklist ទៅ Clipboard");
      });
    });
  }

  // ==========================================
  // Interactive Script & Idea Generator
  // ==========================================
  function updateGeneratedScript() {
    if (!elements.scriptOutput) return;

    const topic = elements.plannerTopic.value.trim() || "រៀនគិតជាប្រព័ន្ធតាមរយៈ Coding & Robotics";
    const persona = elements.plannerPersona.value || "ម៉ាក់ប៉ារវល់ការងារការិយាល័យ ចង់ឱ្យកូនក្លាហាន និងមានជំនាញបច្ចេកវិទ្យា";
    const funnel = elements.plannerFunnel.value || "Trust (កសាងទំនុកចិត្ត)";
    const painPoint = elements.plannerPainPoint.value.trim() || "កូនរៀនតែទ្រឹស្តី មិនចេះអនុវត្តដោះស្រាយបញ្ហាពិត";
    const hookType = elements.plannerHookType.value || "THINK (ធ្វើឱ្យគិត)";
    const hookText = elements.plannerHookText.value.trim() || "«រៀនបានពិន្ទុល្អ… តែបើជួបបញ្ហាជាក់ស្តែង គាត់ចេះដោះស្រាយដោយរបៀបណា?»";
    const action = elements.plannerAction.value.trim() || "សិស្សអង្គុយសាកល្បងសរសេរ Code លើ CodeMonkey ខុសហើយកែឡើងវិញ ដោយមានគ្រូនៅក្បែរជួយលើកទឹកចិត្ត";
    const proof = elements.plannerProof.value.trim() || "ស្នាមញញឹមពេល Robot ដើរត្រូវទិសដៅ និងការទះដៃអបអរជាមួយមិត្តភក្តិ";
    const meaning = elements.plannerMeaning.value.trim() || "នៅ PSIS ការរៀនបច្ចេកវិទ្យាមិនមែនគ្រាន់តែមើលអេក្រង់ទេ គឺការហាត់គិតដោះស្រាយបញ្ហាសម្រាប់អនាគត";
    const cta = elements.plannerCTA.value.trim() || "ស្វែងយល់បន្ថែមអំពីកម្មវិធីសិក្សាអន្តរជាតិនៅ PSIS តាមរយៈ Message ឬទស្សនាសាលាផ្ទាល់។";

    const script = `🎬 [PSIS VIDEO SCRIPT BRIEF]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📌 ប្រធានបទ (Topic): ${topic}
🎯 ទស្សនិកជនគោលដៅ (Persona): ${persona}
📊 ដំណាក់កាល Funnel: ${funnel}
⚠️ កង្វល់មាតាបិតា (Pain Point): ${painPoint}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⏱️ 00:00 - 00:03 | 1. THE HOOK (${hookType})
   [Visual]: កាត់តរូបភាពប្លែក ឬទឹកមុខសិស្សកំពុងផ្ចង់គិត
   [Audio / Text on Screen]: ${hookText}

⏱️ 00:03 - 00:10 | 2. CONTEXT (បរិបទ)
   [Visual]: បរិយាកាសក្នុងបន្ទប់ពិសោធន៍ ឬបន្ទប់ ICT នៅ PSIS
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
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

    elements.scriptOutput.textContent = script;
  }

  // Attach input listeners to generator
  const plannerInputs = [
    elements.plannerTopic, elements.plannerPersona, elements.plannerFunnel,
    elements.plannerPainPoint, elements.plannerHookType, elements.plannerHookText,
    elements.plannerAction, elements.plannerProof, elements.plannerMeaning, elements.plannerCTA
  ];

  plannerInputs.forEach(input => {
    if (input) {
      input.addEventListener("input", updateGeneratedScript);
      input.addEventListener("change", updateGeneratedScript);
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
  // Sidebar Navigation Tabs
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

  // Print button
  if (elements.btnPrintDoc) {
    elements.btnPrintDoc.addEventListener("click", () => {
      window.print();
    });
  }

  // Quick action from header to go to planner
  const btnHeaderPlanner = $("#btnHeaderPlanner");
  if (btnHeaderPlanner) {
    btnHeaderPlanner.addEventListener("click", () => {
      const plannerNav = $(`[data-view="planner"]`);
      if (plannerNav) plannerNav.click();
    });
  }

  // Initialize
  initCategories();
  renderLessons();
  renderFrameworksAndBrand();
  renderChecklist();
  updateGeneratedScript();
});
