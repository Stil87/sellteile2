import React from "react";
import Appbar from "./Appbar";



const PartList = React.lazy(() => import('./PartList')); // Lazy-loaded


export function MainPageContainer() {


  return (
    <>
    <PartList />
    <Appbar/>
    </>
  )

}