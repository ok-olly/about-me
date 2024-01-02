import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../src/pages/Home";
// import About from "./components/About";
// import Work from "./components/Work";
import WorkDetail from "./pages/WorkDetail";
// import Contact from "./components/Contact";
import Error from "../src/pages/Error";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <div className="mobile-p">
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      // {
      //   path: "/about",
      //   element: <About />,
      // },
      // {
      //   path: "/project",
      //   element: <Work />,
      // },
      {
        path: "/project/:id",
        element: <WorkDetail />,
      },
      // {
      //   path: "/contact",
      //   element: <Contact />,
      // },
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
