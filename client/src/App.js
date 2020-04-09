import React, { Fragment, useState, useEffect, useRef} from "react";
import { Grid, Card, CardContent, Typography, Button,FormControl,
  InputLabel,Select,MenuItem,IconButton,Paper,Divider,InputBase} from "@material-ui/core";
import './App.css';
import Routes from './Routes';
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
  <Fragment>
          <Routes/> 
  </Fragment>
  );
}

export default App;
