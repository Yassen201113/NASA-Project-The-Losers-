
(() => {
  const toggle = document.getElementById("guide-toggle");
  const panel = document.getElementById("guide-panel");
  const close = document.getElementById("guide-close");
  const message = document.getElementById("guide-message");
  const counter = document.getElementById("guide-counter");
  const next = document.getElementById("guide-next");
  const back = document.getElementById("guide-back");

  if (!toggle || !panel || !message) return;

  const steps = [
    {
      en: "Hello, Space Explorer! Welcome to Stories From Space. I'm your guide. Let's explore together!",
      ar: "أهلاً يا مستكشف الفضاء! أنا مرشدك الفضائي. يلا نكتشف الموقع مع بعض!"
    },
    {
      en: "This is the Home Page. You can discover what this project is about here.",
      ar: "دي الصفحة الرئيسية. هنا هتعرف الموقع بيتكلم عن إيه."
    },
    {
      en: "Explore Missions lets you visit the different space missions and discover their stories.",
      ar: "من Explore Missions تقدر تختار المهمات الفضائية وتكتشف قصصها."
    },
    {
      en: "Use the language button to switch between Arabic and English.",
      ar: "استخدم زر اللغة للتبديل بين العربي والإنجليزي."
    },
    {
      en: "You can switch between Light Mode and Dark Mode using the theme button.",
      ar: "تقدر تغيّر بين الوضع الفاتح والداكن من زر تغيير المظهر."
    },
    {
      en: "Inside each mission, read the paragraph summary and press the button to reveal the full story.",
      ar: "جوه كل مهمة هتلاقي ملخص الفقرة، واضغط الزر عشان تظهر القصة كاملة."
    },
    {
      en: "Press the audio button to listen to the story paragraph.",
      ar: "اضغط زر الصوت عشان تسمع الفقرة."
    },
    {
      en: "Answer the multiple-choice questions to test what you learned. Good luck, Explorer!",
      ar: "جاوب على أسئلة الاختيار من متعدد واختبر معلوماتك. بالتوفيق يا مستكشف!"
    },
    {
      en: "That's the end of our tour! Enjoy exploring space!",
      ar: "خلصت جولتنا! استمتع باستكشاف الفضاء!"
    }
  ];

  let current = 0;

  function arabic() {
    return document.documentElement.lang === "ar" ||
           document.documentElement.dir === "rtl";
  }

  function render() {
    const step = steps[current];

    message.textContent = arabic() ? step.ar : step.en;
    counter.textContent = `${current + 1} / ${steps.length}`;

    back.textContent = arabic() ? "السابق" : "Back";
    next.textContent = current === steps.length - 1
      ? (arabic() ? "إنهاء" : "Finish")
      : (arabic() ? "التالي" : "Next");
  }

  toggle.addEventListener("click", () => {
    panel.hidden = !panel.hidden;
    if (!panel.hidden) {
      current = 0;
      render();
    }
  });

  close.addEventListener("click", () => {
    panel.hidden = true;
  });

  next.addEventListener("click", () => {
    if (current < steps.length - 1) {
      current++;
      render();
    } else {
      panel.hidden = true;
    }
  });

  back.addEventListener("click", () => {
    if (current > 0) {
      current--;
      render();
    }
  });

  window.addEventListener("languageChanged", render);
})();
