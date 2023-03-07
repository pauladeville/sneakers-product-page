//MENU HAMBURGER
let menu = document.querySelector('#hamburger-menu');
let openMenu = document.querySelector('#hamburger-open');
let closeMenu = document.querySelector('#hamburger-close');
openMenu.addEventListener('click', () => {
  menu.classList.add('open');
});
closeMenu.addEventListener('click', () => {
  menu.classList.remove('open');
});

//IMAGE GALLERY
let mains = document.querySelectorAll('.main-img');
let index = 0;
function changeMain(n) {
  mains[index].classList.add('hidden');
  index = n;
  mains[index].classList.remove('hidden');  
}
let next = document.querySelector('.arrow-next');
let previous = document.querySelector('.arrow-previous');
next.addEventListener('click', () => {
  if(index < (mains.length -1)) {
    mains[index].classList.add('hidden');
    index++;
    mains[index].classList.remove('hidden');  
  } else {
    mains[index].classList.add('hidden');
    index = 0;
    mains[index].classList.remove('hidden');  
  }
});
previous.addEventListener('click', () => {
  if(index != 0) {
    mains[index].classList.add('hidden');
    index--;
    mains[index].classList.remove('hidden');  
  } else {
    mains[index].classList.add('hidden');
    index = mains.length -1;
    mains[index].classList.remove('hidden');  
  }
});