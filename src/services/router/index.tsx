import { RouterProvider, createBrowserRouter } from "react-router-dom";

const LazyLoadedAdd = lazyImportModule(ModuleType.Feature, "add");
import { ModuleType, lazyImportModule } from "../import";

export function Router(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>root route</div>,
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
