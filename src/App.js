import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from './context';

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar>
          <div className="contrainer">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </Navbar>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
