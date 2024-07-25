import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import Homepage from './routes/homepage/Homepage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
  },
  {
    path: '/dashboard',
    children: [
      { path: '/dashboard', element: <DashboardPage /> },
      { path: '/dashboard/chats/:id', element: <ChatPage /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
