import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from 'react-router-dom';
import Home from '././page/Home';
import Menu from '././page/Menu';
import About from '././page/About';
import Contact from '././page/Contact';
import Login from '././page/Login';
import Newproduct from './page/Newproduct';
import Signin from './page/Signin';

import { store } from './redux/index';
import {Provider} from 'react-redux';
import Cart from './page/Cart.tsx';
import Success from './page/Success.tsx';
import Cancel from './page/Cancel.tsx';
import Orders from './page/Orders.tsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      {/* <Route path="menu" element={<Menu />} /> */}
      <Route path="menu/:filterby" element={<Menu />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login/>} />
      <Route path="Newproduct" element={<Newproduct />} />
      <Route path="Orders" element={<Orders/>}/>
      <Route path="signin" element={<Signin/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="success" element={<Success/>} /> 
       <Route path="cancel" element={<Cancel/>} />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
 <RouterProvider router={router}/>
  </Provider>


);
