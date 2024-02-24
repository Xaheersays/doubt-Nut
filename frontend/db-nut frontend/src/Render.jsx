import React,{useEffect} from "react"
import {Container, Editor, Header,Login,Register,PostQuestion,AlignRight,Helper,AlignCenter,Avatar,Follower,Following,Profile,AskedQuestions,Answered,ProfilePage ,Loader,Feed,DisplayQuestion} from './Components/export'
import { useDispatch, useSelector } from "react-redux"
import { stopLoader,startLoader } from "./Store/loaderSlice"
function Render() {
  
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.login.isLogin);
  const LoaderState = useSelector((state) => state.loader.isLoading);
  const loginLoading = useSelector((state) => state.login.loading);
  const showEditor = useSelector(state=>state.editor.showEditor)
  
  useEffect(() => {

    if (isLogin) {
      dispatch(stopLoader());
    }
  },[isLogin,loginLoading]);

  

  return (
    <>
      {/* <div className="mb-20">
      <Container>
      <Register/>
      <Login></Login>
      {isLogin && <div>user is signed in</div>}
      {LoaderState && <Loader/>}
      </Container>
      </div> */}


      <div className="mb-20">
        <Header></Header>
        <Container>
          {<Helper>
            <AlignRight>
                <PostQuestion/>
            </AlignRight>
          </Helper>}
          {/* <Register/> */}
          {/* <Login></Login> */}
          {showEditor && <Editor className={''} placeholder={"yooo"}></Editor>}
          {/* <Container>
            <AlignCenter>
              <Loader/>
            </AlignCenter>
          </Container> */}
          {/* <Feed/> */}
          {/* <DisplayQuestion/> */}
          <Profile/>
          <Follower/>
        </Container>
      </div>
    </>
  )
}

export default Render

