import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Home from "../src/pages/Home";
import About from "../src/pages/About";
import Work from "../src/pages/Work";
import WorkDetail from "./pages/WorkDetail";
import Contact from "../src/pages/Contact";
import Error from "../src/pages/Error";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  return (
    <div className="h-screen animate-bg-gradient bg-gradient-to-br from-lime-500 via-amber-200 to-violet-300 bg-[length:400%_400%] font-plex text-base text-neutral-800 dark:from-lime-800 dark:via-stone-700 dark:to-violet-700 dark:text-neutral-300">
      <div className="relative">
        <Header />

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
        path: "/work/:id",
        element: <WorkDetail />,
      },
      {
        path: "/contact",
        element: <Contact />,
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
