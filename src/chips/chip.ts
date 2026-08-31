import InputReader from "../managers/inputReader";

export type ChipSettings = {
  name: string;
  inputReader?: InputReader;
}

export default abstract class Chip {
  public name: string;

  constructor(settings: ChipSettings) {
    this.name = settings.name;
  }

  public load(): Promise<void> {
    throw new Error("Method load not implemented.");
  }

  public dispose(): Promise<void> {
    throw new Error("Method dispose not implemented.");
  }
}
