
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Action, ActionType } from '../utils/types';
import { createStyles, makeStyles } from '@material-ui/core';

import ImageIcon from '@material-ui/icons/Image';

const TITEL_LABEL = 'Titel'
const MODEL_LABEL = 'Baureihe'
const DESCRIPTION_LABEL = 'Beschreibung'
const CONSTRUCTION_YEAR_LABEL = 'Baujahr'
const PRICE_LABEL = 'Preis'

const useStyles = makeStyles(() => createStyles(
  {
    input: {
      display: 'none'
    }
  }
))


export function CreatePartInput({ dispatch, counter }: { dispatch: React.Dispatch<Action>, counter: number }) {
  const imageInput = React.createRef<HTMLInputElement>()
  const classes = useStyles()

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
      {counter === 5 ?
        <label
          htmlFor="file-upload"
          className="custom-file-upload">
          Fotos Hochladen
          <ImageIcon/>
          <input ref={imageInput} id="file-upload" className={classes.input } type="file" />
        </label> :
        <TextField onChange={changeHandler} id="outlined-basic" label={label} variant="outlined" type={type} />}
    </form>
  );



}