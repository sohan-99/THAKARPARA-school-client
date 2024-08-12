import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Layout from './layout/Layout';
import EPage from './components/EPage';
import Result from './components/pages/Result';
import EventDetail from './components/home/event/EventDetail';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Admission from './components/pages/Admission';
import Home from './components/home/Home';
import Teachers from './components/home/Teachers';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <EPage />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: "/event/:id",
        element: <EventDetail />
      },
      {
        path: '/result',
        element: <Result />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/admission',
        element: <Admission />
      },
      {
        path: '/teachers',
        element: <Teachers />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
