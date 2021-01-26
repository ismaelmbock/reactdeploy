import React from 'react'
import {
  Header,
  Content,
  Footer
} from './index'

import { BrowserRouter, Route} from "react-router-dom";

const Acceuil = React.lazy(() => import('../views/acceuil/Acceuil'));
const Contact = React.lazy(() => import('../views/contact/Contact'));
const Propos = React.lazy(() => import('../views/propos/Propos'));
const Blog = React.lazy(() => import('../views/blog/Blog'));
const One = React.lazy(() => import('../views/plans/One'));
const Enregistrement = React.lazy(() => import('../views/pages/enregistrement/Enregistrement'));
const Test = React.lazy(() => import('../views/test/Test'));

const Layout = () => {

  return (
    <div className="page">
      <div className="flex-fill">
        <BrowserRouter>
          <Header />
          <Route path="/" exact component={Acceuil} />
          <Route path="/contact" component={Contact} />
          <Route path="/propos" component={Propos} />
          <Route path="/blog" component={Blog} />
          <Route path="/One" component={One} />
          <Route path="/Test" component={Test} />
          <Route path="/Enregistrement" component={Enregistrement} />
          <div className="my-3 my-md-5">
            <Content />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  )
}

export default Layout
