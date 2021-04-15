import React, { Suspense, useEffect, useState } from "react";
import { fetchParts } from "../utils/firebaseAPI";
import { Part } from "../utils/types";
import Appbar from "./Appbar";
import Spinner from "react-spinners/BounceLoader";




const PartList = React.lazy(() => import('./PartList')); // Lazy-loaded


export function MainPageContainer() {
  const [partList, setPartList] = useState<Part[]>([])
  const [updatedPartList, setUpdatedPartList] = useState<Part[]>([])


  useEffect(() => {

    fetchParts().then((parts: Part[]) => setPartList(parts))// memo or subscribe stream,
  }, [])

  function updatePartList(number: number) {
    setUpdatedPartList(partList.filter(part=> part.id === number))
  }

  return (
    <>
      <Suspense fallback={<div style={{ position: "fixed", top: "45%", left: "45%", transform: "translate(-50%, -50%)" }}> <Spinner /></div>}>
        <PartList partList={(updatedPartList.length > 0 && updatedPartList )|| partList} />
      </Suspense>
      <Appbar updatePartList={updatePartList} />
    </>
  )

}