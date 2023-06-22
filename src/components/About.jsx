
export const About = () => {
    return (
        <section id="about" className="about">
                    <div className="container" data-aos="fade-up">

                        <div className="section-header">
                            <h2>Sobre Nosotros</h2>
                            <p>Saber más <span>Sobre Nosotros</span></p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-7 position-relative about-img" style={{ backgroundImage: "url(/img/Captura5.PNG)" }} data-aos="fade-up" wi data-aos-delay="150">
                               
                            </div>
                            <div className="col-lg-5 d-flex align-items-start" data-aos="fade-up" data-aos-delay="300">
                                <div className="content ps-0 ps-lg-5">
                                    <p className="fst-italic">
                                    Licorería La Florida, empresa dedicada a la elaboración, envejecimiento y envasado de bebidas alcohólicas, fue fundada en 1948 por 
                                    Don Rafael en la ciudad de Cumaná, primera ciudad erigida por los españoles en tierras americanas.
                                    </p>
                                    <ul>
                                        <li><i className="bi bi-check2-all"></i> La empresa es hoy por hoy una de las más representativas del estado Sucre, proyectando su imagen dentro y fuera de nuestras fronteras.</li>
                                        <li><i className="bi bi-check2-all"></i> La excelente calidad de sus productos la ha hecho merecedora de numerosos reconocimientos nacionales e internacionales.</li>
                                        <li><i className="bi bi-check2-all"></i> Licorería La Florida une hoy los más avanzados recursos tecnológicos, los cuales, junto a la mística de las personas que intervienen en el proceso, permiten obtener 
                                        productos de alta calidad e insuperable sabor y aroma.</li>
                                    </ul>

                                    <img src="/img/medallas/medalla-1.png" style={{ height: "170px" }} alt="" />
                                    <img src="/img/medallas/medalla-1.png" style={{ height: "170px" }} alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
    )
}
