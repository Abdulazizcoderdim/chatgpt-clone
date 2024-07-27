import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import Homepage from './routes/homepage/Homepage.jsx'
import SiginPage from './routes/siginPage/SiginPage.jsx'
import SigupPage from './routes/sigupPage/SigupPage.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/sign-in/*',
        element: <SiginPage />,
      },
      {
        path: '/sign-up/*',
        element: <SigupPage />,
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
