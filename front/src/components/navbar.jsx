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
                    <ul className="gap-2 mb-2 mb-lg-0 me-auto navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/all-cards">All Cards</NavLink>
                        </li>
                        {user?.biz && (
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/my-cards">My Cards</NavLink>
                            </li>
                        )}

                        {user && (
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/favourite-cards">Favourite Cards</NavLink>
                            </li>
                        )}

                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/about">About</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 gap-2">
                        {user ? (
                            <li className="nav-item">
                                <NavLink className="align-items-center d-flex gap-2 nav-link" to="/logout" aria-disabled="true">Logout <i className="bi bi-box-arrow-right fs-5"></i></NavLink>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signin">Sign In</NavLink>
                                </li>
                                <li className="align-items-center d-flex divider nav-item">
                                    <i className="border-secondary border-start d-block h-75"></i>
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