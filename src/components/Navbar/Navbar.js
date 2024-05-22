import { BsBag } from "react-icons/bs";
import './Navbar.css';

const Navbar = () => {
    return (
       
            <nav class="navbar navbar-expand-sm bg-dark d-flex">
                <div class="container">
                    <a class="navbar-brand" href="#">SHOPPING!!!</a>

                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                <div className="bag">
                    <BsBag style={{color: 'white'}}/>
                    <span className="bg-white">0</span>
                </div>
                </div>
            </nav>

    );
}

export default Navbar;