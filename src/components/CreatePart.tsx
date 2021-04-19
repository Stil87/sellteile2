import {  createStyles, makeStyles } from '@material-ui/core'
import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { initialPartState, partReducer, } from '../utils/reducer'
import { Action, Part } from '../utils/types'
import CreateAppbar from './BottomNavigation'
import { CreatePartInput } from './CreatePartInput'
import PartCard from './PartCard'


const useStyles = makeStyles(() => createStyles(
  {
    container: {
      height:'100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
      
    }
  }
))

export function CreatePart(props: any) {
  const classes = useStyles()
  let existingPart = props.props.location?.state
  const initialPart: Part =  existingPart || initialPartState
  console.log(props, 'initial-->', initialPart)

  const [state, dispatch] = useReducer<React.Reducer<Part, Action>>(partReducer, initialPart)

  let history = useHistory()

  return (
    <div className={classes.container}>
      <div>
        <PartCard part={state} />
      </div>

      <div>
        <CreatePartInput />
      </div>
      <CreateAppbar />

    </div>
  )


}