
export const Header = () => {
    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center me-auto me-lg-0">
                        <img src="./src/assets/img/logo-1.png" alt="" />
                        <h1>La Florida</h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                        <li><a href="#hero">Inicio</a></li>
                        <li><a href="#about">Nosotros</a></li>
                        <li><a href="#menu">Menu</a></li>
                        <li><a href="#events">Events</a></li>
                        <li><a href="#chefs">Chefs</a></li>
                        <li><a href="#gallery">Gallery</a></li>
                        
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>

                    <a className="btn-book-a-table" href="#book-a-table">Book a Table</a>
                    <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
                    <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>

                </div>
        </header>
    )
}
