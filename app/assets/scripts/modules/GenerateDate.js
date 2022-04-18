class GenerateDate {
    constructor() {
        this.yearEl = document.querySelector('.footer__copyright span');
        this.updateYear();
    }

    updateYear() {
        this.yearEl.textContent = new Date().getFullYear();
    }
}

export default GenerateDate;