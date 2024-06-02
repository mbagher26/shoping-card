import { DataContext } from '../../Context/DataContext';
import './ProductSection.css'
import { useContext } from 'react';

const Productsection = () => {

    const ContextData = useContext(DataContext)
    const allProducts = ContextData.allProducts
    
    return (
        <>
        {allProducts && allProducts.map(product => (
            <div>
                <h1 className='mt-5'>{product.title}</h1>
                <div className='product-info'>
                    {product.infos && product.infos.map(info => (
                        <div className='card p-3' >
                            <img src={info.img} />
                            <div className="card-body">
                                <h5 className="card-title">{info.title}</h5>
                                <p className="card-text">{info.price}</p>
                                <a href="javascript:void(0)" onClick={() => {ContextData.setShowToast(true)
                                    setTimeout(() => {
                                        ContextData.setShowToast(false)

                                    }
                                        ,3000)
                                }}
                                 className="btn btn-danger">Add To Cart</a>
                                <a href="#" className="btn btn-outline-dark mt-2 mb-2 text-capitalize">More information</a>
                                <p >Number:{info.count}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        ))}

        </>
    );
}

export default Productsection;