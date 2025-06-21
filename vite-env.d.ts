/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SOME_KEY?: string; // optional custom vars
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
