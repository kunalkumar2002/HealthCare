import "../style/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Page/Home";
import Navbar from "./navbar";
import Login from "../Page/login";
import SignUp from "../Page/signup";
import Details from "../Page/details";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar login="login" />,
      children: [
        { index: true, element: <Home /> },
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/details", element: <Details /> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
