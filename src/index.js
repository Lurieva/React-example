import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import rootReducer from './rootReducer';

import App from './app/App';

import 'bootstrap/dist/css/bootstrap.css';

//const store = createStore(rootReducer);

ReactDOM.render(
    <AppContainer>
        {/* <Provider store={store}>  */}
            <App />
        {/* </Provider> */}
    </AppContainer>,
    document.getElementById('root')
);