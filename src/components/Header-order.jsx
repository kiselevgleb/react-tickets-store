import React, { Fragment, useState, useEffect } from 'react';
// import mainLogo from '../img/header-logo.png';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import { useDispatch, useSelector } from 'react-redux';
import { getCityIdRequest, changeSearchField, getTicketsDataRequest } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    const { cities } = useSelector(state => state.skills);
    // const [data, setData] = useState({});
    const [city, setCity] = useState([]);

    const dispatch = useDispatch();
    const handleSearch = evt => {
        const { value } = evt.target;
        console.log(evt.target);
        dispatch(changeSearchField(value));
        let mas = city;
        setCity(mas.concat(cities))
        // evt._id = cities.filter(O => O.name === evt.target)._id;
    };

    // const { loading, error, cartData } = useSelector(state => state.skills);
    // const [searchInput, setSearchInput] = useState("");
    // const [searchBut, setSearchBut] = useState(false);
    // const dispatch = useDispatch();
    // let cionInCart = 0;
    // if (cartData != []&&cartData != null) {
    //     cionInCart = JSON.parse(cartData).length
    // }
    // const handleSearchBut = () => {
    //     if (searchBut) {
    //         if (searchInput !== "") {
    //             setSearchBut(false);
    //             // props.history.push('/catalog');
    //             props.history.push('/react-shoe-store/catalog');
    //             dispatch(changeSearchField(searchInput));

    //         } else {
    //             setSearchBut(false);
    //         }
    //     } else {
    //         setSearchBut(true);
    //     }
    // };
    // const handleSearchButEnter = (event) => {
    //     if (event.key === 'Enter') {
    //         if (searchBut) {
    //             if (searchInput !== "") {
    //                 setSearchBut(false);
    //                 // props.history.push('/catalog');
    //                 props.history.push('/react-shoe-store/catalog');
    //                 dispatch(changeSearchField(searchInput));
    //             }
    //         }
    //     }
    // };
    // const handleSearchInput = (evt) => {
    //     setSearchInput(evt.target.value);
    // };
    // const handleCart = () => {
    //     // props.history.push('/cart');
    //     props.history.push('/react-shoe-store/build/cart');
    // };
    const getTickets = (evt) => {
        evt.preventDefault();
        dispatch(getCityIdRequest(evt.target.from.value));

        // setCity(cities);
        console.log(111);
        // console.log(city);
        const { value } = evt.target.from;
        // console.log(value);
        // console.log(cities);
        changeSearchField(value);
        dispatch(getCityIdRequest(evt.target.from.value));
        // console.log(data);
        // console.log(city_id);
        // console.log(search);
        // console.log(evt.target.from.value);
        
        // dispatch(changeSearchField(evt.target.to.value));
        // console.log(evt.target.from);
        // console.log(cities);
        const to = cities.filter(O => O.name === evt.target.to.value);

        // setCity(cities);
        // console.log(city);
        // console.log(evt.target.from.value);

        const from = city.filter(O => O.name === evt.target.from.value);
        
        console.log(from[0]._id);
        console.log( to[0]._id);
        // console.log(city);
        // console.log(city);
        console.log( { "from_city_id": from[0]._id, "to_city_id": to[0]._id, "date_start": evt.target.date.value, "date_end": evt.target.date_end.value,});

        dispatch(getTicketsDataRequest({ "from_city_id": from[0]._id, "to_city_id": to[0]._id, "date_start": evt.target.date.value, "date_end": evt.target.date_end.value,}));
        // dispatch(getOrderInfoRequest(id));
        // props.history.push(`/catalog/${id}`);
        // props.history.push(`/react-shoe-store/build/catalog/${id}`);
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
                                        {/* <NavLink className="nav-link" exact to="/react-shoe-store/build/about" >О нас</NavLink> */}
                                        <a className="nav-link" href="/react-shoe-store/build/#about" >О нас</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/build/#work" >Как это работает</a>
                                        {/* <NavLink className="nav-link" exact to="/react-shoe-store/build/work" >Как это работает</NavLink> */}
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/react-shoe-store/build/#feedback" >Отзывы</a>
                                        {/* <NavLink className="nav-link" exact to="/react-shoe-store/build/reviews" >Отзывы</NavLink> */}
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link-end" href="/react-shoe-store/build/#contact" >Контакты</a>
                                        {/* <NavLink className="nav-link-end" exact to="/react-shoe-store/build/contacts" >Контакты</NavLink> */}
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