
import React, { Fragment} from "react";
import { Grid, Card, CardContent, Typography, Button,FormControl,
    InputLabel,Select,MenuItem,IconButton,Paper,Divider,InputBase} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./VerifyCardStyles";
import {  Cookies } from 'react-cookie';

import history from '../../history';

function VerifyCard(props) {
    const { classes } = props;
    const cookies = new Cookies();

    function handleLogout(event){
        event.preventDefault();  
        cookies.remove('username')
        cookies.remove('requestID')
        cookies.remove('code')
        history.push('/')
    }
  
    return(
        <Fragment>
            <Card style={{backgroundColor: "d4d4d4", margin: "5px"}} >
            <CardContent style={{padding:"5px"}}>
            <Typography style={{fontSize:'2rem',color:'black'}}>
                    You have been verified! This is a protected page!! 
                </Typography>
                <Typography style={{fontSize:'2rem',color:'black'}}>
                    Click log out to go back to login page!!!! 
                </Typography>
                <Button
                    type='submit'
                    variant='contained'
                    color='primary'
                    className={classes.submit}
                    onClick= {handleLogout}>
                    Click to Log out!
                </Button>
            </CardContent>
            </Card>
        </Fragment>
    );
}
export default withStyles(styles)(VerifyCard);
