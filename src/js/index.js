import { gsap, Expo } from 'gsap';

function isMobile() {
  return 'ontouchstart' in document.documentElement;
}

function animateLogo() {
  const logoImg = document.getElementsByClassName('js-logo-img');
  const logoText = [...document.getElementsByClassName('js-logo-text')];

  gsap.from(logoImg, {
    opacity: 0,
    xPercent: 100,
    delay: 1,
  });

  logoText.forEach(function (item) {
    gsap.from(item, {
      opacity: 0,
      xPercent: -100,
      delay: 1,
    });
  });
}

function animateNav() {
  const el = '.js-nav-item';
  gsap.from(el, {
    opacity: 0,
    delay: 1,
    y: -10,
    x: -5,
    stagger: 0.1,
    ease: Expo.easeInOut,
    onComplete: function () {
      gsap.set(el, { clearProps: 'all' });
    },
  });
}

function animateControl() {
  gsap.from('.js-header-control', {
    opacity: 0,
    delay: 2,
    y: -10,
    x: -5,
    stagger: 0.1,
    ease: Expo.easeInOut,
  });
}

function animateCaption() {
  gsap.from('.js-caption', {
    opacity: 0,
    delay: 2,
    y: 30,
    stagger: 0.4,
    duration: 1.5,
    ease: Expo.easeInOut,
  });
}

const animateMenuItem = gsap.to('.js-nav-item-mobile', {
  opacity: 1,
  scale: 1,
  y: 0,
  paused: true,
  stagger: {
    amount: 0.5,
  },
});

const animateHeaderMenu = gsap.to('.js-header', {
  height: '100%',
  duration: 0.5,
  reversed: true,
});

document.addEventListener('DOMContentLoaded', () => {
  animateLogo();
  if (!isMobile()) {
    animateNav();
  }
  animateControl();
  animateCaption();

  const burger = document.querySelector('.js-btn-mobile-menu');
  const header = document.querySelector('.js-header');

  burger.onclick = function () {
    header.classList.toggle('menu-opened');
    animateHeaderMenu.reversed()
      ? animateHeaderMenu.play() && animateMenuItem.play()
      : animateHeaderMenu.reverse() && animateMenuItem.reverse();
  };
});
