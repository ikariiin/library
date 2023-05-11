import { Storage } from ".";
import { SerializedStorageIndex, StorageIndex } from "./storage-index";

export interface SerializedStorageFile {
  name: string;
  file: File;
  index: SerializedStorageIndex;
}

export class StorageFile {
  private storageInstance = Storage.getFileStorageInstance();

  constructor(
    private name: string,
    private file: File,
    private index: StorageIndex
  ) {}

  public async save() {
    const index = this.index.indexName;
    await this.storageInstance.setItem(index, {
      name: this.name,
      file: this.file,
      index: this.index.serialize(),
    });

    if (!(await this.index.exists())) {
      await this.index.save();
    }

    return this;
  }

  public async delete() {
    const index = this.index.indexName;
    await this.storageInstance.removeItem(index);
    await this.index.delete();
  }

  public async exists() {
    const index = this.index.indexName;
    return !!(await this.storageInstance.getItem(index));
  }

  public getFile() {
    return this.file;
  }

  public getName() {
    return this.name;
  }

  public getIndex() {
    return this.index;
  }

  public static async getAll() {
    const indexInstance = Storage.getIndexStorageInstance();
    const indexes =
      (await indexInstance.getItem<Array<SerializedStorageIndex> | undefined>(
        "index"
      )) ?? [];
    const files = await Promise.all(
      indexes.map(async (index) => {
        const file = await StorageFile.fromIndex(new StorageIndex(index.index));
        return file;
      })
    );
    return files;
  }

  public static async fromIndex(index: StorageIndex) {
    const storageInstance = Storage.getFileStorageInstance();
    const indexName = index.indexName;
    const file = await storageInstance.getItem<SerializedStorageFile>(
      indexName
    );
    if (!file) {
      throw new Error(`File with index ${indexName} does not exist`);
    }
    return new StorageFile(
      file.name,
      file.file,
      new StorageIndex(file.index.index)
    );
  }

  public static fromFile(file: File) {
    const index = StorageIndex.fromUUID();
    return new StorageFile(file.name, file, index);
  }
}
