
export const Products = () => {
    return (
        <section id="menu" className="menu">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Nuestros Productos</h2>
                    <p>Revisa <span>Nuestro Menu</span></p>
                </div>

                <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

                    <li className="nav-item">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-starters">
                            <h4>Dulces</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-breakfast">
                            <h4>Secos</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-lunch">
                            <h4>Espirituosas</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-dinner">
                            <h4>Aguardientes</h4>
                        </a>
                    </li>

                </ul>

                <div className="tab-content" data-aos="fade-up" data-aos-delay="300">
                    
                    {/* Menu Dulces */}
                    <div className="tab-pane fade active show" id="menu-starters">

                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Dulces</h3>
                        </div>

                        <div className="row gy-5">

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/dulces/anis.png" className="glightbox">
                                    <img src="./src/assets/img/menu/dulces/anis.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Anis el Pilar</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/dulces/canela.png" className="glightbox">
                                    <img src="./src/assets/img/menu/dulces/canela.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Canela Lider</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/dulces/ponsigue-lider.png" className="glightbox">
                                    <img src="./src/assets/img/menu/dulces/ponsigue-lider.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Ponsigue Lider</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/dulces/ponsigue-cumanes.png" className="glightbox">
                                    <img src="./src/assets/img/menu/dulces/ponsigue-cumanes.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Posigue Cumanés</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                        </div>
                    </div>

                    {/* Menu Secos */}
                    <div className="tab-pane fade" id="menu-breakfast">

                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Secos</h3>
                        </div>

                        <div className="row gy-5">

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/secos/legend.png" className="glightbox">
                                    <img src="./src/assets/img/menu/secos/legend.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Triple AAA Legend</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/secos/triple-aaa.png" className="glightbox">
                                    <img src="./src/assets/img/menu/secos/triple-aaa.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Triple AAA Blended</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/secos/tres-coronas.png" className="glightbox">
                                    <img src="./src/assets/img/menu/secos/tres-coronas.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Tres Coronas</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="assets/img/menu/menu-item-4.png" className="glightbox"><img src="assets/img/menu/menu-item-4.png" className="menu-img img-fluid" alt="" /></a>
                                <h4>Triple Filtrado</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="assets/img/menu/menu-item-5.png" className="glightbox"><img src="assets/img/menu/menu-item-5.png" className="menu-img img-fluid" alt="" /></a>
                                <h4>Royal Blend</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                        </div>
                    </div>

                    {/* Menu Espirituosas */}
                    <div className="tab-pane fade" id="menu-lunch">

                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Espirituosas</h3>
                        </div>

                        <div className="row gy-5">

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/espirituosas/rumba.png" className="glightbox">
                                    <img src="./src/assets/img/menu/espirituosas/rumba.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Rumba Florida</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/espirituosas/florida-rojo.png" className="glightbox">
                                    <img src="./src/assets/img/menu/espirituosas/florida-rojo.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Florida Rojo</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/espirituosas/florida-blanco.png" className="glightbox">
                                    <img src="./src/assets/img/menu/espirituosas/florida-blanco.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Florida Blanco</h4>
                                <p className="ingredients">
                                Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/espirituosas/ry-blanco.png" className="glightbox">
                                    <img src="./src/assets/img/menu/espirituosas/ry-blanco.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>RY Rojo</h4>
                                <p className="ingredients">
                                Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/espirituosas/ry-blanco.png" className="glightbox">
                                    <img src="./src/assets/img/menu/espirituosas/ry-blanco.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>RY Blanco</h4>
                                <p className="ingredients">
                                Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/espirituosas/pajarito.png" className="glightbox">
                                    <img src="./src/assets/img/menu/espirituosas/pajarito.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Pajarito</h4>
                                <p className="ingredients">
                                Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/espirituosas/pajarito.png" className="glightbox">
                                    <img src="./src/assets/img/menu/espirituosas/pajarito.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Potro</h4>
                                <p className="ingredients">
                                Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                        </div>
                    </div>
                    
                    {/* Menu Aguardientes */}
                    <div className="tab-pane fade" id="menu-dinner">

                        <div className="tab-header text-center">
                            <p>Menu</p>
                            <h3>Aguardientes</h3>
                        </div>

                        <div className="row gy-5">

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/aguardientes/coquito.png" className="glightbox">
                                    <img src="./src/assets/img/menu/aguardientes/coquito.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Coquito</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/aguardientes/coquito.png" className="glightbox">
                                    <img src="./src/assets/img/menu/aguardientes/coquito.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Platino</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/aguardientes/coquito.png" className="glightbox">
                                    <img src="./src/assets/img/menu/aguardientes/coquito.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Aisland Fresa</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/aguardientes/coquito.png" className="glightbox">
                                    <img src="./src/assets/img/menu/aguardientes/coquito.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Aisland Guaraná-Ponsigué</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p className="price">
                                    $5.95
                                </p>*/}
                            </div>

                            <div className="col-lg-4 menu-item">
                                <a href="./src/assets/img/menu/aguardientes/coquito.png" className="glightbox">
                                    <img src="./src/assets/img/menu/aguardientes/coquito.png" className="menu-img img-fluid" alt="" />
                                </a>
                                <h4>Aisland Durazno-Guanábana</h4>
                                <p className="ingredients">
                                    Lorem, deren, trataro, filede, nerada
                                </p>
                                {/*<p class="price">
                                    $5.95
                                </p>*/}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
