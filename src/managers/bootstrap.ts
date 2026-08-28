import { Application, Container } from "pixi.js";
import InfoOverlay from "../components/infoOverlay/overlay";

export default class Bootstrap {
  private app: Application;
  private layers: Container[];

  constructor(app: Application) {
    this.app = app;

    this.layers = this.makeLayers();
    this.app.stage.addChild(...this.layers);
  }

  private makeChipLayer(): Container {
    return new Container({ label: "ChipLayer", zIndex: 0 });
  }

  private makeDebugLayer(): Container {
    const debug = new Container({ label: "DebugLayer", zIndex: 0 });

    const infoMargin = 16;
    const info = new InfoOverlay();
    info.position.set(this.app.screen.width - info.width - infoMargin, infoMargin);

    debug.addChild(info);

    return debug;
  }

  private makeLayers(): Container[] {
    return [this.makeChipLayer(), this.makeDebugLayer()];
  }
}
