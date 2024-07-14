import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./Components/Footer/Footer"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import RidePage from "./pages/RidePage"
import DriverPage from "./pages/DriverPage"
import SignupCard from "./Components/SignUpCard/SignUpCard"
import Login from "./Components/Login/Login"
import Dashboard from "./pages/Dashboard"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFound/>
  },
  {
    path: '/login',
    element: <LoginPage/>
  },
  {
    path: '/ride',
    element: <RidePage/>
  },
  {
    path: '/drive',
    element: <DriverPage/>
  },
  {
    path: '/signup',
    element: <SignupCard />
  },

])

function App() {

  return (
    /*<>
      <Navbar/>
      <RouterProvider router={router}/>
      <Footer/>
    </>*/

    <>
       <Navbar/>
       <Dashboard/>
       <Footer/>
     </>
   )
}

export default App
