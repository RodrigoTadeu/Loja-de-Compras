import React from 'react'
import { Routes , Route, BrowserRouter} from 'react-router-dom'
import Home from './Home/home'
import Produto from './Produto/produto'

export default function routes() {
  return (
      <BrowserRouter>
        <Routes >
            <Route path='/' element = {<Home/>}/>
            <Route path = '/produto/:idDoProduto' element = {<Produto/>}/>
        </Routes>
      </BrowserRouter>
  )
}
