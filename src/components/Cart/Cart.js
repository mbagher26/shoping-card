import { BsBag } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { DataContext } from "../../Context/DataContext";
import { useContext } from "react";

const Cart = () => {

    const ContextData = useContext(DataContext)

    return (
        <aside className={`${ContextData.showCart ? '' : 'd-none'} bag-sidebar overflow-auto w-25 p-3 position-fixed top-0 end-0 bg-white shadow h-100`}>

            <h3 className="d-flex justify-content-between">
                <span><BsBag /> Cart</span>
                <span onClick={() => {
                    ContextData.setShowCart(false)
                }}><IoCloseSharp /></span>
            </h3>

            {ContextData.userCart.map(product => (
            <div key={product.id} className='product-info'>

                <div className='card p-3' >
                    <img src={product.img} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.price}$</p>
                        <a href="#" className="btn btn-danger">Buy</a>
                        <a href="#" className="btn btn-outline-dark mt-2 mb-2 text-capitalize">More information</a>
                        <p >Number: {product.count}</p>
                    </div>
                </div>
            
            </div>
            ))}
        </aside>
    );
}

export default Cart;

