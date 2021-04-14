import { useEffect, useRef } from "react"
import { Part } from "./types"

//custom hook for previous state using useref
export function usePrevPartState(partList: Part[]) {
  const ref = useRef<Part[]>()
  //fires not on the first time bc onces usePrevState function fires component already rendered - this useeffect comes basically to late
  useEffect(() => {
    ref.current = partList
  })
  return ref.current
}