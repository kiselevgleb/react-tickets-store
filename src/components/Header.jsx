import React, { Fragment, useState, useEffect } from 'react';
// import mainLogo from '../img/header-logo.png';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField, searchCitiesRequest } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function Header(props) {
    const { search, cities } = useSelector(state => state.skills);
    const dispatch = useDispatch();
    const handleSearch = evt => {
        const { value } = evt.target;
        dispatch(changeSearchField(value));
    };

    useEffect(() => {
        dispatch(searchCitiesRequest(search));
        // dispatch(getCategoriesRequest());
    }, search)

    // let cities = [{ "_id": "5b9a2fa7f83e028786ea5672", "name": "москва" }, { "_id": "5b9a2faef83e028786ea56c2", "name": "могоча" }, { "_id": "5b9a2fb1f83e028786ea56e7", "name": "смоленск" }];
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
    console.log(cities)
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
                    <div className="row left-text">
                        <div className="col d-none d-md-block">
                            <div className="wrap-text">
                                <p className="header-text">Вся жизнь - </p>
                                <p className="header-text-bord"><b>путешествие!</b></p>
                            </div>
                        </div>
                        <div className="col">
                            <form className="calc" onSubmit='#'>
                                <div className="inp-from-location">
                                    <p className="calc-text">Направление</p>
                                    <p className="inline">
                                        <input list="cities-from" id = "from" className="inp" type="text" placeholder="Откуда" type="search" onChange={handleSearch} />
                                        <datalist id="cities-from">
                                            {cities.map(o =>
                                                <option class="list-group-item inp-cities" value={o.name}></option>)}
                                        </datalist>
                                    </p>
                                    <img className="icon" src={iconRef} alt="refresh"></img>
                                    <p className="inline">
                                    <input list="cities-to" className="inp" id = "to" type="text" placeholder="Куда" type="search" onChange={handleSearch} />
                                        <datalist id="cities-to">
                                            {cities.map(o =>
                                                <option class="list-group-item inp-cities" value={o.name}></option>)}
                                        </datalist>
                                    </p>
                                </div>
                                <div className="inp-from-date">
                                    <p className="calc-text">Дата</p>
                                    <input className="inp-date" type="date" placeholder="дд/мм/гг" />
                                    <img className="icon icon-light" src={iconRef} alt="refresh"></img>
                                    <input className="inp-date" type="date" placeholder="дд/мм/гг" />
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