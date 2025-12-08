import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import { Provider } from "react-redux"
import { store } from "./store/store.ts"
import DogPage from "./pages/dog-page.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dog",
    element: <DogPage />,
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)
