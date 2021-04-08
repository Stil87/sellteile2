export interface Base {
  id: string | null
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
  images: []
}

export interface User extends Base {
  email: string,
  password:string
}