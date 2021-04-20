
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { ActionType } from '../utils/reducer';
import { Action } from '../utils/types';


export function CreatePartInput({ dispatch }: { dispatch: React.Dispatch<Action> }) {
  
  function changeHandler(e: React.ChangeEvent< HTMLInputElement>) {
    console.log(e.currentTarget.value)
    const {value} = e.currentTarget
    dispatch({type:ActionType.SET_TITLE, payload:value})
    
  }


  return (
    <form  noValidate autoComplete="on">
      <TextField onChange={changeHandler} id="outlined-basic" label="Till" variant="outlined" type='string' />
    </form>
  );



}