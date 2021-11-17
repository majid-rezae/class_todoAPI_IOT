import React, { Children, useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, Paper, Grid } from '@material-ui/core';
import api from '../../Components/Connections/api';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import fetch from 'cross-fetch';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchDevice from '../../Components/SearchDevice/SearchDevice';
import { RootStateOrAny,useSelector } from 'react-redux';
import { deviceData } from '../../store/reducers';
import {selectedDevice} from '../../store/reducers';
import { devices } from '../../store/reducers'; 
import { render } from 'react-dom';
import {
  LineChart,
  ResponsiveContainer,
  Legend, Tooltip,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts'; 
import { Line } from "react-chartjs-2";
import Button from 'react-bootstrap/Button';
import { deleteFrames } from 'plotly.js';
import ReactDOM from 'react-dom';
import ReactDOMServer from "react-dom/server";
import "../../styles.css";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Select from 'react-select'
import { PermDataSettingOutlined } from '@material-ui/icons';
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';
import { View, Text,TextInput,StyleSheet } from "react-native"; 
 
import  sityser   from '../../Pages/Forecast/wetser.js';  
import  Wetser    from '../../Pages/Forecast/wetser';
import   ClaApp   from '../../Pages/Forecast/Class2';
import   Fun   from '../../Pages/Forecast/Fun';
      //let disp = '8cf9574000000012'
      // axios.get(`https://iotibti.ddns.net:7999/forecast?dev_eui=${selectedDevice}`)
     //await axios.get(`https://iotibti.ddns.net:7999/forecast?dev_eui=${disp}`)
     //await axios.get(`https://iotibti.ddns.net:7999/forecast?dev_eui=8cf9574000000012`)
 
      
     class TodoApp extends React.Component {
     
      constructor(props) {
      super(props)
      this.requestValidatorRef = React.createRef();
      this.state = {
          render: false,
          renderr: false,
          renderrr: false,
          username : '',
          cityy : '',
          value: '',
          valueOfInput:''
            
          
      }
       
      this.alertHi = this.alertHi.bind(this);
      this.alertHii = this.alertHii.bind(this);
      this.alertHiii = this.alertHiii.bind(this);
      this.updateInput = this.updateInput.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
       
       
      }
      
      alertHi() {
       this.setState({render: !this.state.render});
      }
      alertHii() {
        this.setState({renderr: !this.state.renderr});
       }
       alertHiii() {
        this.setState({renderrr: !this.state.renderrr});
       }

       updateInput(event){
        this.setState({username : event.target.value});
        
          }

          sell(){
            const cidy = this.state.username
            
              }   
      handleChange(event) {    this.setState({value: event.target.value});  }
      handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }  
  
     

       render() {
        
        const styleObj = {
          fontSize: 14,
          color: "#4a54f1",
          textAlign: "center",
          paddingTop: "20px",
      } 
      const styleObj2 = {
        fontSize: 20,
        color: "#4a54f1",
        textAlign: "center",
        paddingTop: "10px",
        paddingRight: "10px",
        paddingLeft: "10px",
        paddingBottom: "10px",
    } 
    const styleObj23 = {
      fontSize: 20,
      color: "#4a54f1",
      textAlign: "center",
      paddingTop: "10px",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingBottom: "10px",
  } 
    const styleObj22 = {
      fontSize: 14,
      color: "#4a54f1",
      textAlign: "center",
      paddingTop: "7px",
      paddingRight: "7px",
      paddingLeft: "7px",
      paddingBottom: "7px",
  } 
    const styleObj3 = {
      fontSize: 16,
      color: "#228b22",
      textAlign: "center",
      paddingTop: "10px",
      paddingRight: "10px",
      paddingLeft: "10px",
      paddingBottom: "10px",
  } 
  const styleObj4 = {
    fontSize: 14,
    color: "#080F0B",
    textAlign: "center",
    paddingTop: "30px",
} 
const styleObj44 = {
  fontSize: 14,
  color: "black",
  textAlign: "center",
  paddingTop: "80px",
} 
const styleObj5 = {
  fontSize: 14,
  color: "#080F0B",
  textAlign: "center",
  paddingTop: "30px",
  
} 
const styleObj6 = {
  fontSize: 14,
  color: "#4a54f1",
  textAlign: "center",
  paddingTop: "10px",
  paddingRight: "10px",
  paddingLeft: "10px",
  paddingBottom: "10px",
   
  display:'inline-block'
} 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  }
});
  
 
//var cidy = this.state.value
   localStorage.setItem('cidy', this.state.value); 
 
         return(
        <div className="App">
            <h style={styleObj3} >Previsão de temperatura para sete dias no futuro </h>
            <p><Icon/></p>  
             
            <p  style={styleObj5} >
            <form onSubmit={this.handleSubmit}>
        <label>
        Coloque o Nome da Cidade:  <h>   </h> 
          <input type="text" value={this.state.value} onChange={this.handleChange} /> </label>
          <h>   </h> 
          <h>
          <button style={styleObj22} onClick={this.alertHiii}>Meteorológica</button>
            
            </h>
      </form>
       <p>
       {this.state.renderrr && <h2 style={styleObj6} ><Weter0/>  </h2>}
      
             </p>
      </p> 
       
             
      
          
             
            
             
 
{/*             <div>
             <input type="text" onChange={this.updateInput}></input>
         
            </div> */}
         
           <p  style={styleObj} >
             
            <p>Escolha um dispositivo</p>
          <SearchDevice/>   
           </p>
           <p  style={styleObj44}  >
          <button style={styleObj23}  onClick={this.alertHi}>Relatório</button>
          {this.state.render && <h1><Fore/></h1>}
           
          <h>.......Escolha o tipo de layout.........</h>

          <button style={styleObj23} onClick={this.alertHii}>Gráfico</button>
            {this.state.renderr && <h2><Ff/></h2>}
            </p>  
              
             </div>
          
          ) ;
      }
 
      }  
      export default TodoApp  ; 
     