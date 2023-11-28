import React from 'react'
import { useContext } from 'react'
import { BasketContext } from '../../context/BasketContext'
import BasketProduct from '../BasketProduct'
import './index.scss'

const BasketSidebar = ({isOpen}) => {
    const {basket, setBasket} = useContext(BasketContext)
    
  const sum = basket.reduce((acc, x) => acc + x.count * x.unitPrice, 0).toFixed(2)

  return (
    <article className={`${isOpen ? 'open' : ''} sidebar`}>
        <h1>Basket</h1>
        {sum}
        <div className='basket-products'>
             {basket && basket.map(basketItem => (
                
              <BasketProduct key={basketItem.id} id={basketItem.id} name={basketItem.name} count={basketItem.count} unitPrice={basketItem.unitPrice} /> 

            ))}
        </div>
    </article>
  )
}

export default BasketSidebar