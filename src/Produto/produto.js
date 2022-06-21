import React, {useEffect, useState} from 'react'
import './produto.css'
import { useParams } from 'react-router-dom'

export default function Produto() {

  const [ info, setInfo ] = useState([])
  const [carregando, setCarregando] = useState (false)
  const {idDoProduto} = useParams ();

  useEffect (() => {
    setCarregando(true)
    fetch (`https://fakestoreapi.com/products/${idDoProduto}`)
      .then (resultado => resultado.json() )
      .then (
          (data) => {
              setInfo(data)
              setCarregando(false)
          }
      )
  },[])

  return (
    <div className='container2'>
        {carregando === true ? <div>carregando</div> : <div/>}
        <div className='imagem'>
          <img width='60%' src= {info.image}/>
        </div>

        <div className='a'>
          <div className='produto'>
            {info.title}
          </div>

          <div className='valor'>
            <div className='label-valor'>
              Valor: 
            </div>
            <div className='c'>
              {info.price}
            </div>
          </div>

        </div>

        <div className='info'>
          <p >Descrição </p>
          <div className='b'>
            {info.description}
          </div>
        </div>
    </div>
  )
}
