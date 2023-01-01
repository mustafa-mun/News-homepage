const rightBar = document.getElementById('right-bar');
const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close')

menuOpen.addEventListener('click',() => {
  rightBar.classList.toggle('hidden');
})

menuClose.addEventListener('click', () => {
  rightBar.classList.toggle('hidden');
})



