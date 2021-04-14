import React, { Suspense, useEffect, useState } from "react";
import { fetchParts } from "../utils/firebaseAPI";
import { Part } from "../utils/types";
import Appbar from "./Appbar";
import Spinner from "react-spinners/BounceLoader";
import { usePrevPartState } from "../utils/hooks";




const PartList = React.lazy(() => import('./PartList')); // Lazy-loaded


export function MainPageContainer() {
  const [partList, setPartList] = useState<Part[]>([])
  const previousPartList = usePrevPartState(partList)

  useEffect(() => {
    fetchParts().then((parts: Part[]) => setPartList(parts))
  }, [])

  function updatePartList(number: number) {

   if(previousPartList) setPartList(prev =>   (isNaN(number) ? previousPartList : prev.filter(part => part.id === number)))
    
  }

  return (
    <>
      <Suspense fallback={<div style={{ position: "fixed", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}> <Spinner /></div>}>
        <PartList partList={partList} />
      </Suspense>
      <Appbar updatePartList={updatePartList} />
    </>
  )

}