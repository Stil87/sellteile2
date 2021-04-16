import React, { Suspense, useEffect, useState } from "react";
import {  partStream } from "../utils/firebaseAPI";
import { Part } from "../utils/types";
import Appbar from "./Appbar";
import Spinner from "react-spinners/BounceLoader";




const PartList = React.lazy(() => import('./PartList')); // Lazy-loaded


export function MainPageContainer() {

  const [partList, setPartList] = useState<Part[]>([])
  const [updatedPartList, setUpdatedPartList] = useState<Part[]>([])

  useEffect(() => {
    const unsubscribe = partStream({
      next: (querySnapshot:any) => {
        const updated = querySnapshot.docs.map((docSnap: any) => docSnap.data())
        setPartList(updated)
      }
    })
    return unsubscribe
      
    
  }, [])


  function updatePartList(number: number) {
    console.log('fires')
    setUpdatedPartList(partList.filter(part => part.id === number))
  }

  return (
    <>
      <Suspense fallback={<div style={{ position: "fixed", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}> <Spinner /></div>}>
        <PartList partList={(updatedPartList.length > 0 && updatedPartList) || partList} />
      </Suspense>
      <Appbar updatePartList={updatePartList} />
    </>
  )

}