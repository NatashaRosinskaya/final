import React, { useEffect, useRef, useState, useContext } from 'react'
import Navigation from './Navigation';
import Product from "./Product";
import Context from "./Context";

function Catalog(){
    <Navigation />
    const ul = useRef()

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])

    const {cart, setCart} = useContext(Context)

    useEffect(()=>{
        if(!localStorage.getItem('products')){
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
                localStorage.setItem('products', JSON.stringify(json))
                setProducts(json)

            })

    }},[])
    

    useEffect(()=>{
        if(!localStorage.getItem('products')){
        fetch('../data/data.json')
            .then(res=>res.json())
            .then(json=>{
                localStorage.setItem('products', JSON.stringify(json))
                setProducts(json)

            })

    }},[])

    function checkAddToCart (product){
        const productStatus = cart.findIndex((item)=>item.id === product.id)
        return productStatus
    }

   function addToCart(product){
      if(cart.length === 0){
          product.count = 1
          cart.push(product)
      } else if (checkAddToCart(product) !== -1){
          cart[checkAddToCart(product)].count += 1
      } else {
           product.count = 1
           cart.push(product)
      }
     setCart([...cart])
     localStorage.setItem('cart', JSON.stringify(cart))
   }

        return (
            <>
             <div className='catalog'>
                     <ul ref = {ul} className='catalog__items'>
                     <Product                          
                         addToCart={addToCart}
                         
                     />
                     </ul>
             </div>
             </>
    )
}
export default Catalog

{/** <div className="catalog">
            <ul className='catalog__items'>
                <li className='catalog__item'>
                    <div className='catalog__item__img'><img src="https://via.placeholder.com/220"/></div>
                    <div className='catalog__caption'>
                    <div className="catalog__caption__name">Подвеска</div>
                    <div className='catalog__caption__subname'>Dolce & Gabanne</div>
                    <div className='catalog__caption__price'>175 000 ₽</div>
                    <button className='catalog__caption__btn'>Добавить в корзину</button>
                </div>
                </li>
                <li className='catalog__item'>
                    <div className='catalog__item__img'><img src="https://via.placeholder.com/220"/></div>
                    <div className='catalog__caption'>
                    <div className="catalog__caption__name">Подвеска</div>
                    <div className='catalog__caption__subname'>Dolce & Gabanne</div>
                    <div className='catalog__caption__price'>175 000 ₽</div>
                    <button className='catalog__caption__btn'>Добавить в корзину</button>
                </div>
                </li>
                <li className='catalog__item'>
                    <div className='catalog__item__img'><img src="https://via.placeholder.com/220"/></div>
                    <div className='catalog__caption'>
                    <div className="catalog__caption__name">Подвеска</div>
                    <div className='catalog__caption__subname'>Dolce & Gabanne</div>
                    <div className='catalog__caption__price'>175 000 ₽</div>
                    <button className='catalog__caption__btn'>Добавить в корзину</button>
                </div>
                </li>
                <li className='catalog__item'>
                    <div className='catalog__item__img'><img src="https://via.placeholder.com/220"/></div>
                    <div className='catalog__caption'>
                    <div className="catalog__caption__name">Подвеска</div>
                    <div className='catalog__caption__subname'>Dolce & Gabanne</div>
                    <div className='catalog__caption__price'>175 000 ₽</div>
                    <button className='catalog__caption__btn'>Добавить в корзину</button>
                </div>
                </li>
                <li className='catalog__item'>
                    <div className='catalog__item__img'><img src="https://via.placeholder.com/220"/></div>
                    <div className='catalog__caption'>
                    <div className="catalog__caption__name">Подвеска</div>
                    <div className='catalog__caption__subname'>Dolce & Gabanne</div>
                    <div className='catalog__caption__price'>175 000 ₽</div>
                    <button className='catalog__caption__btn'>Добавить в корзину</button>
                </div>
                </li>
                <li className='catalog__item'>
                    <div className='catalog__item__img'><img src="https://via.placeholder.com/220"/></div>
                    <div className='catalog__caption'>
                    <div className="catalog__caption__name">Подвеска</div>
                    <div className='catalog__caption__subname'>Dolce & Gabanne</div>
                    <div className='catalog__caption__price'>175 000 ₽</div>
                    <button className='catalog__caption__btn'>Добавить в корзину</button>
                </div>
                </li>
            </ul>
        </div>**/}