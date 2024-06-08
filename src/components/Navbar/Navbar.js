import { BsBag } from "react-icons/bs";
import './Navbar.css';
import { useContext } from "react";
import { DataContext } from "../../Context/DataContext";

const Navbar = () => {

    const ContextData = useContext(DataContext)

    return (       
            <nav className="navbar navbar-expand-sm bg-dark d-flex">
                <div className="container">
                    <a className="navbar-brand" href="#">SHOPPING!!!</a>

                    <ul className="navbar-nav me-auto mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                <div className="bag">
                    <BsBag style={{color: 'white'}} onClick={() => {
                        ContextData.setShowCart(true)
                    }}/>
                    <span className="bg-white">0</span>
                </div>
                </div>
            </nav>
    );
}

export default Navbar;