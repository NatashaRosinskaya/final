import React, { useEffect, useRef, useState, useContext } from 'react'
import Navigation from './Navigation';
import Product from "./Product";
import Context from "./Context";

function Catalog(){
    
    const ul = useRef()

    const [products, setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])

    const {cart, setCart} = useContext(Context)

    useEffect(()=>{
        if(!localStorage.getItem('products')){
            const url = 'data/data.json'
        fetch('data/data.json')
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
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
            <Navigation />
                
                            
             <div className='catalog__nav'>
                 <div className="container">
                     <ul ref = {ul} className='catalog__items'>
                         {products.map((product)=>{
                             return(
                                <Product                          
                                addToCart={addToCart}
                                product={product} 
                            />
                             )
                         })}
                    
                     </ul>
             </div>
             </div>
             </>
    )
}
export default Catalog

 