import React from "react";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";


function AboutCompany (){
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
                <h2>О компании</h2>
                <h3>Ювелирное производство «OJJO»</h3>
                <p>Более 1100 ювелирных изделий для детей, мужчин и женщин.</p>
                <p>Выбирайте и заказывайте там, где удобно. Без суеты и очередей.</p>
                <p>Занимаемся тем, что любим. Отдаемся работе без остатка. Ценим творчество, нестандартные решения, профессионализм.</p>
                <p>В 2000 году мы открыли маленькую ювелирную мастерскую «OJJO» - ремонтировали украшения и изготавливали изделия из золота заказчика. Постепенно развивались, изучали вкусы и современные тенденции. Сейчас у нас собственная коллекция ювелирных изделий «OJJO» и розничная сеть магазинов по всей Беларуси.</p>
                <h2>Услуги</h2>
                <p>В «OJJO» вы можете:</p>
                <ul>
                    <li>купить кольца, серьги, кулоны;</li>
                    <li>обменять ювелирные изделия;</li>
                    <li>заказать изготовление ювелирных изделий по каталогу;</li>
                    <li>отремонтировать ювелирное изделие.</li>
                </ul>
                <div className="back__btn">
                <button className="back__homepage" onClick={()=>{backToHome()}}>Вернуться на главную страницу</button>
                <button className="back__homepage" onClick={()=>{backToCatalog()}}>Вернуться в каталог</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutCompany