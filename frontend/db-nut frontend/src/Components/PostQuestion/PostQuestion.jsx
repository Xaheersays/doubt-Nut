import React,{memo} from 'react'
import { Button } from '../export'
import { useDispatch,useSelector } from 'react-redux'
import { hideEditor,displayEditor } from '../../Store/editorSlice'
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
    <div onClick={handleClick} className='my-10  cursor-pointer s'>
      <Button btnName={'Post Question'}></Button>
    </div>
  )
})

export default PostQuestion