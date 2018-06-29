import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configure-store';
import Routes from './routes/routes';
import Sidebar from './Component/SideBar.js'
import Header from './Component/Header.js'
import Footer from './Component/Footer.js'

const store = configureStore();

ReactDOM.render(
    <div>
    <Provider store={store}>
        <Header />
    </Provider>
    <Provider store={store}>

    <div className="sidenav font-style">
    <Sidebar />
    </div>

    </Provider>
        <Provider store={store}>
            <div className="main">
            <Routes/>
            </div>
        </Provider>
    <Footer/>
    </div>, document.getElementById('root'));
registerServiceWorker();
