
import "./styles/main.css"
import "./styles/app.css"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ShiuchAchimPage } from "./components/ShiuchAchimPage";
import { AcceptedShiuchRequests } from "./components/pages/AcceptedShiuchRequests";
import { RejectedShiuchRequests } from "./components/pages/RejectedShiuchRequests";
import { SuggestedShiuchim } from "./components/pages/SuggestedShiuchim";
import { NewShiuchRequests } from "./components/pages/NewShiuchRequests";
import {  kidsLoader, newRequestsLoader } from "./constants";

export const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/"  element={<ShiuchAchimPage />} >
      <Route path="/new" index element={<NewShiuchRequests/>} loader={newRequestsLoader}  />
      <Route path="/approved" index element={<AcceptedShiuchRequests/>} loader={newRequestsLoader} />
      <Route path="/rejected" index element={<RejectedShiuchRequests/>} loader={newRequestsLoader} />
      <Route path="/suggestions" index element={<SuggestedShiuchim />} loader={kidsLoader} />
    </Route>))
  return <RouterProvider router={router} />
}

export default App

