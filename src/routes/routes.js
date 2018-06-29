import Dashboard from '../modules/Dashboard'
import List from '../modules/List'
import NewRegistration from '../modules/NewRegistration'

import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default class Routes extends Component{
    render() {
        return (
            <Router history={browserHistory}>
                <Route path='/' component={Dashboard}/>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/list' component={List} />
                <Route path='/newRegistration' component={NewRegistration} />

            </Router>
        )}
}