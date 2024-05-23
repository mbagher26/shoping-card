import './ProductSection.css'
const Productsection = () => {
    return (
        <div className="card" >
            <h1>Category</h1>
            <img src="/images/1.jpg" />
            <div className="card-body">
                <h5 className="card-title">Samsung A52</h5>
                <p className="card-text">1200$</p>
                <a href="#" className="btn btn-danger">Add To Cart</a>
                <a href="#" className="btn btn-outline-dark mt-2 mb-2 text-capitalize">More information</a>
                <p >Number:15</p>
            </div>
        </div>
    );
}

export default Productsection;