import { RouterProvider, createBrowserRouter } from "react-router-dom"

import Layout from './Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import Events from './pages/Events';
import Contact from './pages/Contact';

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
      path: '/team',
      element: <Team />,
    },
    {
      path: '/events',
      element: <Events />,
    },
    {
      path: '/contact',
      element: <Contact />,
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
