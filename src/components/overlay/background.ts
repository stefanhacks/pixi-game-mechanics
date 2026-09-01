import { FillGradient, Graphics, GraphicsOptions } from "pixi.js";

export class StripBackground extends Graphics {
  private readonly bgGradient = new FillGradient({
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
    colorStops: [
      { color: "#0e0000FF", offset: 0 },
      { color: "#0e0000b9", offset: 0.7 },
      { color: "#0e000000", offset: 1 },
    ],
  });

  constructor(options?: GraphicsOptions, leftToRight: boolean = true) {
    super(options);
    if (leftToRight === false) {
      this.bgGradient.start.x = 1;
      this.bgGradient.end.x = 0;
    }
  }

  public draw(width: number, height: number): Graphics {
    this
      .clear()
      .rect(0, 0, width, height)
      .fill(this.bgGradient);

    return this;
  }
}
