import React,{memo} from 'react'
import { Button } from '../export'
import { useDispatch,useSelector } from 'react-redux'
import { hideEditor,displayEditor } from '../../Store/editorSlice'
import { AiTwotoneCloseCircle } from "react-icons/ai";

const PostQuestion = memo(function PostQuestion() {
  const dispatch = useDispatch()
  const showEditor = useSelector(state=>state.editor.showEditor)
  const handleClick = ()=>{
    if (showEditor){
      console.log(1)
      dispatch(hideEditor())
    }else{
      console.log(2)
      dispatch(displayEditor())
    }
  }
  return (
    <div>
      <div onClick={handleClick} className='my-10  cursor-pointer s'>
        <Button btnName={'Post Question'}></Button>
        {showEditor &&  <p className='fixed z-40 right-10 top-20  hover:scale-110 transition duration-300 ease-in-out'><AiTwotoneCloseCircle size={30}/></p>}
      </div>
      {showEditor && <button className='fixed  right-10 bottom-5 z-50 bg-green-600 p-4 rounded-md  hover:scale-110 transition duration-300 ease-in-out hover:bg-green-800'>submit</button>}
    </div>
  )
})

export default PostQuestion