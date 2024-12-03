//DOM Elements
const toggleNav = document.getElementById('toggle-nav');
const totalContainer = document.querySelector('.total-container');
const close     = document.getElementById('close');
const open      = document.getElementById('open');
const modalOne  = document.getElementById('modal-one');
const body      = document.body;


//Toggle the Nav Bar:
toggleNav.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
  totalContainer.classList.toggle('nav-open');
  
})