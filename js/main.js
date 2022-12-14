const nav = document.querySelector('.nav');
const navBurger = document.querySelector('.nav__burger-bars');
const navItem = document.querySelectorAll('.nav__item');

const navBtn = document.querySelector('.nav__burger');
const navMenu = document.querySelector('.nav__menu');
const navMenuItem = document.querySelectorAll('.nav__menu-item');

const handleNav = () => {
    navMenu.classList.toggle('nav__menu--active')
    navBurger.classList.toggle('nav__burger-bars--dark');
    nav.classList.toggle('nav--white');


    navMenuItem.forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('nav__menu--active')
            navBurger.classList.remove('nav__burger-bars--dark');
            nav.classList.remove('nav--white');

        })
    })
   
}

navBtn.addEventListener('click', handleNav)


window.addEventListener('scroll', function() {
  if (window.scrollY >= 100) {
    nav.style.backgroundColor = '#fff';
    nav.style.color = '#252422';
    navBurger.style.backgroundColor = '#252422';
    navBurger.classList.add('nav__burger-bars--dark-scroll');
    
    for (const item of navItem) {
        item.style.color = '#252422';

        item.addEventListener('mouseover', function() {

            item.style.color = '#e79107';
          });

          item.addEventListener('mouseout', function() {
            item.style.color = '#252422';
          });
      }

      

  } else {
    nav.style.backgroundColor = 'transparent';
    nav.style.color = '#f0e9e9';
    navBurger.style.backgroundColor = '#f0e9e9';
    navBurger.classList.remove('nav__burger-bars--dark-scroll');


    
    for (const item of navItem) {
        item.style.color = '#f0e9e9';

        item.addEventListener('mouseover', function() {

            item.style.color = '#e79107';
          });

          item.addEventListener('mouseout', function() {
            item.style.color = '#f0e9e9';
          });
      }

  }
});


