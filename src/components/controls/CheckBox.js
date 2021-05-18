import React from 'react'
import {FormControl,FormControlLabel ,Checkbox as MuiCheckBox} from '@material-ui/core';
export default function CheckBox(props) {
    const {name,label,value,onChange}=props;
    const convertToCheckedEventParameter=(name,value)=>({
      target:{
        name,value
      }
    })
    return (
        <FormControl>
            <FormControlLabel control={<MuiCheckBox
                  name={name}
                  color="primary"
                  checked={value}
                  onChange={(e)=>onChange(convertToCheckedEventParameter(name,e.target.checked))}
                />}
                label={label}
              />

        </FormControl>
    )
}
