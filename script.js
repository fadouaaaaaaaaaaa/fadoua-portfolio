/* ============================================================
   SCRIPT DU PORTFOLIO
   ------------------------------------------------------------
   Ce fichier gère :
   1. la traduction anglaise (bouton FR / EN)
   2. le menu sur mobile (bouton ☰)
   3. le surlignage du menu selon la section affichée
   4. l'apparition douce des blocs au défilement

   👉 Pour modifier un texte ANGLAIS : changez la phrase entre
      guillemets ci-dessous. Gardez bien les guillemets " " et
      la virgule à la fin de la ligne.
   👉 Les textes FRANÇAIS, eux, se modifient dans index.html.
   ============================================================ */


/* ---------- 1. TEXTES EN ANGLAIS ---------- */
const english = {

    // --- MENU ---
    navAbout: "About",
    navWork: "Selected work",
    navSkills: "Skills",
    navJourney: "Journey",
    navContact: "Contact",

    // --- ACCUEIL ---
    heroEyebrow: "Professional portfolio",
    heroHi: "Hello, I’m",
    heroRole: "Learning design · Training · Artificial intelligence",
    heroIntro: "I design and support learning experiences connecting pedagogy, digital tools and thoughtful uses of AI.",
    heroCta: "Explore my work",
    heroContact: "Get in touch",
    heroNote: "Curious about possibilities, attentive to practice.",
    coreLabel: "PEDAGOGY<br>× AI",
    float1: "Learn",
    float2: "Experiment",
    float3: "Support",
    scroll: "Scroll",

    // --- À PROPOS ---
    aboutEyebrow: "A little context",
    aboutTitle: "Pedagogy as a starting point.<br><span class=\"muted-lilac\">Digital learning as a field to explore.</span>",
    aboutText1: "My background lies at the intersection of language education, digital learning environments and instructional design. Today, I contribute to initiatives that help teaching teams understand, experiment with and thoughtfully integrate artificial intelligence.",
    aboutText2: "This portfolio brings together selected projects, learning initiatives and skills developed in higher education. It will grow as new collaborations and learning experiences take shape.",
    aboutLink: "Explore my journey",
    principle1Title: "Design",
    principle1Text: "Build coherent, accessible learning pathways that respond to learners’ needs.",
    principle2Title: "Support",
    principle2Text: "Connect tools, teaching practices and learning objectives.",
    principle3Title: "Question",
    principle3Text: "Maintain a critical perspective on AI uses and limitations.",

    // --- RÉALISATIONS ---
    workEyebrow: "Selected projects",
    workTitle: "From ideas to learning experiences.",
    workAside: "A selection of work illustrating my focus on training and AI in higher education.",
    projectType1: "Inter-university initiative",
    project1Title: "MAIA — supporting AI adoption",
    project1Text: "Contributing to the visibility of MAIA training and resources across the A2U Alliance: making the offer clearer, supporting dissemination and encouraging thoughtful AI adoption in higher education.",
    projectType2: "University programme",
    project2Title: "University Diploma: AI Foundations",
    project2Text: "Contributing to the coordination and monitoring of a blended programme combining AI fundamentals, programming, data, and ethical and societal issues.",
    projectType3: "Events & knowledge sharing",
    project3Title: "Webinars and peer exchange",
    project3Text: "Contributing to the preparation and dissemination of discussions on teaching practices, AI tools and frameworks for their use in universities.",
    projectDisclaimer: "A concise overview of professional contributions. More detailed project scopes and links to outputs can be added over time.",

    // --- COMPÉTENCES ---
    skillsEyebrow: "What I do",
    skillsTitle: "Bringing different areas of expertise together.",
    skill1Title: "Instructional design",
    skill1Text: "Needs analysis, learning design, pathway structure and continuous improvement.",
    skill2Title: "Blended learning",
    skill2Text: "Connecting in-person, online and asynchronous learning activities.",
    skill3Title: "Digital learning & AI",
    skill3Text: "Exploring tools, supporting practice and critically examining their limitations.",
    skill4Title: "Project coordination",
    skill4Text: "Coordination, communication, action tracking and partner collaboration.",
    toolsLabel: "Tools and environments",

    // --- PARCOURS ---
    journeyEyebrow: "My journey",
    journeyTitle: "A path connecting languages, digital learning and training.",
    journeyIntro: "This path shapes my interest in learning environments and the evolution of teaching practices.",
    timeline1Date: "University studies",
    timeline1Title: "Language education & training design",
    timeline1Text: "A foundation in teaching French as a foreign language and designing learning programmes.",
    timeline2Date: "Specialisation",
    timeline2Title: "Digital systems for learning",
    timeline2Text: "Further study of digital learning environments and their educational uses.",
    timeline3Date: "Current experience",
    timeline3Title: "Learning design in higher education",
    timeline3Text: "Supporting training projects, showcasing resources and collaborating across universities on AI-related initiatives.",

    // --- CONTACT ET PIED DE PAGE ---
    contactEyebrow: "What’s next?",
    contactTitle: "Let’s move ideas forward together.",
    contactText: "I welcome conversations about instructional design, training and responsible uses of AI.",
    contactEmail: "Contact me by email",
    contactLinkedin: "LinkedIn",
    contactNote: "Portfolio in progress · Content may evolve.",
    footerText: "Made with curiosity and a willingness to learn.",
    backTop: "Back to top ↑",

    // --- ÉTIQUETTES DES PROJETS ET OUTILS ---
    skipLink: "Skip to content",
    tag1a: "Communication",
    tag1b: "Training",
    tag1c: "AI",
    tag2a: "Multimodal learning",
    tag2b: "Coordination",
    tag2c: "Blended learning",
    tag3a: "Webinar",
    tag3b: "Partnerships",
    tag3c: "Monitoring",
    toolGenAI: "Generative AI"
};

