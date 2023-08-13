// import { inject } from "aurelia-framework";
// import { Data } from "../../dependency-injection/data";

export class Parent {
  constructor(data) {
    this.parentMessage = "Message from Parent view-model";
    this.items = [
      { id: 1, title: "movie1" },
      { id: 2, title: "movie2" },
      { id: 3, title: "movie3" },
    ];
  }
}
