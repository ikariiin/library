import config from "@/config";
import { Storage } from ".";
import { v4 as uuid } from "uuid";

export interface SerializedStorageIndex {
  index: string;
}

export class StorageIndex {
  private indexInstance = Storage.getIndexStorageInstance();

  constructor(private index: string) {}

  public async getAll() {
    const indexes =
      (await this.indexInstance.getItem<
        Array<SerializedStorageIndex> | undefined
      >(config.INDEX_KEY)) ?? [];
    return indexes.map((index) => new StorageIndex(index.index));
  }

  public serialize(): SerializedStorageIndex {
    return {
      index: this.index,
    };
  }

  public async save() {
    const indexes = await this.getAll();
    await this.indexInstance.setItem(config.INDEX_KEY, [
      ...indexes.map((index) => index.serialize()),
      this.serialize(),
    ]);
  }

  public async delete() {
    const indexes = await this.getAll();
    await this.indexInstance.setItem(
      config.INDEX_KEY,
      indexes
        .filter((index) => index.index !== this.index)
        .map((index) => index.serialize())
    );
  }

  public async exists() {
    const indexes = await this.getAll();
    return indexes.some((index) => index.index === this.index);
  }

  get indexName() {
    return this.index;
  }

  public static fromUUID() {
    const index = uuid();
    return new StorageIndex(index);
  }

  public static async getAll() {
    const indexInstance = Storage.getIndexStorageInstance();
    const indexes =
      (await indexInstance.getItem<Array<SerializedStorageIndex> | undefined>(
        config.INDEX_KEY
      )) ?? [];
    return indexes.map((index) => new StorageIndex(index.index));
  }
}
