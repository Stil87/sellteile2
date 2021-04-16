import React, { useEffect, useState } from "react";
import { partStream } from "../utils/firebaseAPI";
import { Part } from "../utils/types";
import Appbar from "./Appbar";




const PartList = React.lazy(() => import('./PartList')); // Lazy-loaded


export default function MainPageContainer() {

  const [partList, setPartList] = useState<Part[]>([])
  const [updatedPartList, setUpdatedPartList] = useState<Part[]|undefined>([])

  const [switchShowSelectedPart, setSwitchShowSelectedPart] = useState<boolean>(false)

  useEffect(() => {
    const unsubscribe = partStream({
      next: (querySnapshot: any) => {
        const updated = querySnapshot.docs.map((docSnap: any) => docSnap.data())
        setPartList(updated)
      }
    })
    return unsubscribe
  }, [])


  function updatePartList(number: number) {
    if (isNaN(number)) { setSwitchShowSelectedPart(false) }
    else {
      setSwitchShowSelectedPart(true)
      const selectedPart: Part | undefined = partList.find(part => part.id === number)
      selectedPart ? setUpdatedPartList([selectedPart]) : setUpdatedPartList(undefined)

    }
  }

  return (
    <>
      <PartList partList={switchShowSelectedPart ? updatedPartList : partList} />
      <Appbar updatePartList={updatePartList} />
    </>
  )

}