import React from 'react'

import Home from '../src/Home/Home'
// import Courses from "../src/components/Courses"
import Course from '../src/Courses/Course'
import { Route,Routes} from "react-router-dom"
import Signup from "../src/components/Signup"


function App() {
  return (<>
 {/* <Home/>
  <Courses/> */}
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Courses' element={<Course/>}/>
    <Route path='/Signup' element={<Signup/>}/>
  </Routes>
  </>)
  
}

export default App
