import React,{memo,useEffect} from 'react'
import { AlignRight, Button, Editor } from '../export'
import { useDispatch,useSelector } from 'react-redux'
import { hideEditor,displayEditor } from '../../Store/editorSlice'
import { AiTwotoneCloseCircle } from "react-icons/ai";

const PostQuestion = memo(function PostQuestion() {
  const dispatch = useDispatch()
  const showEditor = useSelector(state=>state.editor.showEditor)
  const handleClick = ()=>{
    if (showEditor){
      dispatch(hideEditor())
    }else{
      dispatch(displayEditor())
    }
  }

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && showEditor) {
        handleClick()
      }
    };

    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showEditor]);


  return (
    <div className='flex flex-col gap-2 '>
      <AlignRight>
        <div className='py-2'><Button onClick={handleClick} btnName={!showEditor ? 'Post Question' : 'close'}/></div>
      </AlignRight>
      {showEditor && <Editor/>}
    </div>
  )
})

export default PostQuestion