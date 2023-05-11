import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ModuleType, lazyImportModule } from "../import";
import { dashboardLoader } from "../loaders";

const LazyLoadedDashboard = lazyImportModule(ModuleType.Feature, "dashboard");
const LazyLoadedAdd = lazyImportModule(ModuleType.Feature, "add");

export function Router(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LazyLoadedDashboard />,
      loader: dashboardLoader,
    },
    {
      path: "/add",
      action: async (param) => {
        console.log(param);
        return { param };
      },
      element: <LazyLoadedAdd />,
    },
    {
      path: "/:id",
      loader: async (param) => {
        console.log(param);
        return { param };
      },
    },
    {
      path: "/preferences",
      loader: async () => {
        return { preferences: "preferences" };
      },
      action: async (param) => {
        console.log(param);
        return { param };
      },
    },
  ]);

  return <RouterProvider router={router} />;
}
