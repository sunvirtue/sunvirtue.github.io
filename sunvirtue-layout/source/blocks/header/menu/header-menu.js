export default {
  init() {
    document.querySelector('.wrp').onclick = toggleMenu;
    document.querySelectorAll('.wrp')[1].onclick = toggleMenu2;

    function toggleMenu() {
      if (document.querySelector('.wrp')) {
        document.querySelector('.hamburger').classList.toggle('hamburger_close');
        document.querySelector('.header__main').classList.toggle('header__main_menu');
        document.querySelector('.logo').classList.toggle('logo_hide');
        document.querySelector('.box').classList.toggle('box_hide');
        document.querySelector('.box__wrapper').classList.toggle('box__wrapper_show');
      }
    }

    function toggleMenu2() {
      if (document.querySelectorAll('.wrp')[1]) {
        document.querySelectorAll('.hamburger')[1].classList.toggle('hamburger_close');
        //     document.querySelectorAll('.header__main')[1].classList.toggle('header__main_menu');
        //     document.querySelectorAll('.logo')[1].classList.toggle('logo_hide');
        //     document.querySelectorAll('.box')[1].classList.toggle('box_hide');
        //     document.querySelectorAll('.box__wrapper')[1].classList.toggle('box__wrapper_show');
      }
    }
  },
};
