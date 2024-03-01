// Burger menu 
const openMenuBtn = document.querySelector('.header__nav-btn')
const closeMenuBtn = document.querySelector('.header__nav-close')
const menu = document.querySelector('.header__nav')
const menuLinks = document.querySelectorAll('.header__nav-item')

const openMenu = () => {
    menu.classList.add('header__nav--active')
}

const closeMenu = () => {
    menu.classList.remove('header__nav--active')
}

openMenuBtn.addEventListener('click', openMenu)
closeMenuBtn.addEventListener('click', closeMenu)

// Close burger menu by clicking a link 
menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu)
})


// Smooth scroll to anchors 
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

// Smooth scroll 
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


// Horizontal scroll 
const slider = document.querySelector('.slider__container')

let timeLine = gsap.timeline({
  defaults: {
    ease: 'none'
  },
  scrollTrigger: {
    trigger: slider,
    pin: true,
    scrub: 2,
    end: () => '+=' + slider.offsetWidth
  }
})

timeLine.to(slider, {
  xPercent: -66
})


// Fixed header 
const header = document.querySelector('.js-header')
const headerH = document.querySelector('.js-header').clientHeight

document.onscroll = function () {
  let scroll = window.scrollY

  if(scroll > headerH + 1300) {
    header.classList.add('fixed')
    document.body.style.paddingTop = headerH + 'px'
  } else {
    header.classList.remove('fixed')
    document.body.removeAttribute('style')
  }
}


// Hero scroll animation 
gsap.to('.hero__image', {
  scrollTrigger: {
    trigger: '.section__hero',
    start: 'top top',
    scrub: true,
  },
  scale: 1.2,
})


// Seven samurai image animation 
gsap.to('.scale__animation-img', {
  scale: 1.6,
  duration: 1,
  scrollTrigger: {
      trigger: '.scale__animation-container',
      start: 'center center',
      end: 'bottom center',
      scrub: true,
      pin: true,
      anticipatePin: 1
  }
});
