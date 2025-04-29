export type ConvertToString<T> = T extends object
  ? { [K in keyof T]: ConvertToString<T[K]> }
  : T extends boolean | undefined
  ? string | undefined
  : T;

export type ElementType<T> = T extends (infer U)[] ? U : T;
