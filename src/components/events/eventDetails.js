import { inject } from "aurelia-framework";
import { DataRepository } from "../services/dataRepository";

@inject(DataRepository)
export class EventDetails {
  constructor(dataRepository) {
    this.dataRepository = dataRepository;
  }
  // we create an activate method and call the api with params to fetch data and store in event variable and that variable use in view.
  activate(params, routeConfig) {
    this.event = this.dataRepository.getEvent(parseInt(params.eventId));
  }
}
