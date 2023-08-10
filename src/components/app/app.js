// import { useView } from "aurelia-framework";
// @useView("./app.html")

export class App {
  constructor() {
    this.message = "Hello World";
    this.parentProp = "child view-model coming from parent view-model";
    this.test = "App view-model property";
  }
}
