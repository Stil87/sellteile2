import React, {  useState } from "react";

import { Part } from "../utils/types";
import Appbar from "./Appbar";
import PartList from "./PartList";







export default function MainPageContainer({partList}:{partList:Part[]}) {

  const [updatedPartList, setUpdatedPartList] = useState<Part[] | undefined>([])
  const [switchShowSelectedPart, setSwitchShowSelectedPart] = useState<boolean>(false)


  function updatePartList(number: number) {
    if (isNaN(number)) { setSwitchShowSelectedPart(false) }
    else {
      setSwitchShowSelectedPart(true)
      const selectedPart: Part | undefined = partList.find(part => part.id === number)
      selectedPart ? setUpdatedPartList([selectedPart]) : setUpdatedPartList(selectedPart)
    }
  }

  return (
    <>
      <PartList partList={switchShowSelectedPart ? updatedPartList : partList} />
      <Appbar updatePartList={updatePartList} />
    </>
  )

}