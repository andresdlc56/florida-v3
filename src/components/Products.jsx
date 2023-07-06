import { productos } from "../data/productos";
import { ItemsProductos } from "./ItemsProductos";
import { ModalProduct } from "./ModalProduct";

const products = productos;

export const Products = () => {

    const anejos = products.filter((product) => (product.categoria === 'anejos'));
    const dulces = products.filter((product) => (product.categoria === 'dulces'));
    const secos = products.filter((product) => (product.categoria === 'secos'));
    const espirituosas = products.filter((product) => (product.categoria === 'espirituosas'));
    const aguardientes = products.filter((product) => (product.categoria === 'aguardientes'));

    return (
        <section id="menu" className="menu">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Nuestros Productos</h2>
                    <p>Revisa <span>Nuestro Catalogo</span></p>
                </div>

                <ul className="nav nav-tabs d-flex justify-content-center" data-aos="fade-up" data-aos-delay="200">

                    <li className="nav-item">
                        <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#menu-anejos">
                            <h4>Añejos</h4>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" data-bs-target="#menu-starters">
                            <h4>Cordiales</h4>
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
                    
                    {/* Menu Añejos */}
                    <div className="tab-pane fade active show" id="menu-anejos">

                        <div className="tab-header text-center">
                            <p>Productos</p>
                            <h3>Añejos</h3>
                        </div>

                        <div className="row gy-5">
                            {
                                anejos.map((item) => (
                                    <ItemsProductos key={ item.id } producto={ item } />
                                ))
                            }
                        </div>
                    </div>

                    {/* Menu Dulces */}
                    <div className="tab-pane fade" id="menu-starters">

                        <div className="tab-header text-center">
                            <p>Productos</p>
                            <h3>Cordiales</h3>
                        </div>

                        <div className="row gy-5">
                            {
                                dulces.map((item) => (
                                    <ItemsProductos key={ item.id } producto={ item } />
                                ))
                            }
                        </div>
                    </div>

                    {/* Menu Secos */}
                    <div className="tab-pane fade" id="menu-breakfast">

                        <div className="tab-header text-center">
                            <p>Productos</p>
                            <h3>Secos</h3>
                        </div>

                        <div className="row gy-5">

                            {
                                secos.map((item) => (
                                    <ItemsProductos key={ item.id } producto={ item } />
                                ))
                            }

                        </div>
                    </div>

                    {/* Menu Espirituosas */}
                    <div className="tab-pane fade" id="menu-lunch">

                        <div className="tab-header text-center">
                            <p>Productos</p>
                            <h3>Espirituosas</h3>
                        </div>

                        <div className="row gy-5">
                            {
                                espirituosas.map((item) => (
                                    <ItemsProductos key={ item.id } producto={ item } />
                                ))
                            }
                        </div>
                    </div>
                    
                    {/* Menu Aguardientes */}
                    <div className="tab-pane fade" id="menu-dinner">

                        <div className="tab-header text-center">
                            <p>Productos</p>
                            <h3>Aguardientes</h3>
                        </div>

                        <div className="row gy-5">
                            {
                                aguardientes.map((item) => (
                                    <ItemsProductos key={ item.id } producto={ item } />
                                ))
                            }
                        </div>
                    </div>
                </div>


                {/* Modals */}
                <div>
                    {
                        anejos.map((item) => (
                            <ModalProduct key={ item.id } item={ item } />
                        ))
                    }
                    
                    {
                        dulces.map((item) => (
                            <ModalProduct key={ item.id } item={ item } />
                        ))
                    }

                    {
                        secos.map((item) => (
                            <ModalProduct key={ item.id } item={ item } />
                        ))
                    }

                    {
                        espirituosas.map((item) => (
                            <ModalProduct key={ item.id } item={ item } />
                        ))
                    }

                    {
                        aguardientes.map((item) => (
                            <ModalProduct key={ item.id } item={ item } />
                        ))
                    }   
                </div>
            </div>
        </section>
    )
}
