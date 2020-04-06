import React from "react";
import './styles.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 import CreateTodo123 from "./Addartist";
import OtherPage1 from './song.component';
import OtherPage from './artist.component';

 const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };
class Homie extends React.Component
{
       render()
       {
           return(
            <Router>
            <React.Fragment>
                
            <Route path="/songs"  component={OtherPage} /> 
<Route path="/Artists"  component={OtherPage1} /> 
                
                </React.Fragment>
                </Router>

  
                
            
        );
    }
}
export default Homie;