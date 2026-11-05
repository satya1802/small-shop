// `jsonwebtoken` ships no type declarations and `@types/jsonwebtoken` is not installed;
// this ambient module keeps strict TypeScript from refusing the import. Callers get `any`.
declare module "jsonwebtoken";
