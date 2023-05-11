import { StorageFile } from "@/services/storage/storage-file";
import { StorageIndex } from "@/services/storage/storage-index";

export interface DashboardLoaderData {
  files: StorageFile[];
  indexes: StorageIndex[];
}

export async function dashboardLoader() {
  const files = await StorageFile.getAll();
  const indexes = await StorageIndex.getAll();

  return {
    files,
    indexes,
  };
}
