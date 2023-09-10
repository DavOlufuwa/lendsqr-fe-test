
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login"
import './styles/pages.scss'
import Layout from "./components/Layout/Layout"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path="/home" element={<Layout/>}>

      </Route>
    </>
    
  )
  
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
