import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from './SecondsCounter';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <SecondsCounter initialSeconds={0} countUp={true} />
    <SecondsCounter initialSeconds={100000} countUp={false} />
  </React.StrictMode>,
)