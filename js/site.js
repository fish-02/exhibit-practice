// JavaScript 負責互動：按下按鈕時切換夜間閱讀。
const button = document.querySelector('#theme-toggle');

button.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';
  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';
});
