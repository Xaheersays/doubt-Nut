import React,{useEffect} from "react"
import {Container, Editor, Header,Login,Register,PostQuestion
,AlignRight,Helper,AlignCenter,Avatar,Follower,Following,Profile,AskedQuestions,Answered,ProfilePage ,Loader} from './Components/export'
import { useDispatch, useSelector } from "react-redux"
import { stopLoader,startLoader } from "./Store/loaderSlice"
function Render() {
  
  const dispatch = useDispatch();
  // const showEditor = useSelector((state) => state.editor.showEditor);
  const isLogin = useSelector((state) => state.login.isLogin);
  const LoaderState = useSelector((state) => state.loader.isLoading);
  const loginLoading = useSelector((state) => state.login.loading);
  
  
  useEffect(() => {

    if (isLogin) {
      dispatch(stopLoader());
    }
  },[isLogin,loginLoading]);

  

  return (
    <>
      <div className="mb-20">
      <Container>
      <Register/>
      <Login></Login>
      {isLogin && <div>user is signed in</div>}
      {LoaderState && <Loader/>}
      </Container>
            
      </div>
    </>
  )
}

export default Render

{/* <Header></Header>
        <Container>
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
        //     </AlignCenter>
        //   </Container>
        //   <>
        //     <Avatar></Avatar>
        //     <Follower></Follower>
        //     <Following></Following>
        //     {/* <AskedQuestions/> */}
        //     {/* <hr className="mt-10" /> */}
        //     {/* <Answered/> */}
        //   </>
        // </Container> */}