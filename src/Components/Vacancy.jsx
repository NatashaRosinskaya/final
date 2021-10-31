import React from "react";
import Navigation from "./Navigation";
import { useHistory } from "react-router-dom";


function Vacancy (){
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
                
                <h2>Стань частью команды</h2>
                <h3>Что мы предлагаем:</h3>
                <ul>
                    <li>Возможность напрямую влиять на свой доход: никаких ограничений – только честная оплата приложенных усилий и отработанных навыков; </li>
                    <li>Помощь в адаптации новых сотрудников: доброжелательный коллектив, готовый поделиться информацией и поддержать в освоении секретов мастерства; </li>
                    <li>Развитие и профессиональное становление: возможности для карьерного роста и регулярное обучение внутри компании; </li>
                    <li>Система лояльности для сотрудников: бонусы и скидки на покупку украшений в нашей сети;</li>
                    <li>Комфортные условия труда в современных, хорошо оборудованных магазинах и сплоченная команда, нацеленная на общий успех и теплую, дружескую атмосферу.</li>
                </ul>
                
                <h3>Наши требования:</h3>
                <ul>
                    <li>Неукоснительно соблюдать установленные стандарты и беречь имидж компании;</li>
                    <li>Консультировать покупателей по ассортименту ювелирных изделий, оказывать компетентную помощь в подборе украшений и создании образа;</li>
                    <li>Работать на кассе и в торговом зале, обеспечивая высокое качество сервиса;</li>
                    <li>Поддерживать доброжелательную и гостеприимную атмосферу в магазине;</li>
                    <li>Дарить клиентам позитивные эмоции от драгоценных покупок на всех этапах взаимодействия: начиная с качественной и эффективной консультации и заканчивая эстетичной упаковкой купленного изделия.</li>
                </ul>

                <h3>Форма для соискателя</h3>
                <p>Заполните поля, укажите город и прикрепите резюме</p>
                <form action="#" method="POST">
                        <div className="form__vacancy">
                        <div className="contact__information">
                            <div className="name">
                                <input type="text" required placeholder="Ваше имя и фамилия*" maxLength="25"/>
                            </div>
                            <div className="city">
                                <input type="text" required placeholder="Город проживания*" maxLength="25"/>
                            </div>
                            <div className="vacation">
                                <input type="text" required placeholder="На какую должность*" maxLength="25"/>
                            </div>
                            <div className="email">
                                <input type="email" required placeholder="Ваш почта для связи*" maxLength="25"/>
                            </div>
                            <div className="phone">
                                <input type="tel" required placeholder="Ваш номер для связи*" maxLength="25"/>
                            </div>
                        </div>
                        <div className="resume">
                            <input type="file" name="resume" />
                        </div>
                        
                        <div className="feedback__btns">
                            <button className="feedback__btn__vacancy" type="submit">Отправить</button>
                            <button className="feedback__btn__vacancy" type="reset">Сбросить</button>
                        </div>
                        </div>
                        </form>
                <div className="back__btn">
                    <button className="back__homepage" onClick={()=>{backToHome()}}>Вернуться на главную страницу</button>
                    <button className="back__homepage" onClick={()=>{backToCatalog()}}>Вернуться в каталог</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Vacancy