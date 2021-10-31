import React, { useContext } from "react";
import Context from "./Context";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";

function Cart(){    

    const {cart, setCart} = useContext(Context)
    const history = useHistory()
        function backToHome (){
            history.push('/') 
        }  
        function backToCatalog(){
            history.push('/catalog') 
        }

        const removeProduct = id =>{
            setCart(cart.filter(item =>{
                return item.id !== id
             }))
             localStorage.setItem('cart', JSON.stringify(cart))
        }

        function fullSum(){
            let sum = 0
            if(cart.length === 0){
            return sum
            }else {
            cart.forEach((item, index) => {
                sum += item.price * item.count
             })
              
            }
            return sum.toLocaleString()
               
         }
        
    if (cart.length === 0){
        return <>
        <Navigation />
        <h1 className="cart___empty__h">Корзина пуста!</h1>
        <p className="cart___empty__p">Вы можете вернуться в каталог и выбрать товар, который хотели бы приобрести.</p>
        <div className="back__btn">
            
            <button className="back__homepage" onClick={()=>{backToHome()}}>Вернуться на главную страницу</button>
            <button className="back__homepage" onClick={()=>{backToCatalog()}}>Вернуться в каталог</button>
        </div>
        </>
    }else{   
    
    return(
        <>
        <Navigation />
        <div className="container">
        <div className="list__title">
                        <ul>
                            <li>Наименование</li>
                            <li>Цена за единицу</li>
                            <li>Количество</li>
                            <li>Итого</li>
                            <li></li>
                        </ul>
                    </div>
        {cart.map((item, index)=>{
            return (
                <>
                    <div className="cart" key={index}>
    
                        <ul>
                            <li className="catalog__caption__name">{item.title}</li>
                            <li className="cart__price">{item.price} BYN</li>
                            <li className="cart__count">{item.count}</li>
                            <li className="cart__total">{item.count*item.price} BYN</li>
                            <li className="cart__delete"><button onClick={()=> removeProduct(item.id)}>Удалить</button> </li>
                        </ul>
                   </div>
                   
                </>
            )
        })}
        <hr className="cart__total__line" />
        <div className="cart__total__cost"> Итого к оформлению: {fullSum()} BYN</div>
            
                    <div className="back__btn">
                            <button className="back__homepage">Оформить покупку</button>
                            <button className="back__homepage" onClick={()=>{backToHome()}}>Вернуться на главную страницу</button>
                            <button className="back__homepage" onClick={()=>{backToCatalog()}}>Вернуться в каталог</button>
                    </div>
                    </div>
    </>
    )
    }
}
export default Cart