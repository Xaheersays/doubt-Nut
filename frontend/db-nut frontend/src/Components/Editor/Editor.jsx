import React,{useRef,useState,useMemo} from 'react'
import JoditEditor from 'jodit-react';

function Editor({placeholder}) {
  
  const editor = useRef(null);
	const [content, setContent] = useState('');
	const config = {
		readonly: false, 
		height: '450px',
		toolbarButtonSize: 'large',
		

		enableDragAndDropFileToEditor: true,
		uploader: { insertImageAsBase64URI: true },
		style: {
				background: '#0f172a',
				color: '#FFFFFF',
		},
};

	return (
		<div className='my-10 text-black' >
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={4} // tabIndex of textarea
				onBlur={(newContent) => setContent(newContent)} 
				onChange={(newContent) => {}}
				/>
		</div>
	);
}

export default Editor