import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Carshowroom from './Carshowroom'
import Test from './Test'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <Carshowroom />
  </StrictMode>
)
