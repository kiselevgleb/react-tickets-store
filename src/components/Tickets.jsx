import React, { Fragment, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import Train from '../img/train.png';
import Left from '../img/arrow-left.png';
import Right from '../img/arrow-right.png';

export default function Items(props) {
    const { loading, error, datatick } = useSelector(state => state.skills);

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }
    console.log(datatick)
    return (
        <Fragment>
            <div className="wrap-tickets">
                <div className="wrap col-tickets ticket-block">
                    <div className="col-sm-4 filter">
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
