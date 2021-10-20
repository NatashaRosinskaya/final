import React, { useContext } from "react";
import Navigation from "./Navigation";
import Brands from '../image/brands.svg';
import { useHistory, useLocation} from "react-router-dom";
import Context from "./Context";

function Header(){
    const {cart} = useContext(Context)
    const location = useLocation()

    const history = useHistory()
    function directToCatalog(){
        history.push('/catalog')
    }

    return(        
            <header className = "header">
                <section className="promo">
                <div className = "container">
                    <div className="promo__fon">
                        <div className="promo__content">
                            <div className="promo__logo">
                                
                                <Navigation />
                                        {/**<div className="header__widget">
                                            <input type='text' id='header__widget__value' placeholder='Поиск' />
                                            <a href='#'>Cart</a>
                                        </div>**/}
                            </div>
                            
                            <div className = "promo__information">
                                <h1 className="promo__title">Долго, дорого, богато!</h1>
                                <button className="promo__btn" onClick={()=>{directToCatalog()}}>Каталог изделий</button>
                            <div className="promo__line"><hr /></div>
                            <div className="promo__brands">
                                <img src={Brands} alt="Бренды" />
                                <img src={Brands} alt="Бренды" />
                                <img src={Brands} alt="Бренды" />
                                <img src={Brands} alt="Бренды" />
                                <img src={Brands} alt="Бренды" />
                                <img src={Brands} alt="Бренды" />
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