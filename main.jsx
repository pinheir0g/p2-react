import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider } from 'react-router-dom';
import { router } from './src/utils/router';
import {ProvedorCarrinho} from './src/contexts/CarrinhoContext'
import {UserProvider} from './src/contexts/userContext'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <ProvedorCarrinho>
        <RouterProvider router={router} />
      </ProvedorCarrinho>
    </UserProvider>
  </React.StrictMode>,
)

