import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from '../Home/Home'
import Watch from '../watch/Watch'
import Register from '../register/Register'
import Login from '../login/Login'
import AnimatedPages from '../../components/animated-pages/AnimatedPages'

const RoutingPages = () => {
    return (
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/watch' element={<Watch/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/animate' element={<AnimatedPages/>} />
        </Routes>
    )
}

export default RoutingPages
