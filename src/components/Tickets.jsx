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
import '../css/but-pages.css';
import { getLastTicRequest, getTicketsDataRequest, changeInputCheckbox, changeInputPrice } from '../actions/actionCreators';

export default function Items(props) {
    // const { loading, error, datatick, have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_express, price_from, price_to  } = useSelector(state => state.skills);
    const { loading, error, datatick, lastTic, from_city_id, to_city_id, date_start, date_end, date_start_arrival, date_end_arrival, have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_air_conditioning, have_express, price_from, price_to } = useSelector(state => state.skills);

    const [num, setNum] = useState({ value: { min: 2000, max: 3000 } });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTicketsDataRequest({ "from_city_id": from_city_id, "to_city_id": to_city_id, "date_start": date_start, "date_end": date_end, "date_start_arrival": date_start_arrival, "date_end_arrival": date_end_arrival, "have_first_clas": have_first_class, "have_second_class": have_second_class, "have_third_class": have_third_class, "have_fourth_class": have_fourth_class, "have_wifi": have_wifi, "have_air_conditioning": have_air_conditioning, "have_express": have_express, "price_from": price_from, "price_to": price_to }));
        dispatch(getLastTicRequest());
    }, [from_city_id, to_city_id, date_start, date_end, date_start_arrival, date_end_arrival, have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_air_conditioning, have_express, price_from, price_to])

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    const handleInput = evt => {
        if (evt.currentTarget[0] !== undefined) {
            dispatch(changeInputPrice(evt.currentTarget[0].value, evt.currentTarget[1].value));
        } else {
            let nameInp = evt.target.name;
            let stateInp = evt.target.checked;
            dispatch(changeInputCheckbox(nameInp, stateInp));
        }
    };
    return (
        <Fragment>
            <div className="wrap-tickets">
                <div className="wrap col-tickets ticket-block">
                    <div className="col-sm-3">
                        <div className=" col filter">
                            <p className="filter-text-big">Дата поездки</p>
                            <input className="inp-big filter-inp-date" id="date" type="date" placeholder="дд/мм/гг" onChange={handleInput} />
                            <p className="filter-text-big">Дата возвращения</p>
                            <input className="inp-big filter-inp-date" id="date" type="date" placeholder="дд/мм/гг" onChange={handleInput} />
                            <div className="filter-line"></div>
                            <div className="row">
                                <div className="filter-icon">
                                    <img className="icon" src={cupe} alt="cupe"></img>
                                </div>
                                <div className="col filter-text">
                                    <label for="customRange2" className="filter-text-sm">Купе</label>
                                </div>
                                <div class="material-switch pull-right filter-switch">
                                    <input id="have_second_class" name="have_second_class" type="checkbox" onChange={handleInput} defaultChecked={have_second_class} />
                                    <label for="have_second_class" class="label-warning"></label>
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
                                    <input id="have_third_class" name="have_third_class" type="checkbox" onChange={handleInput} defaultChecked={have_third_class} />
                                    <label for="have_third_class" class="label-warning"></label>
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
                                    <input id="have_fourth_class" name="have_fourth_class" type="checkbox" onChange={handleInput} defaultChecked={have_fourth_class} />
                                    <label for="have_fourth_class" class="label-warning"></label>
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
                                    <input id="have_first_class" name="have_first_class" type="checkbox" onChange={handleInput} defaultChecked={have_first_class} />
                                    <label for="have_first_class" class="label-warning"></label>
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
                                    <input id="have_wifi" name="have_wifi" type="checkbox" onChange={handleInput} defaultChecked={have_wifi} />
                                    <label for="have_wifi" class="label-warning"></label>
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
                                    <input id="have_express" name="have_express" type="checkbox" onChange={handleInput} defaultChecked={have_express} />
                                    <label for="have_express" class="label-warning"></label>
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
                                    <form className="form" onMouseUp={handleInput} >
                                        <InputRange draggableTrack maxValue={5000} minValue={1000} name="price" value={num.value} onChange={value => setNum({ value })} />
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
                            {lastTic.map(o =>
                                <div className="row">
                                    <div className="last-tick">
                                        <div className="row last-row-inline">
                                            <div className="col last-col">
                                                <p className="last-city">{o.departure.from.city.name}</p>
                                                <p className="last-station">{o.departure.from.railway_station_name}<br></br> вокзал</p>
                                                <img className="last-icon" src={lastTick} alt="lastTick"></img>

                                            </div>
                                            <div className="col last-col">
                                                <p className="last-city">{o.departure.to.city.name}</p>
                                                <p className="last-station">{o.departure.to.railway_station_name}<br></br> вокзал</p>
                                                <p className="last-station last-text">от <b className="last-text-or">{o.min_price}</b> Р</p>

                                            </div>
                                        </div>
                                    </div>
                                </div>)}
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
                        <div className="row blok-left">
                            <div className="btn-pages">
                                <div className="plus-line"></div>
                                <div className="plus-line plus-45"></div>
                            </div>
                            <div className="btn-pages">
                                <div className="btn-text"><b>1</b></div>
                            </div>
                            <div className="btn-pages">
                                <div className="plus-line-mn"></div>
                                <div className="plus-line plus-mn-45"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}
