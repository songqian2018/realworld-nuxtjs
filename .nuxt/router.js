import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8813eea0 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _32c4a836 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _255fcdba = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _9a55a63a = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _39108029 = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _9fb1a21a = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _ccc11fa0 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _8813eea0,
    children: [{
      path: "",
      component: _32c4a836,
      name: "home"
    }, {
      path: "/login",
      component: _255fcdba,
      name: "login"
    }, {
      path: "/register",
      component: _255fcdba,
      name: "register"
    }, {
      path: "/profile/:username/:tab",
      component: _9a55a63a,
      name: "profile"
    }, {
      path: "/settings",
      component: _39108029,
      name: "settings"
    }, {
      path: "/editor",
      component: _9fb1a21a,
      name: "editor"
    }, {
      path: "/update/:slug",
      component: _9fb1a21a,
      name: "update"
    }, {
      path: "/article/:slug",
      component: _ccc11fa0,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
