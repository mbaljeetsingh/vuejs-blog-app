// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Blog from './components/Blog'
import Hello from './components/Hello'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

Vue.use(VueResource)
Vue.use(VueRouter)

Vue.filter('uppercase', function (value) {
  return value.toUpperCase()
})

const routes = [
  { path: '/', component: Blog },
  { path: '/hello', component: Hello }
]

const router = new VueRouter({
  mode: 'history',
  routes // short for routes: routes
})


/* eslint-disable no-new */
new Vue({
  router,
  template: `
  <div id="app">
   <nav class="navbar navbar-default">
    <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Blog App</a>
    </div>
    <ul class="nav navbar-nav">
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/hello">Hello</router-link></li>
    </ul>
    </div>
   </nav>

    <router-view></router-view>
  </div>
  `
}).$mount('#app')
