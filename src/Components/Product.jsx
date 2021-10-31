import React from "react";
import { useHistory } from "react-router-dom"
import Navigation from "./Navigation";

function Product({ product, addToCart }){
    <Navigation />
    const history = useHistory()

    function heandlerProductView(){
        history.push(`product/${product.id}`, {
            product
        })
    }
    return(
        <li className='catalog__item'>
            <div className='catalog__item__img'><img src={product.image} alt={product.title}/></div>
                <div className='catalog__caption'>
                <div className="catalog__caption__name" onClick={()=>{heandlerProductView()}}>{product.title}</div>
               
                <div className='catalog__caption__price'>{product.price} BYN</div>
                <button className='catalog__caption__btn' id={product.id} onClick={()=>{addToCart(product)}}>Добавить в корзину</button>
            </div>
        </li>
    )
}
export default Product

