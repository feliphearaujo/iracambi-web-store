import { Routes, Route } from "react-router-dom"
import './styles.global.css'

import Conta from "./Components/Conta"
import Main from "./Components/main/Main"

// import Cart from '@fortawesome/free-brands-svg-icons'

function App() {


  return (
    <>

       <Routes>
       <Route path="/" element={<Main/>} />
        <Route path="Conta" element={<Conta/>} /> 
{/* 
        <Route path="Carrinho" element={<Cart/>} /> */}
         
      </Routes>

    </>
  )
}

export default App
