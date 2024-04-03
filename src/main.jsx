import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'modern-normalize'
import App from './App/App.jsx'
import './index.css'
import store , { persistor} from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>
);