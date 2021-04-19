import { Action, Part, PartPicture } from "./types";


export enum ActionType {
  SET_TITLE = 'setTitle',
  SET_MODEL = 'setModel',
  SET_CONSTRUCTION_YEAR = 'setConstructionYear',
  SET_PICTURES = 'setPictures'

}


export const initialPartState: Part = {
  id: null,
  title: '',
  model: '',
  description: '',
  price: 0,




}

export const partReducer:React.Reducer<Part,Action> =(state: Part, action: Action) =>{
  switch (action.type) {
    case ActionType.SET_TITLE: return setPartTitle(state, action.payload)
    case ActionType.SET_MODEL: return setPartModel(state, action.payload)
    case ActionType.SET_CONSTRUCTION_YEAR: return setPartConstructionYear(state, action.payload)
    case ActionType.SET_PICTURES: return setPartPictures(state, action.payload)
    default: return state
  }
}


const setPartTitle = (part: Part, title: string) => ({ ...part, title })
const setPartModel = (part: Part, model: string) => ({ ...part, model })
const setPartConstructionYear = (part: Part, constructionYear: string) => ({ ...part, constructionYear })
const setPartPictures = (part: Part, pictures: PartPicture[]) => ({ ...part, pictures })