import React from 'react'
import {Router, Route, hashHistory} from 'react-router' 
import MarkupBody from './MarkupBody.js'

export default class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path='/' component={MarkupBody}>
                    <Route path=':id' component={MarkupBody} />
                </Route>
            </Router>
        )
    }
}
