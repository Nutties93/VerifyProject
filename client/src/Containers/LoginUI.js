/*
 * Created on Mon Aug 05 2019
 *
 * Copyright (c) 2019 Orange Business Services
 */

import React, {useState,useEffect, useContext} from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import styles from './LoginUIstyles';


import history from '../history';
import { useCookies, Cookies } from 'react-cookie';
import axios from 'axios';



function LoginUI(props) {
  const cookie = new Cookies();

  const [cookies, setCookie] = useCookies(['usrtoken']);
  const { classes } = props;
  const [username, setUsername] = useState('');
  const [code, setCode] = useState('');
  const [body,setBody] =useState('')

  //redirect user if authenticated
  useEffect(()=>{
    if(cookie.get('username') && cookie.get('requestID') && cookie.get('code')){
      history.push('/verifyproject');
    }
  },[])

  function handleChangeUser(event){
    setUsername(
      event.target.value
    );
  }

  function handleChangeCode(event){
    setCode(
      event.target.value
    );
  }




  function handleSubmit(event){
      event.preventDefault();   
      axios.post('/verify',{
        username : username,
      }).then( function (response){
        console.log(response.data.response);
        if(response.data.response.status === "0"){
          setBody("Verification will be sent to your phone. Please insert the PIN code!")
          //If login successful, store username as cookie
          setCookie('username', username, {/* httpOnly: true,secure: true,*/maxAge: 360000, sameSite: true });
          setCookie('requestID', response.data.response.request_id, {/* httpOnly: true,secure: true,*/maxAge: 360000, sameSite: true });
        }
      }).catch(function (error) {
        console.log(error);
      })
    }

  function handleCheck(event){
      event.preventDefault();  
      console.log(cookie.get('username'))
      console.log(cookie.get('requestID'))
      
      axios.post('/checkverify',{
        request_id: cookie.get('requestID'),
        code: code
      }).then( function (response){
        console.log(response.data.response);
        if(response.data.response.status === "0"){
          //If code is correct, store code as cookie
          setCookie('code', code, {/* httpOnly: true,secure: true,*/maxAge: 360000, sameSite: true });
          history.push('/verifyproject');
        } else {
          history.push('/')
        }
      }).catch(function (error) {
        console.log(error);
      })
    }



  return (
    <main className={classes.main}>
      <Paper className={classes.paper} >    
        <Typography style={{fontSize:'2rem',color:'black'}}>
          Sign in using your phone number!
        </Typography>
        <form className={classes.form}>
          <FormControl  required fullWidth>
            <InputLabel className={classes.labelText} htmlFor='username'> Phone number</InputLabel>
            <Input 
            id='email' 
            name='email' 
            autoComplete='email'  
            className={classes.inputText}
            style={{marginTop:'2.5rem',marginBottom:'3rem'}}
            value={username} 
            onChange={handleChangeUser}
            autoFocus/>
          </FormControl>

          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick= {handleSubmit}
            disabled={!(username.length > 0)}>
            Sign in
          </Button>
        </form>

        <Typography style={{fontSize:'2rem',color:'black'}}>
          {body}
        </Typography>
      </Paper>

       <Paper className={classes.paper} >    
        <Typography style={{fontSize:'2rem',color:'black'}}>
          Enter Code here
        </Typography>
        
        <Typography style={{fontSize:'1rem',color:'black'}}>
          If Code is correct, you will be redirected to new page!
        </Typography>
        <form className={classes.form}>
          <FormControl  fullWidth>
            <InputLabel className={classes.labelText} htmlFor='inputcode'>Code</InputLabel>
            <Input 
            id='code' 
            name='code' 
            autoComplete='code'  
            className={classes.inputText}
            style={{marginTop:'2.5rem',marginBottom:'3rem'}}
            value={code} 
            onChange={handleChangeCode}
            autoFocus/>
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
            onClick= {handleCheck}
            disabled={!(code.length > 0)}>
            Submit 4 PIN
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default withStyles(styles)(LoginUI);