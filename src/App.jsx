import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Events from './pages/Events';
import Sponser from "./pages/Sponser";
import Member from './pages/Member';


const router = createBrowserRouter([
  {
   path: '/',
   element: <Layout /> ,
   children: [
    {
      index: true,
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/team',
      element: <Team />,
    },
    {
      path: '/events',
      element: <Events />,
    },
    {
      path: '/members',
      element: <Member />,
    },
    {
      path: '/sponsers',
      element: <Sponser />,
    },
   ]
  }
]);


function App() {


  return (
    <RouterProvider router={router} />
  )
}

export default App
