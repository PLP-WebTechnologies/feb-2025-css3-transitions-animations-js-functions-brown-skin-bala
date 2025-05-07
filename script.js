// Select buttons
const animateButton = document.getElementById('animateButton');
const saveThemeButton = document.getElementById('saveThemeButton');

// Add animation on button click
animateButton.addEventListener('click', () => {
  animateButton.classList.add('animate');
  // Remove the animation class after it completes
  setTimeout(() => {
    animateButton.classList.remove('animate');
  }, 500);
});

// Save theme preference to localStorage
saveThemeButton.addEventListener('click', () => {
  const theme = 'dark'; // Example theme
  localStorage.setItem('theme', theme);
  alert(`Theme "${theme}" saved to localStorage!`);
});

// Retrieve theme preference on page load
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    alert(`Saved theme is: ${savedTheme}`);
  }
});