import { BsBag } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";

const Cart = () => {
    return (
        <aside className="bag-sidebar d-none w-25 p-3 position-fixed top-0 end-0 bg-white shadow h-100">
            
                <h3 className="d-flex justify-content-between">
                    <span><BsBag /> Cart</span>
                    <span><IoCloseSharp /></span>
                </h3>
            
            <div className='product-info'>

                    <div className='card p-3' >
                        <img src='/images/1.jpg' />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">title</h5>
                            <p className="card-text">price</p>
                            <a href="#" className="btn btn-danger">Buy</a>
                            <a href="#" className="btn btn-outline-dark mt-2 mb-2 text-capitalize">More information</a>
                            <p >Number:count</p>
                        </div>
                    </div>
                
            </div>
        </aside>
    );
}

export default Cart;

