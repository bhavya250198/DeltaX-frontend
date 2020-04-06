import React from "react";
import Button from 'react-bootstrap/Button';
import { MDBDataTable } from 'mdbreact';
 import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import FontAwesome from "react-fontawesome";
import * as ReactBootstrap from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import NameForm from './Addsong';

import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import '../bhavya2.JPG'
import './styles.css';
    const data = {
      columns: [
       
        

        {
          label: 'Song',
          field: 'song',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Date of Release',
          field: 'dor',
          sort: 'asc',
          width: 100
        },
        {
          label: 'Artists',
          field: 'artists',
          sort: 'asc',
          width: 150
        },
        {
            label: 'Ratings',
            field: 'rate',
            sort: 'asc',
            width: 150
          },
       
      ],
      rows: [
        {
          
         song : 'Tum Hi Ho',
          dor: '12-05-2013',
          artists: 'Arijit Singh',
          rate:'4.2',
          
        },
        {
            
           song : 'Dheeme Dheeme',
            dor: '5-11-19',
            artists: 'Tony Kakkar, Neha Kakkar',
            rate:'4.5',
            
          },
    ]
};      
    class Table extends React.Component
    {
        
        render()
            {
            
              
    return(
      
        <ReactBootstrap.CardDeck>
           
        <ReactBootstrap.Card>
        
          <ReactBootstrap.Card.Body>  
            <ReactBootstrap.Card.Title>
              
          <div className="geo1">
         
         <span className="Rabi">Top 5 Songs</span>
         <FontAwesome
                className="super-crazy-colors"
                name="plus"
                size="2x"
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                    color:"black",
                    marginLeft:"5px",
                  fontSize: "13px",
           }}
              />
          <Router>
         <Button className="tom" >
        <span className="zehnaseeb"> <font color="white">
          <Link to ="/addsongs"> Add Songs</Link>
          </font></span>
        </Button>
        

      </Router>
        </div>
          
      
      
          </ReactBootstrap.Card.Title>
          <ReactBootstrap.Card.Text>
          
       

       
        
       <MDBDataTable responsive
      striped
      bordered
      hover
      data={data}
    />
        
            </ReactBootstrap.Card.Text>
            </ReactBootstrap.Card.Body>
            </ReactBootstrap.Card>
            </ReactBootstrap.CardDeck>
           
            
    
          
    );
            }
}
export default Table;