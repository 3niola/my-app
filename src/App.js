import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './Pages/PagesIndex.js';
import './App.css';
// import Clock from './components/time/Clock.js';



function App() {
    return (
        <div className="App">
            
            <Router>
                <Home/>
                {/* <Clock/> */}
               <Switch>
               </Switch>
            </Router>
        </div>
    );
}

export default App;
