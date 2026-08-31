import { Application, Container } from "pixi.js";
import InfoOverlay from "../components/infoOverlay/overlay";
import Viewport from "../components/viewport/viewport";

enum RENDER_ORDER {
  CHIP,
  DEBUG,
}

export default class Bootstrap {
  private app: Application;

  private viewport: Viewport;
  private layers: Container[];

  constructor(app: Application) {
    this.app = app;

    this.viewport = this.makeViewport();
    this.layers = this.makeLayers();

    this.viewport.addChild(...this.layers);
    this.app.stage.addChild(this.viewport);
  }

  private makeViewport(): Viewport {
    const viewport = new Viewport();

    const onResize = (): void => {
      const { width, height } = this.app.screen;
      viewport.position.set(width / 2 - viewport.width / 2, height / 2 - viewport.height / 2);
      viewport.onResize(Math.min(height, width));
    };

    const observer = new ResizeObserver(onResize);
    observer.observe(document.body);
    onResize();

    return viewport;
  }

  private makeChipLayer(): Container {
    return new Container({ label: "ChipLayer", zIndex: RENDER_ORDER.CHIP + 1 });
  }

  private makeDebugLayer(): Container {
    const debug = new Container({ label: "DebugLayer", zIndex: RENDER_ORDER.DEBUG + 1 });

    const infoMargin = 16;
    const info = new InfoOverlay();
    info.position.set(this.viewport.VIEWPORT_SIZE - info.width - infoMargin, infoMargin);

    debug.addChild(info);

    return debug;
  }

  private makeLayers(): Container[] {
    return [this.makeChipLayer(), this.makeDebugLayer()];
  }
}
