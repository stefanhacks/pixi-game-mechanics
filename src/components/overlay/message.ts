import { CanvasTextOptions, Text, TextStyle } from "pixi.js";

export class StripMessage extends Text {
  public readonly textStyle: Partial<TextStyle> = {
    fill: 0xffffff,
    fontFamily: "IBM Plex Mono",
    fontSize: 16,
    wordWrap: true,
    wordWrapWidth: 400,
    trim: true,
  };

  constructor(options?: CanvasTextOptions, leftToRight: boolean = true) {
    super();
    this.style = { ...this.textStyle, ...options?.style };
    this.anchor.set(leftToRight ? 0 : 1, 0.5);
  }
}
