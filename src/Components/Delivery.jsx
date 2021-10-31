import React from "react";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";


function Delivery (){
    const history = useHistory()
    function backToHome (){
        history.push('/') 
    }  
    function backToCatalog(){
        history.push('/catalog') 
    }
    return(    
        <>
        <Navigation />
        <div className="information_for_nav">
            
            <div className="container">
                
                <h2>Доставка</h2>

                <p>Заказы на сайте принимаются круглосуточно и обрабатываются в соответствующее режиму работы магазина время. Если заказ сделан в нерабочее время, он обрабатывается на следующий день.</p>                
                
                <h3>Условия доставки:</h3>
                <ul>
                    <li>Общая сумма заказа не должна превышать 2 000 BYN (иное оговаривается с оператором на этапе оформления заказа);</li>
                    <li>Максимальное количество изделий для одного заказа – 3 экземпляра;</li>
                    <li>Взаиморасчеты, примерка и передача ювелирных изделий НЕ осуществляется на улице или в общественных местах – только внутри офисных или жилых помещений.</li>

                </ul>
                <h3>Способы достаки:</h3>
            
                <p>Курьером (только Минск).</p>
                <p>Бизнес-почтой по Беларуси (только по 100% предоплате).</p>
                <p>Самовывоз из магазина OJJO (вся Беларусь)/</p>

                <div className="back__btn">
                    <button className="back__homepage" onClick={()=>{backToHome()}}>Вернуться на главную страницу</button>
                    <button className="back__homepage" onClick={()=>{backToCatalog()}}>Вернуться в каталог</button>
                </div>
               
            </div>
        </div>
    </>
    )
}
export default Delivery