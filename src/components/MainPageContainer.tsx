import React, { Suspense, useEffect,  useState } from "react";
import { partStream } from "../utils/firebaseAPI";
import { Part } from "../utils/types";
import Appbar from "./Appbar";
import Spinner from "react-spinners/BounceLoader";




const PartList = React.lazy(() => import('./PartList')); // Lazy-loaded


export function MainPageContainer() {

  const [partList, setPartList] = useState<Part[]>([])
  const [updatedPartList, setUpdatedPartList] = useState<Part[]>([])

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
      selectedPart ? setUpdatedPartList([selectedPart]) : setUpdatedPartList([])
    }
  }

  return (
    <>
      <Suspense fallback={<div style={{ position: "fixed", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}> <Spinner/></div>}>
        <PartList partList={switchShowSelectedPart ? updatedPartList : partList} />
      </Suspense>
      <Appbar updatePartList={updatePartList} />
    </>
  )

}