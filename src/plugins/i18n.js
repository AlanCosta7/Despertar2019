import messages from 'src/i18n'
import VueI18n from 'vue-i18n'

export default ({ app, Vue }) => {
  Vue.use(VueI18n)

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: 'pt-br',
    fallbackLocale: 'en-us',
    messages
  })
}
