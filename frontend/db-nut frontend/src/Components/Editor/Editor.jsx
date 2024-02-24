import React,{useRef,useState,useMemo} from 'react'
import JoditEditor from 'jodit-react';

function Editor({placeholder}) {
  
  const editor = useRef(null);
	const [content, setContent] = useState('');
	const config = {
		readonly: false, 
		height: '400px',
		toolbarButtonSize: 'large',
		
		// fullsize: true,
		// globalFullSize: false,
		enableDragAndDropFileToEditor: true,
		uploader: { insertImageAsBase64URI: true },
		style: {
				background: '#0f172a',
				color: '#FFFFFF',
		},
};

	return (
		<div>
		<div className= {`my-10 text-black fixed z-40 left-10 right-10 top-20 
		  ` } >
				
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				tabIndex={4} // tabIndex of textarea
				onBlur={(newContent) => setContent(newContent)} 
				onChange={(newContent) => {}}
				/>
				
		</div>
		</div>
	);
}

export default Editor