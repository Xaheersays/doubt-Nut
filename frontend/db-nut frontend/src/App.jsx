import React,{useState} from "react"
import Render from './Render.jsx'
import {store} from './Store/store'
import {Provider} from 'react-redux'


function App() {
  return (
    <>
    <Provider store={store}>
      <Render></Render>
      <ImageInputComponent/>
    </Provider>
    </>
  )
}

export default App

function ImageInputComponent() {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleImageChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedImages([...selectedImages, ...files]);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      {selectedImages.length > 0 && (
        <div>
          <p>Selected Images:</p>
          {selectedImages.map((image, index) => (
            <img key={index} src={URL.createObjectURL(image)} alt={`Selected ${index + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
}


