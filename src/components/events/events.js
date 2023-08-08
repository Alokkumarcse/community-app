// import { useView } from "aurelia-framework";

// @useView("../views/events.html")
import { DataCache } from "../services/dataCache";
import { inject } from "aurelia-framework";

@inject(DataCache)
export class Events {
  constructor(dataCache) {
    this.events = [
      { id: 1, title: "Aurelia Fundamentals" },
      { id: 2, title: "React.js with Node.js" },
      { id: 3, title: "AureliaJs as FE and C# as BE" },
    ];
    this.cache = dataCache;
    this.cache.data.push("Alok");
  }
}
