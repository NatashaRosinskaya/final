import React, { useContext } from "react";
import Navigation from "./Navigation";
import Context from "./Context";
import { useHistory, useLocation } from "react-router-dom";


function ProductCard (){
    
      const history = useHistory()  
      const location = useLocation() 
    
      const product = location.state.product
      const {id, title, description, price, image} = location.state.product
  
      const {cart, setCart} = useContext(Context)
      function checkAddToCart (product){
          const productStatus = cart.findIndex((item)=> item.id === product.id)
          return productStatus
        }
      
        function addToCart(product){
          if(cart.length === 0){
            product.count = 1
            cart.push(product)
          }else if(checkAddToCart(product) !== -1){
            cart[checkAddToCart(product)].count +=1
          } else {
            product.count = 1
            cart.push(product)
          }
          setCart([...cart])
          localStorage.setItem('cart', JSON.stringify(cart))
           }
  
      function backToHome(){
          history.push('/')
      }
      function backToCart(){
          history.push('/cart')
      }   
      
    function backToCatalog(){
        history.push('/catalog') 
    }
    

    return (
        
        <>
        <Navigation />
        <div className="container">
            
            <div className="productcart__total">
                 <div className="catalog__item__img"><img src={image} alt={title} /></div>
                
                
                <div className="catalog__caption">
                    <div className="catalog__caption__name">{title}</div>
                    <div className="catalog__caption__description">{description}</div>
                    <div className="catalog__caption__price">{price} BYN</div>
                    <button className='catalog__caption__btn' id={product.id} onClick={()=>{addToCart(product)}}>Добавить в корзину</button>
                        
                </div> 
                    
                </div> 
                <div className="back__btn">
                    <button className="back__homepage" onClick={()=>{backToCart()}}>Перейти в корзину</button>
                    <button className="back__homepage" onClick={()=>{backToHome()}}>Вернуться на главную страницу</button>
                    <button className="back__homepage" onClick={()=>{backToCatalog()}}>Вернуться в каталог</button>   
                </div> 
        </div>
        </>
    )
}
export default ProductCard