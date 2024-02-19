import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { RouterStateSnapshot, TitleStrategy } from "@angular/router";

@Injectable()
export class StudentAppTitleStrategy extends TitleStrategy {
    updateTitle(snapshot: RouterStateSnapshot): void {
      const title = this.buildTitle(snapshot); // build the current route title
      if (title) {
        this.title.setTitle(`Student  application - ${title}`); // set the app prefix with the current title.
        alert(title);
      }
    }
    constructor(private title: Title) { // inject the title service
      super();
    }
  }