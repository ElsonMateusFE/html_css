import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './global.css'

//import { PI as numeroPI, GTM_BRASIL } from './teste'
//import nomes from './nomes'
//import reactNomes from './nomes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Uso na DOM 
//{nomes.length}
//{numeroPI}

// REACT -> REACT DOM -> FRONT-END NA WEB
//       -> REACT NATIVE -> FRONT-END NO MOBILE
