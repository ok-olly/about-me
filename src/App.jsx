import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Work from "../src/pages/Work";
import Contact from "../src/pages/Contact";
import Error from "../src/pages/Error";

function AppLayout() {
  return (
    <div className="animate-bg-gradient font-plex h-screen bg-gradient-to-br from-lime-500 via-amber-200 to-violet-300 bg-[length:400%_400%] text-2xl text-neutral-950">
      {/* <div className="flex h-screen flex-col items-center justify-between"> */}
      <div className="relative">
        <Header />

        {/* <main className="flex h-[400px] items-center justify-center"> */}
        {/* <main className="flex h-full items-center"> */}
        <main className="absolute left-0 top-0 flex h-screen w-screen items-center justify-center">
          <Outlet />
        </main>
      </div>
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
