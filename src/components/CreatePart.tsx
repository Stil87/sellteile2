import React, { useReducer } from 'react'
import { useHistory } from 'react-router-dom'
import { initialPartState, partReducer, ActionType } from '../utils/reducer'
import { Action, Part } from '../utils/types'

export function CreatePart(props: any) {

  const [state, dispatch] = useReducer<React.Reducer<Part, Action>>(partReducer, initialPartState)

  let history = useHistory()
  console.log(props)

  return <div onClick={() => history.push('/')}>Hello</div>


}