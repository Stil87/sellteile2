export interface Base {
  id: number | null
}

export interface Part extends Base {
  firebaseId?:string
  title: string,
  model: string,
  description: string,
  status: string,
  createdAt:string,
  onEbaySince?: string,
  price: number,
  saved: boolean,
  pictures: PartImage[]
}

export interface User extends Base {
  email: string,
  password:string
}

export interface PartImage extends Base {
  url: string
}