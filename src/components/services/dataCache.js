import { transient, singleton } from "aurelia-framework";

@singleton()
export class DataCache {
  constructor() {
    this.data = [];
    console.log("data cache constructor");
  }
}
