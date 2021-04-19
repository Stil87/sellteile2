import { Part } from "../utils/types"
import PartCard from "./PartCard"

export default function PartList({ partList }: { partList: Part[] | undefined }) {
  return <div>
    {partList ?
      partList.map(part =>
        <PartCard key={part.firebaseId} part={part} />)
      : <p>Keine Teilenummer gefunden....</p>}
  </div>
}