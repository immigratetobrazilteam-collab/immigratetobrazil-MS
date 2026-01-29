/** MS JS - Campo Grande - Natural-agricultural with olive greens */
const STATE_CONFIG = {
  stateCode: 'ms',
  capital: 'Campo Grande',
  formspreeUrl: 'https://formspree.io/f/xmsqbddb',
  colors: { primary: '#2d5016', secondary: '#6b8e23', accent: '#adff2f' },
  animations: {"enabled": true, "header": {"type": "pantanalFade", "duration": "0.8s", "easing": "ease-in-out", "delay": "0s"}, "sections": {"type": "wetlandReveal", "duration": "1.2s", "easing": "ease-out", "stagger": "0.2s"}, "hero": {"type": "waterParallax", "speed": 0.4, "direction": "horizontal"}, "cards": {"type": "floatDrift", "water": true, "gentle": true}, "images": {"type": "reflectionReveal", "mirror": true, "duration": "1.1s"}},
  interactions: {"hover": "water-float", "scroll": "wetland-flow", "transitions": "aquatic-ease", "click": "splash-ripple"},
  premiumEffects: ["pantanal-gradient", "water-reflections", "wildlife-silhouettes", "mist-overlay"]
};

const SECTIONS = ["ms-index-section--map", "ms-index-section-frequently-asked-questions-about-living-in-", "ms-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
