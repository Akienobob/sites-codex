const translations = {
  ru: {
    home: 'Главная', about: 'О группе', music: 'Музыка', media: 'Медиа', contacts: 'Контакты',
    heroTitle: 'Старый Икарус',
    heroLead: 'Фолк-рок с элементами блюза, джаза и психоделики. Глубокие философские тексты о пути, свете и памяти.',
    heroSub: 'Крылатый Икарус летит к солнцу — метафора внутреннего движения и свободы.',
    philosophy: 'Философия группы',
    phText: 'Мы играем музыку как разговор о смысле: где заканчивается дорога и начинается человек.',
    musicTitle: 'Музыка',
    mediaTitle: 'Медиа',
    contactsTitle: 'Контакты'
  },
  en: {
    home: 'Home', about: 'About', music: 'Music', media: 'Media', contacts: 'Contacts',
    heroTitle: 'Old Ikarus',
    heroLead: 'Folk-rock infused with blues, jazz, and psychedelic textures. Deep philosophical lyrics about roads, light, and memory.',
    heroSub: 'A winged Ikarus bus flying toward the sun — a metaphor of inner motion and freedom.',
    philosophy: 'Band philosophy',
    phText: 'We play music as a dialogue about meaning: where the road ends and the human begins.',
    musicTitle: 'Music',
    mediaTitle: 'Media',
    contactsTitle: 'Contacts'
  }
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  localStorage.setItem('lang', lang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
  const btn = document.querySelector('[data-lang-toggle]');
  if (btn) btn.textContent = lang.toUpperCase() === 'RU' ? 'RU | EN' : 'EN | RU';
}

const current = localStorage.getItem('lang') || 'ru';
applyLang(current);

const btn = document.querySelector('[data-lang-toggle]');
if (btn) {
  btn.addEventListener('click', () => {
    const next = (localStorage.getItem('lang') || 'ru') === 'ru' ? 'en' : 'ru';
    applyLang(next);
  });
}
