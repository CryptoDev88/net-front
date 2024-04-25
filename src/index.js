import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import './css/app.css'
import './css/card.css'
import './css/cookies.css'
import './css/schedule.css'
import './css/joinCommunity.css'
import './css/notification.css'
import './css/subTitleText.css'
import './css/techCard.css'

import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
