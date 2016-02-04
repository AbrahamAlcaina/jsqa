import I18n from 'react-native-i18n';
I18n.fallbacks = true;
I18n.translations = {
  en: {
    categories: 'Categories',
    splash: 'Welcome',
    test: 'Test',
    bookmark: 'Bookmark',
    stats: 'Stats'
  },
  es: {
    categories: 'Categorias',
    splash: 'Bienvenido',
    test: 'Examen',
    bookmark: 'Seguir',
    stats: 'Estadísticas'
  }
};
const i18n = I18n;
export default i18n;
