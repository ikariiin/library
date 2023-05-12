import { ListItem } from "@/components/epub/list-item";
import { StorageFile } from "@/services/storage/storage-file";

export interface ListProps {
  files: StorageFile[];
  title?: JSX.Element;
}

export function List({ files, title }: ListProps) {
  return (
    <section className="h-full overflow-y-auto pr-3 select-none">
      {title}
      {files.map((file) => (
        <ListItem key={file.getIndex().indexName} file={file.getFile()} />
      ))}
    </section>
  );
}
