
export const Footer = () => {
    return (
        <footer id="footer" className="footer">

            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-3 col-md-6 d-flex">
                        <i className="bi bi-geo-alt icon"></i>
                        <div>
                            <h4>Dirección</h4>
                            <p>
                                Av. Las Palomas, Complejo Industrial RYQ <br />
                                Cumaná, Edo. Sucre - VE<br />
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-telephone icon"></i>
                        <div>
                            <h4>Contacto</h4>
                            <p>
                                <strong>Teléfono:</strong> +58 212 7714339<br />
                                <strong>Email:</strong> info@laflorida.com.ve<br />
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-clock icon"></i>
                        <div>
                            <h4>Horario de Atención</h4>
                            <p>
                                <strong>Lun-Vie: 7:30AM</strong> - 5:00PM<br />
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links">
                        <h4>Siguenos</h4>
                        <div className="social-links d-flex">
                            <a href="https://twitter.com/laflorida_ve?lang=es" className="twitter" target="_blank"><i className="bi bi-twitter"></i></a>
                            <a href="https://es-es.facebook.com/LaFloridaVenezuela/" className="facebook" target="_blank"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/lafloridalicoreria/?hl=es-la" className="instagram" target="_blank"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Licoreria La Florida</span></strong>. All Rights Reserved
                </div>
            </div>
        </footer>
    )
}
