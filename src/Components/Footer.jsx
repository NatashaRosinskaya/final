function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__blocks">
                <div className="footer__block item1">
                    <h3>Полезные ссылки</h3>
                    <a href="/delivery"><p>Доставка</p></a>
                    <a href="/payment"><p>Оплата</p></a>
                    <a href="/vacancy"><p>Вакансии</p></a>
                    <a href="/certificates"><p>Сертификаты</p></a>
                    </div>
                <div className="footer__block">
                    <h3>Оплата</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                    <div className="footer__payment">
                        <i className="fa fa-cc-visa" aria-hidden="true"></i>
                        <i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                    </div>                    
                </div>
                <div className="footer__block">
                    <h3>Контакты</h3>
                    <div className="footer__contacts">
                    <p><i className="fa fa-phone-square" aria-hidden="true"></i><a href="tel:+78122345655"> 8 (812) 234-56-55</a> </p>
                    <p><i className="fa fa-phone-square" aria-hidden="true"></i><a href="tel:+78122345656"> 8 (812) 234-56-56</a></p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:ojjo@ojjo.ru"> ojjo@ojjo.ru</a></p>
                    </div>
                    </div>
                    <div className="footer__block">
                    <h3>Социальные сети</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper justo, nec, pellentesque.</p>
                    <div className="footer__icons">
                        <div className="footer__icon yt"><i className="fa fa-youtube-play" aria-hidden="true"></i></div>
                        <div className="footer__icon vk"><i className="fa fa-vk" aria-hidden="true"></i></div>
                        <div className="footer__icon tel"><i className="fa fa-telegram" aria-hidden="true"></i></div>
                        <div className="footer__icon inst"><i className="fa fa-instagram" aria-hidden="true"></i></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer