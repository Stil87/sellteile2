import { Action, ActionType, Part, PartPicture } from "./types";





export const initialPartState: Part = {
  id: null,
  title: '',
  model: '',
  description: '',
  price: 0,
  pictures: [],
  localPictures: []

}

export const partReducer: React.Reducer<Part, Action> = (state: Part, action: Action) => {
  switch (action.type) {
    case ActionType.SET_TITLE: return setPartTitle(state, action.payload)
    case ActionType.SET_MODEL: return setPartModel(state, action.payload)
    case ActionType.SET_CONSTRUCTION_YEAR: return setPartConstructionYear(state, action.payload)
    case ActionType.SET_PICTURES: return setPartPictures(state, action.payload)
    case ActionType.SET_LOCAL_PICTURE: return setLocalPicture(state, action.payload)
    default: return state
  }
}


const setPartTitle = (part: Part, title: string) => ({ ...part, title })
const setPartModel = (part: Part, model: string) => ({ ...part, model })
const setPartConstructionYear = (part: Part, constructionYear: number) => ({ ...part, constructionYear })
const setPartPictures = (part: Part, picture: PartPicture) => ({ ...part, pictures: [...part.pictures,picture] })
const setLocalPicture = (part: Part, localPicture: PartPicture) => {
  return ({
    ...part,
    localPictures: [...part.localPictures, localPicture
    ]
  })
}