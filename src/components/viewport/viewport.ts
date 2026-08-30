import { Container, Graphics, Sprite, Texture } from "pixi.js";

export default class Viewport extends Container {
  public readonly VIEWPORT_SIZE = 800;

  private background: Sprite;

  constructor() {
    super();
    this.setSize(this.VIEWPORT_SIZE);

    this.mask = new Graphics().rect(0, 0, this.VIEWPORT_SIZE, this.VIEWPORT_SIZE).fill("#000000");
    this.mask.label = "View Mask";
    this.addChild(this.mask);

    this.background = new Sprite(Texture.WHITE);
    this.background.setSize(this.VIEWPORT_SIZE);
    this.background.tint = "#4b4243";
    this.background.label = "Background";

    this.addChild(this.background);
  }

  public onResize(maxDimension: number): void {
    const scale = Math.min(1, maxDimension / this.VIEWPORT_SIZE);
    this.scale = scale;
  }
}
