
// Master JS for State: MS - Persona: Savannah Adventurer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 800;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const ms_index_section_immigrate_to_mato_grosso_do_sul = document.getElementById('ms-index-section-immigrate-to-mato-grosso-do-sul');
  if (ms_index_section_immigrate_to_mato_grosso_do_sul) {
    gsap.fromTo('#ms-index-section-immigrate-to-mato-grosso-do-sul', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_form_immigrate_to_mato_grosso_do_sul = document.getElementById('ms-index-form-immigrate-to-mato-grosso-do-sul');
  if (ms_index_form_immigrate_to_mato_grosso_do_sul) {
    gsap.from('#ms-index-form-immigrate-to-mato-grosso-do-sul input, #ms-index-form-immigrate-to-mato-grosso-do-sul textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_state_vibe = document.getElementById('ms-index-section-state-vibe');
  if (ms_index_section_state_vibe) {
    gsap.fromTo('#ms-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_quick_facts_snapshot = document.getElementById('ms-index-section-quick-facts-snapshot');
  if (ms_index_section_quick_facts_snapshot) {
    gsap.fromTo('#ms-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_mato_grosso_do_sul_map = document.getElementById('ms-index-section-mato-grosso-do-sul-map');
  if (ms_index_section_mato_grosso_do_sul_map) {
    gsap.fromTo('#ms-index-section-mato-grosso-do-sul-map', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_cost_of_living_mato_grosso_do_sul = document.getElementById('ms-index-section-cost-of-living-mato-grosso-do-sul');
  if (ms_index_section_cost_of_living_mato_grosso_do_sul) {
    gsap.fromTo('#ms-index-section-cost-of-living-mato-grosso-do-sul', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_government_context = document.getElementById('ms-index-section-government-context');
  if (ms_index_section_government_context) {
    gsap.fromTo('#ms-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_hero_immigration_notes = document.getElementById('ms-index-hero-immigration-notes');
  if (ms_index_hero_immigration_notes) {
    gsap.fromTo('#ms-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_common_applicant_profiles = document.getElementById('ms-index-list-common-applicant-profiles');
  if (ms_index_list_common_applicant_profiles) {
    gsap.from('#ms-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_economic_drivers = document.getElementById('ms-index-list-economic-drivers');
  if (ms_index_list_economic_drivers) {
    gsap.from('#ms-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_demographics = document.getElementById('ms-index-section-demographics');
  if (ms_index_section_demographics) {
    gsap.fromTo('#ms-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_regional_challenges = document.getElementById('ms-index-section-regional-challenges');
  if (ms_index_section_regional_challenges) {
    gsap.fromTo('#ms-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_regional_opportunities = document.getElementById('ms-index-section-regional-opportunities');
  if (ms_index_section_regional_opportunities) {
    gsap.fromTo('#ms-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_culture_daily_life = document.getElementById('ms-index-section-culture-daily-life');
  if (ms_index_section_culture_daily_life) {
    gsap.fromTo('#ms-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_local_language_expressions = document.getElementById('ms-index-list-local-language-expressions');
  if (ms_index_list_local_language_expressions) {
    gsap.from('#ms-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_food_cuisine = document.getElementById('ms-index-list-food-cuisine');
  if (ms_index_list_food_cuisine) {
    gsap.from('#ms-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_festivals_traditions = document.getElementById('ms-index-list-festivals-traditions');
  if (ms_index_list_festivals_traditions) {
    gsap.from('#ms-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_music_artistic_expression = document.getElementById('ms-index-list-music-artistic-expression');
  if (ms_index_list_music_artistic_expression) {
    gsap.from('#ms-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_sports_recreation = document.getElementById('ms-index-list-sports-recreation');
  if (ms_index_list_sports_recreation) {
    gsap.from('#ms-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_landmarks_historical_sites = document.getElementById('ms-index-list-landmarks-historical-sites');
  if (ms_index_list_landmarks_historical_sites) {
    gsap.from('#ms-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_natural_features = document.getElementById('ms-index-list-natural-features');
  if (ms_index_list_natural_features) {
    gsap.from('#ms-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_parks_protected_areas = document.getElementById('ms-index-list-parks-protected-areas');
  if (ms_index_list_parks_protected_areas) {
    gsap.from('#ms-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_museums_cultural_institutions = document.getElementById('ms-index-list-museums-cultural-institutions');
  if (ms_index_list_museums_cultural_institutions) {
    gsap.from('#ms-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_image_gallery = document.getElementById('ms-index-section-image-gallery');
  if (ms_index_section_image_gallery) {
    gsap.fromTo('#ms-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_useful_government_links = document.getElementById('ms-index-section-useful-government-links');
  if (ms_index_section_useful_government_links) {
    gsap.fromTo('#ms-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_hero_federal_police_immigration_links = document.getElementById('ms-index-hero-federal-police-immigration-links');
  if (ms_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#ms-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_external_references = document.getElementById('ms-index-section-external-references');
  if (ms_index_section_external_references) {
    gsap.fromTo('#ms-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_immigration_services_overview = document.getElementById('ms-index-list-immigration-services-overview');
  if (ms_index_list_immigration_services_overview) {
    gsap.from('#ms-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_why_immigrate_here = document.getElementById('ms-index-section-why-immigrate-here');
  if (ms_index_section_why_immigrate_here) {
    gsap.fromTo('#ms-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section_legal_guidance_disclaimers = document.getElementById('ms-index-section-legal-guidance-disclaimers');
  if (ms_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#ms-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_travel_services = document.getElementById('ms-index-list-travel-services');
  if (ms_index_list_travel_services) {
    gsap.from('#ms-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_list_how_the_process_works = document.getElementById('ms-index-list-how-the-process-works');
  if (ms_index_list_how_the_process_works) {
    gsap.from('#ms-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_index_section__frequently_asked_questions_about_living_in_mato_grosso_do_sul_ = document.getElementById('ms-index-section--frequently-asked-questions-about-living-in-mato-grosso-do-sul-');
  if (ms_index_section__frequently_asked_questions_about_living_in_mato_grosso_do_sul_) {
    gsap.fromTo('#ms-index-section--frequently-asked-questions-about-living-in-mato-grosso-do-sul-', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_contactcta_section_get_started_in_mato_grosso_do_sul = document.getElementById('ms-contactcta-section-get-started-in-mato-grosso-do-sul');
  if (ms_contactcta_section_get_started_in_mato_grosso_do_sul) {
    gsap.fromTo('#ms-contactcta-section-get-started-in-mato-grosso-do-sul', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('ms-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (ms_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#ms-renouncingcitizenship-form-renounce-brazilian-citizenship input, #ms-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_quick_facts = document.getElementById('ms-renouncingcitizenship-list-quick-facts');
  if (ms_renouncingcitizenship_list_quick_facts) {
    gsap.from('#ms-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('ms-renouncingcitizenship-list-common-challenges-applicants-face');
  if (ms_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ms-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('ms-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (ms_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ms-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_renunciation_overview = document.getElementById('ms-renouncingcitizenship-section-renunciation-overview');
  if (ms_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#ms-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_form_who_is_this_for = document.getElementById('ms-renouncingcitizenship-form-who-is-this-for');
  if (ms_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#ms-renouncingcitizenship-form-who-is-this-for input, #ms-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_required_documents = document.getElementById('ms-renouncingcitizenship-list-required-documents');
  if (ms_renouncingcitizenship_list_required_documents) {
    gsap.from('#ms-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_process = document.getElementById('ms-renouncingcitizenship-list-process');
  if (ms_renouncingcitizenship_list_process) {
    gsap.from('#ms-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_timelines_deadlines = document.getElementById('ms-renouncingcitizenship-section-timelines-deadlines');
  if (ms_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ms-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_fees_costs = document.getElementById('ms-renouncingcitizenship-section-fees-costs');
  if (ms_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#ms-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('ms-renouncingcitizenship-list-risks-common-mistakes');
  if (ms_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#ms-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('ms-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (ms_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-renouncingcitizenship-section-mato-grosso-do-sul-specific-context');
  if (ms_renouncingcitizenship_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-renouncingcitizenship-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_what_our_clients_say = document.getElementById('ms-renouncingcitizenship-section-what-our-clients-say');
  if (ms_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ms-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('ms-renouncingcitizenship-section-frequently-asked-questions');
  if (ms_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ms-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_international_support = document.getElementById('ms-renouncingcitizenship-section-international-support');
  if (ms_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#ms-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_our_credentials = document.getElementById('ms-renouncingcitizenship-list-our-credentials');
  if (ms_renouncingcitizenship_list_our_credentials) {
    gsap.from('#ms-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_list_related_services = document.getElementById('ms-renouncingcitizenship-list-related-services');
  if (ms_renouncingcitizenship_list_related_services) {
    gsap.from('#ms-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('ms-renouncingcitizenship-section-youre-in-good-hands');
  if (ms_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ms-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_renouncingcitizenship_section_21 = document.getElementById('ms-renouncingcitizenship-section-21');
  if (ms_renouncingcitizenship_section_21) {
    gsap.fromTo('#ms-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('ms-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (ms_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#ms-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #ms-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_quick_facts = document.getElementById('ms-provisional-list-quick-facts');
  if (ms_provisional_list_quick_facts) {
    gsap.from('#ms-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_common_challenges_applicants_face = document.getElementById('ms-provisional-list-common-challenges-applicants-face');
  if (ms_provisional_list_common_challenges_applicants_face) {
    gsap.from('#ms-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_how_we_solve_these_challenges = document.getElementById('ms-provisional-list-how-we-solve-these-challenges');
  if (ms_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#ms-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_naturalisation_overview = document.getElementById('ms-provisional-section-naturalisation-overview');
  if (ms_provisional_section_naturalisation_overview) {
    gsap.fromTo('#ms-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_form_who_is_this_naturalisation_for = document.getElementById('ms-provisional-form-who-is-this-naturalisation-for');
  if (ms_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#ms-provisional-form-who-is-this-naturalisation-for input, #ms-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_required_documents = document.getElementById('ms-provisional-list-required-documents');
  if (ms_provisional_list_required_documents) {
    gsap.from('#ms-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_application_process = document.getElementById('ms-provisional-list-application-process');
  if (ms_provisional_list_application_process) {
    gsap.from('#ms-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_timelines_deadlines = document.getElementById('ms-provisional-section-timelines-deadlines');
  if (ms_provisional_section_timelines_deadlines) {
    gsap.fromTo('#ms-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_fees_costs = document.getElementById('ms-provisional-section-fees-costs');
  if (ms_provisional_section_fees_costs) {
    gsap.fromTo('#ms-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_risks_common_mistakes = document.getElementById('ms-provisional-list-risks-common-mistakes');
  if (ms_provisional_list_risks_common_mistakes) {
    gsap.from('#ms-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_diy_vs_professional_assistance = document.getElementById('ms-provisional-section-diy-vs-professional-assistance');
  if (ms_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-provisional-section-mato-grosso-do-sul-specific-context');
  if (ms_provisional_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-provisional-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_what_our_clients_say = document.getElementById('ms-provisional-section-what-our-clients-say');
  if (ms_provisional_section_what_our_clients_say) {
    gsap.fromTo('#ms-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_frequently_asked_questions = document.getElementById('ms-provisional-section-frequently-asked-questions');
  if (ms_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#ms-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_international_support = document.getElementById('ms-provisional-section-international-support');
  if (ms_provisional_section_international_support) {
    gsap.fromTo('#ms-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_our_credentials = document.getElementById('ms-provisional-list-our-credentials');
  if (ms_provisional_list_our_credentials) {
    gsap.from('#ms-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_list_related_services = document.getElementById('ms-provisional-list-related-services');
  if (ms_provisional_list_related_services) {
    gsap.from('#ms-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_youre_in_good_hands = document.getElementById('ms-provisional-section-youre-in-good-hands');
  if (ms_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#ms-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_provisional_section_21 = document.getElementById('ms-provisional-section-21');
  if (ms_provisional_section_21) {
    gsap.fromTo('#ms-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('ms-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (ms_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#ms-special-form-special-naturalisation-in-brazil-for-particular-cases input, #ms-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_quick_facts = document.getElementById('ms-special-list-quick-facts');
  if (ms_special_list_quick_facts) {
    gsap.from('#ms-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_common_challenges_applicants_face = document.getElementById('ms-special-list-common-challenges-applicants-face');
  if (ms_special_list_common_challenges_applicants_face) {
    gsap.from('#ms-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_how_we_solve_these_challenges = document.getElementById('ms-special-list-how-we-solve-these-challenges');
  if (ms_special_list_how_we_solve_these_challenges) {
    gsap.from('#ms-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_naturalisation_overview = document.getElementById('ms-special-section-naturalisation-overview');
  if (ms_special_section_naturalisation_overview) {
    gsap.fromTo('#ms-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_form_who_is_this_naturalisation_for = document.getElementById('ms-special-form-who-is-this-naturalisation-for');
  if (ms_special_form_who_is_this_naturalisation_for) {
    gsap.from('#ms-special-form-who-is-this-naturalisation-for input, #ms-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_required_documents = document.getElementById('ms-special-list-required-documents');
  if (ms_special_list_required_documents) {
    gsap.from('#ms-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_application_process = document.getElementById('ms-special-list-application-process');
  if (ms_special_list_application_process) {
    gsap.from('#ms-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_timelines_deadlines = document.getElementById('ms-special-section-timelines-deadlines');
  if (ms_special_section_timelines_deadlines) {
    gsap.fromTo('#ms-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_fees_costs = document.getElementById('ms-special-section-fees-costs');
  if (ms_special_section_fees_costs) {
    gsap.fromTo('#ms-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_risks_common_mistakes = document.getElementById('ms-special-list-risks-common-mistakes');
  if (ms_special_list_risks_common_mistakes) {
    gsap.from('#ms-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_diy_vs_professional_assistance = document.getElementById('ms-special-section-diy-vs-professional-assistance');
  if (ms_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-special-section-mato-grosso-do-sul-specific-context');
  if (ms_special_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-special-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_what_our_clients_say = document.getElementById('ms-special-section-what-our-clients-say');
  if (ms_special_section_what_our_clients_say) {
    gsap.fromTo('#ms-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_frequently_asked_questions = document.getElementById('ms-special-section-frequently-asked-questions');
  if (ms_special_section_frequently_asked_questions) {
    gsap.fromTo('#ms-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_international_support = document.getElementById('ms-special-section-international-support');
  if (ms_special_section_international_support) {
    gsap.fromTo('#ms-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_our_credentials = document.getElementById('ms-special-list-our-credentials');
  if (ms_special_list_our_credentials) {
    gsap.from('#ms-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_list_related_services = document.getElementById('ms-special-list-related-services');
  if (ms_special_list_related_services) {
    gsap.from('#ms-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_youre_in_good_hands = document.getElementById('ms-special-section-youre-in-good-hands');
  if (ms_special_section_youre_in_good_hands) {
    gsap.fromTo('#ms-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_special_section_21 = document.getElementById('ms-special-section-21');
  if (ms_special_section_21) {
    gsap.fromTo('#ms-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('ms-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (ms_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#ms-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #ms-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_quick_facts = document.getElementById('ms-ordinary-list-quick-facts');
  if (ms_ordinary_list_quick_facts) {
    gsap.from('#ms-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_common_challenges_applicants_face = document.getElementById('ms-ordinary-list-common-challenges-applicants-face');
  if (ms_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#ms-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_how_we_solve_these_challenges = document.getElementById('ms-ordinary-list-how-we-solve-these-challenges');
  if (ms_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ms-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_naturalisation_overview = document.getElementById('ms-ordinary-section-naturalisation-overview');
  if (ms_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#ms-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_form_who_is_this_naturalisation_for = document.getElementById('ms-ordinary-form-who-is-this-naturalisation-for');
  if (ms_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ms-ordinary-form-who-is-this-naturalisation-for input, #ms-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_required_documents = document.getElementById('ms-ordinary-list-required-documents');
  if (ms_ordinary_list_required_documents) {
    gsap.from('#ms-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_application_process = document.getElementById('ms-ordinary-list-application-process');
  if (ms_ordinary_list_application_process) {
    gsap.from('#ms-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_timelines_deadlines = document.getElementById('ms-ordinary-section-timelines-deadlines');
  if (ms_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#ms-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_fees_costs = document.getElementById('ms-ordinary-section-fees-costs');
  if (ms_ordinary_section_fees_costs) {
    gsap.fromTo('#ms-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_risks_common_mistakes = document.getElementById('ms-ordinary-list-risks-common-mistakes');
  if (ms_ordinary_list_risks_common_mistakes) {
    gsap.from('#ms-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_diy_vs_professional_assistance = document.getElementById('ms-ordinary-section-diy-vs-professional-assistance');
  if (ms_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-ordinary-section-mato-grosso-do-sul-specific-context');
  if (ms_ordinary_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-ordinary-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_what_our_clients_say = document.getElementById('ms-ordinary-section-what-our-clients-say');
  if (ms_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#ms-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_frequently_asked_questions = document.getElementById('ms-ordinary-section-frequently-asked-questions');
  if (ms_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ms-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_international_support = document.getElementById('ms-ordinary-section-international-support');
  if (ms_ordinary_section_international_support) {
    gsap.fromTo('#ms-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_our_credentials = document.getElementById('ms-ordinary-list-our-credentials');
  if (ms_ordinary_list_our_credentials) {
    gsap.from('#ms-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_list_related_services = document.getElementById('ms-ordinary-list-related-services');
  if (ms_ordinary_list_related_services) {
    gsap.from('#ms-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_youre_in_good_hands = document.getElementById('ms-ordinary-section-youre-in-good-hands');
  if (ms_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ms-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_ordinary_section_21 = document.getElementById('ms-ordinary-section-21');
  if (ms_ordinary_section_21) {
    gsap.fromTo('#ms-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('ms-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (ms_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#ms-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #ms-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_quick_facts = document.getElementById('ms-extraordinary-list-quick-facts');
  if (ms_extraordinary_list_quick_facts) {
    gsap.from('#ms-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_common_challenges_applicants_face = document.getElementById('ms-extraordinary-list-common-challenges-applicants-face');
  if (ms_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#ms-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_how_we_solve_these_challenges = document.getElementById('ms-extraordinary-list-how-we-solve-these-challenges');
  if (ms_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#ms-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_naturalisation_overview = document.getElementById('ms-extraordinary-section-naturalisation-overview');
  if (ms_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#ms-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('ms-extraordinary-form-who-is-this-naturalisation-for');
  if (ms_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#ms-extraordinary-form-who-is-this-naturalisation-for input, #ms-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_required_documents = document.getElementById('ms-extraordinary-list-required-documents');
  if (ms_extraordinary_list_required_documents) {
    gsap.from('#ms-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_application_process = document.getElementById('ms-extraordinary-list-application-process');
  if (ms_extraordinary_list_application_process) {
    gsap.from('#ms-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_timelines_deadlines = document.getElementById('ms-extraordinary-section-timelines-deadlines');
  if (ms_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#ms-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_fees_costs = document.getElementById('ms-extraordinary-section-fees-costs');
  if (ms_extraordinary_section_fees_costs) {
    gsap.fromTo('#ms-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_risks_common_mistakes = document.getElementById('ms-extraordinary-list-risks-common-mistakes');
  if (ms_extraordinary_list_risks_common_mistakes) {
    gsap.from('#ms-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_diy_vs_professional_assistance = document.getElementById('ms-extraordinary-section-diy-vs-professional-assistance');
  if (ms_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-extraordinary-section-mato-grosso-do-sul-specific-context');
  if (ms_extraordinary_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-extraordinary-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_what_our_clients_say = document.getElementById('ms-extraordinary-section-what-our-clients-say');
  if (ms_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#ms-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_frequently_asked_questions = document.getElementById('ms-extraordinary-section-frequently-asked-questions');
  if (ms_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#ms-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_international_support = document.getElementById('ms-extraordinary-section-international-support');
  if (ms_extraordinary_section_international_support) {
    gsap.fromTo('#ms-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_our_credentials = document.getElementById('ms-extraordinary-list-our-credentials');
  if (ms_extraordinary_list_our_credentials) {
    gsap.from('#ms-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_list_related_services = document.getElementById('ms-extraordinary-list-related-services');
  if (ms_extraordinary_list_related_services) {
    gsap.from('#ms-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_youre_in_good_hands = document.getElementById('ms-extraordinary-section-youre-in-good-hands');
  if (ms_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#ms-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extraordinary_section_21 = document.getElementById('ms-extraordinary-section-21');
  if (ms_extraordinary_section_21) {
    gsap.fromTo('#ms-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('ms-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (ms_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#ms-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #ms-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_quick_facts = document.getElementById('ms-reacquisitioncitizenship-list-quick-facts');
  if (ms_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#ms-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('ms-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (ms_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#ms-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('ms-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (ms_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#ms-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('ms-reacquisitioncitizenship-section-reacquisition-overview');
  if (ms_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('ms-reacquisitioncitizenship-form-who-is-this-for');
  if (ms_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#ms-reacquisitioncitizenship-form-who-is-this-for input, #ms-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_required_documents = document.getElementById('ms-reacquisitioncitizenship-list-required-documents');
  if (ms_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#ms-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_process = document.getElementById('ms-reacquisitioncitizenship-list-process');
  if (ms_reacquisitioncitizenship_list_process) {
    gsap.from('#ms-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('ms-reacquisitioncitizenship-section-timelines-deadlines');
  if (ms_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_fees_costs = document.getElementById('ms-reacquisitioncitizenship-section-fees-costs');
  if (ms_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('ms-reacquisitioncitizenship-list-risks-common-mistakes');
  if (ms_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#ms-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('ms-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (ms_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-reacquisitioncitizenship-section-mato-grosso-do-sul-specific-context');
  if (ms_reacquisitioncitizenship_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('ms-reacquisitioncitizenship-section-what-our-clients-say');
  if (ms_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('ms-reacquisitioncitizenship-section-frequently-asked-questions');
  if (ms_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_international_support = document.getElementById('ms-reacquisitioncitizenship-section-international-support');
  if (ms_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_our_credentials = document.getElementById('ms-reacquisitioncitizenship-list-our-credentials');
  if (ms_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#ms-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_list_related_services = document.getElementById('ms-reacquisitioncitizenship-list-related-services');
  if (ms_reacquisitioncitizenship_list_related_services) {
    gsap.from('#ms-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('ms-reacquisitioncitizenship-section-youre-in-good-hands');
  if (ms_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_reacquisitioncitizenship_section_21 = document.getElementById('ms-reacquisitioncitizenship-section-21');
  if (ms_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#ms-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('ms-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (ms_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#ms-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #ms-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_quick_facts = document.getElementById('ms-scientificresearch-list-quick-facts');
  if (ms_scientificresearch_list_quick_facts) {
    gsap.from('#ms-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_common_challenges_applicants_face = document.getElementById('ms-scientificresearch-list-common-challenges-applicants-face');
  if (ms_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#ms-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('ms-scientificresearch-list-how-we-solve-these-challenges');
  if (ms_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#ms-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_residency_overview = document.getElementById('ms-scientificresearch-section-residency-overview');
  if (ms_scientificresearch_section_residency_overview) {
    gsap.fromTo('#ms-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_form_who_is_this_residency_for = document.getElementById('ms-scientificresearch-form-who-is-this-residency-for');
  if (ms_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#ms-scientificresearch-form-who-is-this-residency-for input, #ms-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_required_documents = document.getElementById('ms-scientificresearch-list-required-documents');
  if (ms_scientificresearch_list_required_documents) {
    gsap.from('#ms-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_application_process = document.getElementById('ms-scientificresearch-list-application-process');
  if (ms_scientificresearch_list_application_process) {
    gsap.from('#ms-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_timelines_deadlines = document.getElementById('ms-scientificresearch-section-timelines-deadlines');
  if (ms_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#ms-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_fees_costs = document.getElementById('ms-scientificresearch-section-fees-costs');
  if (ms_scientificresearch_section_fees_costs) {
    gsap.fromTo('#ms-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_risks_common_mistakes = document.getElementById('ms-scientificresearch-list-risks-common-mistakes');
  if (ms_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#ms-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('ms-scientificresearch-section-diy-vs-professional-assistance');
  if (ms_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-scientificresearch-section-mato-grosso-do-sul-specific-context');
  if (ms_scientificresearch_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-scientificresearch-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_what_our_clients_say = document.getElementById('ms-scientificresearch-section-what-our-clients-say');
  if (ms_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#ms-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_frequently_asked_questions = document.getElementById('ms-scientificresearch-section-frequently-asked-questions');
  if (ms_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#ms-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_international_support = document.getElementById('ms-scientificresearch-section-international-support');
  if (ms_scientificresearch_section_international_support) {
    gsap.fromTo('#ms-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_our_credentials = document.getElementById('ms-scientificresearch-list-our-credentials');
  if (ms_scientificresearch_list_our_credentials) {
    gsap.from('#ms-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_list_related_services = document.getElementById('ms-scientificresearch-list-related-services');
  if (ms_scientificresearch_list_related_services) {
    gsap.from('#ms-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_youre_in_good_hands = document.getElementById('ms-scientificresearch-section-youre-in-good-hands');
  if (ms_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#ms-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_scientificresearch_section_21 = document.getElementById('ms-scientificresearch-section-21');
  if (ms_scientificresearch_section_21) {
    gsap.fromTo('#ms-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_form_study_in_brazil_with_study_residency = document.getElementById('ms-study-form-study-in-brazil-with-study-residency');
  if (ms_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#ms-study-form-study-in-brazil-with-study-residency input, #ms-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_quick_facts = document.getElementById('ms-study-list-quick-facts');
  if (ms_study_list_quick_facts) {
    gsap.from('#ms-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_common_challenges_applicants_face = document.getElementById('ms-study-list-common-challenges-applicants-face');
  if (ms_study_list_common_challenges_applicants_face) {
    gsap.from('#ms-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_how_we_solve_these_challenges = document.getElementById('ms-study-list-how-we-solve-these-challenges');
  if (ms_study_list_how_we_solve_these_challenges) {
    gsap.from('#ms-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_residency_overview = document.getElementById('ms-study-section-residency-overview');
  if (ms_study_section_residency_overview) {
    gsap.fromTo('#ms-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_form_who_is_this_residency_for = document.getElementById('ms-study-form-who-is-this-residency-for');
  if (ms_study_form_who_is_this_residency_for) {
    gsap.from('#ms-study-form-who-is-this-residency-for input, #ms-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_required_documents = document.getElementById('ms-study-list-required-documents');
  if (ms_study_list_required_documents) {
    gsap.from('#ms-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_application_process = document.getElementById('ms-study-list-application-process');
  if (ms_study_list_application_process) {
    gsap.from('#ms-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_timelines_deadlines = document.getElementById('ms-study-section-timelines-deadlines');
  if (ms_study_section_timelines_deadlines) {
    gsap.fromTo('#ms-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_fees_costs = document.getElementById('ms-study-section-fees-costs');
  if (ms_study_section_fees_costs) {
    gsap.fromTo('#ms-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_risks_common_mistakes = document.getElementById('ms-study-list-risks-common-mistakes');
  if (ms_study_list_risks_common_mistakes) {
    gsap.from('#ms-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_diy_vs_professional_assistance = document.getElementById('ms-study-section-diy-vs-professional-assistance');
  if (ms_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-study-section-mato-grosso-do-sul-specific-context');
  if (ms_study_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-study-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_what_our_clients_say = document.getElementById('ms-study-section-what-our-clients-say');
  if (ms_study_section_what_our_clients_say) {
    gsap.fromTo('#ms-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_frequently_asked_questions = document.getElementById('ms-study-section-frequently-asked-questions');
  if (ms_study_section_frequently_asked_questions) {
    gsap.fromTo('#ms-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_international_support = document.getElementById('ms-study-section-international-support');
  if (ms_study_section_international_support) {
    gsap.fromTo('#ms-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_our_credentials = document.getElementById('ms-study-list-our-credentials');
  if (ms_study_list_our_credentials) {
    gsap.from('#ms-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_list_related_services = document.getElementById('ms-study-list-related-services');
  if (ms_study_list_related_services) {
    gsap.from('#ms-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_youre_in_good_hands = document.getElementById('ms-study-section-youre-in-good-hands');
  if (ms_study_section_youre_in_good_hands) {
    gsap.fromTo('#ms-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_study_section_21 = document.getElementById('ms-study-section-21');
  if (ms_study_section_21) {
    gsap.fromTo('#ms-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('ms-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (ms_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#ms-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #ms-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_quick_facts = document.getElementById('ms-educationalexchange-list-quick-facts');
  if (ms_educationalexchange_list_quick_facts) {
    gsap.from('#ms-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_common_challenges_applicants_face = document.getElementById('ms-educationalexchange-list-common-challenges-applicants-face');
  if (ms_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#ms-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('ms-educationalexchange-list-how-we-solve-these-challenges');
  if (ms_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ms-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_residency_overview = document.getElementById('ms-educationalexchange-section-residency-overview');
  if (ms_educationalexchange_section_residency_overview) {
    gsap.fromTo('#ms-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_form_who_is_this_residency_for = document.getElementById('ms-educationalexchange-form-who-is-this-residency-for');
  if (ms_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#ms-educationalexchange-form-who-is-this-residency-for input, #ms-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_required_documents = document.getElementById('ms-educationalexchange-list-required-documents');
  if (ms_educationalexchange_list_required_documents) {
    gsap.from('#ms-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_application_process = document.getElementById('ms-educationalexchange-list-application-process');
  if (ms_educationalexchange_list_application_process) {
    gsap.from('#ms-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_timelines_deadlines = document.getElementById('ms-educationalexchange-section-timelines-deadlines');
  if (ms_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#ms-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_fees_costs = document.getElementById('ms-educationalexchange-section-fees-costs');
  if (ms_educationalexchange_section_fees_costs) {
    gsap.fromTo('#ms-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_risks_common_mistakes = document.getElementById('ms-educationalexchange-list-risks-common-mistakes');
  if (ms_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#ms-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('ms-educationalexchange-section-diy-vs-professional-assistance');
  if (ms_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-educationalexchange-section-mato-grosso-do-sul-specific-context');
  if (ms_educationalexchange_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-educationalexchange-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_what_our_clients_say = document.getElementById('ms-educationalexchange-section-what-our-clients-say');
  if (ms_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#ms-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_frequently_asked_questions = document.getElementById('ms-educationalexchange-section-frequently-asked-questions');
  if (ms_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ms-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_international_support = document.getElementById('ms-educationalexchange-section-international-support');
  if (ms_educationalexchange_section_international_support) {
    gsap.fromTo('#ms-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_our_credentials = document.getElementById('ms-educationalexchange-list-our-credentials');
  if (ms_educationalexchange_list_our_credentials) {
    gsap.from('#ms-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_list_related_services = document.getElementById('ms-educationalexchange-list-related-services');
  if (ms_educationalexchange_list_related_services) {
    gsap.from('#ms-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_youre_in_good_hands = document.getElementById('ms-educationalexchange-section-youre-in-good-hands');
  if (ms_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ms-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_educationalexchange_section_21 = document.getElementById('ms-educationalexchange-section-21');
  if (ms_educationalexchange_section_21) {
    gsap.fromTo('#ms-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('ms-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (ms_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#ms-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #ms-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_quick_facts = document.getElementById('ms-humanitarian-list-quick-facts');
  if (ms_humanitarian_list_quick_facts) {
    gsap.from('#ms-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_common_challenges_applicants_face = document.getElementById('ms-humanitarian-list-common-challenges-applicants-face');
  if (ms_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#ms-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_how_we_solve_these_challenges = document.getElementById('ms-humanitarian-list-how-we-solve-these-challenges');
  if (ms_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#ms-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_residency_overview = document.getElementById('ms-humanitarian-section-residency-overview');
  if (ms_humanitarian_section_residency_overview) {
    gsap.fromTo('#ms-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_form_who_is_this_residency_for = document.getElementById('ms-humanitarian-form-who-is-this-residency-for');
  if (ms_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#ms-humanitarian-form-who-is-this-residency-for input, #ms-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_required_documents = document.getElementById('ms-humanitarian-list-required-documents');
  if (ms_humanitarian_list_required_documents) {
    gsap.from('#ms-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_application_process = document.getElementById('ms-humanitarian-list-application-process');
  if (ms_humanitarian_list_application_process) {
    gsap.from('#ms-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_timelines_deadlines = document.getElementById('ms-humanitarian-section-timelines-deadlines');
  if (ms_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#ms-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_fees_costs = document.getElementById('ms-humanitarian-section-fees-costs');
  if (ms_humanitarian_section_fees_costs) {
    gsap.fromTo('#ms-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_risks_common_mistakes = document.getElementById('ms-humanitarian-list-risks-common-mistakes');
  if (ms_humanitarian_list_risks_common_mistakes) {
    gsap.from('#ms-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_diy_vs_professional_assistance = document.getElementById('ms-humanitarian-section-diy-vs-professional-assistance');
  if (ms_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-humanitarian-section-mato-grosso-do-sul-specific-context');
  if (ms_humanitarian_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-humanitarian-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_what_our_clients_say = document.getElementById('ms-humanitarian-section-what-our-clients-say');
  if (ms_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#ms-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_frequently_asked_questions = document.getElementById('ms-humanitarian-section-frequently-asked-questions');
  if (ms_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#ms-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_international_support = document.getElementById('ms-humanitarian-section-international-support');
  if (ms_humanitarian_section_international_support) {
    gsap.fromTo('#ms-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_our_credentials = document.getElementById('ms-humanitarian-list-our-credentials');
  if (ms_humanitarian_list_our_credentials) {
    gsap.from('#ms-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_list_related_services = document.getElementById('ms-humanitarian-list-related-services');
  if (ms_humanitarian_list_related_services) {
    gsap.from('#ms-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_youre_in_good_hands = document.getElementById('ms-humanitarian-section-youre-in-good-hands');
  if (ms_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#ms-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_humanitarian_section_21 = document.getElementById('ms-humanitarian-section-21');
  if (ms_humanitarian_section_21) {
    gsap.fromTo('#ms-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('ms-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (ms_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#ms-digitalnomad-form-digital-nomad-residency-in-brazil input, #ms-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_quick_facts = document.getElementById('ms-digitalnomad-list-quick-facts');
  if (ms_digitalnomad_list_quick_facts) {
    gsap.from('#ms-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_common_challenges_applicants_face = document.getElementById('ms-digitalnomad-list-common-challenges-applicants-face');
  if (ms_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#ms-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('ms-digitalnomad-list-how-we-solve-these-challenges');
  if (ms_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#ms-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_residency_overview = document.getElementById('ms-digitalnomad-section-residency-overview');
  if (ms_digitalnomad_section_residency_overview) {
    gsap.fromTo('#ms-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_form_who_is_this_residency_for = document.getElementById('ms-digitalnomad-form-who-is-this-residency-for');
  if (ms_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#ms-digitalnomad-form-who-is-this-residency-for input, #ms-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_required_documents = document.getElementById('ms-digitalnomad-list-required-documents');
  if (ms_digitalnomad_list_required_documents) {
    gsap.from('#ms-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_application_process = document.getElementById('ms-digitalnomad-list-application-process');
  if (ms_digitalnomad_list_application_process) {
    gsap.from('#ms-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_timelines_deadlines = document.getElementById('ms-digitalnomad-section-timelines-deadlines');
  if (ms_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#ms-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_fees_costs = document.getElementById('ms-digitalnomad-section-fees-costs');
  if (ms_digitalnomad_section_fees_costs) {
    gsap.fromTo('#ms-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_risks_common_mistakes = document.getElementById('ms-digitalnomad-list-risks-common-mistakes');
  if (ms_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#ms-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('ms-digitalnomad-section-diy-vs-professional-assistance');
  if (ms_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-digitalnomad-section-mato-grosso-do-sul-specific-context');
  if (ms_digitalnomad_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-digitalnomad-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_what_our_clients_say = document.getElementById('ms-digitalnomad-section-what-our-clients-say');
  if (ms_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#ms-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_frequently_asked_questions = document.getElementById('ms-digitalnomad-section-frequently-asked-questions');
  if (ms_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#ms-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_international_support = document.getElementById('ms-digitalnomad-section-international-support');
  if (ms_digitalnomad_section_international_support) {
    gsap.fromTo('#ms-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_our_credentials = document.getElementById('ms-digitalnomad-list-our-credentials');
  if (ms_digitalnomad_list_our_credentials) {
    gsap.from('#ms-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_list_related_services = document.getElementById('ms-digitalnomad-list-related-services');
  if (ms_digitalnomad_list_related_services) {
    gsap.from('#ms-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_youre_in_good_hands = document.getElementById('ms-digitalnomad-section-youre-in-good-hands');
  if (ms_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#ms-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_digitalnomad_section_21 = document.getElementById('ms-digitalnomad-section-21');
  if (ms_digitalnomad_section_21) {
    gsap.fromTo('#ms-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('ms-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (ms_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#ms-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #ms-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_quick_facts = document.getElementById('ms-familyreunion-list-quick-facts');
  if (ms_familyreunion_list_quick_facts) {
    gsap.from('#ms-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_common_challenges_applicants_face = document.getElementById('ms-familyreunion-list-common-challenges-applicants-face');
  if (ms_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#ms-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_how_we_solve_these_challenges = document.getElementById('ms-familyreunion-list-how-we-solve-these-challenges');
  if (ms_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#ms-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_residency_overview = document.getElementById('ms-familyreunion-section-residency-overview');
  if (ms_familyreunion_section_residency_overview) {
    gsap.fromTo('#ms-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_form_who_is_this_residency_for = document.getElementById('ms-familyreunion-form-who-is-this-residency-for');
  if (ms_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#ms-familyreunion-form-who-is-this-residency-for input, #ms-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_required_documents = document.getElementById('ms-familyreunion-list-required-documents');
  if (ms_familyreunion_list_required_documents) {
    gsap.from('#ms-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_application_process = document.getElementById('ms-familyreunion-list-application-process');
  if (ms_familyreunion_list_application_process) {
    gsap.from('#ms-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_timelines_deadlines = document.getElementById('ms-familyreunion-section-timelines-deadlines');
  if (ms_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#ms-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_fees_costs = document.getElementById('ms-familyreunion-section-fees-costs');
  if (ms_familyreunion_section_fees_costs) {
    gsap.fromTo('#ms-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_risks_common_mistakes = document.getElementById('ms-familyreunion-list-risks-common-mistakes');
  if (ms_familyreunion_list_risks_common_mistakes) {
    gsap.from('#ms-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_diy_vs_professional_assistance = document.getElementById('ms-familyreunion-section-diy-vs-professional-assistance');
  if (ms_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-familyreunion-section-mato-grosso-do-sul-specific-context');
  if (ms_familyreunion_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-familyreunion-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_what_our_clients_say = document.getElementById('ms-familyreunion-section-what-our-clients-say');
  if (ms_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#ms-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_frequently_asked_questions = document.getElementById('ms-familyreunion-section-frequently-asked-questions');
  if (ms_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#ms-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_international_support = document.getElementById('ms-familyreunion-section-international-support');
  if (ms_familyreunion_section_international_support) {
    gsap.fromTo('#ms-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_our_credentials = document.getElementById('ms-familyreunion-list-our-credentials');
  if (ms_familyreunion_list_our_credentials) {
    gsap.from('#ms-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_list_related_services = document.getElementById('ms-familyreunion-list-related-services');
  if (ms_familyreunion_list_related_services) {
    gsap.from('#ms-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_youre_in_good_hands = document.getElementById('ms-familyreunion-section-youre-in-good-hands');
  if (ms_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#ms-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_familyreunion_section_21 = document.getElementById('ms-familyreunion-section-21');
  if (ms_familyreunion_section_21) {
    gsap.fromTo('#ms-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('ms-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (ms_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#ms-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #ms-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_quick_facts = document.getElementById('ms-mercosul-list-quick-facts');
  if (ms_mercosul_list_quick_facts) {
    gsap.from('#ms-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_common_challenges_applicants_face = document.getElementById('ms-mercosul-list-common-challenges-applicants-face');
  if (ms_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#ms-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_how_we_solve_these_challenges = document.getElementById('ms-mercosul-list-how-we-solve-these-challenges');
  if (ms_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#ms-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_residency_overview = document.getElementById('ms-mercosul-section-residency-overview');
  if (ms_mercosul_section_residency_overview) {
    gsap.fromTo('#ms-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_form_who_is_this_residency_for = document.getElementById('ms-mercosul-form-who-is-this-residency-for');
  if (ms_mercosul_form_who_is_this_residency_for) {
    gsap.from('#ms-mercosul-form-who-is-this-residency-for input, #ms-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_required_documents = document.getElementById('ms-mercosul-list-required-documents');
  if (ms_mercosul_list_required_documents) {
    gsap.from('#ms-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_application_process = document.getElementById('ms-mercosul-list-application-process');
  if (ms_mercosul_list_application_process) {
    gsap.from('#ms-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_timelines_deadlines = document.getElementById('ms-mercosul-section-timelines-deadlines');
  if (ms_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#ms-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_fees_costs = document.getElementById('ms-mercosul-section-fees-costs');
  if (ms_mercosul_section_fees_costs) {
    gsap.fromTo('#ms-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_risks_common_mistakes = document.getElementById('ms-mercosul-list-risks-common-mistakes');
  if (ms_mercosul_list_risks_common_mistakes) {
    gsap.from('#ms-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_diy_vs_professional_assistance = document.getElementById('ms-mercosul-section-diy-vs-professional-assistance');
  if (ms_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-mercosul-section-mato-grosso-do-sul-specific-context');
  if (ms_mercosul_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-mercosul-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_what_our_clients_say = document.getElementById('ms-mercosul-section-what-our-clients-say');
  if (ms_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#ms-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_frequently_asked_questions = document.getElementById('ms-mercosul-section-frequently-asked-questions');
  if (ms_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#ms-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_international_support = document.getElementById('ms-mercosul-section-international-support');
  if (ms_mercosul_section_international_support) {
    gsap.fromTo('#ms-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_our_credentials = document.getElementById('ms-mercosul-list-our-credentials');
  if (ms_mercosul_list_our_credentials) {
    gsap.from('#ms-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_list_related_services = document.getElementById('ms-mercosul-list-related-services');
  if (ms_mercosul_list_related_services) {
    gsap.from('#ms-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_youre_in_good_hands = document.getElementById('ms-mercosul-section-youre-in-good-hands');
  if (ms_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#ms-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_mercosul_section_21 = document.getElementById('ms-mercosul-section-21');
  if (ms_mercosul_section_21) {
    gsap.fromTo('#ms-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('ms-retiree-form-retire-in-brazil-with-retiree-residency');
  if (ms_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#ms-retiree-form-retire-in-brazil-with-retiree-residency input, #ms-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_quick_facts = document.getElementById('ms-retiree-list-quick-facts');
  if (ms_retiree_list_quick_facts) {
    gsap.from('#ms-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_common_challenges_applicants_face = document.getElementById('ms-retiree-list-common-challenges-applicants-face');
  if (ms_retiree_list_common_challenges_applicants_face) {
    gsap.from('#ms-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_how_we_solve_these_challenges = document.getElementById('ms-retiree-list-how-we-solve-these-challenges');
  if (ms_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#ms-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_residency_overview = document.getElementById('ms-retiree-section-residency-overview');
  if (ms_retiree_section_residency_overview) {
    gsap.fromTo('#ms-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_form_who_is_this_residency_for = document.getElementById('ms-retiree-form-who-is-this-residency-for');
  if (ms_retiree_form_who_is_this_residency_for) {
    gsap.from('#ms-retiree-form-who-is-this-residency-for input, #ms-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_required_documents = document.getElementById('ms-retiree-list-required-documents');
  if (ms_retiree_list_required_documents) {
    gsap.from('#ms-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_application_process = document.getElementById('ms-retiree-list-application-process');
  if (ms_retiree_list_application_process) {
    gsap.from('#ms-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_timelines_deadlines = document.getElementById('ms-retiree-section-timelines-deadlines');
  if (ms_retiree_section_timelines_deadlines) {
    gsap.fromTo('#ms-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_fees_costs = document.getElementById('ms-retiree-section-fees-costs');
  if (ms_retiree_section_fees_costs) {
    gsap.fromTo('#ms-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_risks_common_mistakes = document.getElementById('ms-retiree-list-risks-common-mistakes');
  if (ms_retiree_list_risks_common_mistakes) {
    gsap.from('#ms-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_diy_vs_professional_assistance = document.getElementById('ms-retiree-section-diy-vs-professional-assistance');
  if (ms_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-retiree-section-mato-grosso-do-sul-specific-context');
  if (ms_retiree_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-retiree-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_what_our_clients_say = document.getElementById('ms-retiree-section-what-our-clients-say');
  if (ms_retiree_section_what_our_clients_say) {
    gsap.fromTo('#ms-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_frequently_asked_questions = document.getElementById('ms-retiree-section-frequently-asked-questions');
  if (ms_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#ms-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_international_support = document.getElementById('ms-retiree-section-international-support');
  if (ms_retiree_section_international_support) {
    gsap.fromTo('#ms-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_our_credentials = document.getElementById('ms-retiree-list-our-credentials');
  if (ms_retiree_list_our_credentials) {
    gsap.from('#ms-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_list_related_services = document.getElementById('ms-retiree-list-related-services');
  if (ms_retiree_list_related_services) {
    gsap.from('#ms-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_youre_in_good_hands = document.getElementById('ms-retiree-section-youre-in-good-hands');
  if (ms_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#ms-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_retiree_section_21 = document.getElementById('ms-retiree-section-21');
  if (ms_retiree_section_21) {
    gsap.fromTo('#ms-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('ms-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (ms_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#ms-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #ms-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_quick_facts = document.getElementById('ms-volunteer-list-quick-facts');
  if (ms_volunteer_list_quick_facts) {
    gsap.from('#ms-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_common_challenges_applicants_face = document.getElementById('ms-volunteer-list-common-challenges-applicants-face');
  if (ms_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#ms-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_how_we_solve_these_challenges = document.getElementById('ms-volunteer-list-how-we-solve-these-challenges');
  if (ms_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#ms-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_residency_overview = document.getElementById('ms-volunteer-section-residency-overview');
  if (ms_volunteer_section_residency_overview) {
    gsap.fromTo('#ms-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_form_who_is_this_residency_for = document.getElementById('ms-volunteer-form-who-is-this-residency-for');
  if (ms_volunteer_form_who_is_this_residency_for) {
    gsap.from('#ms-volunteer-form-who-is-this-residency-for input, #ms-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_required_documents = document.getElementById('ms-volunteer-list-required-documents');
  if (ms_volunteer_list_required_documents) {
    gsap.from('#ms-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_application_process = document.getElementById('ms-volunteer-list-application-process');
  if (ms_volunteer_list_application_process) {
    gsap.from('#ms-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_timelines_deadlines = document.getElementById('ms-volunteer-section-timelines-deadlines');
  if (ms_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#ms-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_fees_costs = document.getElementById('ms-volunteer-section-fees-costs');
  if (ms_volunteer_section_fees_costs) {
    gsap.fromTo('#ms-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_risks_common_mistakes = document.getElementById('ms-volunteer-list-risks-common-mistakes');
  if (ms_volunteer_list_risks_common_mistakes) {
    gsap.from('#ms-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_diy_vs_professional_assistance = document.getElementById('ms-volunteer-section-diy-vs-professional-assistance');
  if (ms_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-volunteer-section-mato-grosso-do-sul-specific-context');
  if (ms_volunteer_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-volunteer-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_what_our_clients_say = document.getElementById('ms-volunteer-section-what-our-clients-say');
  if (ms_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#ms-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_frequently_asked_questions = document.getElementById('ms-volunteer-section-frequently-asked-questions');
  if (ms_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#ms-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_international_support = document.getElementById('ms-volunteer-section-international-support');
  if (ms_volunteer_section_international_support) {
    gsap.fromTo('#ms-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_our_credentials = document.getElementById('ms-volunteer-list-our-credentials');
  if (ms_volunteer_list_our_credentials) {
    gsap.from('#ms-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_list_related_services = document.getElementById('ms-volunteer-list-related-services');
  if (ms_volunteer_list_related_services) {
    gsap.from('#ms-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_youre_in_good_hands = document.getElementById('ms-volunteer-section-youre-in-good-hands');
  if (ms_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#ms-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_volunteer_section_21 = document.getElementById('ms-volunteer-section-21');
  if (ms_volunteer_section_21) {
    gsap.fromTo('#ms-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('ms-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (ms_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#ms-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #ms-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_quick_facts = document.getElementById('ms-skilledworker-list-quick-facts');
  if (ms_skilledworker_list_quick_facts) {
    gsap.from('#ms-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_common_challenges_applicants_face = document.getElementById('ms-skilledworker-list-common-challenges-applicants-face');
  if (ms_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#ms-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_how_we_solve_these_challenges = document.getElementById('ms-skilledworker-list-how-we-solve-these-challenges');
  if (ms_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#ms-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_residency_overview = document.getElementById('ms-skilledworker-section-residency-overview');
  if (ms_skilledworker_section_residency_overview) {
    gsap.fromTo('#ms-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_form_who_is_this_residency_for = document.getElementById('ms-skilledworker-form-who-is-this-residency-for');
  if (ms_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#ms-skilledworker-form-who-is-this-residency-for input, #ms-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_required_documents = document.getElementById('ms-skilledworker-list-required-documents');
  if (ms_skilledworker_list_required_documents) {
    gsap.from('#ms-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_application_process = document.getElementById('ms-skilledworker-list-application-process');
  if (ms_skilledworker_list_application_process) {
    gsap.from('#ms-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_timelines_deadlines = document.getElementById('ms-skilledworker-section-timelines-deadlines');
  if (ms_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#ms-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_fees_costs = document.getElementById('ms-skilledworker-section-fees-costs');
  if (ms_skilledworker_section_fees_costs) {
    gsap.fromTo('#ms-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_risks_common_mistakes = document.getElementById('ms-skilledworker-list-risks-common-mistakes');
  if (ms_skilledworker_list_risks_common_mistakes) {
    gsap.from('#ms-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_diy_vs_professional_assistance = document.getElementById('ms-skilledworker-section-diy-vs-professional-assistance');
  if (ms_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-skilledworker-section-mato-grosso-do-sul-specific-context');
  if (ms_skilledworker_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-skilledworker-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_what_our_clients_say = document.getElementById('ms-skilledworker-section-what-our-clients-say');
  if (ms_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#ms-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_frequently_asked_questions = document.getElementById('ms-skilledworker-section-frequently-asked-questions');
  if (ms_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#ms-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_international_support = document.getElementById('ms-skilledworker-section-international-support');
  if (ms_skilledworker_section_international_support) {
    gsap.fromTo('#ms-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_our_credentials = document.getElementById('ms-skilledworker-list-our-credentials');
  if (ms_skilledworker_list_our_credentials) {
    gsap.from('#ms-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_list_related_services = document.getElementById('ms-skilledworker-list-related-services');
  if (ms_skilledworker_list_related_services) {
    gsap.from('#ms-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_youre_in_good_hands = document.getElementById('ms-skilledworker-section-youre-in-good-hands');
  if (ms_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#ms-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_skilledworker_section_21 = document.getElementById('ms-skilledworker-section-21');
  if (ms_skilledworker_section_21) {
    gsap.fromTo('#ms-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('ms-religious-form-religious-residency-in-brazil-for-missions');
  if (ms_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#ms-religious-form-religious-residency-in-brazil-for-missions input, #ms-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_quick_facts = document.getElementById('ms-religious-list-quick-facts');
  if (ms_religious_list_quick_facts) {
    gsap.from('#ms-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_common_challenges_applicants_face = document.getElementById('ms-religious-list-common-challenges-applicants-face');
  if (ms_religious_list_common_challenges_applicants_face) {
    gsap.from('#ms-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_how_we_solve_these_challenges = document.getElementById('ms-religious-list-how-we-solve-these-challenges');
  if (ms_religious_list_how_we_solve_these_challenges) {
    gsap.from('#ms-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_residency_overview = document.getElementById('ms-religious-section-residency-overview');
  if (ms_religious_section_residency_overview) {
    gsap.fromTo('#ms-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_form_who_is_this_residency_for = document.getElementById('ms-religious-form-who-is-this-residency-for');
  if (ms_religious_form_who_is_this_residency_for) {
    gsap.from('#ms-religious-form-who-is-this-residency-for input, #ms-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_required_documents = document.getElementById('ms-religious-list-required-documents');
  if (ms_religious_list_required_documents) {
    gsap.from('#ms-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_application_process = document.getElementById('ms-religious-list-application-process');
  if (ms_religious_list_application_process) {
    gsap.from('#ms-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_timelines_deadlines = document.getElementById('ms-religious-section-timelines-deadlines');
  if (ms_religious_section_timelines_deadlines) {
    gsap.fromTo('#ms-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_fees_costs = document.getElementById('ms-religious-section-fees-costs');
  if (ms_religious_section_fees_costs) {
    gsap.fromTo('#ms-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_risks_common_mistakes = document.getElementById('ms-religious-list-risks-common-mistakes');
  if (ms_religious_list_risks_common_mistakes) {
    gsap.from('#ms-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_diy_vs_professional_assistance = document.getElementById('ms-religious-section-diy-vs-professional-assistance');
  if (ms_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-religious-section-mato-grosso-do-sul-specific-context');
  if (ms_religious_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-religious-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_what_our_clients_say = document.getElementById('ms-religious-section-what-our-clients-say');
  if (ms_religious_section_what_our_clients_say) {
    gsap.fromTo('#ms-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_frequently_asked_questions = document.getElementById('ms-religious-section-frequently-asked-questions');
  if (ms_religious_section_frequently_asked_questions) {
    gsap.fromTo('#ms-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_international_support = document.getElementById('ms-religious-section-international-support');
  if (ms_religious_section_international_support) {
    gsap.fromTo('#ms-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_our_credentials = document.getElementById('ms-religious-list-our-credentials');
  if (ms_religious_list_our_credentials) {
    gsap.from('#ms-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_list_related_services = document.getElementById('ms-religious-list-related-services');
  if (ms_religious_list_related_services) {
    gsap.from('#ms-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_youre_in_good_hands = document.getElementById('ms-religious-section-youre-in-good-hands');
  if (ms_religious_section_youre_in_good_hands) {
    gsap.fromTo('#ms-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_religious_section_21 = document.getElementById('ms-religious-section-21');
  if (ms_religious_section_21) {
    gsap.fromTo('#ms-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('ms-investor-form-gain-residency-in-brazil-through-investment');
  if (ms_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#ms-investor-form-gain-residency-in-brazil-through-investment input, #ms-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_quick_facts = document.getElementById('ms-investor-list-quick-facts');
  if (ms_investor_list_quick_facts) {
    gsap.from('#ms-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_common_challenges_applicants_face = document.getElementById('ms-investor-list-common-challenges-applicants-face');
  if (ms_investor_list_common_challenges_applicants_face) {
    gsap.from('#ms-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_how_we_solve_these_challenges = document.getElementById('ms-investor-list-how-we-solve-these-challenges');
  if (ms_investor_list_how_we_solve_these_challenges) {
    gsap.from('#ms-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_residency_overview = document.getElementById('ms-investor-section-residency-overview');
  if (ms_investor_section_residency_overview) {
    gsap.fromTo('#ms-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_form_who_is_this_residency_for = document.getElementById('ms-investor-form-who-is-this-residency-for');
  if (ms_investor_form_who_is_this_residency_for) {
    gsap.from('#ms-investor-form-who-is-this-residency-for input, #ms-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_required_documents = document.getElementById('ms-investor-list-required-documents');
  if (ms_investor_list_required_documents) {
    gsap.from('#ms-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_application_process = document.getElementById('ms-investor-list-application-process');
  if (ms_investor_list_application_process) {
    gsap.from('#ms-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_timelines_deadlines = document.getElementById('ms-investor-section-timelines-deadlines');
  if (ms_investor_section_timelines_deadlines) {
    gsap.fromTo('#ms-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_fees_costs = document.getElementById('ms-investor-section-fees-costs');
  if (ms_investor_section_fees_costs) {
    gsap.fromTo('#ms-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_risks_common_mistakes = document.getElementById('ms-investor-list-risks-common-mistakes');
  if (ms_investor_list_risks_common_mistakes) {
    gsap.from('#ms-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_diy_vs_professional_assistance = document.getElementById('ms-investor-section-diy-vs-professional-assistance');
  if (ms_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-investor-section-mato-grosso-do-sul-specific-context');
  if (ms_investor_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-investor-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_what_our_clients_say = document.getElementById('ms-investor-section-what-our-clients-say');
  if (ms_investor_section_what_our_clients_say) {
    gsap.fromTo('#ms-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_frequently_asked_questions = document.getElementById('ms-investor-section-frequently-asked-questions');
  if (ms_investor_section_frequently_asked_questions) {
    gsap.fromTo('#ms-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_international_support = document.getElementById('ms-investor-section-international-support');
  if (ms_investor_section_international_support) {
    gsap.fromTo('#ms-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_our_credentials = document.getElementById('ms-investor-list-our-credentials');
  if (ms_investor_list_our_credentials) {
    gsap.from('#ms-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_list_related_services = document.getElementById('ms-investor-list-related-services');
  if (ms_investor_list_related_services) {
    gsap.from('#ms-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_youre_in_good_hands = document.getElementById('ms-investor-section-youre-in-good-hands');
  if (ms_investor_section_youre_in_good_hands) {
    gsap.fromTo('#ms-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_investor_section_21 = document.getElementById('ms-investor-section-21');
  if (ms_investor_section_21) {
    gsap.fromTo('#ms-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('ms-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (ms_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#ms-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #ms-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_quick_facts = document.getElementById('ms-healthtreatment-list-quick-facts');
  if (ms_healthtreatment_list_quick_facts) {
    gsap.from('#ms-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_common_challenges_applicants_face = document.getElementById('ms-healthtreatment-list-common-challenges-applicants-face');
  if (ms_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#ms-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('ms-healthtreatment-list-how-we-solve-these-challenges');
  if (ms_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#ms-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_residency_overview = document.getElementById('ms-healthtreatment-section-residency-overview');
  if (ms_healthtreatment_section_residency_overview) {
    gsap.fromTo('#ms-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_form_who_is_this_residency_for = document.getElementById('ms-healthtreatment-form-who-is-this-residency-for');
  if (ms_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#ms-healthtreatment-form-who-is-this-residency-for input, #ms-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_required_documents = document.getElementById('ms-healthtreatment-list-required-documents');
  if (ms_healthtreatment_list_required_documents) {
    gsap.from('#ms-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_application_process = document.getElementById('ms-healthtreatment-list-application-process');
  if (ms_healthtreatment_list_application_process) {
    gsap.from('#ms-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_timelines_deadlines = document.getElementById('ms-healthtreatment-section-timelines-deadlines');
  if (ms_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#ms-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_fees_costs = document.getElementById('ms-healthtreatment-section-fees-costs');
  if (ms_healthtreatment_section_fees_costs) {
    gsap.fromTo('#ms-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_risks_common_mistakes = document.getElementById('ms-healthtreatment-list-risks-common-mistakes');
  if (ms_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#ms-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('ms-healthtreatment-section-diy-vs-professional-assistance');
  if (ms_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-healthtreatment-section-mato-grosso-do-sul-specific-context');
  if (ms_healthtreatment_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-healthtreatment-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_what_our_clients_say = document.getElementById('ms-healthtreatment-section-what-our-clients-say');
  if (ms_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#ms-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_frequently_asked_questions = document.getElementById('ms-healthtreatment-section-frequently-asked-questions');
  if (ms_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#ms-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_international_support = document.getElementById('ms-healthtreatment-section-international-support');
  if (ms_healthtreatment_section_international_support) {
    gsap.fromTo('#ms-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_our_credentials = document.getElementById('ms-healthtreatment-list-our-credentials');
  if (ms_healthtreatment_list_our_credentials) {
    gsap.from('#ms-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_list_related_services = document.getElementById('ms-healthtreatment-list-related-services');
  if (ms_healthtreatment_list_related_services) {
    gsap.from('#ms-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_youre_in_good_hands = document.getElementById('ms-healthtreatment-section-youre-in-good-hands');
  if (ms_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#ms-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_healthtreatment_section_21 = document.getElementById('ms-healthtreatment-section-21');
  if (ms_healthtreatment_section_21) {
    gsap.fromTo('#ms-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('ms-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (ms_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#ms-cplp-form-residency-for-cplp-citizens-in-brazil input, #ms-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_quick_facts = document.getElementById('ms-cplp-list-quick-facts');
  if (ms_cplp_list_quick_facts) {
    gsap.from('#ms-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_common_challenges_applicants_face = document.getElementById('ms-cplp-list-common-challenges-applicants-face');
  if (ms_cplp_list_common_challenges_applicants_face) {
    gsap.from('#ms-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_how_we_solve_these_challenges = document.getElementById('ms-cplp-list-how-we-solve-these-challenges');
  if (ms_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#ms-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_residency_overview = document.getElementById('ms-cplp-section-residency-overview');
  if (ms_cplp_section_residency_overview) {
    gsap.fromTo('#ms-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_form_who_is_this_residency_for = document.getElementById('ms-cplp-form-who-is-this-residency-for');
  if (ms_cplp_form_who_is_this_residency_for) {
    gsap.from('#ms-cplp-form-who-is-this-residency-for input, #ms-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_required_documents = document.getElementById('ms-cplp-list-required-documents');
  if (ms_cplp_list_required_documents) {
    gsap.from('#ms-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_application_process = document.getElementById('ms-cplp-list-application-process');
  if (ms_cplp_list_application_process) {
    gsap.from('#ms-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_timelines_deadlines = document.getElementById('ms-cplp-section-timelines-deadlines');
  if (ms_cplp_section_timelines_deadlines) {
    gsap.fromTo('#ms-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_fees_costs = document.getElementById('ms-cplp-section-fees-costs');
  if (ms_cplp_section_fees_costs) {
    gsap.fromTo('#ms-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_risks_common_mistakes = document.getElementById('ms-cplp-list-risks-common-mistakes');
  if (ms_cplp_list_risks_common_mistakes) {
    gsap.from('#ms-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_diy_vs_professional_assistance = document.getElementById('ms-cplp-section-diy-vs-professional-assistance');
  if (ms_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-cplp-section-mato-grosso-do-sul-specific-context');
  if (ms_cplp_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-cplp-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_what_our_clients_say = document.getElementById('ms-cplp-section-what-our-clients-say');
  if (ms_cplp_section_what_our_clients_say) {
    gsap.fromTo('#ms-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_frequently_asked_questions = document.getElementById('ms-cplp-section-frequently-asked-questions');
  if (ms_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#ms-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_international_support = document.getElementById('ms-cplp-section-international-support');
  if (ms_cplp_section_international_support) {
    gsap.fromTo('#ms-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_our_credentials = document.getElementById('ms-cplp-list-our-credentials');
  if (ms_cplp_list_our_credentials) {
    gsap.from('#ms-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_list_related_services = document.getElementById('ms-cplp-list-related-services');
  if (ms_cplp_list_related_services) {
    gsap.from('#ms-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_youre_in_good_hands = document.getElementById('ms-cplp-section-youre-in-good-hands');
  if (ms_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#ms-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_cplp_section_21 = document.getElementById('ms-cplp-section-21');
  if (ms_cplp_section_21) {
    gsap.fromTo('#ms-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('ms-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (ms_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#ms-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #ms-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_quick_facts = document.getElementById('ms-youthexchange-list-quick-facts');
  if (ms_youthexchange_list_quick_facts) {
    gsap.from('#ms-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_common_challenges_applicants_face = document.getElementById('ms-youthexchange-list-common-challenges-applicants-face');
  if (ms_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#ms-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_how_we_solve_these_challenges = document.getElementById('ms-youthexchange-list-how-we-solve-these-challenges');
  if (ms_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#ms-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_residency_overview = document.getElementById('ms-youthexchange-section-residency-overview');
  if (ms_youthexchange_section_residency_overview) {
    gsap.fromTo('#ms-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_form_who_is_this_residency_for = document.getElementById('ms-youthexchange-form-who-is-this-residency-for');
  if (ms_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#ms-youthexchange-form-who-is-this-residency-for input, #ms-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_required_documents = document.getElementById('ms-youthexchange-list-required-documents');
  if (ms_youthexchange_list_required_documents) {
    gsap.from('#ms-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_application_process = document.getElementById('ms-youthexchange-list-application-process');
  if (ms_youthexchange_list_application_process) {
    gsap.from('#ms-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_timelines_deadlines = document.getElementById('ms-youthexchange-section-timelines-deadlines');
  if (ms_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#ms-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_fees_costs = document.getElementById('ms-youthexchange-section-fees-costs');
  if (ms_youthexchange_section_fees_costs) {
    gsap.fromTo('#ms-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_risks_common_mistakes = document.getElementById('ms-youthexchange-list-risks-common-mistakes');
  if (ms_youthexchange_list_risks_common_mistakes) {
    gsap.from('#ms-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_diy_vs_professional_assistance = document.getElementById('ms-youthexchange-section-diy-vs-professional-assistance');
  if (ms_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-youthexchange-section-mato-grosso-do-sul-specific-context');
  if (ms_youthexchange_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-youthexchange-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_what_our_clients_say = document.getElementById('ms-youthexchange-section-what-our-clients-say');
  if (ms_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#ms-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_frequently_asked_questions = document.getElementById('ms-youthexchange-section-frequently-asked-questions');
  if (ms_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#ms-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_international_support = document.getElementById('ms-youthexchange-section-international-support');
  if (ms_youthexchange_section_international_support) {
    gsap.fromTo('#ms-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_our_credentials = document.getElementById('ms-youthexchange-list-our-credentials');
  if (ms_youthexchange_list_our_credentials) {
    gsap.from('#ms-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_list_related_services = document.getElementById('ms-youthexchange-list-related-services');
  if (ms_youthexchange_list_related_services) {
    gsap.from('#ms-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_youre_in_good_hands = document.getElementById('ms-youthexchange-section-youre-in-good-hands');
  if (ms_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#ms-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_youthexchange_section_21 = document.getElementById('ms-youthexchange-section-21');
  if (ms_youthexchange_section_21) {
    gsap.fromTo('#ms-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('ms-work-form-work-and-reside-in-brazil-with-work-residency');
  if (ms_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#ms-work-form-work-and-reside-in-brazil-with-work-residency input, #ms-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_quick_facts = document.getElementById('ms-work-list-quick-facts');
  if (ms_work_list_quick_facts) {
    gsap.from('#ms-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_common_challenges_applicants_face = document.getElementById('ms-work-list-common-challenges-applicants-face');
  if (ms_work_list_common_challenges_applicants_face) {
    gsap.from('#ms-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_how_we_solve_these_challenges = document.getElementById('ms-work-list-how-we-solve-these-challenges');
  if (ms_work_list_how_we_solve_these_challenges) {
    gsap.from('#ms-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_residency_overview = document.getElementById('ms-work-section-residency-overview');
  if (ms_work_section_residency_overview) {
    gsap.fromTo('#ms-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_form_who_is_this_residency_for = document.getElementById('ms-work-form-who-is-this-residency-for');
  if (ms_work_form_who_is_this_residency_for) {
    gsap.from('#ms-work-form-who-is-this-residency-for input, #ms-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_required_documents = document.getElementById('ms-work-list-required-documents');
  if (ms_work_list_required_documents) {
    gsap.from('#ms-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_application_process = document.getElementById('ms-work-list-application-process');
  if (ms_work_list_application_process) {
    gsap.from('#ms-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_timelines_deadlines = document.getElementById('ms-work-section-timelines-deadlines');
  if (ms_work_section_timelines_deadlines) {
    gsap.fromTo('#ms-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_fees_costs = document.getElementById('ms-work-section-fees-costs');
  if (ms_work_section_fees_costs) {
    gsap.fromTo('#ms-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_risks_common_mistakes = document.getElementById('ms-work-list-risks-common-mistakes');
  if (ms_work_list_risks_common_mistakes) {
    gsap.from('#ms-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_diy_vs_professional_assistance = document.getElementById('ms-work-section-diy-vs-professional-assistance');
  if (ms_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-work-section-mato-grosso-do-sul-specific-context');
  if (ms_work_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-work-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_what_our_clients_say = document.getElementById('ms-work-section-what-our-clients-say');
  if (ms_work_section_what_our_clients_say) {
    gsap.fromTo('#ms-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_frequently_asked_questions = document.getElementById('ms-work-section-frequently-asked-questions');
  if (ms_work_section_frequently_asked_questions) {
    gsap.fromTo('#ms-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_international_support = document.getElementById('ms-work-section-international-support');
  if (ms_work_section_international_support) {
    gsap.fromTo('#ms-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_our_credentials = document.getElementById('ms-work-list-our-credentials');
  if (ms_work_list_our_credentials) {
    gsap.from('#ms-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_list_related_services = document.getElementById('ms-work-list-related-services');
  if (ms_work_list_related_services) {
    gsap.from('#ms-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_youre_in_good_hands = document.getElementById('ms-work-section-youre-in-good-hands');
  if (ms_work_section_youre_in_good_hands) {
    gsap.fromTo('#ms-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_work_section_21 = document.getElementById('ms-work-section-21');
  if (ms_work_section_21) {
    gsap.fromTo('#ms-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('ms-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (ms_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#ms-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #ms-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_quick_facts = document.getElementById('ms-startup-list-quick-facts');
  if (ms_startup_list_quick_facts) {
    gsap.from('#ms-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_common_challenges_applicants_face = document.getElementById('ms-startup-list-common-challenges-applicants-face');
  if (ms_startup_list_common_challenges_applicants_face) {
    gsap.from('#ms-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_how_we_solve_these_challenges = document.getElementById('ms-startup-list-how-we-solve-these-challenges');
  if (ms_startup_list_how_we_solve_these_challenges) {
    gsap.from('#ms-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_visa_overview = document.getElementById('ms-startup-section-visa-overview');
  if (ms_startup_section_visa_overview) {
    gsap.fromTo('#ms-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_form_who_is_this_visa_for = document.getElementById('ms-startup-form-who-is-this-visa-for');
  if (ms_startup_form_who_is_this_visa_for) {
    gsap.from('#ms-startup-form-who-is-this-visa-for input, #ms-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_required_documents = document.getElementById('ms-startup-list-required-documents');
  if (ms_startup_list_required_documents) {
    gsap.from('#ms-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_application_process = document.getElementById('ms-startup-list-application-process');
  if (ms_startup_list_application_process) {
    gsap.from('#ms-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_timelines_deadlines = document.getElementById('ms-startup-section-timelines-deadlines');
  if (ms_startup_section_timelines_deadlines) {
    gsap.fromTo('#ms-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_fees_costs = document.getElementById('ms-startup-section-fees-costs');
  if (ms_startup_section_fees_costs) {
    gsap.fromTo('#ms-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_risks_common_mistakes = document.getElementById('ms-startup-list-risks-common-mistakes');
  if (ms_startup_list_risks_common_mistakes) {
    gsap.from('#ms-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_diy_vs_professional_assistance = document.getElementById('ms-startup-section-diy-vs-professional-assistance');
  if (ms_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-startup-section-mato-grosso-do-sul-specific-context');
  if (ms_startup_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-startup-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_what_our_clients_say = document.getElementById('ms-startup-section-what-our-clients-say');
  if (ms_startup_section_what_our_clients_say) {
    gsap.fromTo('#ms-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_frequently_asked_questions = document.getElementById('ms-startup-section-frequently-asked-questions');
  if (ms_startup_section_frequently_asked_questions) {
    gsap.fromTo('#ms-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_international_support = document.getElementById('ms-startup-section-international-support');
  if (ms_startup_section_international_support) {
    gsap.fromTo('#ms-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_our_credentials = document.getElementById('ms-startup-list-our-credentials');
  if (ms_startup_list_our_credentials) {
    gsap.from('#ms-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_list_related_services = document.getElementById('ms-startup-list-related-services');
  if (ms_startup_list_related_services) {
    gsap.from('#ms-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_youre_in_good_hands = document.getElementById('ms-startup-section-youre-in-good-hands');
  if (ms_startup_section_youre_in_good_hands) {
    gsap.fromTo('#ms-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_startup_section_21 = document.getElementById('ms-startup-section-21');
  if (ms_startup_section_21) {
    gsap.fromTo('#ms-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('ms-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (ms_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#ms-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #ms-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_quick_facts = document.getElementById('ms-family-list-quick-facts');
  if (ms_family_list_quick_facts) {
    gsap.from('#ms-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_common_challenges_applicants_face = document.getElementById('ms-family-list-common-challenges-applicants-face');
  if (ms_family_list_common_challenges_applicants_face) {
    gsap.from('#ms-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_how_we_solve_these_challenges = document.getElementById('ms-family-list-how-we-solve-these-challenges');
  if (ms_family_list_how_we_solve_these_challenges) {
    gsap.from('#ms-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_visa_overview = document.getElementById('ms-family-section-visa-overview');
  if (ms_family_section_visa_overview) {
    gsap.fromTo('#ms-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_form_who_is_this_visa_for = document.getElementById('ms-family-form-who-is-this-visa-for');
  if (ms_family_form_who_is_this_visa_for) {
    gsap.from('#ms-family-form-who-is-this-visa-for input, #ms-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_required_documents = document.getElementById('ms-family-list-required-documents');
  if (ms_family_list_required_documents) {
    gsap.from('#ms-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_application_process = document.getElementById('ms-family-list-application-process');
  if (ms_family_list_application_process) {
    gsap.from('#ms-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_timelines_deadlines = document.getElementById('ms-family-section-timelines-deadlines');
  if (ms_family_section_timelines_deadlines) {
    gsap.fromTo('#ms-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_fees_costs = document.getElementById('ms-family-section-fees-costs');
  if (ms_family_section_fees_costs) {
    gsap.fromTo('#ms-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_risks_common_mistakes = document.getElementById('ms-family-list-risks-common-mistakes');
  if (ms_family_list_risks_common_mistakes) {
    gsap.from('#ms-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_diy_vs_professional_assistance = document.getElementById('ms-family-section-diy-vs-professional-assistance');
  if (ms_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-family-section-mato-grosso-do-sul-specific-context');
  if (ms_family_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-family-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_what_our_clients_say = document.getElementById('ms-family-section-what-our-clients-say');
  if (ms_family_section_what_our_clients_say) {
    gsap.fromTo('#ms-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_frequently_asked_questions = document.getElementById('ms-family-section-frequently-asked-questions');
  if (ms_family_section_frequently_asked_questions) {
    gsap.fromTo('#ms-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_international_support = document.getElementById('ms-family-section-international-support');
  if (ms_family_section_international_support) {
    gsap.fromTo('#ms-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_our_credentials = document.getElementById('ms-family-list-our-credentials');
  if (ms_family_list_our_credentials) {
    gsap.from('#ms-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_list_related_services = document.getElementById('ms-family-list-related-services');
  if (ms_family_list_related_services) {
    gsap.from('#ms-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_youre_in_good_hands = document.getElementById('ms-family-section-youre-in-good-hands');
  if (ms_family_section_youre_in_good_hands) {
    gsap.fromTo('#ms-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_family_section_21 = document.getElementById('ms-family-section-21');
  if (ms_family_section_21) {
    gsap.fromTo('#ms-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('ms-sports-form-compete-in-brazil-with-the-sports-visa');
  if (ms_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#ms-sports-form-compete-in-brazil-with-the-sports-visa input, #ms-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_quick_facts = document.getElementById('ms-sports-list-quick-facts');
  if (ms_sports_list_quick_facts) {
    gsap.from('#ms-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_common_challenges_applicants_face = document.getElementById('ms-sports-list-common-challenges-applicants-face');
  if (ms_sports_list_common_challenges_applicants_face) {
    gsap.from('#ms-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_how_we_solve_these_challenges = document.getElementById('ms-sports-list-how-we-solve-these-challenges');
  if (ms_sports_list_how_we_solve_these_challenges) {
    gsap.from('#ms-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_visa_overview = document.getElementById('ms-sports-section-visa-overview');
  if (ms_sports_section_visa_overview) {
    gsap.fromTo('#ms-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_form_who_is_this_visa_for = document.getElementById('ms-sports-form-who-is-this-visa-for');
  if (ms_sports_form_who_is_this_visa_for) {
    gsap.from('#ms-sports-form-who-is-this-visa-for input, #ms-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_required_documents = document.getElementById('ms-sports-list-required-documents');
  if (ms_sports_list_required_documents) {
    gsap.from('#ms-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_application_process = document.getElementById('ms-sports-list-application-process');
  if (ms_sports_list_application_process) {
    gsap.from('#ms-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_timelines_deadlines = document.getElementById('ms-sports-section-timelines-deadlines');
  if (ms_sports_section_timelines_deadlines) {
    gsap.fromTo('#ms-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_fees_costs = document.getElementById('ms-sports-section-fees-costs');
  if (ms_sports_section_fees_costs) {
    gsap.fromTo('#ms-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_risks_common_mistakes = document.getElementById('ms-sports-list-risks-common-mistakes');
  if (ms_sports_list_risks_common_mistakes) {
    gsap.from('#ms-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_diy_vs_professional_assistance = document.getElementById('ms-sports-section-diy-vs-professional-assistance');
  if (ms_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-sports-section-mato-grosso-do-sul-specific-context');
  if (ms_sports_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-sports-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_what_our_clients_say = document.getElementById('ms-sports-section-what-our-clients-say');
  if (ms_sports_section_what_our_clients_say) {
    gsap.fromTo('#ms-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_frequently_asked_questions = document.getElementById('ms-sports-section-frequently-asked-questions');
  if (ms_sports_section_frequently_asked_questions) {
    gsap.fromTo('#ms-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_international_support = document.getElementById('ms-sports-section-international-support');
  if (ms_sports_section_international_support) {
    gsap.fromTo('#ms-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_our_credentials = document.getElementById('ms-sports-list-our-credentials');
  if (ms_sports_list_our_credentials) {
    gsap.from('#ms-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_list_related_services = document.getElementById('ms-sports-list-related-services');
  if (ms_sports_list_related_services) {
    gsap.from('#ms-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_youre_in_good_hands = document.getElementById('ms-sports-section-youre-in-good-hands');
  if (ms_sports_section_youre_in_good_hands) {
    gsap.fromTo('#ms-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_sports_section_21 = document.getElementById('ms-sports-section-21');
  if (ms_sports_section_21) {
    gsap.fromTo('#ms-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('ms-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (ms_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#ms-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #ms-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_quick_facts = document.getElementById('ms-medical-list-quick-facts');
  if (ms_medical_list_quick_facts) {
    gsap.from('#ms-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_common_challenges_applicants_face = document.getElementById('ms-medical-list-common-challenges-applicants-face');
  if (ms_medical_list_common_challenges_applicants_face) {
    gsap.from('#ms-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_how_we_solve_these_challenges = document.getElementById('ms-medical-list-how-we-solve-these-challenges');
  if (ms_medical_list_how_we_solve_these_challenges) {
    gsap.from('#ms-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_visa_overview = document.getElementById('ms-medical-section-visa-overview');
  if (ms_medical_section_visa_overview) {
    gsap.fromTo('#ms-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_form_who_is_this_visa_for = document.getElementById('ms-medical-form-who-is-this-visa-for');
  if (ms_medical_form_who_is_this_visa_for) {
    gsap.from('#ms-medical-form-who-is-this-visa-for input, #ms-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_required_documents = document.getElementById('ms-medical-list-required-documents');
  if (ms_medical_list_required_documents) {
    gsap.from('#ms-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_application_process = document.getElementById('ms-medical-list-application-process');
  if (ms_medical_list_application_process) {
    gsap.from('#ms-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_timelines_deadlines = document.getElementById('ms-medical-section-timelines-deadlines');
  if (ms_medical_section_timelines_deadlines) {
    gsap.fromTo('#ms-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_fees_costs = document.getElementById('ms-medical-section-fees-costs');
  if (ms_medical_section_fees_costs) {
    gsap.fromTo('#ms-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_risks_common_mistakes = document.getElementById('ms-medical-list-risks-common-mistakes');
  if (ms_medical_list_risks_common_mistakes) {
    gsap.from('#ms-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_diy_vs_professional_assistance = document.getElementById('ms-medical-section-diy-vs-professional-assistance');
  if (ms_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-medical-section-mato-grosso-do-sul-specific-context');
  if (ms_medical_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-medical-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_what_our_clients_say = document.getElementById('ms-medical-section-what-our-clients-say');
  if (ms_medical_section_what_our_clients_say) {
    gsap.fromTo('#ms-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_frequently_asked_questions = document.getElementById('ms-medical-section-frequently-asked-questions');
  if (ms_medical_section_frequently_asked_questions) {
    gsap.fromTo('#ms-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_international_support = document.getElementById('ms-medical-section-international-support');
  if (ms_medical_section_international_support) {
    gsap.fromTo('#ms-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_our_credentials = document.getElementById('ms-medical-list-our-credentials');
  if (ms_medical_list_our_credentials) {
    gsap.from('#ms-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_list_related_services = document.getElementById('ms-medical-list-related-services');
  if (ms_medical_list_related_services) {
    gsap.from('#ms-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_youre_in_good_hands = document.getElementById('ms-medical-section-youre-in-good-hands');
  if (ms_medical_section_youre_in_good_hands) {
    gsap.fromTo('#ms-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_medical_section_21 = document.getElementById('ms-medical-section-21');
  if (ms_medical_section_21) {
    gsap.fromTo('#ms-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('ms-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (ms_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#ms-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #ms-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_quick_facts = document.getElementById('ms-tourist-list-quick-facts');
  if (ms_tourist_list_quick_facts) {
    gsap.from('#ms-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_common_challenges_applicants_face = document.getElementById('ms-tourist-list-common-challenges-applicants-face');
  if (ms_tourist_list_common_challenges_applicants_face) {
    gsap.from('#ms-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_how_we_solve_these_challenges = document.getElementById('ms-tourist-list-how-we-solve-these-challenges');
  if (ms_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#ms-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_visa_overview = document.getElementById('ms-tourist-section-visa-overview');
  if (ms_tourist_section_visa_overview) {
    gsap.fromTo('#ms-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_form_who_is_this_visa_for = document.getElementById('ms-tourist-form-who-is-this-visa-for');
  if (ms_tourist_form_who_is_this_visa_for) {
    gsap.from('#ms-tourist-form-who-is-this-visa-for input, #ms-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_required_documents = document.getElementById('ms-tourist-list-required-documents');
  if (ms_tourist_list_required_documents) {
    gsap.from('#ms-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_application_process = document.getElementById('ms-tourist-list-application-process');
  if (ms_tourist_list_application_process) {
    gsap.from('#ms-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_timelines_deadlines = document.getElementById('ms-tourist-section-timelines-deadlines');
  if (ms_tourist_section_timelines_deadlines) {
    gsap.fromTo('#ms-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_fees_costs = document.getElementById('ms-tourist-section-fees-costs');
  if (ms_tourist_section_fees_costs) {
    gsap.fromTo('#ms-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_risks_common_mistakes = document.getElementById('ms-tourist-list-risks-common-mistakes');
  if (ms_tourist_list_risks_common_mistakes) {
    gsap.from('#ms-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_diy_vs_professional_assistance = document.getElementById('ms-tourist-section-diy-vs-professional-assistance');
  if (ms_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-tourist-section-mato-grosso-do-sul-specific-context');
  if (ms_tourist_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-tourist-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_what_our_clients_say = document.getElementById('ms-tourist-section-what-our-clients-say');
  if (ms_tourist_section_what_our_clients_say) {
    gsap.fromTo('#ms-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_frequently_asked_questions = document.getElementById('ms-tourist-section-frequently-asked-questions');
  if (ms_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#ms-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_international_support = document.getElementById('ms-tourist-section-international-support');
  if (ms_tourist_section_international_support) {
    gsap.fromTo('#ms-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_our_credentials = document.getElementById('ms-tourist-list-our-credentials');
  if (ms_tourist_list_our_credentials) {
    gsap.from('#ms-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_list_related_services = document.getElementById('ms-tourist-list-related-services');
  if (ms_tourist_list_related_services) {
    gsap.from('#ms-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_youre_in_good_hands = document.getElementById('ms-tourist-section-youre-in-good-hands');
  if (ms_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#ms-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_tourist_section_21 = document.getElementById('ms-tourist-section-21');
  if (ms_tourist_section_21) {
    gsap.fromTo('#ms-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('ms-transit-form-transit-through-brazil-with-the-transit-visa');
  if (ms_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#ms-transit-form-transit-through-brazil-with-the-transit-visa input, #ms-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_quick_facts = document.getElementById('ms-transit-list-quick-facts');
  if (ms_transit_list_quick_facts) {
    gsap.from('#ms-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_common_challenges_applicants_face = document.getElementById('ms-transit-list-common-challenges-applicants-face');
  if (ms_transit_list_common_challenges_applicants_face) {
    gsap.from('#ms-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_how_we_solve_these_challenges = document.getElementById('ms-transit-list-how-we-solve-these-challenges');
  if (ms_transit_list_how_we_solve_these_challenges) {
    gsap.from('#ms-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_visa_overview = document.getElementById('ms-transit-section-visa-overview');
  if (ms_transit_section_visa_overview) {
    gsap.fromTo('#ms-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_form_who_is_this_visa_for = document.getElementById('ms-transit-form-who-is-this-visa-for');
  if (ms_transit_form_who_is_this_visa_for) {
    gsap.from('#ms-transit-form-who-is-this-visa-for input, #ms-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_required_documents = document.getElementById('ms-transit-list-required-documents');
  if (ms_transit_list_required_documents) {
    gsap.from('#ms-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_application_process = document.getElementById('ms-transit-list-application-process');
  if (ms_transit_list_application_process) {
    gsap.from('#ms-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_timelines_deadlines = document.getElementById('ms-transit-section-timelines-deadlines');
  if (ms_transit_section_timelines_deadlines) {
    gsap.fromTo('#ms-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_fees_costs = document.getElementById('ms-transit-section-fees-costs');
  if (ms_transit_section_fees_costs) {
    gsap.fromTo('#ms-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_risks_common_mistakes = document.getElementById('ms-transit-list-risks-common-mistakes');
  if (ms_transit_list_risks_common_mistakes) {
    gsap.from('#ms-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_diy_vs_professional_assistance = document.getElementById('ms-transit-section-diy-vs-professional-assistance');
  if (ms_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-transit-section-mato-grosso-do-sul-specific-context');
  if (ms_transit_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-transit-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_what_our_clients_say = document.getElementById('ms-transit-section-what-our-clients-say');
  if (ms_transit_section_what_our_clients_say) {
    gsap.fromTo('#ms-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_frequently_asked_questions = document.getElementById('ms-transit-section-frequently-asked-questions');
  if (ms_transit_section_frequently_asked_questions) {
    gsap.fromTo('#ms-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_international_support = document.getElementById('ms-transit-section-international-support');
  if (ms_transit_section_international_support) {
    gsap.fromTo('#ms-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_our_credentials = document.getElementById('ms-transit-list-our-credentials');
  if (ms_transit_list_our_credentials) {
    gsap.from('#ms-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_list_related_services = document.getElementById('ms-transit-list-related-services');
  if (ms_transit_list_related_services) {
    gsap.from('#ms-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_youre_in_good_hands = document.getElementById('ms-transit-section-youre-in-good-hands');
  if (ms_transit_section_youre_in_good_hands) {
    gsap.fromTo('#ms-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_transit_section_21 = document.getElementById('ms-transit-section-21');
  if (ms_transit_section_21) {
    gsap.fromTo('#ms-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_form_study_in_brazil_with_the_student_visa = document.getElementById('ms-student-form-study-in-brazil-with-the-student-visa');
  if (ms_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#ms-student-form-study-in-brazil-with-the-student-visa input, #ms-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_quick_facts = document.getElementById('ms-student-list-quick-facts');
  if (ms_student_list_quick_facts) {
    gsap.from('#ms-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_common_challenges_applicants_face = document.getElementById('ms-student-list-common-challenges-applicants-face');
  if (ms_student_list_common_challenges_applicants_face) {
    gsap.from('#ms-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_how_we_solve_these_challenges = document.getElementById('ms-student-list-how-we-solve-these-challenges');
  if (ms_student_list_how_we_solve_these_challenges) {
    gsap.from('#ms-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_visa_overview = document.getElementById('ms-student-section-visa-overview');
  if (ms_student_section_visa_overview) {
    gsap.fromTo('#ms-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_form_who_is_this_visa_for = document.getElementById('ms-student-form-who-is-this-visa-for');
  if (ms_student_form_who_is_this_visa_for) {
    gsap.from('#ms-student-form-who-is-this-visa-for input, #ms-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_required_documents = document.getElementById('ms-student-list-required-documents');
  if (ms_student_list_required_documents) {
    gsap.from('#ms-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_application_process = document.getElementById('ms-student-list-application-process');
  if (ms_student_list_application_process) {
    gsap.from('#ms-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_timelines_deadlines = document.getElementById('ms-student-section-timelines-deadlines');
  if (ms_student_section_timelines_deadlines) {
    gsap.fromTo('#ms-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_fees_costs = document.getElementById('ms-student-section-fees-costs');
  if (ms_student_section_fees_costs) {
    gsap.fromTo('#ms-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_risks_common_mistakes = document.getElementById('ms-student-list-risks-common-mistakes');
  if (ms_student_list_risks_common_mistakes) {
    gsap.from('#ms-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_diy_vs_professional_assistance = document.getElementById('ms-student-section-diy-vs-professional-assistance');
  if (ms_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-student-section-mato-grosso-do-sul-specific-context');
  if (ms_student_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-student-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_what_our_clients_say = document.getElementById('ms-student-section-what-our-clients-say');
  if (ms_student_section_what_our_clients_say) {
    gsap.fromTo('#ms-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_frequently_asked_questions = document.getElementById('ms-student-section-frequently-asked-questions');
  if (ms_student_section_frequently_asked_questions) {
    gsap.fromTo('#ms-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_international_support = document.getElementById('ms-student-section-international-support');
  if (ms_student_section_international_support) {
    gsap.fromTo('#ms-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_our_credentials = document.getElementById('ms-student-list-our-credentials');
  if (ms_student_list_our_credentials) {
    gsap.from('#ms-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_list_related_services = document.getElementById('ms-student-list-related-services');
  if (ms_student_list_related_services) {
    gsap.from('#ms-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_youre_in_good_hands = document.getElementById('ms-student-section-youre-in-good-hands');
  if (ms_student_section_youre_in_good_hands) {
    gsap.fromTo('#ms-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_student_section_21 = document.getElementById('ms-student-section-21');
  if (ms_student_section_21) {
    gsap.fromTo('#ms-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('ms-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (ms_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#ms-business-form-conduct-business-in-brazil-with-the-business-visa input, #ms-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_quick_facts = document.getElementById('ms-business-list-quick-facts');
  if (ms_business_list_quick_facts) {
    gsap.from('#ms-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_common_challenges_applicants_face = document.getElementById('ms-business-list-common-challenges-applicants-face');
  if (ms_business_list_common_challenges_applicants_face) {
    gsap.from('#ms-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_how_we_solve_these_challenges = document.getElementById('ms-business-list-how-we-solve-these-challenges');
  if (ms_business_list_how_we_solve_these_challenges) {
    gsap.from('#ms-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_visa_overview = document.getElementById('ms-business-section-visa-overview');
  if (ms_business_section_visa_overview) {
    gsap.fromTo('#ms-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_form_who_is_this_visa_for = document.getElementById('ms-business-form-who-is-this-visa-for');
  if (ms_business_form_who_is_this_visa_for) {
    gsap.from('#ms-business-form-who-is-this-visa-for input, #ms-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_required_documents = document.getElementById('ms-business-list-required-documents');
  if (ms_business_list_required_documents) {
    gsap.from('#ms-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_application_process = document.getElementById('ms-business-list-application-process');
  if (ms_business_list_application_process) {
    gsap.from('#ms-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_timelines_deadlines = document.getElementById('ms-business-section-timelines-deadlines');
  if (ms_business_section_timelines_deadlines) {
    gsap.fromTo('#ms-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_fees_costs = document.getElementById('ms-business-section-fees-costs');
  if (ms_business_section_fees_costs) {
    gsap.fromTo('#ms-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_risks_common_mistakes = document.getElementById('ms-business-list-risks-common-mistakes');
  if (ms_business_list_risks_common_mistakes) {
    gsap.from('#ms-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_diy_vs_professional_assistance = document.getElementById('ms-business-section-diy-vs-professional-assistance');
  if (ms_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-business-section-mato-grosso-do-sul-specific-context');
  if (ms_business_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-business-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_what_our_clients_say = document.getElementById('ms-business-section-what-our-clients-say');
  if (ms_business_section_what_our_clients_say) {
    gsap.fromTo('#ms-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_frequently_asked_questions = document.getElementById('ms-business-section-frequently-asked-questions');
  if (ms_business_section_frequently_asked_questions) {
    gsap.fromTo('#ms-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_international_support = document.getElementById('ms-business-section-international-support');
  if (ms_business_section_international_support) {
    gsap.fromTo('#ms-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_our_credentials = document.getElementById('ms-business-list-our-credentials');
  if (ms_business_list_our_credentials) {
    gsap.from('#ms-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_list_related_services = document.getElementById('ms-business-list-related-services');
  if (ms_business_list_related_services) {
    gsap.from('#ms-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_youre_in_good_hands = document.getElementById('ms-business-section-youre-in-good-hands');
  if (ms_business_section_youre_in_good_hands) {
    gsap.fromTo('#ms-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_business_section_21 = document.getElementById('ms-business-section-21');
  if (ms_business_section_21) {
    gsap.fromTo('#ms-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('ms-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (ms_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#ms-research-form-conduct-research-in-brazil-with-the-research-visa input, #ms-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_quick_facts = document.getElementById('ms-research-list-quick-facts');
  if (ms_research_list_quick_facts) {
    gsap.from('#ms-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_common_challenges_applicants_face = document.getElementById('ms-research-list-common-challenges-applicants-face');
  if (ms_research_list_common_challenges_applicants_face) {
    gsap.from('#ms-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_how_we_solve_these_challenges = document.getElementById('ms-research-list-how-we-solve-these-challenges');
  if (ms_research_list_how_we_solve_these_challenges) {
    gsap.from('#ms-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_visa_overview = document.getElementById('ms-research-section-visa-overview');
  if (ms_research_section_visa_overview) {
    gsap.fromTo('#ms-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_form_who_is_this_visa_for = document.getElementById('ms-research-form-who-is-this-visa-for');
  if (ms_research_form_who_is_this_visa_for) {
    gsap.from('#ms-research-form-who-is-this-visa-for input, #ms-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_required_documents = document.getElementById('ms-research-list-required-documents');
  if (ms_research_list_required_documents) {
    gsap.from('#ms-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_application_process = document.getElementById('ms-research-list-application-process');
  if (ms_research_list_application_process) {
    gsap.from('#ms-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_timelines_deadlines = document.getElementById('ms-research-section-timelines-deadlines');
  if (ms_research_section_timelines_deadlines) {
    gsap.fromTo('#ms-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_fees_costs = document.getElementById('ms-research-section-fees-costs');
  if (ms_research_section_fees_costs) {
    gsap.fromTo('#ms-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_risks_common_mistakes = document.getElementById('ms-research-list-risks-common-mistakes');
  if (ms_research_list_risks_common_mistakes) {
    gsap.from('#ms-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_diy_vs_professional_assistance = document.getElementById('ms-research-section-diy-vs-professional-assistance');
  if (ms_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-research-section-mato-grosso-do-sul-specific-context');
  if (ms_research_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-research-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_what_our_clients_say = document.getElementById('ms-research-section-what-our-clients-say');
  if (ms_research_section_what_our_clients_say) {
    gsap.fromTo('#ms-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_frequently_asked_questions = document.getElementById('ms-research-section-frequently-asked-questions');
  if (ms_research_section_frequently_asked_questions) {
    gsap.fromTo('#ms-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_international_support = document.getElementById('ms-research-section-international-support');
  if (ms_research_section_international_support) {
    gsap.fromTo('#ms-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_our_credentials = document.getElementById('ms-research-list-our-credentials');
  if (ms_research_list_our_credentials) {
    gsap.from('#ms-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_list_related_services = document.getElementById('ms-research-list-related-services');
  if (ms_research_list_related_services) {
    gsap.from('#ms-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_youre_in_good_hands = document.getElementById('ms-research-section-youre-in-good-hands');
  if (ms_research_section_youre_in_good_hands) {
    gsap.fromTo('#ms-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_research_section_21 = document.getElementById('ms-research-section-21');
  if (ms_research_section_21) {
    gsap.fromTo('#ms-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('ms-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (ms_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#ms-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #ms-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_quick_facts = document.getElementById('ms-diplomatic-list-quick-facts');
  if (ms_diplomatic_list_quick_facts) {
    gsap.from('#ms-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_common_challenges_applicants_face = document.getElementById('ms-diplomatic-list-common-challenges-applicants-face');
  if (ms_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#ms-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_how_we_solve_these_challenges = document.getElementById('ms-diplomatic-list-how-we-solve-these-challenges');
  if (ms_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#ms-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_visa_overview = document.getElementById('ms-diplomatic-section-visa-overview');
  if (ms_diplomatic_section_visa_overview) {
    gsap.fromTo('#ms-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_form_who_is_this_visa_for = document.getElementById('ms-diplomatic-form-who-is-this-visa-for');
  if (ms_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#ms-diplomatic-form-who-is-this-visa-for input, #ms-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_required_documents = document.getElementById('ms-diplomatic-list-required-documents');
  if (ms_diplomatic_list_required_documents) {
    gsap.from('#ms-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_application_process = document.getElementById('ms-diplomatic-list-application-process');
  if (ms_diplomatic_list_application_process) {
    gsap.from('#ms-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_timelines_deadlines = document.getElementById('ms-diplomatic-section-timelines-deadlines');
  if (ms_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#ms-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_fees_costs = document.getElementById('ms-diplomatic-section-fees-costs');
  if (ms_diplomatic_section_fees_costs) {
    gsap.fromTo('#ms-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_risks_common_mistakes = document.getElementById('ms-diplomatic-list-risks-common-mistakes');
  if (ms_diplomatic_list_risks_common_mistakes) {
    gsap.from('#ms-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_diy_vs_professional_assistance = document.getElementById('ms-diplomatic-section-diy-vs-professional-assistance');
  if (ms_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-diplomatic-section-mato-grosso-do-sul-specific-context');
  if (ms_diplomatic_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-diplomatic-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_what_our_clients_say = document.getElementById('ms-diplomatic-section-what-our-clients-say');
  if (ms_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#ms-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_frequently_asked_questions = document.getElementById('ms-diplomatic-section-frequently-asked-questions');
  if (ms_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#ms-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_international_support = document.getElementById('ms-diplomatic-section-international-support');
  if (ms_diplomatic_section_international_support) {
    gsap.fromTo('#ms-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_our_credentials = document.getElementById('ms-diplomatic-list-our-credentials');
  if (ms_diplomatic_list_our_credentials) {
    gsap.from('#ms-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_list_related_services = document.getElementById('ms-diplomatic-list-related-services');
  if (ms_diplomatic_list_related_services) {
    gsap.from('#ms-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_youre_in_good_hands = document.getElementById('ms-diplomatic-section-youre-in-good-hands');
  if (ms_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#ms-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_diplomatic_section_21 = document.getElementById('ms-diplomatic-section-21');
  if (ms_diplomatic_section_21) {
    gsap.fromTo('#ms-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('ms-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (ms_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#ms-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #ms-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_quick_facts = document.getElementById('ms-journalist-list-quick-facts');
  if (ms_journalist_list_quick_facts) {
    gsap.from('#ms-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_common_challenges_applicants_face = document.getElementById('ms-journalist-list-common-challenges-applicants-face');
  if (ms_journalist_list_common_challenges_applicants_face) {
    gsap.from('#ms-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_how_we_solve_these_challenges = document.getElementById('ms-journalist-list-how-we-solve-these-challenges');
  if (ms_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#ms-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_visa_overview = document.getElementById('ms-journalist-section-visa-overview');
  if (ms_journalist_section_visa_overview) {
    gsap.fromTo('#ms-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_form_who_is_this_visa_for = document.getElementById('ms-journalist-form-who-is-this-visa-for');
  if (ms_journalist_form_who_is_this_visa_for) {
    gsap.from('#ms-journalist-form-who-is-this-visa-for input, #ms-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_required_documents = document.getElementById('ms-journalist-list-required-documents');
  if (ms_journalist_list_required_documents) {
    gsap.from('#ms-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_application_process = document.getElementById('ms-journalist-list-application-process');
  if (ms_journalist_list_application_process) {
    gsap.from('#ms-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_timelines_deadlines = document.getElementById('ms-journalist-section-timelines-deadlines');
  if (ms_journalist_section_timelines_deadlines) {
    gsap.fromTo('#ms-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_fees_costs = document.getElementById('ms-journalist-section-fees-costs');
  if (ms_journalist_section_fees_costs) {
    gsap.fromTo('#ms-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_risks_common_mistakes = document.getElementById('ms-journalist-list-risks-common-mistakes');
  if (ms_journalist_list_risks_common_mistakes) {
    gsap.from('#ms-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_diy_vs_professional_assistance = document.getElementById('ms-journalist-section-diy-vs-professional-assistance');
  if (ms_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-journalist-section-mato-grosso-do-sul-specific-context');
  if (ms_journalist_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-journalist-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_what_our_clients_say = document.getElementById('ms-journalist-section-what-our-clients-say');
  if (ms_journalist_section_what_our_clients_say) {
    gsap.fromTo('#ms-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_frequently_asked_questions = document.getElementById('ms-journalist-section-frequently-asked-questions');
  if (ms_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#ms-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_international_support = document.getElementById('ms-journalist-section-international-support');
  if (ms_journalist_section_international_support) {
    gsap.fromTo('#ms-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_our_credentials = document.getElementById('ms-journalist-list-our-credentials');
  if (ms_journalist_list_our_credentials) {
    gsap.from('#ms-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_list_related_services = document.getElementById('ms-journalist-list-related-services');
  if (ms_journalist_list_related_services) {
    gsap.from('#ms-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_youre_in_good_hands = document.getElementById('ms-journalist-section-youre-in-good-hands');
  if (ms_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#ms-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_journalist_section_21 = document.getElementById('ms-journalist-section-21');
  if (ms_journalist_section_21) {
    gsap.fromTo('#ms-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('ms-fines-form-resolve-immigration-fines-in-brazil');
  if (ms_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#ms-fines-form-resolve-immigration-fines-in-brazil input, #ms-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_quick_facts = document.getElementById('ms-fines-list-quick-facts');
  if (ms_fines_list_quick_facts) {
    gsap.from('#ms-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_common_challenges_applicants_face = document.getElementById('ms-fines-list-common-challenges-applicants-face');
  if (ms_fines_list_common_challenges_applicants_face) {
    gsap.from('#ms-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_how_we_solve_these_challenges = document.getElementById('ms-fines-list-how-we-solve-these-challenges');
  if (ms_fines_list_how_we_solve_these_challenges) {
    gsap.from('#ms-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_service_overview = document.getElementById('ms-fines-section-service-overview');
  if (ms_fines_section_service_overview) {
    gsap.fromTo('#ms-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_form_who_is_this_service_for = document.getElementById('ms-fines-form-who-is-this-service-for');
  if (ms_fines_form_who_is_this_service_for) {
    gsap.from('#ms-fines-form-who-is-this-service-for input, #ms-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_required_documents = document.getElementById('ms-fines-list-required-documents');
  if (ms_fines_list_required_documents) {
    gsap.from('#ms-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_process = document.getElementById('ms-fines-list-process');
  if (ms_fines_list_process) {
    gsap.from('#ms-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_timelines_deadlines = document.getElementById('ms-fines-section-timelines-deadlines');
  if (ms_fines_section_timelines_deadlines) {
    gsap.fromTo('#ms-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_fees_costs = document.getElementById('ms-fines-section-fees-costs');
  if (ms_fines_section_fees_costs) {
    gsap.fromTo('#ms-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_risks_common_mistakes = document.getElementById('ms-fines-list-risks-common-mistakes');
  if (ms_fines_list_risks_common_mistakes) {
    gsap.from('#ms-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_diy_vs_professional_assistance = document.getElementById('ms-fines-section-diy-vs-professional-assistance');
  if (ms_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-fines-section-mato-grosso-do-sul-specific-context');
  if (ms_fines_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-fines-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_what_our_clients_say = document.getElementById('ms-fines-section-what-our-clients-say');
  if (ms_fines_section_what_our_clients_say) {
    gsap.fromTo('#ms-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_frequently_asked_questions = document.getElementById('ms-fines-section-frequently-asked-questions');
  if (ms_fines_section_frequently_asked_questions) {
    gsap.fromTo('#ms-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_international_support = document.getElementById('ms-fines-section-international-support');
  if (ms_fines_section_international_support) {
    gsap.fromTo('#ms-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_our_credentials = document.getElementById('ms-fines-list-our-credentials');
  if (ms_fines_list_our_credentials) {
    gsap.from('#ms-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_list_related_services = document.getElementById('ms-fines-list-related-services');
  if (ms_fines_list_related_services) {
    gsap.from('#ms-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_youre_in_good_hands = document.getElementById('ms-fines-section-youre-in-good-hands');
  if (ms_fines_section_youre_in_good_hands) {
    gsap.fromTo('#ms-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_fines_section_21 = document.getElementById('ms-fines-section-21');
  if (ms_fines_section_21) {
    gsap.fromTo('#ms-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_form_deportation_assistance_in_brazil = document.getElementById('ms-deportation-form-deportation-assistance-in-brazil');
  if (ms_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#ms-deportation-form-deportation-assistance-in-brazil input, #ms-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_quick_facts = document.getElementById('ms-deportation-list-quick-facts');
  if (ms_deportation_list_quick_facts) {
    gsap.from('#ms-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_common_challenges_applicants_face = document.getElementById('ms-deportation-list-common-challenges-applicants-face');
  if (ms_deportation_list_common_challenges_applicants_face) {
    gsap.from('#ms-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_how_we_solve_these_challenges = document.getElementById('ms-deportation-list-how-we-solve-these-challenges');
  if (ms_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#ms-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_service_overview = document.getElementById('ms-deportation-section-service-overview');
  if (ms_deportation_section_service_overview) {
    gsap.fromTo('#ms-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_form_who_is_this_service_for = document.getElementById('ms-deportation-form-who-is-this-service-for');
  if (ms_deportation_form_who_is_this_service_for) {
    gsap.from('#ms-deportation-form-who-is-this-service-for input, #ms-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_required_documents = document.getElementById('ms-deportation-list-required-documents');
  if (ms_deportation_list_required_documents) {
    gsap.from('#ms-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_process = document.getElementById('ms-deportation-list-process');
  if (ms_deportation_list_process) {
    gsap.from('#ms-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_timelines_deadlines = document.getElementById('ms-deportation-section-timelines-deadlines');
  if (ms_deportation_section_timelines_deadlines) {
    gsap.fromTo('#ms-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_fees_costs = document.getElementById('ms-deportation-section-fees-costs');
  if (ms_deportation_section_fees_costs) {
    gsap.fromTo('#ms-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_risks_common_mistakes = document.getElementById('ms-deportation-list-risks-common-mistakes');
  if (ms_deportation_list_risks_common_mistakes) {
    gsap.from('#ms-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_diy_vs_professional_assistance = document.getElementById('ms-deportation-section-diy-vs-professional-assistance');
  if (ms_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-deportation-section-mato-grosso-do-sul-specific-context');
  if (ms_deportation_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-deportation-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_what_our_clients_say = document.getElementById('ms-deportation-section-what-our-clients-say');
  if (ms_deportation_section_what_our_clients_say) {
    gsap.fromTo('#ms-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_frequently_asked_questions = document.getElementById('ms-deportation-section-frequently-asked-questions');
  if (ms_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#ms-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_international_support = document.getElementById('ms-deportation-section-international-support');
  if (ms_deportation_section_international_support) {
    gsap.fromTo('#ms-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_our_credentials = document.getElementById('ms-deportation-list-our-credentials');
  if (ms_deportation_list_our_credentials) {
    gsap.from('#ms-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_list_related_services = document.getElementById('ms-deportation-list-related-services');
  if (ms_deportation_list_related_services) {
    gsap.from('#ms-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_youre_in_good_hands = document.getElementById('ms-deportation-section-youre-in-good-hands');
  if (ms_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#ms-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_deportation_section_21 = document.getElementById('ms-deportation-section-21');
  if (ms_deportation_section_21) {
    gsap.fromTo('#ms-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('ms-translation-form-sworn-document-translation-services-in-brazil');
  if (ms_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#ms-translation-form-sworn-document-translation-services-in-brazil input, #ms-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_quick_facts = document.getElementById('ms-translation-list-quick-facts');
  if (ms_translation_list_quick_facts) {
    gsap.from('#ms-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_common_challenges_applicants_face = document.getElementById('ms-translation-list-common-challenges-applicants-face');
  if (ms_translation_list_common_challenges_applicants_face) {
    gsap.from('#ms-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_how_we_solve_these_challenges = document.getElementById('ms-translation-list-how-we-solve-these-challenges');
  if (ms_translation_list_how_we_solve_these_challenges) {
    gsap.from('#ms-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_service_overview = document.getElementById('ms-translation-section-service-overview');
  if (ms_translation_section_service_overview) {
    gsap.fromTo('#ms-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_form_who_is_this_service_for = document.getElementById('ms-translation-form-who-is-this-service-for');
  if (ms_translation_form_who_is_this_service_for) {
    gsap.from('#ms-translation-form-who-is-this-service-for input, #ms-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_required_documents = document.getElementById('ms-translation-list-required-documents');
  if (ms_translation_list_required_documents) {
    gsap.from('#ms-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_process = document.getElementById('ms-translation-list-process');
  if (ms_translation_list_process) {
    gsap.from('#ms-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_timelines_deadlines = document.getElementById('ms-translation-section-timelines-deadlines');
  if (ms_translation_section_timelines_deadlines) {
    gsap.fromTo('#ms-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_fees_costs = document.getElementById('ms-translation-section-fees-costs');
  if (ms_translation_section_fees_costs) {
    gsap.fromTo('#ms-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_risks_common_mistakes = document.getElementById('ms-translation-list-risks-common-mistakes');
  if (ms_translation_list_risks_common_mistakes) {
    gsap.from('#ms-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_diy_vs_professional_assistance = document.getElementById('ms-translation-section-diy-vs-professional-assistance');
  if (ms_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-translation-section-mato-grosso-do-sul-specific-context');
  if (ms_translation_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-translation-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_what_our_clients_say = document.getElementById('ms-translation-section-what-our-clients-say');
  if (ms_translation_section_what_our_clients_say) {
    gsap.fromTo('#ms-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_frequently_asked_questions = document.getElementById('ms-translation-section-frequently-asked-questions');
  if (ms_translation_section_frequently_asked_questions) {
    gsap.fromTo('#ms-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_international_support = document.getElementById('ms-translation-section-international-support');
  if (ms_translation_section_international_support) {
    gsap.fromTo('#ms-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_our_credentials = document.getElementById('ms-translation-list-our-credentials');
  if (ms_translation_list_our_credentials) {
    gsap.from('#ms-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_list_related_services = document.getElementById('ms-translation-list-related-services');
  if (ms_translation_list_related_services) {
    gsap.from('#ms-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_youre_in_good_hands = document.getElementById('ms-translation-section-youre-in-good-hands');
  if (ms_translation_section_youre_in_good_hands) {
    gsap.fromTo('#ms-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_translation_section_21 = document.getElementById('ms-translation-section-21');
  if (ms_translation_section_21) {
    gsap.fromTo('#ms-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('ms-expulsion-form-expulsion-assistance-in-brazil');
  if (ms_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#ms-expulsion-form-expulsion-assistance-in-brazil input, #ms-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_quick_facts = document.getElementById('ms-expulsion-list-quick-facts');
  if (ms_expulsion_list_quick_facts) {
    gsap.from('#ms-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_common_challenges_applicants_face = document.getElementById('ms-expulsion-list-common-challenges-applicants-face');
  if (ms_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#ms-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_how_we_solve_these_challenges = document.getElementById('ms-expulsion-list-how-we-solve-these-challenges');
  if (ms_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#ms-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_service_overview = document.getElementById('ms-expulsion-section-service-overview');
  if (ms_expulsion_section_service_overview) {
    gsap.fromTo('#ms-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_form_who_is_this_service_for = document.getElementById('ms-expulsion-form-who-is-this-service-for');
  if (ms_expulsion_form_who_is_this_service_for) {
    gsap.from('#ms-expulsion-form-who-is-this-service-for input, #ms-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_required_documents = document.getElementById('ms-expulsion-list-required-documents');
  if (ms_expulsion_list_required_documents) {
    gsap.from('#ms-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_process = document.getElementById('ms-expulsion-list-process');
  if (ms_expulsion_list_process) {
    gsap.from('#ms-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_timelines_deadlines = document.getElementById('ms-expulsion-section-timelines-deadlines');
  if (ms_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#ms-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_fees_costs = document.getElementById('ms-expulsion-section-fees-costs');
  if (ms_expulsion_section_fees_costs) {
    gsap.fromTo('#ms-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_risks_common_mistakes = document.getElementById('ms-expulsion-list-risks-common-mistakes');
  if (ms_expulsion_list_risks_common_mistakes) {
    gsap.from('#ms-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_diy_vs_professional_assistance = document.getElementById('ms-expulsion-section-diy-vs-professional-assistance');
  if (ms_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-expulsion-section-mato-grosso-do-sul-specific-context');
  if (ms_expulsion_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-expulsion-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_what_our_clients_say = document.getElementById('ms-expulsion-section-what-our-clients-say');
  if (ms_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#ms-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_frequently_asked_questions = document.getElementById('ms-expulsion-section-frequently-asked-questions');
  if (ms_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#ms-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_international_support = document.getElementById('ms-expulsion-section-international-support');
  if (ms_expulsion_section_international_support) {
    gsap.fromTo('#ms-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_our_credentials = document.getElementById('ms-expulsion-list-our-credentials');
  if (ms_expulsion_list_our_credentials) {
    gsap.from('#ms-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_list_related_services = document.getElementById('ms-expulsion-list-related-services');
  if (ms_expulsion_list_related_services) {
    gsap.from('#ms-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_youre_in_good_hands = document.getElementById('ms-expulsion-section-youre-in-good-hands');
  if (ms_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#ms-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_expulsion_section_21 = document.getElementById('ms-expulsion-section-21');
  if (ms_expulsion_section_21) {
    gsap.fromTo('#ms-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('ms-appeals-form-appeal-immigration-denials-in-brazil');
  if (ms_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#ms-appeals-form-appeal-immigration-denials-in-brazil input, #ms-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_quick_facts = document.getElementById('ms-appeals-list-quick-facts');
  if (ms_appeals_list_quick_facts) {
    gsap.from('#ms-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_common_challenges_applicants_face = document.getElementById('ms-appeals-list-common-challenges-applicants-face');
  if (ms_appeals_list_common_challenges_applicants_face) {
    gsap.from('#ms-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_how_we_solve_these_challenges = document.getElementById('ms-appeals-list-how-we-solve-these-challenges');
  if (ms_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#ms-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_service_overview = document.getElementById('ms-appeals-section-service-overview');
  if (ms_appeals_section_service_overview) {
    gsap.fromTo('#ms-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_form_who_is_this_service_for = document.getElementById('ms-appeals-form-who-is-this-service-for');
  if (ms_appeals_form_who_is_this_service_for) {
    gsap.from('#ms-appeals-form-who-is-this-service-for input, #ms-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_required_documents = document.getElementById('ms-appeals-list-required-documents');
  if (ms_appeals_list_required_documents) {
    gsap.from('#ms-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_appeal_process = document.getElementById('ms-appeals-list-appeal-process');
  if (ms_appeals_list_appeal_process) {
    gsap.from('#ms-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_timelines_deadlines = document.getElementById('ms-appeals-section-timelines-deadlines');
  if (ms_appeals_section_timelines_deadlines) {
    gsap.fromTo('#ms-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_fees_costs = document.getElementById('ms-appeals-section-fees-costs');
  if (ms_appeals_section_fees_costs) {
    gsap.fromTo('#ms-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_risks_common_mistakes = document.getElementById('ms-appeals-list-risks-common-mistakes');
  if (ms_appeals_list_risks_common_mistakes) {
    gsap.from('#ms-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_diy_vs_professional_assistance = document.getElementById('ms-appeals-section-diy-vs-professional-assistance');
  if (ms_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-appeals-section-mato-grosso-do-sul-specific-context');
  if (ms_appeals_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-appeals-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_what_our_clients_say = document.getElementById('ms-appeals-section-what-our-clients-say');
  if (ms_appeals_section_what_our_clients_say) {
    gsap.fromTo('#ms-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_frequently_asked_questions = document.getElementById('ms-appeals-section-frequently-asked-questions');
  if (ms_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#ms-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_international_support = document.getElementById('ms-appeals-section-international-support');
  if (ms_appeals_section_international_support) {
    gsap.fromTo('#ms-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_our_credentials = document.getElementById('ms-appeals-list-our-credentials');
  if (ms_appeals_list_our_credentials) {
    gsap.from('#ms-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_list_related_services = document.getElementById('ms-appeals-list-related-services');
  if (ms_appeals_list_related_services) {
    gsap.from('#ms-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_youre_in_good_hands = document.getElementById('ms-appeals-section-youre-in-good-hands');
  if (ms_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#ms-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_appeals_section_21 = document.getElementById('ms-appeals-section-21');
  if (ms_appeals_section_21) {
    gsap.fromTo('#ms-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('ms-consular-form-consular-services-in-brazil-for-citizens');
  if (ms_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#ms-consular-form-consular-services-in-brazil-for-citizens input, #ms-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_quick_facts = document.getElementById('ms-consular-list-quick-facts');
  if (ms_consular_list_quick_facts) {
    gsap.from('#ms-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_common_challenges_applicants_face = document.getElementById('ms-consular-list-common-challenges-applicants-face');
  if (ms_consular_list_common_challenges_applicants_face) {
    gsap.from('#ms-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_how_we_solve_these_challenges = document.getElementById('ms-consular-list-how-we-solve-these-challenges');
  if (ms_consular_list_how_we_solve_these_challenges) {
    gsap.from('#ms-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_service_overview = document.getElementById('ms-consular-section-service-overview');
  if (ms_consular_section_service_overview) {
    gsap.fromTo('#ms-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_form_who_is_this_service_for = document.getElementById('ms-consular-form-who-is-this-service-for');
  if (ms_consular_form_who_is_this_service_for) {
    gsap.from('#ms-consular-form-who-is-this-service-for input, #ms-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_required_documents = document.getElementById('ms-consular-list-required-documents');
  if (ms_consular_list_required_documents) {
    gsap.from('#ms-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_process = document.getElementById('ms-consular-list-process');
  if (ms_consular_list_process) {
    gsap.from('#ms-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_timelines_deadlines = document.getElementById('ms-consular-section-timelines-deadlines');
  if (ms_consular_section_timelines_deadlines) {
    gsap.fromTo('#ms-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_fees_costs = document.getElementById('ms-consular-section-fees-costs');
  if (ms_consular_section_fees_costs) {
    gsap.fromTo('#ms-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_risks_common_mistakes = document.getElementById('ms-consular-list-risks-common-mistakes');
  if (ms_consular_list_risks_common_mistakes) {
    gsap.from('#ms-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_diy_vs_professional_assistance = document.getElementById('ms-consular-section-diy-vs-professional-assistance');
  if (ms_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-consular-section-mato-grosso-do-sul-specific-context');
  if (ms_consular_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-consular-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_what_our_clients_say = document.getElementById('ms-consular-section-what-our-clients-say');
  if (ms_consular_section_what_our_clients_say) {
    gsap.fromTo('#ms-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_frequently_asked_questions = document.getElementById('ms-consular-section-frequently-asked-questions');
  if (ms_consular_section_frequently_asked_questions) {
    gsap.fromTo('#ms-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_international_support = document.getElementById('ms-consular-section-international-support');
  if (ms_consular_section_international_support) {
    gsap.fromTo('#ms-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_our_credentials = document.getElementById('ms-consular-list-our-credentials');
  if (ms_consular_list_our_credentials) {
    gsap.from('#ms-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_list_related_services = document.getElementById('ms-consular-list-related-services');
  if (ms_consular_list_related_services) {
    gsap.from('#ms-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_youre_in_good_hands = document.getElementById('ms-consular-section-youre-in-good-hands');
  if (ms_consular_section_youre_in_good_hands) {
    gsap.fromTo('#ms-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_consular_section_21 = document.getElementById('ms-consular-section-21');
  if (ms_consular_section_21) {
    gsap.fromTo('#ms-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('ms-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (ms_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#ms-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #ms-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_quick_facts = document.getElementById('ms-criminalrecords-list-quick-facts');
  if (ms_criminalrecords_list_quick_facts) {
    gsap.from('#ms-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_common_challenges_applicants_face = document.getElementById('ms-criminalrecords-list-common-challenges-applicants-face');
  if (ms_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#ms-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('ms-criminalrecords-list-how-we-solve-these-challenges');
  if (ms_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#ms-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_service_overview = document.getElementById('ms-criminalrecords-section-service-overview');
  if (ms_criminalrecords_section_service_overview) {
    gsap.fromTo('#ms-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_form_who_is_this_service_for = document.getElementById('ms-criminalrecords-form-who-is-this-service-for');
  if (ms_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#ms-criminalrecords-form-who-is-this-service-for input, #ms-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_required_documents = document.getElementById('ms-criminalrecords-list-required-documents');
  if (ms_criminalrecords_list_required_documents) {
    gsap.from('#ms-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_process = document.getElementById('ms-criminalrecords-list-process');
  if (ms_criminalrecords_list_process) {
    gsap.from('#ms-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_timelines_deadlines = document.getElementById('ms-criminalrecords-section-timelines-deadlines');
  if (ms_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#ms-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_fees_costs = document.getElementById('ms-criminalrecords-section-fees-costs');
  if (ms_criminalrecords_section_fees_costs) {
    gsap.fromTo('#ms-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_risks_common_mistakes = document.getElementById('ms-criminalrecords-list-risks-common-mistakes');
  if (ms_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#ms-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('ms-criminalrecords-section-diy-vs-professional-assistance');
  if (ms_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-criminalrecords-section-mato-grosso-do-sul-specific-context');
  if (ms_criminalrecords_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-criminalrecords-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_what_our_clients_say = document.getElementById('ms-criminalrecords-section-what-our-clients-say');
  if (ms_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#ms-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_frequently_asked_questions = document.getElementById('ms-criminalrecords-section-frequently-asked-questions');
  if (ms_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#ms-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_international_support = document.getElementById('ms-criminalrecords-section-international-support');
  if (ms_criminalrecords_section_international_support) {
    gsap.fromTo('#ms-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_our_credentials = document.getElementById('ms-criminalrecords-list-our-credentials');
  if (ms_criminalrecords_list_our_credentials) {
    gsap.from('#ms-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_list_related_services = document.getElementById('ms-criminalrecords-list-related-services');
  if (ms_criminalrecords_list_related_services) {
    gsap.from('#ms-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_youre_in_good_hands = document.getElementById('ms-criminalrecords-section-youre-in-good-hands');
  if (ms_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#ms-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_criminalrecords_section_21 = document.getElementById('ms-criminalrecords-section-21');
  if (ms_criminalrecords_section_21) {
    gsap.fromTo('#ms-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_form_extradition_assistance_in_brazil = document.getElementById('ms-extradition-form-extradition-assistance-in-brazil');
  if (ms_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#ms-extradition-form-extradition-assistance-in-brazil input, #ms-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_quick_facts = document.getElementById('ms-extradition-list-quick-facts');
  if (ms_extradition_list_quick_facts) {
    gsap.from('#ms-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_common_challenges_applicants_face = document.getElementById('ms-extradition-list-common-challenges-applicants-face');
  if (ms_extradition_list_common_challenges_applicants_face) {
    gsap.from('#ms-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_how_we_solve_these_challenges = document.getElementById('ms-extradition-list-how-we-solve-these-challenges');
  if (ms_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#ms-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_service_overview = document.getElementById('ms-extradition-section-service-overview');
  if (ms_extradition_section_service_overview) {
    gsap.fromTo('#ms-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_form_who_is_this_service_for = document.getElementById('ms-extradition-form-who-is-this-service-for');
  if (ms_extradition_form_who_is_this_service_for) {
    gsap.from('#ms-extradition-form-who-is-this-service-for input, #ms-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_required_documents = document.getElementById('ms-extradition-list-required-documents');
  if (ms_extradition_list_required_documents) {
    gsap.from('#ms-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_process = document.getElementById('ms-extradition-list-process');
  if (ms_extradition_list_process) {
    gsap.from('#ms-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_timelines_deadlines = document.getElementById('ms-extradition-section-timelines-deadlines');
  if (ms_extradition_section_timelines_deadlines) {
    gsap.fromTo('#ms-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_fees_costs = document.getElementById('ms-extradition-section-fees-costs');
  if (ms_extradition_section_fees_costs) {
    gsap.fromTo('#ms-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_risks_common_mistakes = document.getElementById('ms-extradition-list-risks-common-mistakes');
  if (ms_extradition_list_risks_common_mistakes) {
    gsap.from('#ms-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_diy_vs_professional_assistance = document.getElementById('ms-extradition-section-diy-vs-professional-assistance');
  if (ms_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-extradition-section-mato-grosso-do-sul-specific-context');
  if (ms_extradition_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-extradition-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_what_our_clients_say = document.getElementById('ms-extradition-section-what-our-clients-say');
  if (ms_extradition_section_what_our_clients_say) {
    gsap.fromTo('#ms-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_frequently_asked_questions = document.getElementById('ms-extradition-section-frequently-asked-questions');
  if (ms_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#ms-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_international_support = document.getElementById('ms-extradition-section-international-support');
  if (ms_extradition_section_international_support) {
    gsap.fromTo('#ms-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_our_credentials = document.getElementById('ms-extradition-list-our-credentials');
  if (ms_extradition_list_our_credentials) {
    gsap.from('#ms-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_list_related_services = document.getElementById('ms-extradition-list-related-services');
  if (ms_extradition_list_related_services) {
    gsap.from('#ms-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_youre_in_good_hands = document.getElementById('ms-extradition-section-youre-in-good-hands');
  if (ms_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#ms-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_extradition_section_21 = document.getElementById('ms-extradition-section-21');
  if (ms_extradition_section_21) {
    gsap.fromTo('#ms-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_form_discover_the_north_amazon_and_beyond = document.getElementById('ms-north-form-discover-the-north-amazon-and-beyond');
  if (ms_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#ms-north-form-discover-the-north-amazon-and-beyond input, #ms-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_quick_facts = document.getElementById('ms-north-list-quick-facts');
  if (ms_north_list_quick_facts) {
    gsap.from('#ms-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_common_challenges_applicants_face = document.getElementById('ms-north-list-common-challenges-applicants-face');
  if (ms_north_list_common_challenges_applicants_face) {
    gsap.from('#ms-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_how_we_solve_these_challenges = document.getElementById('ms-north-list-how-we-solve-these-challenges');
  if (ms_north_list_how_we_solve_these_challenges) {
    gsap.from('#ms-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_trip_overview = document.getElementById('ms-north-section-trip-overview');
  if (ms_north_section_trip_overview) {
    gsap.fromTo('#ms-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_form_who_is_this_trip_for = document.getElementById('ms-north-form-who-is-this-trip-for');
  if (ms_north_form_who_is_this_trip_for) {
    gsap.from('#ms-north-form-who-is-this-trip-for input, #ms-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_required_documents = document.getElementById('ms-north-list-required-documents');
  if (ms_north_list_required_documents) {
    gsap.from('#ms-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_booking_process = document.getElementById('ms-north-list-booking-process');
  if (ms_north_list_booking_process) {
    gsap.from('#ms-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_timelines_deadlines = document.getElementById('ms-north-section-timelines-deadlines');
  if (ms_north_section_timelines_deadlines) {
    gsap.fromTo('#ms-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_fees_costs = document.getElementById('ms-north-section-fees-costs');
  if (ms_north_section_fees_costs) {
    gsap.fromTo('#ms-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_risks_common_mistakes = document.getElementById('ms-north-list-risks-common-mistakes');
  if (ms_north_list_risks_common_mistakes) {
    gsap.from('#ms-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_diy_vs_professional_assistance = document.getElementById('ms-north-section-diy-vs-professional-assistance');
  if (ms_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-north-section-mato-grosso-do-sul-specific-context');
  if (ms_north_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-north-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_what_our_clients_say = document.getElementById('ms-north-section-what-our-clients-say');
  if (ms_north_section_what_our_clients_say) {
    gsap.fromTo('#ms-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_frequently_asked_questions = document.getElementById('ms-north-section-frequently-asked-questions');
  if (ms_north_section_frequently_asked_questions) {
    gsap.fromTo('#ms-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_international_support = document.getElementById('ms-north-section-international-support');
  if (ms_north_section_international_support) {
    gsap.fromTo('#ms-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_our_credentials = document.getElementById('ms-north-list-our-credentials');
  if (ms_north_list_our_credentials) {
    gsap.from('#ms-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_list_related_services = document.getElementById('ms-north-list-related-services');
  if (ms_north_list_related_services) {
    gsap.from('#ms-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_youre_in_good_hands = document.getElementById('ms-north-section-youre-in-good-hands');
  if (ms_north_section_youre_in_good_hands) {
    gsap.fromTo('#ms-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_north_section_21 = document.getElementById('ms-north-section-21');
  if (ms_north_section_21) {
    gsap.fromTo('#ms-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('ms-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (ms_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#ms-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #ms-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_quick_facts = document.getElementById('ms-centralwest-list-quick-facts');
  if (ms_centralwest_list_quick_facts) {
    gsap.from('#ms-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_common_challenges_applicants_face = document.getElementById('ms-centralwest-list-common-challenges-applicants-face');
  if (ms_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#ms-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_how_we_solve_these_challenges = document.getElementById('ms-centralwest-list-how-we-solve-these-challenges');
  if (ms_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#ms-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_trip_overview = document.getElementById('ms-centralwest-section-trip-overview');
  if (ms_centralwest_section_trip_overview) {
    gsap.fromTo('#ms-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_form_who_is_this_trip_for = document.getElementById('ms-centralwest-form-who-is-this-trip-for');
  if (ms_centralwest_form_who_is_this_trip_for) {
    gsap.from('#ms-centralwest-form-who-is-this-trip-for input, #ms-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_required_documents = document.getElementById('ms-centralwest-list-required-documents');
  if (ms_centralwest_list_required_documents) {
    gsap.from('#ms-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_booking_process = document.getElementById('ms-centralwest-list-booking-process');
  if (ms_centralwest_list_booking_process) {
    gsap.from('#ms-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_timelines_deadlines = document.getElementById('ms-centralwest-section-timelines-deadlines');
  if (ms_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#ms-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_fees_costs = document.getElementById('ms-centralwest-section-fees-costs');
  if (ms_centralwest_section_fees_costs) {
    gsap.fromTo('#ms-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_risks_common_mistakes = document.getElementById('ms-centralwest-list-risks-common-mistakes');
  if (ms_centralwest_list_risks_common_mistakes) {
    gsap.from('#ms-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_diy_vs_professional_assistance = document.getElementById('ms-centralwest-section-diy-vs-professional-assistance');
  if (ms_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-centralwest-section-mato-grosso-do-sul-specific-context');
  if (ms_centralwest_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-centralwest-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_what_our_clients_say = document.getElementById('ms-centralwest-section-what-our-clients-say');
  if (ms_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#ms-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_frequently_asked_questions = document.getElementById('ms-centralwest-section-frequently-asked-questions');
  if (ms_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#ms-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_international_support = document.getElementById('ms-centralwest-section-international-support');
  if (ms_centralwest_section_international_support) {
    gsap.fromTo('#ms-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_our_credentials = document.getElementById('ms-centralwest-list-our-credentials');
  if (ms_centralwest_list_our_credentials) {
    gsap.from('#ms-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_list_related_services = document.getElementById('ms-centralwest-list-related-services');
  if (ms_centralwest_list_related_services) {
    gsap.from('#ms-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_youre_in_good_hands = document.getElementById('ms-centralwest-section-youre-in-good-hands');
  if (ms_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#ms-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_centralwest_section_21 = document.getElementById('ms-centralwest-section-21');
  if (ms_centralwest_section_21) {
    gsap.fromTo('#ms-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('ms-southeast-form-dynamic-southeast-cities-and-history');
  if (ms_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#ms-southeast-form-dynamic-southeast-cities-and-history input, #ms-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_quick_facts = document.getElementById('ms-southeast-list-quick-facts');
  if (ms_southeast_list_quick_facts) {
    gsap.from('#ms-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_common_challenges_applicants_face = document.getElementById('ms-southeast-list-common-challenges-applicants-face');
  if (ms_southeast_list_common_challenges_applicants_face) {
    gsap.from('#ms-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_how_we_solve_these_challenges = document.getElementById('ms-southeast-list-how-we-solve-these-challenges');
  if (ms_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#ms-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_trip_overview = document.getElementById('ms-southeast-section-trip-overview');
  if (ms_southeast_section_trip_overview) {
    gsap.fromTo('#ms-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_form_who_is_this_trip_for = document.getElementById('ms-southeast-form-who-is-this-trip-for');
  if (ms_southeast_form_who_is_this_trip_for) {
    gsap.from('#ms-southeast-form-who-is-this-trip-for input, #ms-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_required_documents = document.getElementById('ms-southeast-list-required-documents');
  if (ms_southeast_list_required_documents) {
    gsap.from('#ms-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_booking_process = document.getElementById('ms-southeast-list-booking-process');
  if (ms_southeast_list_booking_process) {
    gsap.from('#ms-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_timelines_deadlines = document.getElementById('ms-southeast-section-timelines-deadlines');
  if (ms_southeast_section_timelines_deadlines) {
    gsap.fromTo('#ms-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_fees_costs = document.getElementById('ms-southeast-section-fees-costs');
  if (ms_southeast_section_fees_costs) {
    gsap.fromTo('#ms-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_risks_common_mistakes = document.getElementById('ms-southeast-list-risks-common-mistakes');
  if (ms_southeast_list_risks_common_mistakes) {
    gsap.from('#ms-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_diy_vs_professional_assistance = document.getElementById('ms-southeast-section-diy-vs-professional-assistance');
  if (ms_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-southeast-section-mato-grosso-do-sul-specific-context');
  if (ms_southeast_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-southeast-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_what_our_clients_say = document.getElementById('ms-southeast-section-what-our-clients-say');
  if (ms_southeast_section_what_our_clients_say) {
    gsap.fromTo('#ms-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_frequently_asked_questions = document.getElementById('ms-southeast-section-frequently-asked-questions');
  if (ms_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#ms-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_international_support = document.getElementById('ms-southeast-section-international-support');
  if (ms_southeast_section_international_support) {
    gsap.fromTo('#ms-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_our_credentials = document.getElementById('ms-southeast-list-our-credentials');
  if (ms_southeast_list_our_credentials) {
    gsap.from('#ms-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_list_related_services = document.getElementById('ms-southeast-list-related-services');
  if (ms_southeast_list_related_services) {
    gsap.from('#ms-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_youre_in_good_hands = document.getElementById('ms-southeast-section-youre-in-good-hands');
  if (ms_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#ms-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_southeast_section_21 = document.getElementById('ms-southeast-section-21');
  if (ms_southeast_section_21) {
    gsap.fromTo('#ms-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('ms-northeast-form-vibrant-northeast-beaches-and-culture');
  if (ms_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#ms-northeast-form-vibrant-northeast-beaches-and-culture input, #ms-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_quick_facts = document.getElementById('ms-northeast-list-quick-facts');
  if (ms_northeast_list_quick_facts) {
    gsap.from('#ms-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_common_challenges_applicants_face = document.getElementById('ms-northeast-list-common-challenges-applicants-face');
  if (ms_northeast_list_common_challenges_applicants_face) {
    gsap.from('#ms-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_how_we_solve_these_challenges = document.getElementById('ms-northeast-list-how-we-solve-these-challenges');
  if (ms_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#ms-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_trip_overview = document.getElementById('ms-northeast-section-trip-overview');
  if (ms_northeast_section_trip_overview) {
    gsap.fromTo('#ms-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_form_who_is_this_trip_for = document.getElementById('ms-northeast-form-who-is-this-trip-for');
  if (ms_northeast_form_who_is_this_trip_for) {
    gsap.from('#ms-northeast-form-who-is-this-trip-for input, #ms-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_required_documents = document.getElementById('ms-northeast-list-required-documents');
  if (ms_northeast_list_required_documents) {
    gsap.from('#ms-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_booking_process = document.getElementById('ms-northeast-list-booking-process');
  if (ms_northeast_list_booking_process) {
    gsap.from('#ms-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_timelines_deadlines = document.getElementById('ms-northeast-section-timelines-deadlines');
  if (ms_northeast_section_timelines_deadlines) {
    gsap.fromTo('#ms-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_fees_costs = document.getElementById('ms-northeast-section-fees-costs');
  if (ms_northeast_section_fees_costs) {
    gsap.fromTo('#ms-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_risks_common_mistakes = document.getElementById('ms-northeast-list-risks-common-mistakes');
  if (ms_northeast_list_risks_common_mistakes) {
    gsap.from('#ms-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_diy_vs_professional_assistance = document.getElementById('ms-northeast-section-diy-vs-professional-assistance');
  if (ms_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-northeast-section-mato-grosso-do-sul-specific-context');
  if (ms_northeast_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-northeast-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_what_our_clients_say = document.getElementById('ms-northeast-section-what-our-clients-say');
  if (ms_northeast_section_what_our_clients_say) {
    gsap.fromTo('#ms-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_frequently_asked_questions = document.getElementById('ms-northeast-section-frequently-asked-questions');
  if (ms_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#ms-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_international_support = document.getElementById('ms-northeast-section-international-support');
  if (ms_northeast_section_international_support) {
    gsap.fromTo('#ms-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_our_credentials = document.getElementById('ms-northeast-list-our-credentials');
  if (ms_northeast_list_our_credentials) {
    gsap.from('#ms-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_list_related_services = document.getElementById('ms-northeast-list-related-services');
  if (ms_northeast_list_related_services) {
    gsap.from('#ms-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_youre_in_good_hands = document.getElementById('ms-northeast-section-youre-in-good-hands');
  if (ms_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#ms-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_northeast_section_21 = document.getElementById('ms-northeast-section-21');
  if (ms_northeast_section_21) {
    gsap.fromTo('#ms-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_form_charming_south_wine_and_gauchos = document.getElementById('ms-south-form-charming-south-wine-and-gauchos');
  if (ms_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#ms-south-form-charming-south-wine-and-gauchos input, #ms-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_quick_facts = document.getElementById('ms-south-list-quick-facts');
  if (ms_south_list_quick_facts) {
    gsap.from('#ms-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_common_challenges_applicants_face = document.getElementById('ms-south-list-common-challenges-applicants-face');
  if (ms_south_list_common_challenges_applicants_face) {
    gsap.from('#ms-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_how_we_solve_these_challenges = document.getElementById('ms-south-list-how-we-solve-these-challenges');
  if (ms_south_list_how_we_solve_these_challenges) {
    gsap.from('#ms-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_trip_overview = document.getElementById('ms-south-section-trip-overview');
  if (ms_south_section_trip_overview) {
    gsap.fromTo('#ms-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_form_who_is_this_trip_for = document.getElementById('ms-south-form-who-is-this-trip-for');
  if (ms_south_form_who_is_this_trip_for) {
    gsap.from('#ms-south-form-who-is-this-trip-for input, #ms-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_required_documents = document.getElementById('ms-south-list-required-documents');
  if (ms_south_list_required_documents) {
    gsap.from('#ms-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_booking_process = document.getElementById('ms-south-list-booking-process');
  if (ms_south_list_booking_process) {
    gsap.from('#ms-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_timelines_deadlines = document.getElementById('ms-south-section-timelines-deadlines');
  if (ms_south_section_timelines_deadlines) {
    gsap.fromTo('#ms-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_fees_costs = document.getElementById('ms-south-section-fees-costs');
  if (ms_south_section_fees_costs) {
    gsap.fromTo('#ms-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_risks_common_mistakes = document.getElementById('ms-south-list-risks-common-mistakes');
  if (ms_south_list_risks_common_mistakes) {
    gsap.from('#ms-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_diy_vs_professional_assistance = document.getElementById('ms-south-section-diy-vs-professional-assistance');
  if (ms_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#ms-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_mato_grosso_do_sul_specific_context = document.getElementById('ms-south-section-mato-grosso-do-sul-specific-context');
  if (ms_south_section_mato_grosso_do_sul_specific_context) {
    gsap.fromTo('#ms-south-section-mato-grosso-do-sul-specific-context', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_what_our_clients_say = document.getElementById('ms-south-section-what-our-clients-say');
  if (ms_south_section_what_our_clients_say) {
    gsap.fromTo('#ms-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_frequently_asked_questions = document.getElementById('ms-south-section-frequently-asked-questions');
  if (ms_south_section_frequently_asked_questions) {
    gsap.fromTo('#ms-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_international_support = document.getElementById('ms-south-section-international-support');
  if (ms_south_section_international_support) {
    gsap.fromTo('#ms-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_our_credentials = document.getElementById('ms-south-list-our-credentials');
  if (ms_south_list_our_credentials) {
    gsap.from('#ms-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_list_related_services = document.getElementById('ms-south-list-related-services');
  if (ms_south_list_related_services) {
    gsap.from('#ms-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_youre_in_good_hands = document.getElementById('ms-south-section-youre-in-good-hands');
  if (ms_south_section_youre_in_good_hands) {
    gsap.fromTo('#ms-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

  const ms_south_section_21 = document.getElementById('ms-south-section-21');
  if (ms_south_section_21) {
    gsap.fromTo('#ms-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.5, ease: 'bounce.in'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
