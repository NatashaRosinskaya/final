import Header from "./Header"
import { useHistory } from "react-router-dom"
function HomePage(){
    const history = useHistory()
    function directToCertificates(){
        history.push('/certificates')
    }

    function directToCompany(){
        history.push('/about_company')
    }
        return (
            <>
            <Header />
            <section className="catalog__block">
                <div className="container">
                <div className="catalog__information">
                    <p className="catalog__description">К мероприятиям</p>
                    <h2 className="catalog__title">Настоящая красота здесь!</h2>
                </div>
                <div className="catalog__btns">
                    <button className="catalog__btn">Свадьба</button>
                    <button className="catalog__btn">Мужу</button>
                    <button className="catalog__btn">Жене</button>
                    <button className="catalog__btn">Партнеру</button>
                    <button className="catalog__btn">Коллекции</button>
                    <button className="catalog__btn">Редкость</button>
                </div>
                <div className="catalog__prevs">
                    <div className="catalog__prev">
                        <a href="#"><img src='image/prev_catalog1.svg' alt="Превью каталога" /></a>
                        <p>Подвески</p>
                    </div>
                    <div className="catalog__prev">
                        <a href="#"><img src='image/prev_catalog2.svg' alt="Превью каталога" /></a>
                        <p>Браслеты</p>
                    </div>
                    <div className="catalog__prev">
                        <a href="#"><img src='image/prev_catalog3.svg' alt="Превью каталога" /></a>
                        <p>Серьги</p>
                    </div>
                    <div className="catalog__prev">
                        <a href="#"><img src='image/prev_catalog4.svg' alt="Превью каталога" /></a>
                        <p>Кольца</p>
                    </div>
                    <div className="catalog__prev">
                        <a href="#"><img src='image/prev_catalog5.svg' alt="Превью каталога" /></a>
                        <p>Запонки</p>
                    </div>
                    <div className="catalog__prev">
                        <a href="#"><img src='image/prev_catalog6.svg' alt="Превью каталога" /></a>
                        <p>Часы</p>
                    </div>
                    </div>
                </div>
            </section>

            <section className="address">
                <div className="container">
                    <div className="address__information">
                        <p className="address__inf">Не знаете, что выбрать?</p>
                        <h2 className="address__title">Приобретите наши сертификаты</h2>
                        <p className="address__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut duis tortor vitae pellentesque egestas quam pulvinar. Pellentesque porttitor velit sit pellentesque. Suspendisse donec pretium id dignissim. Dignissim ultrices eget orci viverra. Egestas quis et ut ultrices imperdiet lectus nulla tempus. Pharetra lorem sem purus nisi libero viverra ipsum.</p>
                        <button className="address__btn" onClick={()=>{directToCertificates()}}>Сертификаты</button>
                    </div>
                </div>
            </section>

            <section className="articles">
                <div className="container"> 
                <div className="articles__information">
                    <p className="articles__description">Полезные статьи</p>
                    <h2 className="articles__title">Лучшие советы по подбору дорогих подарков</h2>
                </div>
                <div className="articles__prevs">
                    <div className="articles__prev">
                    <img src='image/prev_public1.svg' alt="Превью статьи" />
                    <a href="https://nikawatches.ru/articles/kakie-chasy-vybrat/" target="_blank"> <p className="articles__prev__title">Как выбрать час для <br />своей будущей жены</p></a>
                    </div>
                    <div className="articles__prev">
                    <img src='image/prev_public2.svg' alt="Превью статьи" />
                    <a href="https://www.lux-fair.ru/dlya-chego-nuzhny-muzhskie-zaponki-gid-po-stilyu/" target="_blank"> <p className="articles__prev__title">Запонки для мужа: 7 ключевых <br />правил покупки аксессуара</p></a>
                    </div>
                    <div className="articles__prev">
                    <img src='image/prev_public3.svg' alt="Превью статьи" />
                    <a href="https://onelovestory.pro/blog/10-sovetov-kak-vybrat-obruchalnye-kolca/" target="_blank"> <p className="articles__prev__title">Как выбрать обручальные <br />кольца молодоженам</p></a>
                    </div>
                </div>
                <div className="article__btns">
                    <button className="article__btn" onClick={()=>{directToCompany()}}>Читать о нашей компании</button>
                </div>
                </div>
            </section>

        

            <section className="feedback">
            <div className="container"> 
                <div className="feedback__block">
                    <div className="feedback__information">
                        <p className="feedback__description">Полезные советы и персональный предложения</p>
                        <h2 className="feedback__title">Эксклюзивная рассылка</h2>
                    </div>
                    <div className="feedback__forms">
                        <ul>
                            <li>Личный менеджер</li>
                            <li>Доставка и оформление</li>
                            <li>Индивидуальный дизайн</li>
                        </ul>

                        <form action="#" method="POST">
                        <div className="forms">
                        <div className="contact__information">
                            <div className="first__name">
                                <input type="text" required placeholder="Ваша фамилия" maxLength="25"/>
                            </div>
                            <div className="last__name">
                                <input type="text" required placeholder="Ваше имя" maxLength="25"/>
                            </div>
                            <div className="email">
                                <input type="email" required placeholder="Ваш e-mail" maxLength="25"/>
                            </div>
                        </div>
                        <div className="feedback__message">
                            <textarea name="message" cols="30" rows="13" placeholder="Ваше сообщение"></textarea>
                        </div>
                        </div>
                        <div className="feedback__btns">
                            <button className="feedback__btn" type="submit">Отправить сообщение </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </section>
            </>
        )
     
}
export default HomePage