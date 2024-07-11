import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './app'
import RootLayout from './layout/rootLayout'

function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          }
        ]
      }
  ])

  return <RouterProvider router={router} />
}

export default App
