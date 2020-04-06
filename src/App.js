import React from 'react';
import  bodyimage from'./Delta.png';
// import history from './Components/History';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Navigation from './Components/Navigation';
import Table  from './Components/Datatable';
import Table1 from './Components/Datatable456';
import Songs from './Components/Addsong';
import CreateTodo123 from './Components/Addartist';
import Homie from './Components/Home';
function App() {
  return (
    <Router >
      
    <React.Fragment>
      <Navigation />
      
       <Route path="/addsongs" component={Songs}/>
      <Route path="/artist/addartist" component={CreateTodo123}/>
    </React.Fragment>
    
    </Router>
  );
}

export default App;
