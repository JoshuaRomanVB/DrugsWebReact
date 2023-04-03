import React,{useContext} from 'react'
import playera from '@assets/playera.png';
import ogro from '@assets/shopping-cart.png'
import '@styles/ProductItem.scss';
import AppContext from '../context/AppContext';

const ProductItem = ({item}) => {

  const {agregarCarrito} = useContext(AppContext)
  
  const handleClick = it =>{
    agregarCarrito(it)
  }
  return (
    <div className="product-card">
    <img src={item.image} alt={item.title} className="playera"/>
    <div className="pruct-info">
        <div>
            <p>${item.price}</p>
            <p>{item.title}</p>
        </div>
        <figure onClick={()=> handleClick(item)}>
            <img src={ogro} alt="agregar"/>
        </figure>
    </div>
    </div>
  )
}

export default ProductItem