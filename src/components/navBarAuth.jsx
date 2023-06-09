import React from "react";
import { Link } from "react-router-dom";

const NavBarAuth = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-primary-subtle">
            <div className="container-fluid">
                <i className="navbar-brand bi-emoji-sunglasses"></i>

                <div
                    className=" d-flex flex-row-reverse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="nav-item">
                            <Link className="nav-link" to="/">
                                Home
                            </Link>
                            <Link className="nav-link" to="/user">
                                User
                            </Link>
                        </div>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBarAuth;
