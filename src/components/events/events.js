// import { useView } from "aurelia-framework";

// @useView("../views/events.html")

import { inject } from "aurelia-framework";
import { DataRepository } from "../services/dataRepository";

@inject(DataRepository)
export class Events {
  constructor(dataRepository) {
    // getting data from getEvents() api which is define in services
    dataRepository.getEvents().then((events) => (this.events = events));
  }
}
