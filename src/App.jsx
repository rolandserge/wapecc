import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/rootLayout'
import About from './app/about'
import Home from "./app/page"
import InvestmentClimate from './app/host-country/climate'

function App() {

  const router = createBrowserRouter([
      {
        path: "/",
        element: <RootLayout />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/host-country/investment-climate",
            element: <InvestmentClimate />
          }
        ]
      }
  ])

  return <RouterProvider router={router} />
}

export default App
