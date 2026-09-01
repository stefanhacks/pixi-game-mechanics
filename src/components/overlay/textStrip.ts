import { Container } from "pixi.js";
import { StripBackground } from "./background";
import { StripMessage } from "./message";

enum RENDER_ORDER {
  BACKGROUND,
  MESSAGE,
}

export default class TextStrip extends Container {
  private background: StripBackground;
  private message: StripMessage;
  private leftToRight: boolean;
  private stripHeight?: number;

  private readonly padding = 12;

  constructor(text?: string, stripHeight?: number, leftToRight = true) {
    super();

    this.stripHeight = stripHeight;
    this.leftToRight = leftToRight;
    this.background = new StripBackground({ zIndex: RENDER_ORDER.BACKGROUND }, leftToRight);
    this.message = new StripMessage({ zIndex: RENDER_ORDER.MESSAGE }, leftToRight);

    this.addChild(this.background);
    this.addChild(this.message);

    this.setMessage(text);
  }

  private drawBackground(): void {
    const width = this.message.width + this.padding * 4;
    const height = this.stripHeight ?? this.message.height + this.padding * 2;
    this.background.draw(width, height);
  }

  private draw(): void {
    this.drawBackground();

    const messageX = this.leftToRight === true ? this.padding : this.background.width - this.padding;
    const messageY = this.background.height / 2;
    this.message.position.set(messageX, messageY);
  }

  public setMessage(text: string = "foobar"): void {
    this.message.text = text;
    this.draw();
  }
}
