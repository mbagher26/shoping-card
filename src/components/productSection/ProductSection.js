import './ProductSection.css'
const Productsection = ({ product }) => {

    let { title, infos } = product

    return (
        <>


            <div>
                <h1 className='mt-5'>{title}</h1>
                <div className='product-info'>
                    {infos && infos.map(info => (
                        <div className='card p-3' >
                            <img src={info.img} />
                            <div className="card-body">
                                <h5 className="card-title">{info.title}</h5>
                                <p className="card-text">{info.price}</p>
                                <a href="#" className="btn btn-danger">Add To Cart</a>
                                <a href="#" className="btn btn-outline-dark mt-2 mb-2 text-capitalize">More information</a>
                                <p >Number:{info.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </>
    );
}

export default Productsection;