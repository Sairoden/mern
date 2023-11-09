// React & Libraries
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

// Pages
import { Users, NewPlace, UserPlaces, UpdatePlace, Auth } from "./pages";

// Features Components
import { MainNavigation } from "./features";

import Map from "./ui/Map/Map";

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
          path: "/map",
          element: <Map />,
        },
        {
          path: "/places/:placeId",
          element: <UpdatePlace />,
        },
        {
          path: "/auth",
          element: <Auth />,
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

// 71
