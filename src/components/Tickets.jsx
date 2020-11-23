import React, { Fragment, useState, useEffect } from 'react';
// import { getOrderInfoRequest, getItemsRequest, getCategoriesRequest, getItemsCatRequest, getAddItemsRequest } from '../actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';
import Train from '../img/train.png';
import Left from '../img/arrow-left.png';
import Right from '../img/arrow-right.png';

export default function Items(props) {
    const { loading, error } = useSelector(state => state.skills);
    // const [cat, setCat] = useState("");
    // const [coin, setCoin] = useState(6);
    // const dispatch = useDispatch();
    // const [it, setIt] = useState([]);

    // useEffect(() => {
    //     dispatch(getItemsRequest());
    //     dispatch(getCategoriesRequest());
    // }, [dispatch])

    // // const getProducts = id => {
    // //     setCoin(6);
    // //     setCat(id);
    // //     setIt([]);
    // //     dispatch(getItemsCatRequest(id));
    // // };

    // // const loadItems = () => {
    // //     setIt(it.concat(items));
    // //     dispatch(getAddItemsRequest(coin, cat));
    // //     setCoin(coin + 6);
    // // };
    // // const getOrderRequest = id => {
    // //     dispatch(getOrderInfoRequest(id));
    // //     // props.history.push(`/catalog/${id}`);
    // //     props.history.push(`/react-shoe-store/build/catalog/${id}`);
    // // };

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
                    {/* <div className="row" > */}
                    <div className="col-sm-4 filter">
                        {/* <div className="filter"></div> */}
                    </div>
                    <div className="col-sm-10 ticket-block col-tickets">
                        <div className="row tickets sort-tickets-text block-percent">
                            <div className="col-sm-2 col-tickets left block-percent"><p>найдено 20</p></div>
                            <div className="col-sm-1 block-percent"></div>
                            <div className="col-sm-2 block-percent">сортировать по: времени</div>
                            <div className="col-sm-2 col-tickets block-percent"></div>
                            <div className="col-sm-3 col-tickets right block-percent">показывать по: 5  10  20 </div>
                        </div>
                        <div className="row">
                            <div className="ticket sort-tickets-text">
                                <div className="col-sm-2 ticket-color ">
                                    <img src={Train} className="img-train" alt='Train' />
                                    <p className="img-train ticket-text-big"><b>116С</b></p>
                                    <div className="ticket-text-sm">
                                        <p>Адлер<br></br><b>Москва</b><br></br><b>Санкт-Петербург</b></p>
                                    </div>

                                </div>
                                <div className="col-sm-1 block-percent">
                                    <div className="row">
                                        <p className="ticket-text-sm-time"> <b className="ticket-text-big">00:10</b><br></br>Москва<br></br> Курский вокзал</p>
                                    </div>
                                    <div className="row">
                                        <p className="ticket-text-sm-time"><b className="ticket-text-big">00:10</b><br></br>Москва<br></br> Курский вокзал</p>
                                    </div>
                                </div>
                                <div className="col-sm-1 block-percent block-time">
                                    <div className="row">
                                        <p className="ticket-time">9 : 42<br></br></p>
                                        <img src={Right} className="arrow-l-r" alt='Left' />
                                    </div>
                                    <div className="row">
                                        <p className="ticket-time">9 : 42<br></br></p>
                                        <img src={Left} className="arrow-l-r" alt='Left' />
                                    </div>
                                </div>

                                <div className="col-sm-1 block-percent">
                                    <div className="row">
                                        <p className="ticket-text-sm-time"> <b className="ticket-text-big">09:52</b><br></br>Санкт-Петербург<br></br>Ладожский вокзал</p>
                                    </div>
                                    <div className="row">
                                        <p className="ticket-text-sm-time"> <b className="ticket-text-big">09:52</b><br></br>Санкт-Петербург<br></br>Ладожский вокзал</p>
                                    </div>
                                </div>
                                <div className="col-sm-1"></div>
                                <div className="col-sm-1">
                                    <div className="line-dash" />
                                </div>

                                <div className="col-sm-3 text-price">

                                    <div className="row block-percent">

                                        <div className="row price-row">
                                            <p className="ticket-text-sm-time price-mar">Сидячий</p>
                                            <p className="ticket-text-sm-time price-mar text-price-orang">88</p>
                                            <p className="ticket-text-sm-time price-mar">от <b className="ticket-text-big"> 3 950 Р</b></p>
                                        </div>
                                        <div className="row price-row">
                                            <p className="ticket-text-sm-time price-mar">Сидячий</p>
                                            <p className="ticket-text-sm-time price-mar text-price-orang">88</p>
                                            <p className="ticket-text-sm-time price-mar">от <b className="ticket-text-big"> 3 950 Р</b></p>
                                        </div>
                                        <div className="row price-row">
                                            <p className="ticket-text-sm-time price-mar">Сидячий</p>
                                            <p className="ticket-text-sm-time price-mar text-price-orang">88</p>
                                            <p className="ticket-text-sm-time price-mar">от <b className="ticket-text-big"> 3 950 Р</b></p>
                                        </div>
                                        {/* <div className="row left block-percent"> */}
                                            <button type="submit" class="but-from but-from-big price-button">Выбрать места</button>
                                        {/* </div> */}
                                    </div>
                                    {/* <div className="line-dash"></div> */}

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                </div>
            </div>
            {/* <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link active" onClick={() => dispatch(getItemsRequest())}>Все</a>
                </li>
                {categories.map(o =>
                    <li className="nav-item">
                        <a className="nav-link active" onClick={() => getProducts(o.id)}>{o.title}</a>
                    </li>)}
            </ul>
            <div class="row">
                {it.concat(items).map(o =>
                    <div className="col-4">
                        <div className="card catalog-item-card">
                            <img src={o.images[0]} className="card-img-top img-fluid" alt={o.title} />
                            <div className="card-body">
                                <p className="card-text">{o.title}</p>
                                <p className="card-text">{`${o.price} руб.`}</p>
                                <button className="btn btn-outline-primary" onClick={() => getOrderRequest(o.id)}>Заказать</button>
                            </div>
                        </div>
                    </div>)}
            </div>
            <div class="text-center">
                {items.length > 5 ? <button class="btn btn-outline-primary" onClick={() => loadItems()}>Загрузить ещё</button> : <></>}
            </div> */}
        </Fragment>
    )
}
