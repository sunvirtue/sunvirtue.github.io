import TweenLite from 'gsap';

export default class ScrollTo {
  constructor(item) {
    const html = document.getElementsByTagName('html')[0];
    const header = document.querySelector('.header');
    const block = document.querySelector(`${item.getAttribute('data-anchor')}`);
    if (block) {
      const blockBox = block.getBoundingClientRect();
      let blockPos = blockBox.top + window.pageYOffset;
      if (window.innerWidth <= 1279) {
        blockPos -= header.offsetHeight;
      }
      TweenLite.to([document.body, html], 1, { scrollTop: blockPos });
    }
  }
}
