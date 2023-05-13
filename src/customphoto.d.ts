// This code removes the error: Cannot find module './assets/image/9.png' or its corresponding type declarations.ts(2307)

declare module '*.png' {
  const value: any;
  export default value;
}