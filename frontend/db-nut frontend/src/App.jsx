// import React,{useState} from "react"
// import Render from './Render.jsx'
// import {store} from './Store/store'
// import {Provider} from 'react-redux'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements ,Routes} from 'react-router-dom'
// import Home from "./Pages/Home.jsx"
// import Question from "./Pages/Question.jsx"
// import ProfilePage from "./Pages/ProfilePage.jsx"
// import Layout from "./Layout.jsx"
// import { Register } from "./Components/export.js"


import React,{useState} from "react"
import Render from './Render.jsx'
import {store} from './Store/store'
import {Provider} from 'react-redux'
import Home from "./Pages/Home.jsx"
import Question from "./Pages/Question.jsx"
import ProfilePage from "./Pages/ProfilePage.jsx"
import Layout from "./Layout.jsx"
import { Login, Register } from "./Components/export.js"

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="question/:qid"
            element={<Question />}
          />
          <Route
            path="profile/:username"
            element={<ProfilePage />}
          />
        </Route>

        <Route
          path="/register"
          element={<Register />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </Router>
  );
};

export default App;



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


