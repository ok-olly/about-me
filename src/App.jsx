import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import Home from "../src/pages/Home";
import WorkDetail from "./pages/WorkDetail";
import Error from "../src/pages/Error";

import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <div className="mobile-p bg-white text-black dark:bg-black">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/project/:id",
        element: <WorkDetail />,
      },
      { path: "*", element: <Error /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fafafa",
            color: "#0a0a0a",
          },
        }}
      />
    </>
  );
}

export default App;
