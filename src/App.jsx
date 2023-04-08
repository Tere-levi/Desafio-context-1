
import {Routes, Route} from 'react-router-dom'

import NavBar from "./components/NavBar"

import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {
  

  return (
    <div className="App">
      <NavBar></NavBar>
      <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/*' element={<h1>404 page not found</h1>} />

      </Routes>
      </div>

    </div>
  )
}

export default App