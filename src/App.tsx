
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./pages/Login/Login"
import './styles/pages.scss'
import Layout from "./components/Layout/Layout"
import Dashboard from "./pages/Dashboard/Dashboard"
import UserDetails from "./pages/UserDetails/UserDetails"


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Login />} />
      <Route path="/users" element={<Layout/>}>
        <Route index element={<Dashboard />} />
        <Route path=":id" element={<UserDetails />}/>
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
