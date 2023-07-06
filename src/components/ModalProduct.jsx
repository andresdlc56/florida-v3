
export const ModalProduct = ({ item }) => {
    return (
        <div key={ item.id } className="modal fade" id={`${ item.alias }`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">{ item.nombre }</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                                    
                                        <div className="modal-body">
                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-md-6 text-center">
                                                        <img src={`/img/menu/${ item.img }`} className="img-fluid" alt="..."></img>
                                                    </div>
                                                    <div className="col-md-6 ms-auto border-start">
                                                        <p>
                                                                <span id="texto">
                                                                    { item.descrip }
                                                                </span>
                                                                
                                                        </p>

                                                        <div className="info-item  d-flex align-items-center">
                                                            <i className="icon bi bi-eyedropper flex-shrink-0"></i>
                                                            <div>
                                                                <b style={{ fontSize: "14px" }}>Ingredientes</b>
                                                                <div style={{ fontSize: "14px" }}>
                                                                    { item.ingredientes }
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                        {
                                                            (item.premios) 
                                                            && (
                                                                item.premios.map(premio => (
                                                                    <div className="info-item  d-flex align-items-center">
                                                                        <i className="icon bi bi-trophy flex-shrink-0"></i>
                                                                        <div>
                                                                            <b style={{ fontSize: "12px" }}>{ premio }</b>   
                                                                        </div>
                                                                    </div>
                                                                ))

                                                                
                                                            )
                                                        }
                                                        
            
                                                        <hr />
            
                                                        <table className="table table-bordered mt-5">
                                                                
                                                                <tbody>
                                                                    <tr>
                                                                        <th scope="row">Capacidad:</th>
                                                                        <td>{ item.capacidad } Lts.</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Xº GL:</th>
                                                                        <td>{ item.grados }º</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th scope="row">Empaque:</th>
                                                                        <td>{ item.empaque } Bot.</td>
                                                                    </tr>
                                                                </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                </div>
            </div>
        </div>
    )
}
