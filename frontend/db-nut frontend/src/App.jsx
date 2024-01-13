import React from "react"
import Render from './Render.jsx'
import {store} from './Store/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
      <Render></Render>
    </Provider>
    </>
  )
}

export default App
