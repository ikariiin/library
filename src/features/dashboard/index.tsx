import { useLoaderData } from "react-router";
import type { DashboardLoaderData } from "@/services/loaders";
import { List } from "./list";
import { Header } from "./header";
import { ModuleType, lazyImportModule } from "@/services/import";
import { StatsProps } from "../stats";

const LazyLoadedStats = lazyImportModule<StatsProps>(
  ModuleType.Feature,
  "stats"
);

export function Dashboard(): JSX.Element {
  const loaderData = useLoaderData() as DashboardLoaderData;

  return (
    <div className="grid grid-cols-main-layout px-3 h-screen font-serif">
      <Header />
      <List
        files={loaderData.files}
        title={
          <h1 className="text-2xl font-extrabold mb-2 sticky top-0 bg-gray-50 p-2 rounded-b-md shadow-sm">
            {loaderData.files.length} books
          </h1>
        }
      />
      <LazyLoadedStats files={loaderData.files} indexes={loaderData.indexes} />
    </div>
  );
}
