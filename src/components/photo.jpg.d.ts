// This code removes the error: Cannot find module jpg or its corresponding type declarations.ts(2307)
declare module "*.jpg" {
  const value: any;
  export default value;
}