import React from 'react'
import { MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers'
import DateFnUtils from '@date-io/date-fns'
export default function DatePicker(props) {
    const {name,label,value,onChange}=props;
    const convertToCheckedEventParameter=(name,value)=>({
      target:{
        name,value
      }
    })
    return (
        <MuiPickersUtilsProvider utils={DateFnUtils}>
          <KeyboardDatePicker disableToobar
            variant="inline"
             inputVariant="outlined"
              label={label}
              formate="MMM/dd/yyy"
              name={name}
              value={value}
              onChange={date=>onChange(convertToCheckedEventParameter(name,date))}
              />
          </MuiPickersUtilsProvider>
    )
}
