import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route index element={<Page1 />}></Route>
          <Route path='/login' element={<Page2 />}></Route>
          <Route path='/Gpt3' element={<Page3></Page3>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
