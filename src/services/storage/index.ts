import localForage from "localforage";
import config from "@/config";

export class Storage {
  static getFileStorageInstance() {
    return localForage.createInstance({
      driver: localForage.INDEXEDDB,
      version: config.STORAGE_VERSION,
      name: config.STORAGE_NAME,
      storeName: "files",
    });
  }

  public static getIndexStorageInstance() {
    return localForage.createInstance({
      driver: localForage.INDEXEDDB,
      version: config.STORAGE_VERSION,
      name: config.STORAGE_NAME,
      storeName: "index",
    });
  }
}
