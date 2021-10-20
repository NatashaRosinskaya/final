import Logo from '../image/logo.svg';

function Navigation(){
    return (
        <div className="promo__nav">
        <ul>
            <li><a className="nav__link" href="#">Контрагентам</a></li>
            <li><a className="nav__link" href="#">Дизайнерам</a></li>
            <li><a className="nav__link" href="#">Вакансии</a></li>
            <a href="#"><img src={Logo} alt="Лого" className="promo__logo__img" /></a>
            <li><a className="nav__link" href="#">Вход/регистрация</a></li>
            <li><a className="nav__link" href="#">Поиск</a></li>
            <li><a className="nav__link" href="#">Корзина</a></li>
        </ul>
    </div> 
    )
}
export default Navigation