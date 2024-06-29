import { createBrowserRouter, RouterProvider } from "react-router-dom"


import Navbar from "./Components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./Components/Footer/Footer"
import LoginPage from "./pages/LoginPage"
import NotFound from "./pages/NotFound"
import DriverPage from "./pages/DriverPage"

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
    element: <NotFound/>
  },
  {
    path: '/drive',
    element: <DriverPage/>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
      <Navbar/>
      {/* <Footer/> */}
    </>

  //   <>
  //     <Navbar/>
  //     <HomePage/>
  //     <Footer/>
  //   </>
   )
}

export default App
