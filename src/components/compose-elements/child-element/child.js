import { inject } from "aurelia-framework";
import { Data } from "../../dependency-injection/data";

@inject(Data)
export class Child {
  constructor(data) {
    this.childMessage = "Message from child view-model";
    this.lists = data.lists;
    console.log(this.lists);
  }
  activate(bindingContext) {
    this.item = bindingContext;
    console.log("********************", this.item.id);
  }
}
