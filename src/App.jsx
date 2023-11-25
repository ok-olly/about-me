import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Work from "../src/pages/Work";
import Contact from "../src/pages/Contact";
import Error from "../src/pages/Error";

function AppLayout() {
  return (
    <div>
      <Header />

      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
  { path: "*", element: <Error /> },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
