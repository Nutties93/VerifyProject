/*
 * Created on Thurs Jan 23 2020
 *
 * Copyright (c) 2019 Orange Business Services
 */

const styles = theme => ({
    card: {
      textAlign: "center",
      margin: theme.spacing(3),
      marginTop:'0',
      maxWidth: "1500px",
      backgroundColor: "#f6f6f6",
      borderRadius: "5px",
      borderStyle: "solid",
      borderWidth: "1px",
      borderColor: "#eeeeee",
      boxShadow: "1px 1px 1px #888888;"
    },
    main: {
      width: 'auto',
      display: 'block', // Fix IE 11 issue.
      paddingTop: theme.spacing(8),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      [theme.breakpoints.up('md')]: {
        width: '30vw',
        height: '30vh',
        marginLeft: 'auto',
        marginRight: 'auto'
      }
    },
    paper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: theme.spacing(2)
    },
    form: {
      width: '85%', 
      marginTop: theme.spacing(2)
    },
    submit: {
      marginTop: theme.spacing(2),
      fontSize:'1.5rem',
      marginBottom: theme.spacing(2)
    },
    inputText:{
        fontSize:'2rem'
    },
    labelText:{
        fontSize:'2rem',
        top: 0,
        left: 0,
        position: 'absolute'
    },
  });
  
  export default styles;
  