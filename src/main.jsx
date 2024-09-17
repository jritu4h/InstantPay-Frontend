import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Provider from './provider/Provider.jsx'
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider>
   <QueryClientProvider client={queryClient}>
   <App />
   <ToastContainer/>
   </QueryClientProvider>
   </Provider>
  </React.StrictMode>,
)
