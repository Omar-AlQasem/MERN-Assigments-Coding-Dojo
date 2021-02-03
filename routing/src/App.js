import React from 'react';
import { Router } from '@reach/router';
import Welcome from './components/Welcome';
import Input from './components/Input';
import Color from './components/Color';


function App() {

  return (

    <div className="App">
        <Router>
            <Welcome path="/home"/>
            <Input path="/:input"/>
            <Color path="/:input/:BackgroundColor/:TextColor"/>
        </Router>
    </div>

  );
  
}

export default App;
