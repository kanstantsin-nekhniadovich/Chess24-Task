declare global {
  export namespace NodeJs {
    export interface ProcessEnv {
      NODE_ENV: string;
      REACT_APP_API: string;
    }
  }
}

export {};
