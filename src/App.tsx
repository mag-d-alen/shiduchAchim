
import "./styles/main.css"
import "./styles/app.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ShiuchAchimPage, shiuchAchimRequestsLoader } from "./components/pages/ShiuchAchimPage";
import { ErrorPage } from "./components/pages/ErrorPage";
import { Payments, paymentsLoader } from "./components/pages/Payments";

export const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/shiuchAchim" element={<ShiuchAchimPage />} loader={shiuchAchimRequestsLoader} errorElement={<ErrorPage/>} />))
    // <Route path="/payments" element={<Payments />} loader={paymentsLoader} errorElement={<ErrorPage/>} />))


  return <RouterProvider router={router} />
}

export default App

