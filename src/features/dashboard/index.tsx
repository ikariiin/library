import { useLoaderData } from "react-router";
import type { DashboardLoaderData } from "@/services/loaders";
import { List } from "./list";

export function Dashboard(): JSX.Element {
  const loaderData = useLoaderData() as DashboardLoaderData;

  return (
    <div className="grid grid-cols-main-layout p-3 h-screen font-serif">
      <List files={loaderData.files} />
    </div>
  );
}
