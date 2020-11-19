import React, { Fragment, useState, useEffect } from 'react';
import { getOrderInfoRequest, getItemsRequest, getCategoriesRequest, getItemsCatRequest, getAddItemsRequest } from '../actions/actionCreators';
import { useSelector, useDispatch } from 'react-redux';
import Loader from 'react-loader';

export default function Items(props) {
    const { items, categories, loading, error } = useSelector(state => state.skills);
    const [cat, setCat] = useState("");
    const [coin, setCoin] = useState(6);
    const dispatch = useDispatch();
    const [it, setIt] = useState([]);

    useEffect(() => {
        dispatch(getItemsRequest());
        dispatch(getCategoriesRequest());
    }, [dispatch])

    const getProducts = id => {
        setCoin(6);
        setCat(id);
        setIt([]);
        dispatch(getItemsCatRequest(id));
    };

    const loadItems = () => {
        setIt(it.concat(items));
        dispatch(getAddItemsRequest(coin, cat));
        setCoin(coin + 6);
    };
    const getOrderRequest = id => {
        dispatch(getOrderInfoRequest(id));
        // props.history.push(`/catalog/${id}`);
        props.history.push(`/react-shoe-store/build/catalog/${id}`);
    };

    if (loading) {
        return <Loader></Loader>;
    }
    if (error) {
        return <p className="error">Произошла ошибка!</p>;
    }

    return (
        <Fragment>
            <ul className="catalog-categories nav justify-content-center">
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
            </div>
        </Fragment>
    )
}
