import { BottomNavigation } from '@material-ui/core'
import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { initialPartState, partReducer, ActionType } from '../utils/reducer'
import { Action, Part } from '../utils/types'
import CreateAppbar from './BottomNavigation'
import PartCard from './PartCard'

export function CreatePart(props: any) {
  const initialPart: Part = props.location ? props.location.state : initialPartState

  const [state, dispatch] = useReducer<React.Reducer<Part, Action>>(partReducer, initialPart)

  let history = useHistory()
  console.log(props)

  return (
    <div>
      <PartCard part={state} />
      <CreateAppbar/>

    </div>
  )


}