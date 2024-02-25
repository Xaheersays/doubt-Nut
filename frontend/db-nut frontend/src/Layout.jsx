import React from 'react'
import { Header,Container,Search,AlignRight,PostQuestion,Editor } from './Components/export'
import { useDispatch, useSelector } from "react-redux"

import { Outlet } from 'react-router-dom'

const Layout = () => {
  const showEditor = useSelector(state=>state.editor.showEditor)

  return (
    <div>
      <Header/>
      <Container>
        <Search/>
        <AlignRight>
            <PostQuestion/>
        </AlignRight>
        {showEditor && <Editor className={''} placeholder={"yooo"}></Editor>}
        <Outlet/>


      </Container>
        
    </div>
  )
}

export default Layout;