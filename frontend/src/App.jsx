import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './route/Router';
import { ToastContainer } from 'react-toastify';
import './App.css'

function App() {

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
