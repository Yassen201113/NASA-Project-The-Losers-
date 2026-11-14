/* ORBITAL MCQ + bilingual story layer. Wraps the site's original renderer so existing features remain intact. */
(function () {
  'use strict';
  const pages = ['voyager', 'curiosity', 'pioneer', 'apollo'];
  const page = document.body.dataset.page;
  if (!pages.includes(page)) return;

  // Each paragraph has three factual answer statements, aligned with its three questions.
  const facts = {
    voyager: [
      { en: ['Voyager 1 was built to explore the outer Solar System.', 'It launched on September 5, 1977.', 'It carried cameras, science instruments, a large antenna, and the Golden Record.'], ar: ['صُممت فوياجر 1 لاستكشاف أطراف النظام الشمسي.', 'انطلقت في 5 سبتمبر 1977.', 'حملت كاميرات وأجهزة علمية وهوائيًا كبيرًا والقرص الذهبي.'] },
      { en: ['Scientists sent it to study Jupiter and Saturn up close.', 'A gravity assist uses a planet’s gravity to change a spacecraft’s speed and direction.', 'The Golden Record was a symbolic collection of sounds, images, and greetings from Earth.'], ar: ['أُرسلت لدراسة المشتري وزحل عن قرب.', 'تستخدم مساعدة الجاذبية جاذبية الكوكب لتغيير سرعة المركبة واتجاهها.', 'كان القرص الذهبي مجموعة رمزية من الأصوات والصور والتحيات من الأرض.'] },
      { en: ['Voyager 1 helped confirm that Jupiter has a faint ring system.', 'It discovered two small moons of Jupiter: Thebe and Metis.', 'Titan interested scientists because it has a thick, nitrogen-rich atmosphere.'], ar: ['ساعدت فوياجر 1 في تأكيد وجود نظام حلقات خافت حول المشتري.', 'اكتشفت قمرين صغيرين للمشتري هما ثيبي ومتيس.', 'اهتم العلماء بتيتان لأن له غلافًا جويًا كثيفًا غنيًا بالنيتروجين.'] },
      { en: ['The heliopause is the boundary where the solar wind gives way to interstellar space.', 'Voyager 1 crossed into interstellar space in August 2012.', 'Engineers switch off some instruments to conserve the spacecraft’s limited power.'], ar: ['الهليوبوز هو الحد الذي تتراجع عنده الرياح الشمسية أمام بيئة الفضاء بين النجوم.', 'عبرت فوياجر 1 إلى الفضاء بين النجوم في أغسطس 2012.', 'يوقف المهندسون بعض الأجهزة للحفاظ على طاقة المركبة المحدودة.'] },
      { en: ['Voyager 1 carries no astronauts; it is a robotic spacecraft.', 'The Golden Record is a symbolic greeting from Earth.', 'The scientific data already collected will remain valuable even after the signals stop.'], ar: ['لا تحمل فوياجر 1 رواد فضاء؛ فهي مركبة روبوتية.', 'القرص الذهبي تحية رمزية من كوكب الأرض.', 'ستظل البيانات العلمية التي جُمعت مفيدة حتى بعد توقف الإشارات.'] }
    ],
    curiosity: [
      { en: ['Curiosity is a robotic rover and mobile science laboratory.', 'It landed in Gale Crater on Mars on August 6, 2012.', 'It has six wheels, cameras, a robotic arm, a drill, and science instruments.'], ar: ['كيوريوسيتي مركبة جوالة روبوتية ومعمل علمي متحرك.', 'هبطت في فوهة غيل على المريخ في 6 أغسطس 2012.', 'لديها ست عجلات وكاميرات وذراع روبوتية ومثقاب وأجهزة علمية.'] },
      { en: ['Its main question is whether ancient Mars had environments that could support microbial life.', 'It searches rocks and minerals for clues about water and useful chemistry.', 'Gale Crater was chosen partly because it contains layered Mount Sharp and signs of ancient water.'], ar: ['سؤالها الرئيسي هو ما إذا كان المريخ القديم يمتلك بيئات قد تدعم حياة ميكروبية.', 'تبحث في الصخور والمعادن عن أدلة على الماء والعناصر الكيميائية المهمة.', 'اختيرت فوهة غيل جزئيًا لوجود جبل شارب ذي الطبقات وآثار الماء القديم.'] },
      { en: ['Sedimentary rocks and an ancient lake provide evidence of past liquid water.', 'Clay minerals can form when water interacts with other materials.', 'Organic molecules are important clues, but they do not prove life existed.'], ar: ['تقدم الصخور الرسوبية وآثار بحيرة قديمة دليلًا على وجود ماء سائل في الماضي.', 'يمكن أن تتكون المعادن الطينية عندما يتفاعل الماء مع مواد أخرى.', 'الجزيئات العضوية أدلة مهمة، لكنها لا تثبت وحدها وجود حياة.'] },
      { en: ['Curiosity explores the slopes and layers of Mount Sharp.', 'Different rock layers can reveal how the Martian environment changed over time.', 'Rough rocks, dust, cold, and communication delays make careful driving necessary.'], ar: ['تستكشف كيوريوسيتي منحدرات وطبقات جبل شارب.', 'يمكن أن تكشف طبقات الصخور المختلفة كيف تغيرت بيئة المريخ بمرور الزمن.', 'تجعل الصخور الوعرة والغبار والبرد وتأخر الاتصال الحركةَ الحذرة ضرورية.'] },
      { en: ['Habitability means having ingredients and conditions that life could use.', 'Scientists compare measurements and evidence before making conclusions.', 'The mission depends on a team that includes engineers, programmers, geologists, and chemists.'], ar: ['قابلية السكن تعني توافر المكونات والظروف التي يمكن أن تستخدمها الحياة.', 'يقارن العلماء القياسات والأدلة قبل الوصول إلى استنتاجات.', 'تعتمد المهمة على فريق يضم مهندسين ومبرمجين وجيولوجيين وكيميائيين.'] }
    ],
    pioneer: [
      { en: ['Pioneer 10 launched on March 2, 1972.', 'Its journey aimed to cross the asteroid belt and explore Jupiter.', 'It became the first spacecraft to cross the main asteroid belt and fly by Jupiter.'], ar: ['انطلقت بايونير 10 في 2 مارس 1972.', 'هدفت رحلتها إلى عبور حزام الكويكبات واستكشاف المشتري.', 'أصبحت أول مركبة تعبر حزام الكويكبات الرئيسي وتحلق بالقرب من المشتري.'] },
      { en: ['Engineers considered the risk of asteroids and Jupiter’s strong radiation.', 'Scientists wanted to measure magnetic fields, charged particles, cosmic rays, dust, and Jupiter’s atmosphere.', 'The Pioneer plaque shows a human man and woman and symbols that describe our Solar System’s location.'], ar: ['درس المهندسون مخاطر الكويكبات والإشعاع القوي حول المشتري.', 'أراد العلماء قياس المجالات المغناطيسية والجسيمات المشحونة والأشعة الكونية والغبار وغلاف المشتري.', 'تُظهر لوحة بايونير رجلًا وامرأة ورموزًا توضّح موقع نظامنا الشمسي.'] },
      { en: ['Pioneer 10 was first to cross the main asteroid belt and first to fly close to Jupiter.', 'It sent images of Jupiter and its moons back to Earth.', 'Its measurements revealed details about Jupiter’s magnetic environment and radiation belts.'], ar: ['كانت بايونير 10 أول مركبة تعبر حزام الكويكبات الرئيسي وأول من يحلق قرب المشتري.', 'أرسلت صورًا للمشتري وأقماره إلى الأرض.', 'كشفت قياساتها تفاصيل عن المجال المغناطيسي للمشتري وأحزمة الإشعاع حوله.'] },
      { en: ['Its radio signals became weaker as it travelled farther from Earth.', 'NASA received its final signal on January 23, 2003.', 'Its available power gradually decreased, making communication more difficult.'], ar: ['أصبحت إشاراتها اللاسلكية أضعف كلما ابتعدت عن الأرض.', 'استقبلت ناسا آخر إشارة منها في 23 يناير 2003.', 'انخفضت الطاقة المتاحة لها تدريجيًا، فأصبح الاتصال أصعب.'] },
      { en: ['The final signal took about 11 hours and 20 minutes to reach Earth.', 'NASA ended Pioneer 10’s primary science mission on March 31, 1997.', 'The spacecraft continues moving through space even though it no longer communicates.'], ar: ['استغرقت الإشارة الأخيرة نحو 11 ساعة و20 دقيقة حتى وصلت إلى الأرض.', 'أنهت ناسا المهمة العلمية الأساسية لبايونير 10 في 31 مارس 1997.', 'تواصل المركبة حركتها في الفضاء رغم أنها لم تعد تتواصل مع الأرض.'] }
    ],
    apollo: [
      { en: ['The Apollo 11 reflector was placed on the Moon in July 1969.', 'It rests near Tranquility Base on the lunar surface.', 'It returns laser light sent from Earth toward its source.'], ar: ['وُضع عاكس أبولو 11 على القمر في يوليو 1969.', 'يوجد بالقرب من قاعدة السكون على سطح القمر.', 'يعيد ضوء الليزر المرسل من الأرض باتجاه مصدره.'] },
      { en: ['Its panel contains 100 corner-cube reflectors.', 'The reflectors are made from fused silica.', 'Their shape sends incoming light back in a direction close to where it came from.'], ar: ['تحتوي لوحته على 100 عاكس مكعبي الزوايا.', 'صُنعت العواكس من السيليكا المنصهرة.', 'يعيد شكلها الضوء الوارد في اتجاه قريب من مصدره.'] },
      { en: ['Observatories detected reflected laser signals in August 1969.', 'The returned signals showed that the array survived launch, landing, and lunar conditions.', 'The measurements help scientists study the Moon’s orbit and its changing distance from Earth.'], ar: ['رصدت المراصد إشارات الليزر المنعكسة في أغسطس 1969.', 'أثبتت الإشارات العائدة أن اللوحة تحملت الإطلاق والهبوط وظروف القمر.', 'تساعد القياسات العلماء على دراسة مدار القمر وتغير المسافة بينه وبين الأرض.'] },
      { en: ['The reflector is passive and has no motor, computer, transmitter, or electrical supply.', 'Scientists on Earth use lasers and telescopes to send and detect the light.', 'Repeated measurements help refine knowledge of the Earth–Moon system.'], ar: ['العاكس جهاز سلبي لا يحتوي على محرك أو كمبيوتر أو جهاز إرسال أو مصدر كهرباء.', 'يستخدم العلماء على الأرض الليزر والتلسكوبات لإرسال الضوء ورصده.', 'تساعد القياسات المتكررة على تحسين فهم نظام الأرض والقمر.'] },
      { en: ['The reflector does not move across the Moon or take photographs.', 'It returns a portion of the laser light sent from Earth.', 'Its measurements help study the Moon’s orbit, rotation, and distance from Earth.'], ar: ['لا يتحرك العاكس على سطح القمر ولا يلتقط الصور.', 'يعيد جزءًا من ضوء الليزر المرسل من الأرض.', 'تساعد قياساته في دراسة مدار القمر ودورانه والمسافة بينه وبين الأرض.'] }
    ]
  };

  const falseAnswers = {
    en: {
      voyager: 'It was designed to carry astronauts and land on Mars.',
      curiosity: 'It is a crewed spacecraft that orbits Jupiter.',
      pioneer: 'It was designed to remain in Earth orbit and never visit another planet.',
      apollo: 'It is a powered rover that drives around the Moon and takes photographs.'
    },
    ar: {
      voyager: 'صُممت لنقل رواد فضاء والهبوط على المريخ.',
      curiosity: 'هي مركبة مأهولة تدور حول كوكب المشتري.',
      pioneer: 'صُممت للبقاء في مدار الأرض دون زيارة أي كوكب آخر.',
      apollo: 'هي مركبة جوالة تعمل بالطاقة وتتحرك على القمر لالتقاط الصور.'
    }
  };

  const labels = {
    en: { title: 'Multiple-choice challenge', choose: 'Choose one answer. You get one attempt.', correct: 'Correct answer!', wrong: 'That answer is incorrect.', whyCorrect: 'Why it is correct:', whyWrong: 'Why that choice is incorrect:', correctAnswer: 'Correct answer:', restart: 'Restart all questions', restarted: 'All questions have been reset.' },
    ar: { title: 'اختبر فهمك – اختر الإجابة الصحيحة', choose: 'اختر إجابة واحدة فقط؛ لديك محاولة واحدة.', correct: 'إجابة صحيحة!', wrong: 'الإجابة دي غلط.', whyCorrect: 'ليه دي صح؟', whyWrong: 'ليه اختيارك غلط؟', correctAnswer: 'الإجابة الصحيحة:', restart: 'إعادة كل الأسئلة من البداية', restarted: 'تمت إعادة ضبط كل الأسئلة.' }
  };

  function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  }

  function renderMCQs() {
    const lang = (document.documentElement.lang || document.body.lang || 'en').startsWith('ar') ? 'ar' : 'en';
    const copy = facts[page];
    if (!copy) return;
    const storyRoot = document.querySelector('.story-chapters');
    if (storyRoot && !storyRoot.querySelector('.quiz-toolbar')) {
      const toolbar = document.createElement('div');
      toolbar.className = 'quiz-toolbar';
      toolbar.innerHTML = `<button type="button" class="quiz-restart" id="restartAllQuestions">↻ ${labels[lang].restart}</button><span class="quiz-restart-note" aria-live="polite"></span>`;
      storyRoot.prepend(toolbar);
    }
    const restartButton = document.getElementById('restartAllQuestions');
    if (restartButton) {
      restartButton.innerHTML = `↻ ${labels[lang].restart}`;
      if (restartButton.dataset.bound !== 'true') {
        restartButton.dataset.bound = 'true';
        restartButton.addEventListener('click', () => {
          renderMCQs();
          const note = document.querySelector('.quiz-restart-note');
          if (note) note.textContent = labels[(document.documentElement.lang || 'en').startsWith('ar') ? 'ar' : 'en'].restarted;
        });
      }
    }

    document.querySelectorAll('.story-chapters .chapter').forEach((chapter, paragraphIndex) => {
      const section = chapter.querySelector('.chapter-questions');
      if (!section || !copy[paragraphIndex]) return;
      const sourceQuestions = (chapterQuestions || {})[page]?.[paragraphIndex] || [];
      const questionOffset = lang === 'ar' ? 3 : 0;
      const prompts = sourceQuestions.slice(questionOffset, questionOffset + 3);
      const paragraphFacts = copy[paragraphIndex][lang];
      const falseOption = falseAnswers[lang][page];
      section.innerHTML = `<h4>${labels[lang].title}</h4>` + prompts.map((prompt, qIndex) => {
        const correct = paragraphFacts[qIndex];
        const choices = [correct, paragraphFacts[(qIndex + 1) % 3], paragraphFacts[(qIndex + 2) % 3], falseOption];
        const shift = (paragraphIndex + qIndex) % choices.length;
        const rotated = choices.slice(shift).concat(choices.slice(0, shift));
        const answerIndex = rotated.indexOf(correct);
        return `<div class="mcq-question" data-answer="${answerIndex}" data-correct-text="${escapeHTML(correct)}">
          <p class="mcq-prompt"><b>${qIndex + 1}.</b> ${escapeHTML(prompt)}</p>
          <div class="mcq-options">${rotated.map((choice, optionIndex) => `<button type="button" class="mcq-option" data-option="${optionIndex}"><span class="mcq-letter">${['A','B','C','D'][optionIndex]}</span><span>${escapeHTML(choice)}</span></button>`).join('')}</div>
          <div class="mcq-feedback" aria-live="polite">${labels[lang].choose}</div>
        </div>`;
      }).join('');

      section.querySelectorAll('.mcq-question').forEach(question => {
        const answer = Number(question.dataset.answer);
        const correctText = question.dataset.correctText;
        question.querySelectorAll('.mcq-option').forEach(button => {
          button.addEventListener('click', () => {
            if (question.dataset.done === 'true') return;
            question.dataset.done = 'true';
            const selected = Number(button.dataset.option);
            const feedback = question.querySelector('.mcq-feedback');
            const allOptions = [...question.querySelectorAll('.mcq-option')];
            // A single attempt: lock every option after the first click.
            allOptions.forEach(option => { option.disabled = true; });
            if (selected === answer) {
              button.classList.add('is-correct');
              feedback.innerHTML = `<strong>${labels[lang].correct}</strong><br>${labels[lang].whyCorrect} ${escapeHTML(correctText)}`;
              feedback.classList.add('is-correct');
            } else {
              button.classList.add('is-wrong');
              allOptions[answer]?.classList.add('is-correct');
              const selectedText = button.querySelector('span:last-child')?.textContent || '';
              const explanation = lang === 'ar'
                ? `اختيارك لا يطابق المعلومة المطلوبة في السؤال. ${labels[lang].correctAnswer} ${correctText}`
                : `Your choice does not match the fact asked for in this question. ${labels[lang].correctAnswer} ${correctText}`;
              feedback.innerHTML = `<strong>${labels[lang].wrong}</strong><br>${labels[lang].whyWrong} ${escapeHTML(explanation)}`;
              feedback.classList.add('is-wrong');
              // Keep the selected wrong choice visibly marked and the correct one revealed.
              button.setAttribute('aria-label', `${selectedText} — ${labels[lang].wrong}`);
            }
          });
        });
      });
    });
    const note = document.querySelector('.quiz-restart-note');
    if (note) note.textContent = '';
  }

  // Keep the original story renderer: it owns the real translations, paragraph summaries,
  // expand/collapse controls, audio buttons, discovery cards, narration, and game feedback.
  const originalRenderStory = window.renderStory;
  if (typeof originalRenderStory === 'function') {
    window.renderStory = function () {
      originalRenderStory();
      renderMCQs();
    };
    window.renderStory();
  } else {
    console.error('ORBITAL: original renderStory() was not found.');
  }

  // Re-render all translated story controls and MCQs after the language switch.
  const originalApplyLanguage = window.applyLanguage;
  if (typeof originalApplyLanguage === 'function') {
    window.applyLanguage = function () {
      originalApplyLanguage();
      renderMCQs();
    };
  }
  document.getElementById('languageToggle')?.addEventListener('click', () => { renderMCQs(); });

  const style = document.createElement('style');
  style.textContent = `
    .chapter-questions{display:block!important}
    .quiz-toolbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:0 0 16px}
    .quiz-restart{border:1px solid var(--accent);border-radius:999px;padding:10px 16px;background:color-mix(in srgb,var(--accent) 12%,var(--surface));color:var(--text);font-family:inherit;font-size:12px;font-weight:700;cursor:pointer;box-shadow:0 5px 18px rgba(0,0,0,.12)}
    .quiz-restart:hover{transform:translateY(-1px);box-shadow:0 8px 22px rgba(0,0,0,.16)}
    .quiz-restart-note{font-size:11px;color:var(--green,var(--accent))}
    .mcq-question{padding:13px 0;border-top:1px solid var(--line,rgba(130,160,220,.2));}
    .mcq-question:first-of-type{border-top:0}
    .mcq-prompt{margin:0 0 10px;color:var(--text);font-size:13px;line-height:1.7;font-weight:700}
    .mcq-options{display:grid;grid-template-columns:1fr 1fr;gap:8px}
    .mcq-option{display:flex;align-items:flex-start;gap:9px;text-align:start;padding:10px 12px;border:1px solid var(--line,rgba(130,160,220,.25));border-radius:10px;background:var(--surface-2,rgba(30,45,80,.25));color:var(--text);font:inherit;font-size:12px;line-height:1.65;cursor:pointer;transition:.18s}
    .mcq-option:hover:not(:disabled){border-color:var(--accent);transform:translateY(-1px)}
    .mcq-letter{flex:0 0 23px;width:23px;height:23px;display:grid;place-items:center;border-radius:7px;background:var(--surface);color:var(--accent);font-weight:900;font-size:10px}
    .mcq-option:disabled{cursor:not-allowed;opacity:1}
    .mcq-option.is-correct{border-color:#278653;background:rgba(39,134,83,.17);color:var(--text)}
    .mcq-option.is-wrong{border-color:#d33b3b;background:rgba(211,59,59,.16);color:var(--text)}
    .mcq-feedback{margin:9px 0 0;padding:10px 12px;border-radius:10px;background:var(--surface-2);color:var(--muted);font-size:11px;line-height:1.8;min-height:18px}
    .mcq-feedback.is-correct{border-inline-start:3px solid #278653;color:var(--text)}
    .mcq-feedback.is-wrong{border-inline-start:3px solid #d33b3b;color:var(--text)}
    .mcq-feedback strong{display:inline-block;margin-bottom:3px}
    @media(max-width:650px){.mcq-options{grid-template-columns:1fr}.mcq-prompt{font-size:12px}.quiz-restart{width:100%}}
  `;
  document.head.appendChild(style);
})();
