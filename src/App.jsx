import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './layout/rootLayout'
import About from './app/conference'
import Home from "./app/page"
import InvestmentClimate from './app/host-country/climate'
import Sponsor from './app/participate'
import Register from './app/register'
import PoliticalEnvironnement from './app/host-country/political'
import LocationRegional from './app/host-country/location'
import Diversification from './app/host-country/diversification'
import BusinessEnvironnement from './app/host-country/business'
import Contact from './app/contact'
import AsDelegate from "./app/participate/delegate"
import AsExhibitor from './app/participate/asExhibitor'
import AsPartner from './app/participate/asPartner'
import GaleryVideo from './app/media/video'
import GaleryImage from './app/media/image'
import Schedule from './app/conference/schedule'
import Partner from './app/conference/partner'
import Speaker from './app/conference/speaker'
import Association from './app/media/association'
import News from './app/media/news'
import PressKit from './app/media/pressKit'
import WapeccAbuja from './app/download/wapeccAbuja'
import WapeccDakar from './app/download/wapeccDakar'


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
            path: "/conference/wapecc-west-africa",
            element: <About />
          },
          {
            path: "/conference/schedule",
            element: <Schedule />
          },
          {
            path: "/conference/partners",
            element: <Partner />
          },
          {
            path: "/conference/speakers",
            element: <Speaker />
          },
          {
            path: "/participate/sponsor",
            element: <Sponsor />
          },
          {
            path: "/participate/as-delegate",
            element: <AsDelegate />
          },
          {
            path: "/participate/as-exhibitor",
            element: <AsExhibitor />
          },
          {
            path: "/participate/as-partner",
            element: <AsPartner />
          },
          {
            path: "/host-country/investment-climate",
            element: <InvestmentClimate />
          },
          {
            path: "/media/association-media-parternship",
            element: <Association />
          },
          {
            path: "/media/news",
            element: <News />
          },
          {
            path: "/media/press-kit",
            element: <PressKit />
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
            path: "/media/image",
            element: <GaleryImage />
          },
          {
            path: "/media/video",
            element: <GaleryVideo />
          },
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/downloads/report-21",
            element: <WapeccAbuja />
          },
          {
            path: "/downloads/report-19",
            element: <WapeccDakar />
          }
        ]
      }
  ])

  return <RouterProvider router={router} />
}

export default App
