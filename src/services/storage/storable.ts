// import "reflect-metadata";

// // Decorator to mark a property as the key to store the object under
// export function Key(target: any, context: ClassFieldDecoratorContext) {
//   Reflect.defineMetadata("key", context.name, target);
// }

// export abstract class Storable {
//   public serialize(): Record<any, any> {
//     // Get all serializable properties
//     const properties = Reflect.getMetadata("serializable", this);
//     // Get the key to store the object under
//     const key = Reflect.getMetadata("key", this);

//     const serialized: Record<any, any> = {};
//     for (const property of properties) {
//       serialized[property] = this[property as keyof this];
//     }

//     return {
//       [key]: serialized,
//     };
//   }

//   public deserialize(data: Record<any, any>): void {
//     // Get all serializable properties
//     const properties = Reflect.getMetadata("serializable", this);
//     // Get the key to store the object under
//     const key = Reflect.getMetadata("key", this);

//     const serialized = data[key];
//     for (const property of properties) {
//       this[property as keyof this] = serialized[property];
//     }
//   }
// }
