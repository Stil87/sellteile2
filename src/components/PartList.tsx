

import { Part } from "../utils/types"
import PartCard from "./PartCard"



export default function PartList({ partList }: { partList: Part[] }) {

  return <div>{partList.length ? partList.map(part => <PartCard key={part.firebaseId} part={part}  />): <p>Nichts gefunden ....</p>}</div>
}