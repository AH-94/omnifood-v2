class NavLinks {
    constructor() {
        this.pageLinks = document.querySelectorAll('a');
        this.menuContent = document.querySelector('.main-nav');
        this.menuBtn = document.querySelector('.btn--main-nav');
        this.events();
    }

    events() {
        this.pageLinks.forEach(link => link.addEventListener('click', (e) => this.handleClick(e)));
    }

    handleClick(e) {
        e.preventDefault();

        const href = e.target.getAttribute('href');

        if (href == '#') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }

        if (href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'});
        }

        if (e.target.classList.contains('main-nav__link')) {
            this.menuContent.classList.remove('main-nav--open');
            this.menuBtn.classList.remove('btn--main-nav--show-menu');
        }
    }
}

export default NavLinks;