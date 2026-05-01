const langButtons = document.querySelectorAll(".lang-button");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nHtmlNodes = document.querySelectorAll("[data-i18n-html]");
const pageMetaDescription = document.querySelector('meta[name="description"]');

const translations = {
  ja: {
    page_title: "Trương Thị Thảo Nguyên | QC Engineer",
    page_description:
      "Trương Thị Thảo Nguyênのポートフォリオサイト。品質管理エンジニア（QCエンジニア）として、プロセス・製品の品質を高い水準で維持し、継続的な改善に取り組みます。",
    brand_role: "QC Engineer",
    nav_profile: "プロフィール",
    nav_strengths: "強み",
    nav_projects: "実績",
    nav_contact: "連絡先",
    hero_eyebrow: "PROJECT / QUALITY / JAPAN CLIENTS",
    hero_title: '経験と現場理解で、<span>複雑なプロジェクトを前へ進める</span>',
    hero_text:
      "Trương Thị Thảo Nguyênは、品質管理エンジニア（QCエンジニア）として、プロセスおよび製品の品質を高い水準で維持しながら、スキル向上を通じて業務効率を高めます。企業の成長に貢献できる重要なメンバーになることを目指します。",
    hero_cta_projects: "実績を見る",
    hero_cta_contact: "連絡先",
    metric_1: "品質管理",
    metric_2: "統計分析",
    metric_3: "ISTQB",
    metric_4: "継続改善",
    summary_label: "Career Summary",
    stat_1: "高い水準の維持",
    stat_2: "統計的アプローチ",
    stat_3: "継続的最適化",
    profile_eyebrow: "Profile",
    profile_title: "経験の幅と、現場で動かせる推進力",
    profile_text_1:
      "私の強みは、プロセスと製品の品質を高い水準で維持しながら、業務効率の向上とスキルの向上に取り組むことです。",
    profile_text_2:
      "品質管理エンジニア（QCエンジニア）として、品質課題の見える化、再発防止、継続改善に取り組み、企業の成長に貢献できるメンバーを目指します。",
    strengths_eyebrow: "Strengths",
    strengths_title: "業務で強みを発揮できる領域",
    strength_1_title: "品質管理（QC）",
    strength_1_text:
      "プロセスと製品の品質を高い水準で維持し、品質管理プロセスの設計および運用に取り組み、継続的な改善を実現します。",
    strength_2_title: "ドキュメント作成・データ分析",
    strength_2_text:
      "ドキュメント作成および統計的分析を通じて、品質データを可視化し、意思決定の根拠となる情報を提供します。",
    strength_3_title: "品質ツール・標準知識",
    strength_3_text:
      "品質管理ツールおよびISTQB、Microsoft Officeなどのツールを活用し、効率的で信頼性の高い品質保証を実現します。",
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