import { CanvasTextOptions, Text, TextStyle } from "pixi.js";

export class OverlayMessage extends Text {
  public readonly textStyle: Partial<TextStyle> = {
    fill: 0xffffff,
    fontFamily: "IBM Plex Mono",
    fontSize: 16,
    wordWrap: true,
    wordWrapWidth: 400,
    align: "right",
    trim: true,
  };

  constructor(options?: CanvasTextOptions) {
    super();
    this.style = { ...this.textStyle, ...options?.style };
    this.anchor.set(1, 0.5);
  }
}
