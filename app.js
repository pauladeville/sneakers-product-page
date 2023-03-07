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
let minis = document.querySelectorAll('.gallery-mini img');
let index = 0;
for(mini of minis){
  // mini.addEventListener('click', (event) => {
  //   let string = event.target.src;
  //   let newSrc = string.replace('-thumbnail', '')
  //   mainImg.src = newSrc;
  // })

};
let next = document.querySelector('.arrow-next');
let previous = document.querySelector('.arrow-previous');
next.addEventListener('click', () => {
  console.log(mains.length -1);
  console.log(mains);
  

  if(index <= mains.length-1) {
    mains[index].classList.add('hidden');
    index++;
    mains[index].classList.remove('hidden');  
    console.log(index);
  } else {
    console.log('stop')
  }
});