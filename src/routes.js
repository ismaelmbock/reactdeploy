import React from 'react';

const Enregistrement = React.lazy(() => import('./views/pages/enregistrement/Enregistrement'));
const Acceuil = React.lazy (() => import('./views/acceuil/Acceuil'));
const Contact = React.lazy(() => import('./views/contact/Contact'));
const Propos = React.lazy(() => import('./views/propos/Propos'));
const Blog = React.lazy(() => import('./views/blog/Blog'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/acceuil/Acceuil', name: 'Acceuil', component: Acceuil },
  { path: '/contact/contact', name: 'contact', component: Contact },
  { path: '/propos/propos', name: 'propos', component: Propos },
  { path: '/blog/blog', name: 'blog', component: Blog },
  { path: '/enregistrement/Enregistrement', name: 'enregistrement', component: Enregistrement },
];

export default routes;
