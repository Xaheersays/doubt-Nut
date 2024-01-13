import React from "react"
import {Container, Editor, Header,Login,Register,PostQuestion
,AlignRight,Helper,Loader,AlignCenter,Avatar} from './Components/export'

import { useSelector } from "react-redux"
function Render() {

  const showEditor = useSelector(state=>state.editor.showEditor)

  return (
    <>
      <div className="mb-20">
        <Container>
        <Header></Header>
          {<Helper>
            <AlignRight>
                <PostQuestion/>
            </AlignRight>
          </Helper>}
          <Register/>
          <Login></Login>
          {showEditor && <Editor placeholder={"yooo"}></Editor>}
          <Container>
            <AlignCenter>
              {/* <Loader/> */}
            </AlignCenter>
          </Container>
          <Avatar></Avatar>
        </Container>
      </div>
    </>
  )
}

export default Render