import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/authSlice'
import App from './App.tsx'
import './index.css'

const store = configureStore({
  reducer :{
    auth : authReducer
  }
})

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
    </Provider>
)
