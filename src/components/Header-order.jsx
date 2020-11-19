import React, { Fragment, useState, useEffect } from 'react';
// import mainLogo from '../img/header-logo.png';
import iconRef from '../img/icon.png';
import iconVec from '../img/vector.png';
import { useDispatch, useSelector } from 'react-redux';
import { changeSearchField } from '../actions/actionCreators';
import { NavLink } from 'react-router-dom'

export default function Header(props) {
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
                    {/* <div className="col-lg-1"> */}
                    <form className="calc-big block" onSubmit='#'>
                        <div className="row">

                            <div className="col col-inline-block">
                                <div className="col wrap-blok">
                                    <label className="calc-big-text block" htmlFor="tend">Направление</label>
                                    <div className="wrap-blok">
                                        <input className="inp-big " type="text" id="tend" placeholder="Откуда" />
                                        <img className="icon d-none d-lg-block" src={iconRef} alt="refresh"></img>
                                        <input className="inp-big " type="text" placeholder="Куда" />
                                    </div>
                                </div>
                                {/* <div class="break"></div> */}
                                <div className="col wrap-blok">
                                    <label className="calc-big-text block" htmlFor="date">Дата</label>
                                    <div className="wrap-blok">
                                        <input className="inp-big " id="date" type="date" placeholder="дд/мм/гг" />
                                        {/* <img className="icon icon-light" src={iconRef} alt="refresh"></img> */}
                                        <img className="icon icon-light d-none d-lg-block" src={iconRef} alt="refresh"></img>
                                        <input className="inp-big " type="date" placeholder="" />
                                    </div>
                                    {/* <div className="right"> */}
                                    {/* </div>   */}
                                </div>
                            </div>
                            {/* <div > */}
                            {/* </div> */}

                        </div>
                        <div className="col right">
                            <button type="submit" className="but-from but-from-big">НАЙТИ БИЛЕТЫ</button>

                        </div>

                    </form>
                    {/* </div> */}
                    {/* </div> */}
                </div>
                <div class="row arrow-wrap left">
                <div className="col">
                <div class="arrow">
                </div>
                </div>
                <div className="col">
                <div class="arrow arrow-background">
                </div>
                </div>
                <div className="col">
                <div class="arrow arrow-background">
                </div>
                
                        {/* </div> */}
                    </div>
                </div>
            </header>
        </Fragment>)
}