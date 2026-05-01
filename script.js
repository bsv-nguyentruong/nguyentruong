const langButtons = document.querySelectorAll(".lang-button");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nHtmlNodes = document.querySelectorAll("[data-i18n-html]");
const pageMetaDescription = document.querySelector('meta[name="description"]');

const translations = {
  ja: {
    page_title: "Trương Thị Thảo Nguyên | Project Manager",
    page_description:
      "Trương Thị Thảo Nguyênのポートフォリオサイト。13年以上のIT経験、5年以上のPM経験、9年以上の日本顧客対応経験を持つProject Manager。",
    brand_role: "Project Manager",
    nav_profile: "プロフィール",
    nav_strengths: "強み",
    nav_projects: "実績",
    nav_contact: "連絡先",
    hero_eyebrow: "PROJECT / QUALITY / JAPAN CLIENTS",
    hero_title: '経験と現場理解で、<span>複雑なプロジェクトを前へ進める</span>',
    hero_text:
      "Trương Thị Thảo Nguyênは、品質改善、プロジェクトマネジメント、運営視点を横断してきたProject Managerです。長年のIT経験と日本顧客対応経験を活かし、安定した進行と継続改善を重視します。",
    hero_cta_projects: "実績を見る",
    hero_cta_contact: "連絡先",
    metric_1: "IT経験",
    metric_2: "PM経験",
    metric_3: "日本顧客との業務経験",
    metric_4: "子会社経営経験",
    summary_label: "Career Summary",
    stat_1: "年のIT経験",
    stat_2: "年のProject Management経験",
    stat_3: "年の日本顧客対応経験",
    profile_eyebrow: "Profile",
    profile_title: "経験の幅と、現場で動かせる推進力",
    profile_text_1:
      "私の強みは、開発品質、進行管理、業務運用を別々ではなく、ひとつの流れとして捉えられることです。",
    profile_text_2:
      "13年以上のIT経験、5年以上のPM経験、9年以上の日本顧客対応経験に加え、子会社運営の経験を通じて、現場・顧客・運営をつなぐ実務的な判断と推進を行ってきました。",
    strengths_eyebrow: "Strengths",
    strengths_title: "業務で強みを発揮できる領域",
    strength_1_title: "Quality Management",
    strength_1_text:
      "品質課題の見える化、再発防止、継続改善まで一貫して対応し、安定した運用品質につなげます。",
    strength_2_title: "Project Coordination",
    strength_2_text:
      "スケジュール、関係者調整、優先順位整理を行い、複数部門が関わる案件でも前進できる状態を作ります。",
    strength_3_title: "Japanese Client Work",
    strength_3_text:
      "日本顧客との長年の業務経験を活かし、期待値調整、進行共有、品質意識の合わせ込みを丁寧に行います。",
    projects_eyebrow: "Selected Projects",
    projects_title: "業務理解と推進力が活きる代表案件",
    project_link_label: "Reference",
    project_1_tag: "Resident Service",
    project_1_title: "Resident Service Platform",
    project_1_text:
      "利用者向け導線と実運用の両立が求められる案件。利用体験だけでなく、現場で継続して回る運用設計と品質維持が重要なタイプのプロジェクトです。",
    project_1_point_1: "利用者向け導線の整理",
    project_1_point_2: "運用に合わせた改善視点",
    project_1_point_3: "継続品質の管理",
    project_2_tag: "Event Business System",
    project_internal_label: "Internal / Business Operation",
    project_2_title: "Event Order Site",
    project_2_text:
      "受発注や業務フローを支えるイベント系の業務システム。業務理解、関係者調整、運用設計が成否を左右するため、業務定着を見据えたPM視点が重要となります。",
    project_2_point_1: "受発注フローの理解",
    project_2_point_2: "関係者調整と業務整理",
    project_2_point_3: "運用定着を重視した進行",
    project_4_tag: "Healthcare Platform",
    project_4_title: "Health Support Service",
    project_4_text:
      "専門性の高い情報を扱うヘルスケア系サービス。情報の分かりやすさ、継続更新、利用者への信頼性を支える品質管理と運用設計が重要な領域です。",
    project_4_point_1: "情報の分かりやすさを重視",
    project_4_point_2: "継続更新に対応する運用設計",
    project_4_point_3: "信頼性の高い品質管理",
    project_5_tag: "Content App",
    project_5_title: "Content Delivery App",
    project_5_text:
      "継続配信型のコンテンツサービスにおいて、通知、更新サイクル、ユーザー体験の安定性が重要な案件。長く使われるサービスを支える運用品質の観点が活きる領域です。",
    project_5_point_1: "通知と更新サイクルの安定化",
    project_5_point_2: "継続運用を前提にした品質管理",
    project_5_point_3: "ユーザー体験の維持改善",
    contact_eyebrow: "Contact",
    contact_title: "お問い合わせ",
    contact_text:
      "プロジェクト管理、品質改善、運用整理に関するご相談は、以下からご連絡ください。",
    footer_text: '© <span id="year"></span> Trương Thị Thảo Nguyên',
    footer_back_to_top: "トップへ戻る"
  },
  en: {
    page_title: "Trương Thị Thảo Nguyên | Project Manager",
    page_description:
      "Portfolio site of Trương Thị Thảo Nguyên, a Project Manager with 13+ years in IT, 5+ years in project management, and 9+ years working with Japanese clients.",
    brand_role: "Project Manager",
    nav_profile: "Profile",
    nav_strengths: "Strengths",
    nav_projects: "Projects",
    nav_contact: "Contact",
    hero_eyebrow: "PROJECT / QUALITY / JAPAN CLIENTS",
    hero_title:
      'Using experience and field insight to <span>move complex projects forward with stability</span>',
    hero_text:
      "Trương Thị Thảo Nguyên is a Project Manager with experience across quality improvement, project execution, and operational coordination. With long-term IT experience and many years working with Japanese clients, he focuses on steady delivery and continuous improvement.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact",
    metric_1: "years in IT",
    metric_2: "years in PM",
    metric_3: "years with Japanese clients",
    metric_4: "years in subsidiary management",
    summary_label: "Career Summary",
    stat_1: "years in IT",
    stat_2: "years in Project Management",
    stat_3: "years working with Japanese clients",
    profile_eyebrow: "Profile",
    profile_title: "Broad experience and practical execution power",
    profile_text_1:
      "My strength is not limited to quality control or schedule management alone. I connect delivery quality, project progress, and business operation as one practical flow.",
    profile_text_2:
      "With 13+ years in IT, 5+ years in PM, 9+ years working with Japanese clients, and hands-on subsidiary operation experience, I value realistic decision-making and stable project advancement.",
    strengths_eyebrow: "Strengths",
    strengths_title: "Areas where I create value",
    strength_1_title: "Quality Management",
    strength_1_text:
      "I handle issue visualization, recurrence prevention, and continuous improvement to support stable operational quality.",
    strength_2_title: "Project Coordination",
    strength_2_text:
      "I align schedules, stakeholders, and priorities so that cross-functional projects can move forward with clarity.",
    strength_3_title: "Japanese Client Work",
    strength_3_text:
      "With long-term experience working with Japanese clients, I pay close attention to expectation alignment, communication, and quality awareness.",
    projects_eyebrow: "Selected Projects",
    projects_title: "Representative projects where business understanding mattered",
    project_link_label: "Reference",
    project_1_tag: "Resident Service",
    project_1_title: "Resident Service Platform",
    project_1_text:
      "A resident-facing service where user flow and real operation both matter. This type of project requires careful coordination across information structure, operational continuity, and quality control.",
    project_1_point_1: "User-facing information flow",
    project_1_point_2: "Improvement based on real operation",
    project_1_point_3: "Continuous quality control",
    project_2_tag: "Event Business System",
    project_internal_label: "Internal / Business Operation",
    project_2_title: "Shoei Bijutsu Order Site",
    project_2_text:
      "A business workflow project in the event domain covering ordering and operational flow. It required process understanding, stakeholder alignment, and a practical view toward operational adoption.",
    project_2_point_1: "Order flow understanding",
    project_2_point_2: "Stakeholder coordination",
    project_2_point_3: "Operational adoption focus",
    project_4_tag: "Healthcare Platform",
    project_4_title: "Health Support Service",
    project_4_text:
      "A healthcare-oriented service handling specialized information. Clarity, trust, and ongoing content update make quality management and operation design especially important.",
    project_4_point_1: "Clear information design",
    project_4_point_2: "Operation for ongoing updates",
    project_4_point_3: "Reliable quality control",
    project_5_tag: "Content App",
    project_5_title: "Content Delivery App",
    project_5_text:
      "A continuously updated content service where notification quality, content release cycle, and stable user experience all matter over time.",
    project_5_point_1: "Stable notification and update cycle",
    project_5_point_2: "Quality management for continuous operation",
    project_5_point_3: "User experience maintenance",
    contact_eyebrow: "Contact",
    contact_title: "Get in touch",
    contact_text:
      "For discussions related to project management, quality improvement, and operation design, please reach out via the channels below.",
    footer_text: '© <span id="year"></span> Trương Thị Thảo Nguyên',
    footer_back_to_top: "Back to top"
  }
};

const updateYear = () => {
  const yearNode = document.getElementById("year");

  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }
};

let currentLanguage = localStorage.getItem("landing-page-language") || "ja";

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.ja;

  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.title = dictionary.page_title;

  if (pageMetaDescription) {
    pageMetaDescription.setAttribute("content", dictionary.page_description);
  }

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;

    if (key && dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  i18nHtmlNodes.forEach((node) => {
    const key = node.dataset.i18nHtml;

    if (key && dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("landing-page-language", lang);
  updateYear();
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang || "ja");
  });
});

applyLanguage(currentLanguage);