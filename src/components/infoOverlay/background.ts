import { FillGradient, Graphics, GraphicsOptions } from "pixi.js";

export class OverlayBackground extends Graphics {
  private readonly bgGradient = new FillGradient({
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colorStops: [
      { color: "#0e000000", offset: 0 },
      { color: "#0e0000b9", offset: 0.3 },
      { color: "#0e0000FF", offset: 1 },
    ],
  });

  constructor(options?: GraphicsOptions) {
    super(options);
  }

  public draw(width: number, height: number): Graphics {
    this
      .clear()
      .rect(0, 0, width, height)
      .fill(this.bgGradient);

    return this;
  }
}
