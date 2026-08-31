import { EventEmitter } from "pixi.js";

export enum InputEvent {
  KeyDown = "keydown",
  KeyUp = "keyup",
}

export default class InputReader extends EventEmitter<InputEvent> {
  private keysToRead = new Set<string>();

  constructor() {
    super();
    this.readyEmitter();
  }

  private readyEmitter(): void {
    for (const type of Object.values(InputEvent)) {
      window.addEventListener(type, (event) => {
        if (event.repeat === true) return;
        else this.checkForInput(event.key.toLowerCase(), type);
      });
    }
  }

  private checkForInput(key: string, type: InputEvent): void {
    if (this.keysToRead.has(key) === false) return;
    this.emit(type, key);
  }

  private readInputForSingle(key: string): void {
    this.keysToRead.add(key.toLowerCase());
  }

  private stopInputForSingle(key: string): void {
    this.keysToRead.delete(key.toLowerCase());
  }

  public readInputFor(key: string | string[]): void {
    if (Array.isArray(key)) {
      for (const k of key) {
        this.readInputForSingle(k);
      }
    } else {
      this.readInputForSingle(key);
    }
  }

  public stopInputFor(key: string | string[]): void {
    if (Array.isArray(key)) {
      for (const k of key) this.stopInputForSingle(k);
    } else {
      this.stopInputForSingle(key);
    }
  }
}
