import React, { Component } from 'react'

import './accueil.css';
class Acceuil extends Component {
    state = {
        chevronRight: '>',
        chevronLeft: '<',
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="my-3 my-md-5">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="carousel-captions" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item">
                                            <img className="d-block w-100" alt="" src="./demo/photos/dino-reichmuth-84359-500.jpg" data-holder-rendered="true" />
                                            <div className="carousel-item-background d-none d-md-block"></div>
                                            <div className="carousel-caption offset-4">
                                                <a className="btn btn-primary btn-lg" href="#" role="button">Tout lister</a>
                                                <a className="btn btn-light btn-lg" href="#" role="button">description de l'image actuel</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" alt="" src="./demo/photos/alex-bertha-316137-500.jpg" data-holder-rendered="true" />
                                            <div className="carousel-item-background d-none d-md-block"></div>
                                            <div className="carousel-caption offset-4">
                                                <a className="btn btn-primary btn-lg" href="#" role="button">Tout lister</a>
                                                <a className="btn btn-light btn-lg" href="#" role="button">description de l'image actuel</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" alt="" src="./demo/photos/davide-cantelli-139887-1500.jpg" data-holder-rendered="true" />
                                            <div className="carousel-item-background d-none d-md-block"></div>
                                            <div className="carousel-caption offset-4">
                                                <a className="btn btn-primary btn-lg" href="#" role="button">Tout lister</a>
                                                <a className="btn btn-light btn-lg" href="#" role="button">description de l'image actuel</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" alt="" src="./demo/photos/eberhard-grossgasteiger-311213-500.jpg" data-holder-rendered="true" />
                                            <div className="carousel-item-background d-none d-md-block"></div>
                                            <div className="carousel-caption offset-4">
                                                <a className="btn btn-primary btn-lg" href="#" role="button">Tout lister</a>
                                                <a className="btn btn-light btn-lg" href="#" role="button">description de l'image actuel</a>
                                            </div>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" alt="" src="./demo/photos/geran-de-klerk-290418-500.jpg" data-holder-rendered="true" />
                                            <div className="carousel-item-background d-none d-md-block"></div>
                                            <div className="carousel-caption offset-4">
                                                <a className="btn btn-primary btn-lg" href="#" role="button">Tout lister</a>
                                                <a className="btn btn-light btn-lg" href="#" role="button">description de l'image actuel</a>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carousel-captions" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carousel-captions" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <br />

                        <div className="row">
                            <div className="col-sm-12">
                                <h5 className="card-title text-center">Nos produits phares</h5>
                                <p className="card-text text-center">Les produits les plus vendus depuis environ deux mois</p>
                            </div>
                        </div>
                        <br />

                        <div className="row col-lg-12">
                            <div className="col-lg-3 offset-1 col-sm-6 col-md-6 card">
                                <br />
                                <img className="card-img-top mx-auto w-75 h-50" src="../../assets/images/pc3.jpg" alt="Card image cap" />
                                <br />
                                <h5 className="card-title text-center"><br />Ordinateur HP clavier lumineux</h5>
                                <p className="card-text text-center">Ordinateur de haute marque SSD 512Go RAM 16Go processeur huitième génération 3.5Ghz</p>
                            </div>
                            <div className="col-lg-3 ml-5 col-sm-6 col-md-6 card">
                                <br />
                                <img className="card-img-top mx-auto w-75 h-50" src="../../assets/images/pc.jpg" alt="Card image cap" />
                                <br />
                                <h5 className="card-title text-center"><br /> Huffer lumineux Acer </h5>
                                <p className="card-text text-center">La Résidence, entourée d'un écrin de verdure paysager, offrira des appartements lumineux aux prestations haut de gamme</p>
                            </div>
                            <div className="col-lg-3 ml-5 col-sm-6 col-md-6 card">
                                <img className="card-img-top mx-auto w-75 h-50" src="../../assets/images/pc1.jpg" alt="Card image cap" />
                                <br />
                                <h5 className="card-title text-center"><br />Game du pack Microsoft</h5>
                                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Les plus vendus</h2>
                                <h5>Vous retrouvez ici la liste des produits les vendus sur le site</h5>
                            </div>
                            <div className="col-lg-2 offset-4">
                                <a className="btn btn-primary btn-lg" href="#" role="button">Tout visualiser</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <hr className="my-4" />
                                <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                                    <div className="controls-top">
                                        <a className="btn-floating ml-4" href="#multi-item-example" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                                        <a className="btn-floating offset-11" href="#multi-item-example" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                                    </div>
                                    <br/>
                                    <ol className="carousel-indicators">
                                        <li data-target="#multi-item-example" data-slide-to="0" className="active"></li>
                                        <li data-target="#multi-item-example" data-slide-to="1"></li>
                                        <li data-target="#multi-item-example" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">

                                        <div className="carousel-item active">

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Première carte</h4>
                                                            <p className="card-text">Tous sur la première carte de la page</p>
                                                            <a className="btn btn-primary">publier</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                        <h4 className="card-title">Deuxième carte</h4>
                                                            <p className="card-text">Tous sur la dexième carte de la page</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Troisième carte</h4>
                                                            <p className="card-text">Tous sur la troisième carte de la page</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Quatième carte</h4>
                                                            <p className="card-text">Tous sur la première carte de la page</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="carousel-item">

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Première motivation</h4>
                                                            <p className="card-text">La première motivation est le code le code et le code</p>
                                                            <a className="btn btn-primary">Valider</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Deuxième motivation</h4>
                                                            <p className="card-text">La deuxième motivation est le code le code et le code</p>
                                                            <a className="btn btn-primary">Valider</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Troisième motivation</h4>
                                                            <p className="card-text">La troisième motivation est le code le code et le code</p>
                                                            <a className="btn btn-primary">Valider</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Quatrième motivation</h4>
                                                            <p className="card-text">La quatrième motivation est le code le code et le code</p>
                                                            <a className="btn btn-primary">Valider</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="carousel-item">

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Toutes les achats</h2>
                                <h5>Les achats de notre site sont generalement regroupées ici</h5>
                            </div>
                            <div className="col-lg-2 offset-4">
                                <a className="btn btn-primary btn-lg" href="#" role="button">Tout visualiser</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <hr className="my-4" />
                                <div id="multi-item" className="carousel slide carousel-multi-item" data-ride="carousel">
                                    <div className="controls-top">
                                        <a className="btn-floating ml-4" href="#multi-item" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
                                        <a className="btn-floating offset-11" href="#multi-item" data-slide="next"><i className="fa fa-chevron-right"></i></a>
                                    </div>
                                    <br/>
                                    <ol className="carousel-indicators">
                                        <li data-target="#multi-item" data-slide-to="0" className="active"></li>
                                        <li data-target="#multi-item" data-slide-to="1"></li>
                                        <li data-target="#multi-item" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner" role="listbox">

                                        <div className="carousel-item active">

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Premier achat</h4>
                                                            <p className="card-text">Le premier achat de notre site est le tout</p>
                                                            <a className="btn btn-primary">Publier</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                        <h4 className="card-title">Deuxieme achat</h4>
                                                            <p className="card-text">Le deuxieme achat de notre site est le tout</p>
                                                            <a className="btn btn-primary">Publier</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Troisième achat</h4>
                                                            <p className="card-text">Le troisième achat de notre site est le tout</p>
                                                            <a className="btn btn-primary">Publier</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Quatrième achat</h4>
                                                            <p className="card-text">Le quatrième achat de notre site est le tout</p>
                                                            <a className="btn btn-primary">Publier</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="carousel-item">

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(60).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Premier test</h4>
                                                            <p className="card-text">Tout type de test est fait sur notre site</p>
                                                            <a className="btn btn-primary">publier</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(47).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/City/4-col/img%20(48).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="carousel-item">

                                            <div className="row">
                                                <div className="col-md-3">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(53).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 clearfix d-none d-md-block">
                                                    <div className="card mb-2">
                                                        <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(51).jpg"
                                                            alt="Card image cap" />
                                                        <div className="card-body">
                                                            <h4 className="card-title">Card title</h4>
                                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                                                card's content.</p>
                                                            <a className="btn btn-primary">Button</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Tous nous concernant se retrouve ici</h5>
                                        <p className="card-text">Naviguez et expliquez vos besoins pour que nous puissons vous aidez</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="new-slider-panel-area">
                            <div className="container">
                                <div className="row">
                                    <div className="full-bg-area">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div id="carousel-captions" className="carousel slide" data-ride="carousel">
                                                    <div className="carousel-inner">
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" alt="" src="./demo/photos/david-marcu-114194-1500.jpg" data-holder-rendered="true" />
                                                            <div className="carousel-item-background d-none d-md-block"></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" alt="" src="./demo/photos/davide-cantelli-139887-1500.jpg" data-holder-rendered="true" />
                                                            <div className="carousel-item-background d-none d-md-block"></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" alt="" src="./demo/photos/dino-reichmuth-84359-1500.jpg" data-holder-rendered="true" />
                                                            <div className="carousel-item-background d-none d-md-block"></div>
                                                        </div>
                                                        <div className="carousel-item active">
                                                            <img className="d-block w-100" alt="" src="./demo/photos/eberhard-grossgasteiger-311213-1500.jpg" data-holder-rendered="true" />
                                                            <div className="carousel-item-background d-none d-md-block"></div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img className="d-block w-100" alt="" src="./demo/photos/geran-de-klerk-290418-1500.jpg" data-holder-rendered="true" />
                                                            <div className="carousel-item-background d-none d-md-block"></div>
                                                        </div>
                                                    </div>
                                                    <a className="carousel-control-prev" href="#carousel-captions" role="button" data-slide="prev">
                                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                        <span className="sr-only">Previous</span>
                                                    </a>
                                                    <a className="carousel-control-next" href="#carousel-captions" role="button" data-slide="next">
                                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                        <span className="sr-only">Next</span>
                                                    </a>
                                                </div>

                                            </div>
                                            <div className="col-md-6">
                                                <div className="sample-plan-right-bg">
                                                    <img src="//cdn.shopify.com/s/files/1/0567/3873/t/71/assets/sample-plan-download.png?v=12914123604954474370" alt="" className="img-fluid offset-5" /><br />
                                                    <h3 className="text-center">Telechargement</h3>
                                                    <p className="text-center">Laissez nous votre email et votre nom pour que nous vous envoyons le lien pour telecharger</p>
                                                    <div className="newsletter">
                                                        <div id="mb-embed">
                                                            <form method="post" className="mb-form2">
                                                                <div className="contact-form">
                                                                    <div className="row">
                                                                        <div className="col-md-6 less-gap">
                                                                            <div className="form-group">
                                                                                <input type="text" name="subscriber[first_name]" id="mb-first-name" size="40" className="form-control" aria-required="true" aria-invalid="false" placeholder="First Name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="form-group">
                                                                                <input type="email" name="subscriber[email]" id="mb-email" size="40" className="form-control" aria-required="true" aria-invalid="false" placeholder="Email" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <div className="g-recaptcha" data-sitekey="6LfpLOUUAAAAACo38CeKTLZYONUMAW2ezEfy5Jnx"></div>
                                                                        <div id="recapt" className="pt-1"></div>
                                                                    </div>
                                                                    <div className="form-group text-center">
                                                                        <button type="submit" className="btn btn-warning">Download Now</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                            <div id="mb-success-message" className="mb-message" default-message="Thank you for downloading. Please Check your Inbox"></div>
                                                            <div id="mb-error-message"></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <br />

                        <div className="row">
                            <div className="col-md-12 col-lg-12 new-house-plans">
                                <div className="section-heading">
                                    <h2 className="section-title text-center">
                                        Title
                                        </h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card col-md-6 ml-8 col-lg-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Cardio minute</li>
                                    <li className="list-group-item">cardio seconde</li>
                                    <li className="list-group-item">Cardio heure</li>
                                    <li className="list-group-item">zabio minute</li>
                                    <li className="list-group-item">zabio seconde</li>
                                    <li className="list-group-item">zabio heure</li>
                                </ul>
                            </div>
                            <div className="card col-md-6 ml-8 col-lg-3 offset-1">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">gracias minute</li>
                                    <li className="list-group-item">gracias seconde</li>
                                    <li className="list-group-item">gracias heure</li>
                                    <li className="list-group-item">gutter seconde</li>
                                    <li className="list-group-item">gutter minute</li>
                                    <li className="list-group-item">gutter heure</li>
                                </ul>
                            </div>
                            <div className="card col-md-6 ml-8 col-lg-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">facebook minute</li>
                                    <li className="list-group-item">facebook seconde</li>
                                    <li className="list-group-item">deutsh all</li>
                                    <li className="list-group-item">grwenwitch all</li>
                                    <li className="list-group-item">meridian time</li>
                                    <li className="list-group-item">select error</li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="card p-5">
                                <section className="section" id="get-started">
                                    <div className="container">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-8 text-center">
                                                <div className="section-heading">
                                                    <h4 className="section-title text-primary">
                                                        Plan de la sécutité en temps réel
                                                    </h4>
                                                    <p>
                                                        Browse our readymade floor plan designs to get started. Choose from a wide range of options for small one-bedroom and two-bedroom house designs or browse our collections for luxurious multi-storey building plans for three-bedroom, four-bedroom, five-bedroom house designs and more!
                                                    </p>
                                                    <h4 className="section-title text-primary">Call us : <a href="tel:+1 307 461 9111">+237 695 346 925</a> / E-mail : <a href="mailto:winmoney@gmail.com">winmoney@gmail.com</a></h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Acceuil