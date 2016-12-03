import React from 'react'
import {Router, Route} from 'react-router' 
import MarkupBody from './MarkupBody.js'

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Route path='/:id' component={MarkupBody}>
            </Router>
        )
    }
}
