import { eventsData } from "./eventsData";
import moment from "moment";

export class DataRepository {
  constructor() {
    // this.events = eventsData;
  }
  // define api to consume the data in view and it's view-model

  // getEvents fetch data in bulk
  getEvents() {
    var promise = new Promise((resolve, reject) => {
      if (!this.events) {
        setTimeout((_) => {
          this.events = eventsData;
          this.events.forEach((item) => {
            var dateTime = moment(item.dateTime).format("MM/DD//YYYY HH:mm");
            item.dateTime = dateTime;
          });
          resolve(this.events);
        }, 2000);
      } else {
        resolve(this.events);
      }
    });
    return promise;
  }
  //getEvent fetch data by id
  getEvent(eventId) {
    return this.events.find((item) => item.id === eventId);
  }
}
