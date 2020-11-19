import React, { Fragment } from 'react';
import buttonComfortable from '../img/comf.png';
import buttonTrend from '../img/trend.png';
import buttonOffice from '../img/office.png';

export default function Work(props) {

    return (
        <Fragment>
            <main className="work-container" id="work">
                <div className="wrap block">
                    <div className="row big-row">
                        <div className="col">
                            <h2 className="h2-black">КАК ЭТО РАБОТАЕТ</h2>
                        </div>
                        <div className="col right">
                            <button className="but-now-more">Узнать больше</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col"></div>
                        <div className="col col-work">
                            <img className="img-work" src={buttonComfortable} alt="refresh"></img>
                            <p className="text-work">Удобный заказ<br></br>на сайте</p>
                        </div>
                        <div className="col col-work">
                            <img className="img-work" src={buttonOffice} alt="refresh"></img>
                            <p className="text-work">Нет необходимости<br></br>ехать в офис</p>
                        </div>
                        <div className="col col-work">
                            <img className="img-work" src={buttonTrend} alt="refresh"></img>
                            <p className="text-work">Огромный выбор<br></br>направлений</p>
                        </div>
                        <div className="col"></div>
                    </div>
                </div>
            </main>
        </Fragment>
    )
}
