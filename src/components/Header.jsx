import React, { Fragment, useState, useEffect } from 'react';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputCheckbox, getCityIdRequest, changeSearchField, getTicketsDataRequest } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    const { search, cities } = useSelector(state => state.skills);
    const [city, setCity] = useState([]);
    const dispatch = useDispatch();
    const handleSearch = evt => {
        console.log(cities)
        const { value } = evt.target;
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
        
        dispatch(changeInputCheckbox("from_city_id", from[0]._id));
        dispatch(changeInputCheckbox("to_city_id", to[0]._id));
        dispatch(changeInputCheckbox("date_start", evt.target.date.value));
        dispatch(changeInputCheckbox("date_end", evt.target.date_end.value));
        // console.log(from_city_id)
        // if(from_city_id===from[0]._id){
        // dispatch(getTicketsDataRequest({ "from_city_id": from_city_id, "to_city_id": to_city_id, "date_start": date_start, "date_end":  date_end, "date_start_arrival": date_start_arrival, "date_end_arrival": date_end_arrival, "have_first_clas": have_first_class,"have_second_class": have_second_class, "have_third_class": have_third_class, "have_fourth_class": have_fourth_class, "have_wifi": have_wifi, "have_air_conditioning": have_air_conditioning,"have_express": have_express,"price_from": price_from,"price_to": price_to}));
        // dispatch(getTicketsDataRequest({ "from_city_id": from_city_id, "to_city_id": to_city_id, "date_start": date_start, "date_end": date_end, }));
        // }
        dispatch(getTicketsDataRequest({ "from_city_id": from[0]._id, "to_city_id": to[0]._id, "date_start": evt.target.date.value, "date_end": evt.target.date_end.value, }));
        // }
        props.history.push(`/order`);

    };
    return (
        <Fragment>
            <header class="header-container">
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
                    <div className="row left-text">
                        <div className="col d-none d-md-block">
                            <div className="wrap-text">
                                <p className="header-text">Вся жизнь - </p>
                                <p className="header-text-bord"><b>путешествие!</b></p>
                            </div>
                        </div>
                        <div className="col">
                            <form className="calc" onSubmit={getTickets}>
                                <div className="inp-from-location">
                                    <p className="calc-text">Направление</p>
                                    <p className="inline">
                                        <input list="cities-from" id = "from" className="inp" type="text" placeholder="Откуда" type="search" onChange={handleSearch} />
                                        <datalist id="cities-from">
                                        {cities === [] || cities.map === undefined? <div></div> :
                                        cities.map(o =>
                                                <option class="list-group-item inp-cities" value={o.name}></option>)}
                                        </datalist>
                                    </p>
                                    <img className="icon" src={iconRef} alt="refresh"></img>
                                    <p className="inline">
                                    <input list="cities-to" className="inp" id = "to" type="text" placeholder="Куда" type="search" onChange={handleSearch} />
                                        <datalist id="cities-to">
                                        {cities == [] || cities.map === undefined ? <div></div> :
                                        cities.map(o =>
                                                <option class="list-group-item inp-cities" value={o.name}></option>)}
                                        </datalist>
                                    </p>
                                </div>
                                <div className="inp-from-date">
                                    <p className="calc-text">Дата</p>
                                    <input className="inp-date" id="date" type="date" placeholder="дд/мм/гг" />
                                    <img className="icon icon-light" src={iconRef} alt="refresh"></img>
                                    <input className="inp-date" id="date_end" type="date" placeholder="дд/мм/гг" />
                                </div>
                                <button type="submit" className="but-from">НАЙТИ БИЛЕТЫ</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="line">
                </div>
            </header>
        </Fragment>)
}