import VueSelector from './SelectDialog.vue'

const selector = {}
selector.install = function (Vue) {
  Vue.component('vue-selector', VueSelector)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(selector)
}

export default selector
