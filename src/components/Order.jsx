import React, { Fragment } from 'react';
import Tickets from './Tickets';
import Header from './Header-order';
import Work from './Work';
import Feedback from './Feedback';
import Footer from './Footer';

export default function Main(props) {

    return (
        <Fragment>
            <Header history={props.history}></Header>
            <Tickets history={props.history}></Tickets>
            {/* <About history={props.history}></About>
            <Work history={props.history}></Work>
            <Feedback history={props.history}></Feedback> */}
            <Footer history={props.history}></Footer>
        </Fragment>
    )
}
