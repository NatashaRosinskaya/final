import React, { useContext } from "react";
import Context from "./Context";

function Navigation(){
    const {cart} = useContext(Context)
    function getCount(){
        let count = 0
        if(cart.length === 0){
            return count
        } else {
            cart.forEach((product) => {
                count += product.count
            });
        }
        return count
        }
    return (
        <section className="navigation">
                <div className="container">
                <div className="promo__logo">
                            
                    <a href="/"><img src='./../image/logo.svg' alt="Лого" className="promo__logo__img" /></a>
                    <div className="promo__nav">
                            <button className="nav_toggle"><label htmlFor="nav_toggle"></label></button>
                            <input type="checkbox" id="nav_toggle" />
                        <ul>
                            <li><a className="nav__link" href="/about_company">О компании</a></li>
                            <li><a className="nav__link" href="/certificates">Сертификаты</a></li>
                            <li><a className="nav__link" href="/vacancy">Вакансии</a></li>
                            <li><a className="nav__link" href="/payment">Оплата</a></li>
                            <li><a className="nav__link" href="/delivery">Доставка</a></li>
                            <li><a className="nav__link" href="/cart">Корзина <span className="header__cart__count"><strong>({getCount()})</strong></span></a></li>
                        </ul>
                    </div>
                </div>
                </div>
        </section>
    )
}
export default Navigation