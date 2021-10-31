import React from "react";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";


function Certificates (){
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
                
                <h2>Подарочные сертификаты «OJJO». </h2>
                <h3>Подарок — приятное ощущение, знакомое каждому!</h3>

                <p>Особенно ценны те счастливые моменты, когда ожидания совпадают с реальностью и подарок оказывается по-настоящему желанным. Но как этого добиться? </p>
                <p>Предлагаем беспроигрышный вариант — подарочный сертификат! В наличии сертификаты номиналом 30, 50, 100, 200, 300 и 500 рублей.</p>
                <p>Подарочный сертификат «OJJO» — это яркий, эмоциональный и всегда желанный подарок. С таким подарком невозможно не угадать, мы уверены, что это именно тот подарок, который приятно не только получать, но и дарить!</p>
                
                
                <h3>Подарочный сертификат «OJJO» это:</h3>
                <ul>
                    <li>Престижный, статусный подарок, который подходит как для прекрасных дам, так и для джентльменов любого возраста;</li>
                    <li>Красиво оформленный подарок, который не нуждается в дополнительной упаковке;</li>
                    <li>Подарок, который дает свободу выбора его получателю.</li>
        
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
export default Certificates