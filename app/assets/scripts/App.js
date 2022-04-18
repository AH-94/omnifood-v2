
import '../styles/styles.css';

import GenerateDate from './modules/GenerateDate';
import MobileMenu from './modules/MobileMenu';
import NavLinks from './modules/NavLinks';

new GenerateDate();
new MobileMenu();
new NavLinks();


if (module.hot) {
    module.hot.accept();
}