///Hamburger Menu ////

let hamburger = document.querySelector('.hamburger');
let navLinks = document.getElementById('nav-a-links');
let links = document.querySelectorAll('.links');



hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('hide');
  hamburger.classList.toggle('close');
});


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    navLinks.classList.toggle('hide');
  });
}

function toggleTitle(){
  let navLinks = document.getElementById('nav-a-links');
  let titleMenu = document.getElementById('title-menu');
  let displayTitle = navLinks.style.display;

  if(titleMenu.style.display =='none'){
    titleMenu.style.display='block';
  }
  else{
    titleMenu.style.display='none';
    
  }
}





