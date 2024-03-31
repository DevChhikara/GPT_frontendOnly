import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Header from './components/firstpage/Header'
import Whatgpt from './components/firstpage/Whatgpt'

const Page1 = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Whatgpt></Whatgpt>
        </div>
    )
}

export default Page1