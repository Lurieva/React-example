import React from 'react';
import { AppContainer } from 'react-hot-loader';

import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import '../styles/normalize.css';

import './app.css';

import { MainPage, MovieDetailsPage } from './features';
import MainLayout from './components/mainLayout/MainLayout';
import NotFound from './components/notFound/NotFound';

const App = () => {
    return (      
        <MainLayout>
            <Router history={history}>
                <div style={{width: '100%'}}>
                    <Route
                        exact
                        component={MainPage}
                        path='/movies'
                    />
                    <Route
                        component={MovieDetailsPage}
                        path='/movies/:movieId'
                    />
                    {/* <Route path='*' component={NotFound}/> */}
                </div>
            </Router>
        </MainLayout>
    )
}

export default App;