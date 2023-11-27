// REACT & LIBRARIES
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// PAGES
import { Users, NewPlace, UserPlaces, UpdatePlace, Auth } from "./pages";

// FEATURES COMPONENTS
import { MainNavigation } from "./features";

// UI COMPONENTS
import { Map } from "./ui";

// CONTEXTS
import { AuthProvider } from "./contexts/auth_context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

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

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: { duration: 3000 },
            error: { duration: 5000 },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px",
              backgroundColor: "var(--color-grey-0)",
              color: "var(--color-grey-700)",
            },
          }}
        />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

// 73
