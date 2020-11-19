import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import phone from '../img/phone.png';
import skype from '../img/skype.png';
import vector from '../img/vector.png';
import mail from '../img/mail.png';
import f from '../img/f.png';
import l from '../img/l.png';
import y from '../img/y.png';
import g from '../img/g.png';
import t from '../img/t.png';
import str from '../img/str.png';

export default function Footer(props) {

    return (
        <Fragment>
            <footer className="fb-container" id="contact">
                <div className="wrap block">
                    <div className="row">
                        <div className="col">
                            <h2 className="h2-black h2-mar">Свяжитесь с нами</h2>
                            <div className="fb-cont">
                                <img className="fb-point" src={phone} alt="next"></img>
                                <p className="fb-text">8 (800) 000 00 00</p>
                            </div>
                            <div className="fb-cont">
                                <img className="fb-point" src={mail} alt="next"></img>
                                <p className="fb-text">inbox@mail.ru</p>
                            </div>
                            <div className="fb-cont">
                                <img className="fb-point" src={skype} alt="next"></img>
                                <p className="fb-text">tu.train.tickets</p>
                            </div>
                            <div className="fb-cont">
                                <img className="fb-point" src={vector} alt="next"></img>
                                <p className="fb-text">г. Москва <br></br>ул. Московская 27-35 <br></br>555 555</p>
                            </div>
                        </div>
                        <div className="col">
                            <h2 className="h2-black h2-mar">Подписка</h2>
                            <div className="fb-cont">
                                <p className="fb-text">Будьте в курсе событий</p>
                            </div>
                            <div>
                                <form className="fb-cont fb-form" onSubmit='#'>
                                    <input className="inp-sent" type="text" placeholder="e-mail" />
                                    <button type="submit" className="but-sent">ОТПРАВИТЬ</button>
                                </form>
                            </div>
                            <div className="fb-cont">
                                <p className="fb-text"><b>Подписывайтесь на нас</b></p>
                            </div>
                            <div>
                                <img className="fb-point" src={y} alt="SS"></img>
                                <img className="fb-point" src={l} alt="SS"></img>
                                <img className="fb-point" src={g} alt="SS"></img>
                                <img className="fb-point" src={f} alt="SS"></img>
                                <img className="fb-point" src={t} alt="SS"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fb-line">
                </div>
                <div className="wrap block">
                <div className="row fb-down">
                    <div className="col left">
                        <NavLink className="navbar-brand" exact to="/react-shoe-store/build/">
                            <img src="" alt="Лого" />
                        </NavLink>
                    </div>
                    <div className="col center">
                        <img className="fb-str" src={str} alt="UP"></img>
                    </div>
                    <div className="col right">
                        <p className="fb-text"><b>2020 WEB</b></p>
                    </div>
                </div>
                </div>
            </footer>
        </Fragment>
    )
}
