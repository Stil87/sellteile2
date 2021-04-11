import { useEffect, useState } from "react"
import { fetchParts } from "../utils/firebaseAPI"
import { Part } from "../utils/types"
import PartCard from "./PartCard"



export default function PartList() {
  const [partList, setPartList] = useState<Part[]>([])

  useEffect(() => {
    fetchParts().then((parts: Part[]) => console.log(parts))
    fetchParts().then((parts: Part[]) => setPartList(parts))
  }, [])

  return <div>{partList.map(part => <PartCard part={part} />)}</div>

}