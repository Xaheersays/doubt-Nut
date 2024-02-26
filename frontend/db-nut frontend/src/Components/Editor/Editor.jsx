import React,{useRef,useState,useMemo} from 'react'
import JoditEditor from 'jodit-react';
import { AiTwotoneCloseCircle } from "react-icons/ai";
import {useDispatch,useSelector} from 'react-redux'
import { hideEditor } from '../../Store/editorSlice';
import { questionText } from '../../Store/textSlice';
import { setText } from '../../Store/textSlice';

function JoditEdtr({placeholder}) {
  const dispatch = useDispatch()
  const editor = useRef(null);
	const [content, setContent] = useState('');
	const config = {
		readonly: false, 
		height: '400px',
		toolbarButtonSize: 'large',
		enableDragAndDropFileToEditor: true,
		uploader: { insertImageAsBase64URI: true },
		style: {
				background: '#0f172a',
				color: '#FFFFFF',
		},
};


	return (
		<div className='flex w-full '>
      <div className= {`my-10 text-black w-full
        ` } >
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={4} // tabIndex of textarea
          onBlur={(newContent)=>{
            setContent(newContent)
            dispatch(setText(newContent))
          }} 
          onChange={(newContent) => {}}
          />
      </div>
		</div>
	);
 
}



import { BsFillSendCheckFill } from "react-icons/bs";
import { BsSendSlashFill } from "react-icons/bs";


const Editor = () => {
  const dispatch = useDispatch()
  const rawText = useSelector(questionText)
  
	return (
		<div className=' flex  bg-slate-700 px-2 rounded-md py-4 gap-4 border flex-col md:flex-row'>
			<div className='mt-5 max-w-md '>
        <div className='my-2 flex gap-2'><input type="checkbox" className=' w-4' />make question public</div>
				<TagsInput/>
			</div>
			<div className='flex flex-col mt-5 w-full  '> 
          <div className='flex items-center gap-2 self-end'>
              {
                  rawText ==='' ?
                  <p className='hover:scale-110 transition duration-300 ease-in-out cursor-pointer'><BsSendSlashFill size={25}/></p> :
                  <p className='text-green-400 hover:scale-110 transition duration-300 ease-in-out cursor-pointer'><BsFillSendCheckFill size={25}/></p>
              }
              <p
                  onClick={()=>{
                      dispatch(hideEditor())
                      dispatch(setText(""))
                  }}
                  className='hover:scale-110 transition duration-300 ease-in-out cursor-pointer'><AiTwotoneCloseCircle size={30}/></p>
          </div>
          <JoditEdtr/>
      </div>
		</div>
	)
}

import { FiMinusCircle } from "react-icons/fi";

const TagsInput = () => {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const handleInputChange = (e) => {
    setTagInput(e.target.value);
  };

  const handleAddTag = () => {
    if (tagInput.trim() !== '' && tagInput.trim().length >3) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (index) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  return (
    <div className="flex flex-col items-start text-black ">
      <div className="flex items-center space-x-2 flex-wrap md:flex-nowrap">
        <input
          type="text"
          placeholder="Enter tag(atleast 3 characters)"
          value={tagInput}
          onChange={handleInputChange}
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:border-blue-500 w-full md:w-fit"
        />
        <button
          onClick={handleAddTag}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 my-2"
        >
          Add+
        </button>
      </div>
      <div className="mt-2  flex flex-col  gap-2 md:gap-4 ">
        {tags.map((tag, index) => (
          <div key={index} className="flex items-center space-x-2 mt-1 w-full p-2">
            <span class="px-2 py-1 bg-gray-200 rounded-md max-w-sm whitespace-normal break-words">{tag}</span>

            <button
              onClick={() => handleRemoveTag(index)}
              className="text-white hover:text-red-600 focus:outline-none"
            >
              <FiMinusCircle/>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};



export default Editor
