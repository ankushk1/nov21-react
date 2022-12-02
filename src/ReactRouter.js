import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CounterRedux from './Components/CounterRedux'
import Todo from './Components/Todo'
import ContactInfo from './Pages/ContactInfo'
import Home from './Pages/Home'
import Navbar from './Pages/Navbar'
import Users from './Pages/Users'

const ReactRouter = () => {
  return (
    <div className="text-center">
      {/* <Navbar/> */}
      <Routes >
        {/* V5 */}
        {/* <Route path='/' />  component={Home} */}
        <Route path='/' element={<CounterRedux/>}/>
        {/* <Route path='/users/' element={<Users/>}/>
        <Route path='/contact' element={<ContactInfo/>}/> */}
      </Routes>
    </div>
  )
}

export default ReactRouter