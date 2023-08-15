// import { useView } from "aurelia-framework";

// @useView("../views/events.html")

import { inject } from "aurelia-framework";
import { DataRepository } from "../services/dataRepository";
import { Router } from "aurelia-router";

@inject(DataRepository, Router)
export class Events {
  constructor(dataRepository, router) {
    // getting data from getEvents() api which is define in services
    dataRepository.getEvents().then((events) => {
      this.events = events;
      this.events.forEach(
        (item) =>
          (item.detailUrl = router.generate("eventDetails", {
            eventId: item.id,
          }))
      );
    });
  }
}
