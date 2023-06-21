
export const Gallery = () => {
    return (

        <section id="gallery" className="gallery section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Fabrica</h2>
                    <p>Revisa <span>Nuestra Fabrica</span></p>
                </div>

                <div className="row">
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded"
                            data-ripple-color="light"
                        >
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img
                                    src="/img/fabrica/uno.JPG"
                                    className="w-100"
                                />
                            </a>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded"
                            data-ripple-color="light"
                        >
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal-2">
                                <img
                                    src="/img/fabrica/dos.JPG"
                                    className="w-100"
                                />
                            </a>
                        </div>
                    </div> 

                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded"
                            data-ripple-color="light"
                        >
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal-3">
                                <img
                                    src="/img/fabrica/cinco.JPG"
                                    className="w-100"
                                />
                            </a>
                        </div>
                    </div> 
                     
                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                            className="bg-image hover-overlay ripple shadow-1-strong rounded"
                            data-ripple-color="light"
                        >
                            <a href="#!" data-bs-toggle="modal" data-bs-target="#exampleModal-4">
                                <img
                                    src="/img/fabrica/ocho.JPG"
                                    className="w-100"
                                />
                            </a>
                        </div>
                    </div> 
                </div>
                  
                {/* Modal 1 */}
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src="/img/fabrica/uno.JPG"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Modal 2 */}
                <div className="modal fade" id="exampleModal-2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src="/img/fabrica/dos.JPG"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 3 */}
                <div className="modal fade" id="exampleModal-3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src="/img/fabrica/cinco.JPG"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Modal 4 */}
                <div className="modal fade" id="exampleModal-4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src="/img/fabrica/ocho.JPG"
                                    className="w-100"
                                />
                            </div>
                        </div>
                    </div>
                </div>
   
            </div>
        </section>
    )
}
