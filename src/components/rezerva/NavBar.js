import logo from '../img/logo.jpg'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg" style={{"backgroundColor": "#FFC6D3"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo" width="50" height="50" className="d-inline-block align-text-center rounded-circle" />
                     Moja kozmetika
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mt-3 mr-2 mb-2 mb-lg-0 position-absolute top-0 end-0">
                        <li className="nav-item nav-link link-dark">
                            <Link to="/">Početna</Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link to="/kontakt">Kontakt</Link>
                        </li>
                        <li className="nav-item nav-link text-decoration-none">
                            <Link to="/omiljeno">Omiljeno</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>




    );
}

export default NavBar