// Autres textes traduits (titre de l'onglet, descriptions pour l'accessibilité)
const extras = {
  fr: {
    pageTitle: "Fadoua — Ingénierie pédagogique & IA",
    pageDescription: "Portfolio professionnel de Fadoua — ingénierie pédagogique, formation et intelligence artificielle dans l'enseignement supérieur.",
    menuOpen: "Ouvrir le menu",
    menuClose: "Fermer le menu",
    langButton: "Switch to English",
    homeLabel: "Accueil",
    heroVisualLabel: "Illustration abstraite autour de la pédagogie et de l'intelligence artificielle",
    photoAlt: "Portrait de Fadoua"
  },
  en: {
    pageTitle: "Fadoua — Learning design & AI",
    pageDescription: "Fadoua's professional portfolio — learning design, training and artificial intelligence in higher education.",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langButton: "Passer en français",
    homeLabel: "Home",
    heroVisualLabel: "Abstract illustration about pedagogy and artificial intelligence",
    photoAlt: "Portrait of Fadoua"
  }
};


/* ---------- 2. CHANGEMENT DE LANGUE ---------- */
// Le français est lu directement dans index.html au chargement de la page :
// vous n'avez donc à l'écrire qu'à un seul endroit.
const french = {};
document.querySelectorAll("[data-i18n]").forEach((element) => {
  french[element.dataset.i18n] = element.innerHTML;
});

const langButton = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".main-nav");
let currentLang = "fr";

function setLanguage(lang) {
  currentLang = lang;
  const texts = lang === "en" ? english : french;
  const other = extras[lang];

  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const text = texts[element.dataset.i18n];
    if (text) element.innerHTML = text;
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", other[element.dataset.i18nAria]);
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    element.setAttribute("alt", other[element.dataset.i18nAlt]);
  });

  document.title = other.pageTitle;
  document.querySelector('meta[name="description"]').setAttribute("content", other.pageDescription);
  langButton.textContent = lang === "fr" ? "EN" : "FR";
  langButton.setAttribute("aria-label", other.langButton);
  menuToggle.setAttribute("aria-label", nav.classList.contains("open") ? other.menuClose : other.menuOpen);

  // On mémorise le choix pour la prochaine visite
  try { localStorage.setItem("portfolio-lang", lang); } catch (e) {}
}

langButton.addEventListener("click", () => setLanguage(currentLang === "fr" ? "en" : "fr"));

// Au chargement : langue choisie lors d'une visite précédente,
// ou lien direct en anglais avec ...index.html?lang=en
let savedLang = null;
try { savedLang = localStorage.getItem("portfolio-lang"); } catch (e) {}
const urlLang = new URLSearchParams(window.location.search).get("lang");
if (urlLang === "en" || urlLang === "fr") savedLang = urlLang;
if (savedLang === "en") setLanguage("en");


/* ---------- 3. MENU MOBILE ---------- */
function closeMenu() {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", extras[currentLang].menuOpen);
  menuToggle.textContent = "☰";
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? extras[currentLang].menuClose : extras[currentLang].menuOpen);
  menuToggle.textContent = isOpen ? "×" : "☰";
});
nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
// La touche Échap ferme aussi le menu
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("open")) closeMenu();
});


/* ---------- 4. MENU ACTIF + APPARITION AU DÉFILEMENT ---------- */
const revealTargets = document.querySelectorAll(".section-heading, .about-copy, .principle, .project-card, .skill-card, .timeline-item, .contact-card");
const navLinks = nav.querySelectorAll("a");

if ("IntersectionObserver" in window) {
  // Apparition douce des blocs
  revealTargets.forEach((el) => el.classList.add("reveal"));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach((el) => revealObserver.observe(el));

  // Surlignage du lien de menu de la section visible
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + entry.target.id);
      });
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));
}
