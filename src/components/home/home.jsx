import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './home.scss'
import Gallery from '../gallery/gallery';
import Cats from '../cat/cat';


const home = () => {

    return (
        <BrowserRouter>
            <div className="home">
            <h1 className="title">Cat's Gallery</h1>
                <Switch>
                    <Route component={Gallery} path="/" exact={true} />
                    <Route component={Cats} path="/cats/id" />
                </Switch>
            </div>
        </BrowserRouter>
        );
    };

export default home;