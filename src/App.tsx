
import "./styles/main.css"
import "./styles/app.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ShiuchAchimPage } from "./components/ShiuchAchimPage";
import { newRequestsLoader } from "./constants";
import { ErrorPage } from "./components/pages/ErrorPage";

export const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<ShiuchAchimPage />} loader={newRequestsLoader} errorElement={<ErrorPage/>} ></Route>))
  return <RouterProvider router={router} />
}

export default App

