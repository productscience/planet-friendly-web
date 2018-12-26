/* global docCookies */

function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    console.log('page loaded')
    document.addEventListener('DOMContentLoaded', fn)
  }
}

function main () {
  let hideCookies = docCookies.getItem('hideBanner')
  let banner = document.querySelector('.not-done-yet')

  if (hideCookies) { dismissBanner() }

  if (banner) {
    banner.querySelector('.dismiss').onclick = dismissBanner
  }
}

function dismissBanner () {
  docCookies.setItem('hideBanner', true)
  let banner = document.querySelector('.not-done-yet')
  if (banner) {
    banner.parentNode.removeChild(banner)
  }
}

ready(main)
