

import { Part } from "../utils/types"
import PartCard from "./PartCard"



export default function PartList({partList}:{partList:Part[]}) {
  

  return <div>{partList.map(part => <PartCard key={part.firebaseId} part={part} />)}</div>

}