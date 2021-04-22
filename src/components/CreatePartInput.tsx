
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Action, ActionType } from '../utils/types';

const TITEL_LABEL = 'Titel'
const MODEL_LABEL = 'Baureihe'
const DESCRIPTION_LABEL = 'Beschreibung'
const CONSTRUCTION_YEAR_LABEL = 'Baujahr'
const PRICE_LABEL = 'Preis'


export function CreatePartInput({ dispatch, counter }: { dispatch: React.Dispatch<Action>, counter: number }) {


  let label = TITEL_LABEL
  let action = ActionType.SET_TITLE
  let type = 'string'

  switch (counter) {
    case 1:
      label = MODEL_LABEL
      action = ActionType.SET_MODEL
      type = 'string'
      break;
    case 2:
      label = DESCRIPTION_LABEL
      action = ActionType.SET_DESCRIPTION
      type = 'string'
      break;
    case 3:
      label = CONSTRUCTION_YEAR_LABEL
      action = ActionType.SET_CONSTRUCTION_YEAR
      type = 'number'
      break;
    case 4:
      label = PRICE_LABEL
      action = ActionType.SET_TITLE
      type = 'number'
      break;
    default:
      break;
  }
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.currentTarget
    dispatch({ type: action, payload: value })
  }

  return (
    <form noValidate autoComplete="on">
      <TextField onChange={changeHandler} id="outlined-basic" label={label} variant="outlined" type={type} />
    </form>
  );



}