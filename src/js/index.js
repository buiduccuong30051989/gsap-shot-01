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

document.addEventListener('DOMContentLoaded', () => {
  animateLogo();
  if (!isMobile()) {
    animateNav();
  }
  animateControl();
});
