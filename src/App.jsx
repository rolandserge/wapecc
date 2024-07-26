import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/rootLayout'
import About from './app/about'
import Home from "./app/page"
import InvestmentClimate from './app/host-country/climate'
import Sponsor from './app/participate'
import Register from './app/register'
import PoliticalEnvironnement from './app/host-country/political'
import LocationRegional from './app/host-country/location'
import Diversification from './app/host-country/diversification'
import BusinessEnvironnement from './app/host-country/business'
import Contact from './app/contact'
import AsDelegate from "./app/as-delegate"

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
            path: "/participate/sponsor",
            element: <Sponsor />
          },
          {
            path: "/about",
            element: <About />
          },
          {
            path: "/host-country/investment-climate",
            element: <InvestmentClimate />
          },
          {
            path: "/host-country/political-environment",
            element: <PoliticalEnvironnement />
          },
          {
            path: "/host-country/regional-location",
            element: <LocationRegional />
          },
          {
            path: "/host-country/economic-diversification",
            element: <Diversification />
          },
          {
            path: "/host-country/business-environment",
            element: <BusinessEnvironnement />
          },
          {
            path: "/register",
            element: <Register />
          },
          {
            path: "/as-delegate",
            element: <AsDelegate />
          },
          {
            path: "/contact",
            element: <Contact />
          }
        ]
      }
  ])

  return <RouterProvider router={router} />
}

export default App
