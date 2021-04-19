import React, {useReducer} from 'react'
import { initialPartState, partReducer } from '../utils/reducer'
import { Action, Part } from '../utils/types'

export function CreatePart() {

  const [state, dispatch] = useReducer<React.Reducer<Part, Action>>(partReducer, initialPartState)


  

}