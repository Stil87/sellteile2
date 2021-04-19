



import React from 'react';
import TextField from '@material-ui/core/TextField';



export default function BasicTextFields() {

  return (
    <form noValidate autoComplete="on">
      <TextField id="outlined-basic" label="Till" variant="outlined" type='number' />
    </form>
  );
}
export function CreatePartInput() {


  return <BasicTextFields />

}