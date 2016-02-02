import I18n from 'react-native-i18n';
I18n.fallbacks = true;
I18n.translations = {
  en: {
    categories: 'Categories',
    splash: 'Bienvenido'
  },
  es: {
    categories: 'Categorias',
    splash: 'Welcome'
  }
};
const i18n = I18n;
export default i18n;
