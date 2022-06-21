import React, {useState, useEffect} from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const [ produtos, setProdutos ] = useState ([])
    const [carregando, setCarregando] = useState (false)
   
    useEffect (() => {
        setCarregando(true)
        fetch ('https://fakestoreapi.com/products')
            .then (resultado => resultado.json() )
            .then (
                (data) => {
                    setProdutos(data)
                    setCarregando(false)
                } 
            )
    }, [])

    const handlePesquisa = (idDoProduto) => {
        
                navigate(`/produto/${idDoProduto}`)
            }
                
         
    

  return (
    <div>
        <h1 className='title'>Loja do Digo</h1>
            {carregando === true ? <div>Carregando...</div> : <div></div>}
        <div className='container'>
            { produtos.map (
                produto => <div className='chield'  key={produto.id}> 
                                <img className= "img" width='25%' src= {produto.image}/> 
                                <div className= "name">{produto.title}</div> 
                                <div className= "price">{produto.price}</div> 
                                <button className='button' onClick={() => handlePesquisa(produto.id)}>Comprar</button>
                        
                            </div>
            )}
        </div>

       
    </div>
  )
}
