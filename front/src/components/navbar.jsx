import { NavLink } from "react-router-dom";


const Navbar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Fifth navbar example">
            <div className="container">
                <NavLink className="navbar-brand" to="/home">Real
                    <i className="bi bi-emoji-smile mx-2"></i>App
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarsExample05">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {user?.biz && (
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/my-cards">My Cards</NavLink>
                            </li>
                        )}

                        {user && (
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/my-favourite">My Favourites</NavLink>
                            </li>
                        )}

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        {user ? (
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/logout" aria-disabled="true">Logout</NavLink>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup" aria-disabled="true">Sign Up</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signupbiz" aria-disabled="true">Business Sign Up</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar;