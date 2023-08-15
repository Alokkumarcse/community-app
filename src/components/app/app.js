// import { useView } from "aurelia-framework";
// @useView("./app.html")
import { PLATFORM } from "aurelia-framework";
export class App {
  constructor() {
    this.message = "Hello World";
    this.parentProp = "child view-model coming from parent view-model";
    this.test = "App view-model property";
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Router testing";
    config.map([
      {
        route: ["", "home"],
        moduleId: PLATFORM.moduleName("../router-views/home/home"),
        title: "Home",
        name: "home",
        nav: true,
      },
      {
        route: "about",
        moduleId: PLATFORM.moduleName("../router-views/about/about"),
        title: "About",
        name: "about",
        nav: true,
      },
      {
        route: "jobs",
        moduleId: PLATFORM.moduleName("../router-views/jobs/jobs"),
        title: "Jobs",
        name: "jobs",
        nav: true,
      },
      {
        route: "link",
        moduleId: PLATFORM.moduleName("../router-views/link/link"),
        title: "Links",
        name: "link",
        nav: true,
      },
      {
        route: "eventDetails/:eventId",
        moduleId: PLATFORM.moduleName("../events/eventDetails"),
        name: "eventDetails",
      },
    ]);
  }
}
