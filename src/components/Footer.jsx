
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
                            FRC9+V2W Licoreria La Florida <br />
                            Avenida Las Palomas, Cumaná 6101, Sucre <br />
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-links d-flex">
                        <i className="bi bi-telephone icon"></i>
                        <div>
                            <h4>Reservations</h4>
                            <p>
                                <strong>Phone:</strong> +58 212 7714339<br />
                                <strong>Email:</strong> info@example.com<br />
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
                            <a href="https://twitter.com/laflorida_ve?lang=es" target="_blank" className="twitter"><i className="bi bi-twitter"></i></a>
                            <a href="https://es-es.facebook.com/LaFloridaVenezuela/" target="_blank" className="facebook"><i className="bi bi-facebook"></i></a>
                            <a href="https://www.instagram.com/licorerialaflorida/?hl=es" target="_blank" className="instagram"><i className="bi bi-instagram"></i></a>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span></span></strong>. Licoreria La Florida
                </div>
            </div>
        </footer>
    )
}
