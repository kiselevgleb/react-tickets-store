import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import Train from '../img/train.png';
import Left from '../img/arrow-left.png';
import Right from '../img/arrow-right.png';
import cupe from '../img/filter/cupe.png';
import plaz from '../img/filter/plaz.png';
import pas from '../img/filter/pas.png';
import star from '../img/filter/star.png';
import wifi from '../img/filter/wifi.png';
import express from '../img/filter/express.png';
import subbut from '../img/filter/sub-but.png';
import lastTick from '../img/last-tic.png';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../css/but-plus.css';
import '../css/filter.css';
import '../css/last-tick.css';

export default function Items(props) {
    const { loading, error, datatick } = useSelector(state => state.skills);
    const [num, setNum] = useState({ value: { min: 2000, max: 3000 } });

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }




    return (
        <Fragment>
            <div className="wrap-tickets">
                <div className="wrap col-tickets ticket-block">
                    <div className="col-sm-4">
                        <div className=" col filter">
                            <p className="filter-text-big">Дата поездки</p>
                            <input className="inp-big filter-inp-date" id="date" type="date" placeholder="дд/мм/гг" />
                            <p className="filter-text-big">Дата возвращения</p>
                            <input className="inp-big filter-inp-date" id="date" type="date" placeholder="дд/мм/гг" />
                            <div className="filter-line"></div>
                            <div className="row">
                                <div className="filter-icon">
                                    <img className="icon" src={cupe} alt="cupe"></img>
                                </div>
                                <div className="col filter-text">
                                    <label for="customRange2" className="filter-text-sm">Купе</label>
                                </div>
                                <div class="material-switch pull-right filter-switch">
                                    <input id="someSwitchOptionCupe" name="someSwitchOptionCupe" type="checkbox" />
                                    <label for="someSwitchOptionCupe" class="label-warning"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="filter-icon">
                                    <img className="icon" src={plaz} alt="cupe"></img>
                                </div>
                                <div className="col filter-text">
                                    <label for="customRange2" className="filter-text-sm">Плацкарт</label>
                                </div>
                                <div class="material-switch pull-right filter-switch">
                                    <input id="someSwitchOptionPlaz" name="someSwitchOptionPlaz" type="checkbox" />
                                    <label for="someSwitchOptionPlaz" class="label-warning"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="filter-icon">
                                    <img className="icon" src={pas} alt="cupe"></img>
                                </div>
                                <div className="col filter-text">
                                    <label for="customRange2" className="filter-text-sm">Сидячий</label>
                                </div>
                                <div class="material-switch pull-right filter-switch">
                                    <input id="someSwitchOptionPas" name="someSwitchOptionPas" type="checkbox" />
                                    <label for="someSwitchOptionPas" class="label-warning"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="filter-icon">
                                    <img className="icon" src={star} alt="cupe"></img>
                                </div>
                                <div className="col filter-text">
                                    <label for="customRange2" className="filter-text-sm">Люкс</label>
                                </div>
                                <div class="material-switch pull-right filter-switch">
                                    <input id="someSwitchOptionStar" name="someSwitchOptionStar" type="checkbox" />
                                    <label for="someSwitchOptionStar" class="label-warning"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="filter-icon">
                                    <img className="icon" src={wifi} alt="cupe"></img>
                                </div>
                                <div className="col filter-text">
                                    <label for="customRange2" className="filter-text-sm">Wi-Fi</label>
                                </div>
                                <div class="material-switch pull-right filter-switch">
                                    <input id="someSwitchOptionWiFi" name="someSwitchOptionWiFi" type="checkbox" />
                                    <label for="someSwitchOptionWiFi" class="label-warning"></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="filter-icon">
                                    <img className="icon" src={express} alt="cupe"></img>
                                </div>
                                <div className="col filter-text">
                                    <label for="customRange2" className="filter-text-sm">Экспресс</label>
                                </div>
                                <div class="material-switch pull-right filter-switch">
                                    <input id="someSwitchOptionExp" name="someSwitchOptionExp" type="checkbox" />
                                    <label for="someSwitchOptionExp" class="label-warning"></label>
                                </div>
                            </div>
                            <div className="filter-line"></div>
                            <div className="row">
                                <div className="col">
                                    <p className="filter-text-big filter-text-big-sm-top">Стоимость</p>
                                    <div className="row">
                                        <p className="filter-text-range">от</p>
                                        <p className="filter-text-range">до</p>
                                    </div>
                                    <form className="form">
                                        <InputRange draggableTrack maxValue={5000} minValue={1000} onChange={value => setNum({ value })} value={num.value} />
                                    </form>
                                </div>
                            </div>
                            <div className="filter-line-after"></div>
                            <div className="row">
                                <img className="icon filter-icon-after" src={subbut} alt="subbut"></img>
                                <p className="filter-text-big filter-text-after"><b>Туда</b></p>
                                <div className="plus">
                                    <div className="plus-line"></div>
                                    <div className="plus-line plus-90"></div>
                                </div>
                            </div>
                            <div className="filter-line"></div>
                            <div className="row">
                                <img className="icon filter-icon-after" src={subbut} alt="subbut"></img>
                                <p className="filter-text-big filter-text-after2"><b>Обратно</b></p>
                                <div className="plus">
                                    <div className="plus-line"></div>
                                    <div className="plus-line plus-90"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col wrap-last">
                            <div className="row">
                                <p className="h1-last"><b>ПОСЛЕДНИЕ БИЛЕТЫ</b></p>
                            </div>
                            <div className="row">
                                <div className="last-tick">
                                    <div className="row last-row-inline">
                                        <div className="col last-col">
                                            <p className="last-city">Санкт-Петербург</p>
                                            <p className="last-station">Курский<br></br> вокзал</p>
                                            <img className="last-icon" src={lastTick} alt="lastTick"></img>

                                        </div>
                                        <div className="col last-col">
                                            <p className="last-city">Самара</p>
                                            <p className="last-station">Курский<br></br> вокзал</p>
                                            <p className="last-station last-text">от <b className="last-text-or">2500</b> Р</p>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className="col-sm-10 ticket-block col-tickets">
                        <div className="row tickets sort-tickets-text block-percent">
                            <div className="col-sm-2 col-tickets left block-percent"><p>найдено 20</p></div>
                            <div className="col-sm-1 block-percent"></div>
                            <div className="col-sm-2 block-percent">сортировать по: времени</div>
                            <div className="col-sm-2 col-tickets block-percent"></div>
                            <div className="col-sm-3 col-tickets right block-percent">показывать по: 5  10  20 </div>
                        </div>
                        {datatick.items === undefined ? <div></div> :
                            datatick.items.map(o =>
                                <div className="row">
                                    <div className="ticket sort-tickets-text">
                                        <div className="col-sm-2 ticket-color ">
                                            <img src={Train} className="img-train" alt='Train' />
                                            <p className="ticket-text-big"><b>{o.departure.train.name}</b></p>
                                            <div className="ticket-text-sm">
                                                <p><b>{o.departure.from.city.name}</b><br></br><b>{o.departure.to.city.name}</b></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-1 block-percent">
                                            <div className="row">
                                                <p className="ticket-text-sm-time"><b className="ticket-text-big">{new Date(o.departure.from.datetime).getHours() + ':'}{new Date(o.departure.from.datetime).getMinutes() < 10 ? '0' + new Date(o.departure.from.datetime).getMinutes() : new Date(o.departure.from.datetime).getMinutes()}</b><br></br>{o.departure.from.city.name}<br></br> {o.departure.from.railway_station_name}</p>
                                            </div>
                                            <div className="row">
                                                <p className="ticket-text-sm-time"><b className="ticket-text-big">{new Date(o.departure.from.datetime).getHours() + ':'}{new Date(o.departure.from.datetime).getMinutes() < 10 ? '0' + new Date(o.departure.from.datetime).getMinutes() : new Date(o.departure.from.datetime).getMinutes()}</b><br></br>{o.departure.from.city.name}<br></br>{o.departure.from.railway_station_name}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-1 block-percent block-time">
                                            <div className="row">
                                                <p className="ticket-time">{new Date(o.departure.duration).getHours() + ':'}{new Date(o.departure.duration).getMinutes() < 10 ? '0' + new Date(o.departure.duration).getMinutes() : new Date(o.departure.duration).getMinutes()}<br></br></p>
                                                <img src={Right} className="arrow-l-r" alt='Left' />
                                            </div>
                                            <div className="row">
                                                <p className="ticket-time">{new Date(o.departure.duration).getHours() + ':'}{new Date(o.departure.duration).getMinutes() < 10 ? '0' + new Date(o.departure.duration).getMinutes() : new Date(o.departure.duration).getMinutes()}<br></br></p>
                                                <img src={Left} className="arrow-l-r" alt='Left' />
                                            </div>
                                        </div>
                                        <div className="col-sm-1 block-percent">
                                            <div className="row">
                                                <p className="ticket-text-sm-time"> <b className="ticket-text-big">{new Date(o.departure.to.datetime).getHours() + ':'}{new Date(o.departure.to.datetime).getMinutes() < 10 ? '0' + new Date(o.departure.to.datetime).getMinutes() : new Date(o.departure.to.datetime).getMinutes()}</b><br></br>{o.departure.to.city.name}<br></br>{o.departure.to.railway_station_name}</p>
                                            </div>
                                            <div className="row">
                                                <p className="ticket-text-sm-time"> <b className="ticket-text-big">{new Date(o.departure.to.datetime).getHours() + ':'}{new Date(o.departure.to.datetime).getMinutes() < 10 ? '0' + new Date(o.departure.to.datetime).getMinutes() : new Date(o.departure.to.datetime).getMinutes()}</b><br></br>{o.departure.to.city.name}<br></br>{o.departure.to.railway_station_name}</p>
                                            </div>
                                        </div>
                                        <div className="col-sm-1"></div>
                                        <div className="col-sm-1">
                                            <div className="line-dash" />

                                        </div>
                                        <div className="col-sm-3 text-price">
                                            <div className="row block-percent">
                                                {!o.departure.have_fourth_class ? <div></div> :
                                                    <div className="row price-row">
                                                        <p className="ticket-text-sm-time price-mar">Сидячий</p>
                                                        <p className="ticket-text-sm-time price-mar text-price-orang">{o.departure.available_seats_info.fourth}</p>
                                                        <p className="ticket-text-sm-time price-mar">от <b className="ticket-text-big">{o.departure.price_info.fourth.bottom_price} Р</b></p>
                                                    </div>}
                                                {!o.departure.have_third_class ? <div></div> :
                                                    <div className="row price-row">
                                                        <p className="ticket-text-sm-time price-mar">Плацкарт</p>
                                                        <p className="ticket-text-sm-time price-mar text-price-orang">{o.departure.available_seats_info.third}</p>
                                                        <p className="ticket-text-sm-time price-mar">от <b className="ticket-text-big">{o.departure.price_info.third.bottom_price} Р</b></p>
                                                    </div>}
                                                {!o.departure.have_second_class ? <div></div> :
                                                    <div className="row price-row">
                                                        <p className="ticket-text-sm-time price-mar">Купе</p>
                                                        <p className="ticket-text-sm-time price-mar text-price-orang">{o.departure.available_seats_info.second}</p>
                                                        <p className="ticket-text-sm-time price-mar">от <b className="ticket-text-big">{o.departure.price_info.second.bottom_price} Р</b></p>
                                                    </div>}
                                                {!o.departure.have_first_class ? <div></div> :
                                                    <div className="row price-row">
                                                        <p className="ticket-text-sm-time price-mar">Люкс</p>
                                                        <p className="ticket-text-sm-time price-mar text-price-orang">{o.departure.available_seats_info.first}</p>
                                                        <p className="ticket-text-sm-time price-mar">от <b className="ticket-text-big">{o.departure.price_info.first.bottom_price} Р</b></p>
                                                    </div>}
                                                <button type="submit" class="but-from but-from-big price-button">Выбрать места</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
