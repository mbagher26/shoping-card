import { BsBag } from "react-icons/bs";

const Navbar = () => {
    return (
       
            <nav class="navbar navbar-expand-sm bg-dark d-flex">
                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>

                    <ul class="navbar-nav me-auto mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <BsBag />
                    <span className="bg-white">0</span>
                </div>
            </nav>

    );
}

export default Navbar;