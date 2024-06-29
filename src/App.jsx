import { createBrowserRouter, RouterProvider } from "react-router-dom"


import Navbar from "./Components/Navbar/Navbar"
// import DriverPage from "./pages/DriverPage"
import HomePage from "./pages/HomePage"
import Footer from "./Components/Footer/Footer"
import LoginPage from "./pages/LoginPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
  },
  {
    path: '/login',
    element: <LoginPage/>
  }
])

function App() {

  return (
    <>
      <Navbar/>
      <RouterProvider router={router}/>
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
