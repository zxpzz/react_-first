import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Hello from './Hello'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello name="弹窗"/>
  </React.StrictMode>,
)
