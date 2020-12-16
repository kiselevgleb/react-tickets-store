import React, { Fragment, useState, useEffect } from 'react';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputCheckbox, getCityIdRequest, changeSearchField, getTicketsDataRequest } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function HeaderOrder(props) {
    // const { from_city_id, to_city_id, date_start, date_end,} = useSelector(state => state.skills);
    const { from_city_id, to_city_id, date_start, date_end, date_start_arrival, date_end_arrival, have_first_class, have_second_class, have_third_class, have_fourth_class, have_wifi, have_air_conditioning, have_express, price_from, price_to  } = useSelector(state => state.skills);

    const { cities } = useSelector(state => state.skills);
    const [city, setCity] = useState([]);
    const dispatch = useDispatch();
    const handleSearch = evt => {
        const { value } = evt.target;
        // console.log(evt.target);
        dispatch(changeSearchField(value));
        let mas = city;
        setCity(mas.concat(cities));
    };
    const getTickets = (evt) => {
        evt.preventDefault();
        dispatch(getCityIdRequest(evt.target.from.value));
        const { value } = evt.target.from;
        changeSearchField(value);
        dispatch(getCityIdRequest(evt.target.from.value));
        const to = cities.filter(O => O.name === evt.target.to.value);
        const from = city.filter(O => O.name === evt.target.from.value);
        console.log(from_city_id)
        dispatch(changeInputCheckbox("from_city_id", from[0]._id));
        dispatch(changeInputCheckbox("to_city_id", to[0]._id));
        dispatch(changeInputCheckbox("date_start", evt.target.date.value));
        dispatch(changeInputCheckbox("date_end", evt.target.date_end.value));
        console.log(from_city_id)
        if(from_city_id===from[0]._id){
        dispatch(getTicketsDataRequest({ "from_city_id": from_city_id, "to_city_id": to_city_id, "date_start": date_start, "date_end":  date_end, "date_start_arrival": date_start_arrival, "date_end_arrival": date_end_arrival, "have_first_clas": have_first_class,"have_second_class": have_second_class, "have_third_class": have_third_class, "have_fourth_class": have_fourth_class, "have_wifi": have_wifi, "have_air_conditioning": have_air_conditioning,"have_express": have_express,"price_from": price_from,"price_to": price_to}));
        // dispatch(getTicketsDataRequest({ "from_city_id": from_city_id, "to_city_id": to_city_id, "date_start": date_start, "date_end": date_end, }));
        }
    };

    return (
        <Fragment>
            <header class="header-container header-container-order">
                <div className="wrap">
                    <div className="row" >
                        <NavLink className="navbar-brand" exact to="/react-shoe-store/build/">
                            <img src="" alt="Лого" />
                        </NavLink>
                    </div>
                </div>
                <nav className="navbar">
                    <div className="wrap">
                        <div className="row" >
                            <div className="col">
                                <ul className="navbar-nav mr-auto">
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/build/#about" >О нас</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/build/#work" >Как это работает</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/build/#feedback" >Отзывы</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link-end" href="/react-shoe-store/build/#contact" >Контакты</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="wrap">
                    <form className="calc-big block" onSubmit={getTickets}>
                        <div className="row">
                            <div className="col col-inline-block">
                                <div className="col wrap-blok">
                                    <label className="calc-big-text block" htmlFor="tend">Направление</label>
                                    <div className="wrap-blok">
                                        <input list="cities-from" id="from" className="inp-big" type="text" placeholder="Откуда" type="search" onChange={handleSearch} />
                                        <datalist id="cities-from">
                                            {cities.map(o =>
                                                <option class="list-group-item inp-cities" value={o.name}></option>)}
                                        </datalist>
                                        <img className="icon" src={iconRef} alt="refresh"></img>
                                        <input list="cities-to" className="inp-big" id="to" type="text" placeholder="Куда" type="search" onChange={handleSearch} />
                                        <datalist id="cities-to">
                                            {cities.map(o =>
                                                <option class="list-group-item inp-cities" value={o.name}></option>)}
                                        </datalist>
                                    </div>
                                </div>
                                <div className="col wrap-blok">
                                    <label className="calc-big-text block" htmlFor="date">Дата</label>
                                    <div className="wrap-blok">
                                        <input className="inp-big " id="date" type="date" placeholder="дд/мм/гг" />
                                        <img className="icon icon-light d-none d-lg-block" src={iconRef} alt="refresh"></img>
                                        <input className="inp-big " id="date_end" type="date" placeholder="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col right">
                            <button type="submit" className="but-from but-from-big">НАЙТИ БИЛЕТЫ</button>
                        </div>
                    </form>
                </div>
                <div class="arrow-wrap padding">
                    <div class="wrap padding">
                        <div class="arrow-start"><b class="arrow-text d-none d-md-block" >Билеты</b></div>
                        <div class="arrow arrow-background"><b class="arrow-text d-none d-md-block">Пассажиры</b></div>
                        <div className="col padding line-wrap">
                            <div class="arrow-line line-rotate-pl"></div>
                            <div class="arrow-line line-rotate-mi"></div>
                        </div>
                        <div class="arrow-three arrow-background"><b class="arrow-text d-none d-md-block">Оплата</b></div>
                        <div className="col padding line-wrap">
                            <div class="arrow-line line-rotate-pl"></div>
                            <div class="arrow-line line-rotate-mi"></div>
                        </div>
                        <div class="arrow-end arrow-background"><b class="arrow-text d-none d-md-block">Проверка</b></div>
                    </div>
                </div>
            </header>
        </Fragment>)
}