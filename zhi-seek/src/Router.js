import { BrowserRouter, Route, Switch } from 'react-router-dom' 
import ReactDOM from 'react-dom';
import App from './Components/App';
import React from 'react';
import CheckIn from './Components/CheckIn';
import About from './Components/About';
import MapContainer from './Components/MapContainer';
 
class Router extends React.Component {
    render() {
        return(
            ReactDOM.render((
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={MapContainer}/>
                        <Route path='/about' component={About}/>
                        <Route path='/check-in' component={CheckIn}/>
                    </Switch>
                </BrowserRouter>
              ), document.getElementById('root'))
        )
    }
}


export default Router;