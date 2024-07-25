import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import Homepage from './routes/homepage/Homepage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardPage />,
          },
          {
            path: '/dashboard/chats/:id',
            element: <ChatPage />,
          },
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
