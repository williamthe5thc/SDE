/// <reference types="vite/client" />

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Image declarations
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

// Environment variables interface
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly MODE: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;
}

// Extend ImportMeta interface
interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Export empty object to make this a module
export {};