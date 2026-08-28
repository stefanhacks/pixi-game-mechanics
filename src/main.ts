import "../src/style.css";
import { Application, Graphics } from "pixi.js";
import Bootstrap from "./managers/bootstrap";

const app = new Application();

await app.init({
  resizeTo: window,
  background: "#1e1e1e",
});

await document.fonts.load("400 24px \"IBM Plex Mono\"");

globalThis.__PIXI_APP__ = app;
document.body.appendChild(app.canvas);

const square = new Graphics().rect(0, 0, 100, 100).fill(0xff0000);

app.stage.addChild(square);

const recenter = () => {
  square.position.set(app.screen.width / 2 - 50, app.screen.height / 2 - 50);
};

const observer = new ResizeObserver(recenter);
observer.observe(document.body);
recenter();

new Bootstrap(app);
