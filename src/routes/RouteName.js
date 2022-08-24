import React from 'react';

const LoginPage = React.lazy(() => import('pages/LoginPage'));
const HomePage = React.lazy(() => import('pages/HomePage'));
const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));
const UpdatePasswordPage = React.lazy(() => import('pages/UpdatePasswordPage'));
const ProductPage = React.lazy(() => import('pages/ProductPage'));

const RouteName = {
  LoginPage: {
    Path: '/login',
    Page: <LoginPage />,
    Key: 'LoginPage',
  },
  HomePage: {
    Path: '/home',
    Page: <HomePage />,
    Key: 'HomePage',
  },
  UpdatePasswordPage: {
    Page: <UpdatePasswordPage />,
    Path: '/update-password',
    Key: 'UpdatePasswordPage',
  },
  NotFoundPage: {
    Page: <NotFoundPage />,
    Path: '*',
    Key: 'NotFoundPage',
  },
  ProductPage: {
    Path: '/product',
    Page: <ProductPage />,
    Key: 'ProductPage',
  },
};

export default RouteName;
