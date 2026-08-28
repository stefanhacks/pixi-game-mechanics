import "../src/style.css";
import { Application, Graphics } from "pixi.js";

const app = new Application();

await app.init({
  resizeTo: window,
  background: "#1e1e1e",
});

document.body.appendChild(app.canvas);

const square = new Graphics()
  .rect(0, 0, 100, 100)
  .fill(0xff0000);

app.stage.addChild(square);

const recenter = () => {
  square.position.set(
    app.screen.width / 2 - 50,
    app.screen.height / 2 - 50,
  );
};

const observer = new ResizeObserver(recenter);
observer.observe(document.body);

recenter();
