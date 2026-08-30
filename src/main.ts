import "../src/style.css";
import { Application } from "pixi.js";
import Bootstrap from "./managers/bootstrap";

async function loadAssets(): Promise<void> {
  await document.fonts.load("400 24px \"IBM Plex Mono\"");
}

async function makeApp(): Promise<void> {
  await loadAssets();

  const app = new Application();
  await app.init({ resizeTo: window, background: "#1e1e1e" });

  globalThis.__PIXI_APP__ = app;
  document.body.appendChild(app.canvas);

  new Bootstrap(app);
}

await makeApp();
