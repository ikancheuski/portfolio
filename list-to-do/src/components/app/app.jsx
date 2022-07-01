import React from "react";
import { Component } from 'react'
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Box } from "@mui/material";

class WhoAmI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 24
    }
  }

  nextAge = () =>{
    this.setState(state =>({
      age: state.age +1
    }))
  }

  render() {
    const {name, surname}=this.props;
    return(
      <Box sx={{textAlign:'center',backgroundColor:'whitesmoke'}}>
        <button></button>
        <h1>My name is {name}, my surname is {surname}</h1>
      </Box>
    )
  }
  }



export default App;
