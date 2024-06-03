import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/onepager">
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='*' element={<App />} />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>,
)
