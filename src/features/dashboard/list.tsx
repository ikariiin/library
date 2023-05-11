import { ListItem } from "@/components/epub/list-item";
import { StorageFile } from "@/services/storage/storage-file";

export interface ListProps {
  files: StorageFile[];
}

export function List({ files }: ListProps) {
  return (
    <section className="h-full overflow-y-auto">
      {files.map((file) => (
        <ListItem key={file.getIndex().indexName} file={file.getFile()} />
      ))}
    </section>
  );
}
