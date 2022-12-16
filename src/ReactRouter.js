import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CounterRedux from './Components/CounterRedux'
import Todo from './Components/Todo'
import ContactInfo from './Pages/ContactInfo'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Users from './Pages/Users'
import Signin from './ProductsApp/Users/Signin'
import SignUp from './ProductsApp/Users/SignUp'
import { ToastContainer } from "react-toastify";
import ProductList from './ProductsApp/Products/ProductList'
import CreateProduct from './ProductsApp/Products/CreateProduct'

const ReactRouter = () => {
  return (
    <div className="text-center">
      <ToastContainer/>
      <Routes >       
        <Route path='/' element={<SignUp/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/products' element={<ProductList/>}/>
        <Route path='/create-product' element={<CreateProduct/>}/>
      </Routes>
    </div>
  )
}

export default ReactRouter