import { useEffect, useState } from "react"
import { fetchParts } from "../utils/firebaseAPI"



export default function PartList() {
  const [partList, setpartList] = useState([])

  useEffect(() => {
    fetchParts()
      


  }, [])

  return (<div>Hello from</div>)

}