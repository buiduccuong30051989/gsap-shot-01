import './import/modules';
import './import/components';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('html');
  if ('themePreference' in localStorage) {
    const mode = localStorage.themePreference;
    root.classList.add(mode);
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.classList.add('dark');
  }

  const btn = document.querySelector('.js-toggle-dark-mode');
  if (btn) {
    btn.addEventListener('click', function () {
      root.classList.toggle('dark');
      if (root.classList.contains('dark')) {
        localStorage.setItem('themePreference', 'dark');
      } else {
        localStorage.setItem('themePreference', 'light');
      }
    });
  }
});
