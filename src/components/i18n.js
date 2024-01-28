// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    // English translations here
                },
            },
            fr: {
                translation: {
                    // French translations here
                },
            },
            es: {
                translation: {
                    // Spanish translations here
                },
            },
        },
        lng: 'en', // Default language
        interpolation: {
            escapeValue: false,
        },
    });


// i18n.js
// ... (Previous content)

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    'Currency Converter': 'Currency Converter',
                    'Select Box 1': 'Select Box 1',
                    // ... Other English translations
                },
            },
            fr: {
                translation: {
                    'Currency Converter': 'Convertisseur de devises',
                    'Select Box 1': 'Boîte de sélection 1',
                    // ... Other French translations
                },
            },
            es: {
                translation: {
                    'Currency Converter': 'Conversor de moneda',
                    'Select Box 1': 'Caja de selección 1',
                    // ... Other Spanish translations
                },
            },
        },
        // ... (Rest of the configuration)
    });

export default i18n;
