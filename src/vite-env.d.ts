/// <reference types="vite/client" />

import { Application } from "pixi.js";

interface Window {
  debug: Record<string, unknown>;
}

declare global {
  var __PIXI_APP__: Application;
}
