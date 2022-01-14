import Vue from 'vue/dist/vue.esm.js'
import App from '@/App'
new Vue({
  el: '#app',
  comments:{
    App,
},
  template:'<App />'
})

// new Vue({
//     el: '#app',
//     render: h => h(App)
// })