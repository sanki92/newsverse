import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    // handleOnSearch=(e)=>{
    //   e.preventDefault();

    //  let   a = document.getElementsByClassName("form-control").value;
    //   console.log("on search "+a);
    // //   a =this.handleOnSearch.a
    // }
    // handleOnChange=(e)=>{
    //     // console.log("on change "+e.target.value)
    //     let a=e.target.value;
    //     console.log("on change "+a)
    //     document.getElementsByClassName("form-control").value=a;
    // }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        Newsverse
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <Link className="nav-link" aria-current="page" to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link" aria-current="page" to="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <Link
                                    className="nav-link dropdown-toggle "
                                    to="#"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Category
                                </Link>
                                <ul
                                    className="dropdown-menu bg-dark"
                                    aria-labelledby="navbarDropdown"
                                >
                                    <li className="nav-item text-center">
                                        <Link
                                            className="nav-link"
                                            aria-current="page"
                                            to="/business"
                                        >
                                            Business
                                        </Link>
                                    </li>
                                    <li className="nav-item text-center">
                                        <Link
                                            className="nav-link"
                                            aria-current="page"
                                            to="/entertainment"
                                        >
                                            Entertainment
                                        </Link>
                                    </li>
                                    <li className="nav-item text-center">
                                        <Link
                                            className="nav-link"
                                            aria-current="page"
                                            to="/general"
                                        >
                                            General
                                        </Link>
                                    </li>
                                    <li className="nav-item text-center">
                                        <Link className="nav-link" aria-current="page" to="/health">
                                            Health
                                        </Link>
                                    </li>
                                    <li className="nav-item text-center">
                                        <Link
                                            className="nav-link"
                                            aria-current="page"
                                            to="/science"
                                        >
                                            Science
                                        </Link>
                                    </li>
                                    <li className="nav-item text-center">
                                        <Link className="nav-link" aria-current="page" to="/sports">
                                            Sports
                                        </Link>
                                    </li>
                                    <li className="nav-item text-center">
                                        <Link
                                            className="nav-link"
                                            aria-current="page"
                                            to="/technology"
                                        >
                                            Technology
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        {/* <form className="d-flex">
                    <input  className="form-control me-2"  type="search" placeholder="Search" aria-label="Search"/>
                    <button   className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
