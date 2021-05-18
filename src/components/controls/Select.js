import React from 'react'
import {FormControl,InputLabel,Select as MuiSelect,MenuItem } from '@material-ui/core';
export default function Select(props) {
  const {name,label,value,onChange,options}=props;
    return (
      <FormControl variant="outlined" >
        <InputLabel>{label}</InputLabel>
        <MuiSelect
          label={label}
          name={name}
          value={value}
          onChange={onChange}
          >
          <MenuItem value="">None</MenuItem>
          {
            options.map(option=>(<MenuItem key={option.id} value={option.id}>{option.title}</MenuItem>))
          }
        </MuiSelect>
      </FormControl>
    )
}