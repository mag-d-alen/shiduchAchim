
import "./styles/main.css"
import "./styles/app.css"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ShiuchAchimPage } from "./components/ShiuchAchimPage";
import { DataProvider } from "./DataContext";
import { QueryClient, QueryClientProvider } from "react-query";

export const App = () => {
  const queryClient = new QueryClient()

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/">
      <Route index element={<ShiuchAchimPage />} />
    </Route>))

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </QueryClientProvider>

  )
}

export default App


// export const App = () => {
//   const router = createBrowserRouter(createRoutesFromElements(

//     <Route path="/">
//       <Route index element={<ShiuchAchimPage />} />
//     </Route>))

//   return (
//     <RouterProvider router={router} />
//   </QueryClientProvider>
//   )
// }