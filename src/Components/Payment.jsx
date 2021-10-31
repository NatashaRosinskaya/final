import React from "react";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";


function Payment (){
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
                
                <h2>Условия приобретения</h2>

                <p>В интернет-магазине могут быть приобретены только ювелирные изделия, произведенные в Республике Беларусь и маркированные кодами идентификации. Ювелирные изделия, доступные к приобретению в интернет-магазине, отмечены знаком и обозначением «Покупка онлайн». Для ювелирных изделий, имеющих размерный ряд, дополнительно отмечены размеры ювелирных изделий, доступных для покупки онлайн, путем размещения зеленого маркера рядом с размерами таких ювелирных изделий.</p>                
                
                <h3>Способы и условия оплаты:</h3>
                <ul>
                    <li>Наличный расчет (принимаются только белорусские рубли);</li>
                    <li>Оплата банковскими картами Visa, Visa Electron, MasterCard, Maestro, Белкарт;</li>
                    <li>Оплата онлайн через систему электронных платежей bePaid, Google Pay, Apple Pay;</li>
                    <li>Оплата заказа по коду услуги в ЕРИП;</li>
                    <li>Действуют карты рассрочки «Халва» МТБ банка, «Карта покупок» Белгазпромбанка, «Карта FUN» от БПС-Сбербанка, «SMART карта» Банка Дабрабыт, карта "Магнит" от Беларусбанка и карта "Черепаха" от Банка ВТБ; </li>
                    <li>Возможно оформление экспресс-кредита от Банка ВТБ в течение 1 часа без справки о доходах на срок до 8 месяцев. Подробности: www.vtb-bank.by.</li>
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
export default Payment