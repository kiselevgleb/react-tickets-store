import React, { Fragment } from 'react';
import fb from '../img/fb.png';
import fb2 from '../img/fb2.png';
import point from '../img/point.png';

export default function Feedback(props) {

    return (
        <Fragment>
            <main className="container" id="feedback">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2>ОТЗЫВЫ</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col col-fb-width">
                            <img className="img-fb" src={fb} alt="refresh"></img>
                            <div>
                                <p><b>Екатерина Вальнова</b></p>
                                <p className="text-fb">“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.”</p>
                            </div>
                        </div>
                        <div className="col col-fb-width">
                            <img className="img-fb" src={fb2} alt="refresh"></img>
                            <div>
                                <p><b>Екатерина Вальнова</b></p>
                                <p className="text-fb">“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-center">
                        <div className="col">
                            <img className="point" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                            <img className="point point-light" src={point} alt="next"></img>
                        </div>
                    </div>
                </div>
            </main>
            {/* <main className="container" id="feedback">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2>ОТЗЫВЫ</h2>
                        </div>
                    </div>
                    <div className="row row-inline">
                        <div className="col-inline">
                            <img className="img-fb" src={fb} alt="refresh"></img>
                            <div>
                                <p><b>Екатерина Вальнова</b></p>
                                <p className="text-fb">“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.”</p>
                            </div>
                        </div>
                        <div className="col-inline">
                            <img className="img-fb" src={fb2} alt="refresh"></img>
                            <div>
                                <p><b>Екатерина Вальнова</b></p>
                                <p className="text-fb">“Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые.”</p>
                            </div>
                        </div>
                    </div>
                    <div className="row row-center">
                    <div className="col">
                        <img className="point" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                        <img className="point point-light" src={point} alt="next"></img>
                    </div>
                    </div>
                </div>
            </main> */}
        </Fragment>
    )
}
