import { createStyles, makeStyles } from '@material-ui/core'
import React, { useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { initialPartState, partReducer, } from '../utils/reducer'
import { Action, Part } from '../utils/types'
import CreateAppbar from './BottomNavigation'
import { CreatePartInput } from './CreatePartInput'
import PartCard from './PartCard'


const useStyles = makeStyles(() => createStyles(
  {
    container: {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center'
    },
    input: { bottom: '15vh', position: 'fixed' }
  }
))

export function CreatePart({ props }: any) {
  const classes = useStyles()
  const initialPart: Part = props.location?.state || initialPartState

  const [counter, setCounter] = useState(0)
const [localImages, setLocalImages] = useState([])
  const [currentPart, dispatch] = useReducer<React.Reducer<Part, Action>>(partReducer, initialPart)
  let history = useHistory()

  

  return (
    <>
      {/* <div className={classes.container}> */}
      <PartCard part={currentPart} fromDetail={true} />
      <div className={classes.input} >
        <CreatePartInput dispatch={dispatch} counter={ counter}/>
      </div>
      <CreateAppbar setCounter={setCounter} counter={counter}/>
      {/* </div> */}
    </>
  )


}