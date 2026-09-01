import { Container, ContainerOptions } from "pixi.js";
import TextStrip from "./textStrip";

export default class UI extends Container {
  private title: TextStrip;
  private menu: TextStrip;

  private dimensions: number;
  private readonly padding = 10;

  constructor(options?: ContainerOptions, dimensions: number = 100) {
    super(options);

    this.dimensions = dimensions;

    this.title = new TextStrip("foobar", 32, false);
    this.title.position.set(this.dimensions - this.title.width - this.padding, this.padding);
    this.addChild(this.title);

    this.menu = new TextStrip("menu", 32);
    this.menu.position.set(this.padding, this.dimensions - this.menu.height - this.padding);
    this.menu.eventMode = "static";
    this.menu.cursor = "pointer";
    this.addChild(this.menu);
  }
}
