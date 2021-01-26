import React, { Component } from 'react'

import {Link} from "react-router-dom";

class Header extends Component {
    
    render() {
        return (
            <>
                <div className="header py-4">
                    <div className="container">
                        <div className="d-flex">
                            <a className="header-brand" href="./index.html">
                                <img src="./assets/images/logo.jpg" className="header-brand-img" alt="tabler logo" />
                            </a>
                            <div className="col-lg-6"></div>
                            <div className="nav-item d-none d-md-flex">
                                <img src="./assets/images/logo/whatsapp.png" className="header-brand-img" alt="whatsapp logo" />
                                <a href="#" target="_blank" className="text-secondary">+237 695346925</a>
                            </div>
                            <div className="col-lg-3 ml-auto">
                                <form className="input-icon my-3 my-lg-0">
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Faites vos recherches ici !!!!" />
                                        <span className="input-group-append">
                                            <button className="btn btn-primary" type="button"><i className="fe fe-search"></i></button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <a href="#" className="header-toggler d-lg-none ml-3 ml-lg-0" data-toggle="collapse" data-target="#headerMenuCollapse">
                                <span className="header-toggler-icon"></span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="header collapse d-lg-flex p-0" id="headerMenuCollapse">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 ml-auto">
                                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-secondary">Connexion</a>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Enregistrement" className="nav-link">
                                            Inscription
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-secondary"><i className="fa fa-heart"></i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-light bg-warning"><i className="fa fa-shopping-cart fa-5x ml-2"></i> 0 Items<span className="ml-2"></span></a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg order-lg-first">
                                <ul className="nav nav-tabs border-0 flex-column flex-lg-row">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link"><i className="fe fe-home"></i> Acceuil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/" data-toggle="dropdown">produits</Link>
                                        <div className="dropdown-menu dropdown-menu-arrow">
                                            <Link to="/One" className="dropdown-item ">electronique</Link>
                                            <Link to="/" className="dropdown-item ">electricite</Link>
                                            <Link to="/" className="dropdown-item ">plomberie</Link>
                                            <Link to="/" className="dropdown-item ">teinturie</Link>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link to="/contact" className="nav-link"> Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/propos" className="nav-link"> A propos</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/blog" className="nav-link"> Blog</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                </>
        )
    }
}


export default Header