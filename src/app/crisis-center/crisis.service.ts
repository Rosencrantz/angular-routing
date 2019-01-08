import { Injectable } from "@angular/core";

import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";

import { Crisis } from "./crisis";
import { CRISESES } from "./mock-crisis";
import { MessageService } from "../message.service";

@Injectable({
  providedIn: "root"
})
export class CrisisService {
  constructor(private messageService: MessageService) {}

  getCrises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the crises
    this.messageService.add("CrisisService: fetched Crises");
    return of(CRISESES);
  }

  getCrisis(id: number | string) {
    return this.getCrises().pipe(
      // (+) before `id` turns the string into a number
      map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
    );
  }
}
