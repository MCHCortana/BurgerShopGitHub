import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';

import React from 'react';
import { App } from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/menupage',
        element: <MenuPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
