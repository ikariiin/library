import { FunctionComponent, lazy } from "react";

export enum ModuleType {
  Component = "component",
  Feature = "feature",
  Service = "service",
}

export async function importModule<T = Record<string, unknown>>(
  type: ModuleType,
  name: string
): Promise<{ default: FunctionComponent<T> }> {
  const module = await import(`../../${type}s/${name}`);
  // If there is a default export, use it
  if (module.default) {
    return { default: module.default as FunctionComponent<T> };
  }

  // If there is only one export, use that as the default export
  const keys = Object.keys(module);
  if (keys.length === 1) {
    return { default: module[keys[0]] as FunctionComponent<T> };
  }

  // Otherwise try to extract the component name from the file
  // and use that as the default export
  const componentName = name.split("/").pop();
  if (!componentName) {
    throw new Error(`Could not find a default export in ${name}`);
  }
  const key = componentName.charAt(0).toUpperCase() + componentName.slice(1);

  if (module[key]) {
    return { default: module[key] as FunctionComponent<T> };
  }

  // If all else fails, throw an error
  throw new Error(`Could not find a default export in ${name}`);
}

export function lazyImportModule<T = Record<string, unknown>>(
  type: ModuleType,
  name: string
) {
  return lazy(() => importModule<T>(type, name));
}
