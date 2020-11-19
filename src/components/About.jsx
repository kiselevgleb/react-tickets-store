import React, { Fragment } from 'react';

export default function About(props) {

    return (
        <Fragment>
            <main className="container" id="about">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2>О НАС</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-inline">
                            <div className="line-ver"></div>
                            <p>
                                Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.<br></br><br></br> Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? Мы расскажем о преимуществах заказа через интернет.<br></br><br></br>
                                <b>Покупать жд билеты дешево можно за 90 суток до отправления поезда. Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
