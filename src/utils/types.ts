
export interface Base {
  id: number | null
}

export interface Part extends Base {

  firebaseId?:string
  title: string,
  model: string,
  description: string,
  constructionYear?: number,
  status?: string,
  createdAt?:string,
  onEbaySince?: string,
  price: number,
  pictures: PartPicture[],

  localPictures:PartPicture[]

}

export interface User extends Base {
  email: string,
  password:string
}

export interface PartPicture  {
  url: string,
  uId:string
}



export interface Action  {
  payload: any,
  type:string
}
export enum ActionType {
  SET_TITLE = 'setTitle',
  SET_MODEL = 'setModel',
  SET_CONSTRUCTION_YEAR = 'setConstructionYear',
  SET_PICTURES = 'setPictures',
  SET_DESCRIPTION = 'setDescription',
  SET_PRICE = 'setPrice',
  SET_LOCAL_PICTURE = 'setLocalPicture',
  
  DELETE_PART_PICTURE = 'deletePartPicture'

}

