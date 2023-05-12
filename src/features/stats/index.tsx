import { StatCard } from "@/components/stats/card";
import { StorageFile } from "@/services/storage/storage-file";
import { StorageIndex } from "@/services/storage/storage-index";

export interface StatsProps {
  files: StorageFile[];
  indexes: StorageIndex[];
}

export function Stats({ files, indexes }: StatsProps) {
  return (
    <div className="mx-2 p-2 border-2 border-gray-300 rounded-lg">
      <h1 className="text-4xl font-semibold">Stats</h1>
      <div className="grid grid-cols-3 gap-2">
        <StatCard title="Books" value={indexes.length.toString()} />
        <StatCard
          title="Recently read"
          value="A Memory Called Empire (Teixcalaan)"
        />
        <StatCard title="Time spent" value="7h 34m" />
      </div>
    </div>
  );
}
