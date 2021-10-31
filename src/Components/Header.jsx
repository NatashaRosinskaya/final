import React, { useContext } from "react";
import { useHistory, useLocation} from "react-router-dom";
import Context from "./Context";

function Header(){
    const {cart} = useContext(Context)
    const location = useLocation()

    const history = useHistory()
    function directToCatalog(){
        history.push('/catalog')
    }

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

    return(        
            <header className = "header">
                <section className="promo">
                <div className = "container">
                    <div className="promo__fon">
                        <div className="promo__content">
                            <div className="promo__logo">
                            
                            <a href="/"><img src='image/logo.svg' alt="Лого" className="promo__logo__img" /></a>
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
            
                            <div className = "promo__information">
                                <h1 className="promo__title">Долго, дорого, богато!</h1>
                                <button className="promo__btn" onClick={()=>{directToCatalog()}}>Каталог изделий</button>
                            <div className="promo__line"><hr /></div>
                            <div className="promo__brands">
                                <img src='image/brands.svg' alt="Бренды" />
                                <img src='image/brands.svg' alt="Бренды" />
                                <img src='image/brands.svg' alt="Бренды" />
                                <img src='image/brands.svg' alt="Бренды" />
                                <img src='image/brands.svg' alt="Бренды" />
                                <img src='image/brands.svg' alt="Бренды" />
                            </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </header>
    )
}
export default Header