import React from "react";
import Button from 'react-bootstrap/Button';
import { MDBDataTable } from 'mdbreact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FontAwesome from "react-fontawesome";
import * as ReactBootstrap from 'react-bootstrap';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import './styles.css';
    const data = {
      columns: [
        {
          label: 'Artists',
          field: 'artist',
          sort: 'asc',
          width: 150
        },
        {
          label: 'DOB',
          field: 'dob',
          sort: 'asc',
          width: 270
        },

        {
          label: 'Songs',
          field: 'songs',
          sort: 'asc',
          width: 200
        },
        {
          label: 'Rating',
          field: 'rating',
          sort: 'asc',
          width: 100
        },
        
      ],
      rows: [
        {
          artist: 'Arijit SIngh',
          dob: '25-04-87',
          songs: 'Tum Hi Ho, Ghungroo',
          rating: '4.2',
         
        },
    ]
};      
    class Table1 extends React.Component
    {
        render()
            {
    return(
        <ReactBootstrap.CardDeck>
           
        <ReactBootstrap.Card>
        
          <ReactBootstrap.Card.Body>  
            <ReactBootstrap.Card.Title>
          <div className="geo1">
          <FontAwesome
                className="super-crazy-colors-1"
                name="info-circle"
                size="2x"
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                  margin: "10px",
                  padding: "2px",
                  fontSize: "10px",
                  

                }}
              />
         <span className="Rabi">Top 5 artists</span>
         
         
           
                <FontAwesome
                className="super-crazy-colors-1"
                name="window-minimize"
                size="2x"
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                    
                    // margin:"4px",
                  fontSize: "13px",
                 border:"0px solid #444 ",
                  float:"right",
                  paddingBottom: "14px",
    paddingRight: "5px",
    paddingTop: "5px",
    paddingleft: "7px",
                  

                }}
              />  
         
        
          </div>
          
          </ReactBootstrap.Card.Title>
          <ReactBootstrap.Card.Text>
          {/* <Button className="tom">
         <FontAwesome
                className="super-crazy-colors-1"
                name="download"
                size="2x"
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                    color:"white",
                    marginLeft:"5px",
                  fontSize: "13px",
           }}
              /> 
        <span className="zehnaseeb"> <font color="white"> Excel</font></span>
        </Button>
        <Button className="tom"> */}
         {/* <FontAwesome
                className="super-crazy-colors-1"
                name="download"
                size="2x"
                style={{
                  textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
                    color:"white",
                    margin:"0px",
                  fontSize: "13px",
                  }}
              /> 
        <span className="hello"><font color="white">CSV</font></span>
        </Button> */}
        <Router>
<Button className="tom">
<Link to ="/addartist">Add Artist</Link>
</Button>
</Router>
       
        
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
export default Table1;