import {useState} from 'react';
import {makeStyles} from '@material-ui/core';
export  function UseForm(initialValues) {
    const [values ,setValues]=useState(initialValues);
    const handleInputChange=e=>{
      const {name,value}=e.target;
      setValues({
        ...values,
        [name]:value
      })
    }

    return{ values,handleInputChange}
}
const useStyles=makeStyles(theme=>({
    root:{
      '& .MuiFormControl-root':{
        width:'80%',
        margin:theme.spacing(1)
      }

    }
}
))
/*
when you want to export more than one component you remove
the  default keyword and where you want to import
you just have to use curly braces to get that two components

*/
export  function Form (props) {
  const classes=useStyles();

    return (
        <form className={classes.root} autoComplete="off">
          {props.children}
        </form>
    )
}
