import { Link } from "react-router-dom";

export const Header = () => {

    /**
   * Navbar links active state on scroll
   */
    let navbarlinks = document.querySelectorAll('#navbar a');

    function navbarlinksActive() {
        navbarlinks.forEach(navbarlink => {

        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        let position = window.scrollY + 200;

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active');
        } else {
            navbarlink.classList.remove('active');
        }
        })
    }
    window.addEventListener('load', navbarlinksActive);
    document.addEventListener('scroll', navbarlinksActive);

    /**
     * Mobile nav toggle
     */
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
        el.addEventListener('click', function(event) {
        console.log('click');
        event.preventDefault();
        mobileNavToogle();
        })
    });

    function mobileNavToogle() {
        document.querySelector('body').classList.toggle('mobile-nav-active');
        mobileNavShow.classList.toggle('d-none');
        mobileNavHide.classList.toggle('d-none');
    }

    /**
     * Hide mobile nav on same-page/hash links
     */
    document.querySelectorAll('#navbar a').forEach(navbarlink => {

        if (!navbarlink.hash) return;

        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        navbarlink.addEventListener('click', () => {
        if (document.querySelector('.mobile-nav-active')) {
            mobileNavToogle();
        }
        });

    });

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <Link to="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                        <img src="/img/LOGO-1.png" alt="" />
                        <h1>La Florida</h1>
                    </Link>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="#hero">Inicio</a></li>
                            <li><a href="#about">Nosotros</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Galeria</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>

                    
                    <i onClick={ mobileNavToogle } className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
        </header>
    )
}
