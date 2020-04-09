
import React, { Fragment,useState} from "react";
import { Grid, Card, CardContent, Typography, Button,FormControl,
    InputLabel,Select,MenuItem,IconButton,Paper,Divider,InputBase,Input} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./SmsCardStyles";
import {  Cookies } from 'react-cookie';
import axios from 'axios';
import history from '../../history';

function SmsCard(props) {
    const { classes } = props;
    const cookies = new Cookies();
    const[number1,setNumber1] = useState('')
    const[number2,setNumber2] = useState('')
    const[body,setBody] = useState("")

    function handleChangeNo1(event){
        setNumber1(event.target.value);
    }
    function handleChangeNo2(event){
        setNumber2(event.target.value);
    }
  

    function handleSubmit(event){
        event.preventDefault();   

        axios.post('/chat',{
            userANumber: number1,
            userBNumber: number2
        }).then( function (response){
            console.log(response);
          if(response.status === 200){
            setBody("API CALL was successful! Phone numbers have been registered! You can now talk to each other using SMS!")
          } else{
            setBody("API CALL was unsuccessful!")
          }
        }).catch(function (error) {
          console.log(error);
        })
      }
  
    return(
        <Fragment>
         <main className={classes.main}>
            <Paper className={classes.paper}>    
                <Typography style={{fontSize:'2rem',color:'black'}}>
                 Key in the two phone numbers to create a chat Group
                </Typography>
                <form className={classes.form}>
                <FormControl  required fullWidth>
                    <InputLabel className={classes.labelText} htmlFor='number1'> Phone number 1</InputLabel>
                    <Input 
                    id='number1'
                    name='number1'
                    autoComplete='number1' 
                    className={classes.inputText}
                    style={{marginTop:'2.5rem',marginBottom:'3rem'}}
                    value={number1} 
                    onChange={handleChangeNo1}
                    autoFocus/>
                </FormControl>
                <FormControl  required fullWidth>
                    <InputLabel className={classes.labelText} htmlFor='number2'> Phone number 2</InputLabel>
                    <Input 
                    id='number2'
                    name='number2'
                    autoComplete='number2'
                    className={classes.inputText}
                    style={{marginTop:'2.5rem',marginBottom:'3rem'}}
                    value={number2} 
                    onChange={handleChangeNo2}
                    autoFocus/>
                </FormControl>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    onClick= {handleSubmit}
                    disabled={!(number1.length > 0 && number2.length>0)}>
                    Submit 2 Phone Numbers
                </Button>
                </form>

                <Typography style={{fontSize:'1rem',color:'black'}}>
                {body}
                </Typography>
            </Paper>
            </main>
        </Fragment>
    );
}
export default withStyles(styles)(SmsCard);
