// The active locale
const locale = "es-la";

// We can have as many locales here as we want, 
// and use any locales we want. We have English
// and Spanish as locales here as examples.
const translations = {
  // English translations
  "en": {
    "translation-test": "english",
    "app-title": "My Appy Apperson",
    "lead": "Welcome to my little spot on the interwebs!",
  },

  // Spanish translations
  "es-la": {
    "translation-test": "en espanol",
    "app-title": "Hola",
    "lead": "Test",
  },
};

// When the page content is ready...
document.addEventListener("DOMContentLoaded", () => {
  document
    // Find all elements that have the key attribute
    .querySelectorAll("[data-i18n-key]")
    .forEach(translateElement);
});

// Replace the inner text of the given HTML element
// with the translation in the active locale,
// corresponding to the element's data-i18n-key
function translateElement(element) {
  const key = element.getAttribute("data-i18n-key");
  const translation = translations[locale][key];
  element.innerText = translation;
}