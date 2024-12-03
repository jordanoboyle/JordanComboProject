//DOM Elements
const toggleNav = document.getElementById('toggle-nav');
const close     = document.getElementById('close');
const open      = document.getElementById('open');
const modalOne  = document.getElementById('modal-one');


//Toggle the Nav Bar:
toggleNav.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
})