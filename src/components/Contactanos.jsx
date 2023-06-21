import { EmailForm } from "./EmailForm";

export const Contactanos = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Contacto</h2>
                    <p>Necesitas Ayuda? <span>Contactanos</span></p>
                </div>

                <div className="mb-3">
                    <iframe 
                        style={{ border: "0", width: "100%", height: "350px" }} 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.3602976673183!2d-64.18498612632868!3d10.472236964733655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c32719011a1684d%3A0x22158d2b18e8df61!2sLicoreria%20La%20Florida!5e0!3m2!1ses!2sve!4v1687374318804!5m2!1ses!2sve" 
                        frameBorder="0" 
                        allowFullScreen
                    >
                    </iframe>
                </div>

                

                <div className="row gy-4">

                    <div className="col-md-6">
                        <div className="info-item  d-flex align-items-center">
                            <i className="icon bi bi-map flex-shrink-0"></i>
                            <div>
                                <h3>Nuestra Direccion</h3>
                                <p>FRC9+V2W Licoreria La Florida, Avenida Las Palomas, Cumaná 6101, Sucre</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item d-flex align-items-center">
                            <i className="icon bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h3>Nuestro Email</h3>
                                <p>contact@example.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item  d-flex align-items-center">
                            <i className="icon bi bi-telephone flex-shrink-0"></i>
                            <div>
                                <h3>Llamanos</h3>
                                <p>+58 212 7714339</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="info-item  d-flex align-items-center">
                            <i className="icon bi bi-share flex-shrink-0"></i>
                            <div>
                                <h3>Horario de Atencion</h3>
                                <div>
                                    <strong>Lun-Vie:</strong> 7:30AM - 5:00PM;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <EmailForm />
            </div>
        </section>
    )
}
