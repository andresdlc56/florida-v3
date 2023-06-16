
export const ItemsProductos = ({ producto }) => {
    return (
        <div className="col-lg-4 menu-item">
            <a href="#!" data-bs-toggle="modal" data-bs-target={`#${ producto.alias }`} className="glightbox">
                <img src={`./src/assets/img/menu/${ producto.img }`} className="menu-img img-fluid" alt="" />
            </a>
            <h4>{ producto.nombre }</h4>
            <p className="ingredients">
                Lorem, deren, trataro, filede, nerada
            </p>
            {/*<p className="price">
                $5.95
            </p>*/}
        </div>  
    )
}
