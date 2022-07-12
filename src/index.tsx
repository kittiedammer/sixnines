import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createRoot } from "react-dom/client";
import './bootstrap.min.css'
import { Provider } from 'react-redux'
import store from './store'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)