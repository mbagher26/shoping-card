import { DataContext } from '../../Context/DataContext';
import './ProductSection.css'
import { useContext } from 'react';

const Productsection = () => {

    const ContextData = useContext(DataContext)
    const allProducts = ContextData.allProducts

    return (
        <>
            {allProducts && allProducts.map(product => (
                <div key={product.id}>
                    <h1 className='mt-5'>{product.title}</h1>
                    <div className='product-info'>
                        {product.infos && product.infos.map(info => (
                            <div key={info.id} className='card p-3' >
                                <img src={info.img} />
                                <div className="card-body">
                                    <h5 className="card-title">{info.title}</h5>
                                    <p className="card-text">{info.price}</p>
                                    <a href="#!" onClick={() => {
                                        ContextData.setShowToast(true)
                                        setTimeout(() => {
                                            ContextData.setShowToast(false)

                                        }
                                            , 3000)

                                        let isInUserCart = ContextData.userCart.some(bagProduct => bagProduct.title === info.title)

                                        if (!isInUserCart) {

                                            let newUserCart = {
                                                id: ContextData.userCart.length + 1,
                                                title: info.title,
                                                img: info.img,
                                                price: info.price,
                                                count: 1
                                            }

                                            ContextData.setUserCart([...ContextData.userCart, newUserCart])
                                        }

                                        else {
                                            let UserCart = [...ContextData.userCart]

                                            let newUserCart = UserCart.map(bagProduct => {

                                                if (bagProduct.title === info.title) {

                                                    bagProduct.count += 1
                                                }
                                                return bagProduct
                                            })

                                            ContextData.setUserCart(newUserCart)
                                        }
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