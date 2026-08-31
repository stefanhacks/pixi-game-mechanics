import { Container } from "pixi.js";
import { OverlayBackground } from "./background";
import { OverlayMessage } from "./message";

enum RENDER_ORDER {
  BACKGROUND,
  MESSAGE,
}

export default class InfoOverlay extends Container {
  private background: OverlayBackground = new OverlayBackground({ zIndex: RENDER_ORDER.BACKGROUND });
  private message: OverlayMessage = new OverlayMessage({ zIndex: RENDER_ORDER.MESSAGE });

  private readonly padding = 16;

  constructor(text?: string) {
    super();

    this.addChild(this.background);
    this.addChild(this.message);

    this.setMessage(text);
  }

  private drawBackground(): void {
    const width = this.message.width + this.padding * 4;
    const height = this.message.height + this.padding * 2;
    this.background.draw(width, height);
  }

  private draw(): void {
    this.drawBackground();

    const messageX = this.background.width - this.padding;
    const messageY = this.background.height / 2;
    this.message.position.set(messageX, messageY);
  }

  public setMessage(text: string = "foobar"): void {
    this.message.text = text;
    this.draw();
  }
}
