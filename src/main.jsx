import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Coffees from "./Components/Coffees/Coffees.jsx";
import Shop from "./Components/Shop/Shop.jsx";
import Blog from "./Components/Blog/Blog.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Signup from './Components/Signup/Signup.jsx'
import Login from './Components/Login/Login.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} /> 
        <Route path='about' element={<About />} /> 
        <Route path='coffees' element={<Coffees />} /> 
        <Route path='shop' element={<Shop />} /> 
        <Route path='blog' element={<Blog />} /> 
        <Route path='contact' element={<Contact />} /> 
        <Route path='signup' element={<Signup />} />
        <Route path='signup/login' element={<Login />} /> 
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
