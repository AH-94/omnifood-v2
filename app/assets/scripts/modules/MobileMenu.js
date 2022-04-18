class MobileMenu {
    constructor() {
        this.menuBtn = document.querySelector('.btn--main-nav');
        this.menuContent = document.querySelector('.main-nav');
        this.events();
    }

    events() {
        this.menuBtn.addEventListener('click', () => this.toggleMenu());
    }

    toggleMenu() {
        this.menuContent.classList.toggle('main-nav--open');
        this.menuBtn.classList.toggle('btn--main-nav--show-menu');
    }
}

export default MobileMenu;