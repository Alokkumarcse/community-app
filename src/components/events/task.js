// import { useView } from "aurelia-framework";

// @useView("../views/task.html")
import { inject } from "aurelia-framework";
import { DataCache } from "../services/dataCache";

@inject(DataCache)
export class Task {
  constructor(cache) {
    cache.data.push("vikash");
    console.log("task data cache constructor");
  }
  activate(bindingContext) {
    this.item = bindingContext;
    console.log("test");
  }
}
