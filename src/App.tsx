
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
import { SubsidiesPage, subsidiesLoader } from "./components/pages/SubsidiesPage";
import { invoicesLoader, OpenInvoicesPage } from "./components/pages/OpenInvoicesPage";
import { shiuchYeladimLoader, ShiuchYeladimPage } from "./components/pages/ShiuchYeladimPage";
import { LoginPage } from "./components/pages/LoginPage";

export const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path="/" element={<LoginPage />} errorElement={<ErrorPage />} />
      <Route path="/shiuchYeladim" element={<ShiuchYeladimPage />} loader={shiuchYeladimLoader} errorElement={<ErrorPage />} />
      <Route path="/shiuchAchim" element={<ShiuchAchimPage />} loader={shiuchAchimRequestsLoader} errorElement={<ErrorPage />} />
      <Route path="/subsidies" element={<SubsidiesPage />} loader={subsidiesLoader} errorElement={<ErrorPage />} />
      <Route path="/openInvoices" element={<OpenInvoicesPage />} loader={invoicesLoader} errorElement={<ErrorPage />} />

    </Route>))


  return <RouterProvider router={router} />
}

export default App

