import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Nav, Navbar, Form, FormControl,NavDropdown,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Homie from './Home';
import OtherPage  from './song.component';
import OtherPage1 from './artist.component';
import Table1 from './Datatable456';
import './styles.css';
import FormApp from './Users';
import styled from 'styled-components';
const Styles = styled.div`
  .navbar { background-color: #696969; 
    
  min-width:450px;
  padding-bottom:20px;                    }
  a, .navbar-nav, .navbar-light .nav-link {
    margin:0px 20px 0px 20px;
    color: white;
    font-size:20px;
    &:hover { color: white; }
  }
  .nav-item
  {
    
    margin-right:0px;
  }
 
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
  .form-inline .form-control {
    margin-left: 600px;
    display: inline-block;
    width: auto;
    vertical-align: middle;
}
  .mr-sm-2, .mx-sm-2 {
    margin-right: .5rem!important;
    border-radius:20px;
    padding: 6px 20px;
}
@media (max-width:575px)
{
    a, .navbar-nav, .navbar-light .nav-link {
        color: white;
        font-size:20px;
        &:hover { color: white; }
      }
}



`;
class Navigation extends React.Component
{
    render()
    {
        return(
            <Styles>
              <Router>
                <Navbar  expand="lg">
  
    <Nav className="mr-auto">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <Nav.Link href="/home">Home</Nav.Link>
      {/* <Nav.Link href="/songs">Songs</Nav.Link> */}
      <Nav.Link href="/Users">Users</Nav.Link>
      
    
    <Form inline>
      <FormControl type="text" placeholder="&#x1F50D;Search" className="mr-sm-2" />    
    </Form>
    
    </Navbar.Collapse>
    </Nav>
</Navbar>
<Route path="/home"  exact component={OtherPage}/>
<Route path="/home"  component={OtherPage1} /> 
<Route path="/users"  component={FormApp} /> 

{/* <Route path="/Artists"  component={OtherPage1} />  */}
</Router>
</Styles>
   
);
}
}
export default Navigation;