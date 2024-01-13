import React from 'react'
import { useSelector } from "react-redux"
function Helper({children}) {
  const showEditor = useSelector(state=>state.editor.showEditor)
  return (
    <>
     {children}
    </>
  )
}

export default Helper