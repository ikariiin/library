import { StorageFile } from "@/services/storage/storage-file";
import { useCallback } from "react";

export function Add() {
  const onFileChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;

      const storageFiles = await Promise.all(
        Array.from(e.target.files, (file) => StorageFile.fromFile(file).save())
      );
      console.log(storageFiles);
    },
    []
  );

  return (
    <section className="flex items-center justify-center h-screen">
      <input type="file" className="" onChange={onFileChange} accept=".epub" />
    </section>
  );
}
