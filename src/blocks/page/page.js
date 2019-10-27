const $ = require('jquery')

$.fn.backgroundClip = function (params) {
  if (params !== undefined && params !== null) {
    let {
      transitionTime = 1000,
        images = [],
        wait = 1000,
        current = 0
    } = params
    for ( let i = 0; i < images.length; i++) {
      this.prepend(`<img src=${images[i]} style = 'display:none;' alt = ''/>`)
    } 
    
    this
      .css('background-image', `url(${images[current]})`)
      .css('-webkit-transition', `${transitionTime}ms ease-in-out`)
      .css('-moz-transition', `${transitionTime}ms ease-in-out`)
      .css('-ms-transition', `${transitionTime}ms ease-in-out`)
      .css('-o-transition', `${transitionTime}ms ease-in-out`)
      .css('transition', `${transitionTime}ms ease-in-out`)

    const update = () => {
      current = (current + 1) % images.length
      this.css('background-image', `url(${images[current]})`)
    }
    setInterval(update, wait);
    return this
  } else
    throw new Error('Expected Object, but get null or undefined')
}

$(document).ready(() => {
  $('.page__background_landing').backgroundClip({
    images: ['img/bg-landing-1.png', 'img/bg-landing-2.png', 'img/bg-landing-3.png'],
    transitionTime: 2000,
    wait: 10000
  })
})
