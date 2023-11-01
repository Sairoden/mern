// React & Libraries
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Pages
import { Users, NewPlace, UserPlaces } from "./pages";

// Features Components
import { MainNavigation } from "./features";

function App() {
  const router = createBrowserRouter([
    {
      element: <MainNavigation />,
      children: [
        {
          path: "/",
          element: <Users />,
        },
        {
          path: "/places/new",
          element: <NewPlace />,
        },
        {
          path: "/:userId/places",
          element: <UserPlaces />,
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

// 45
