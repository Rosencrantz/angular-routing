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

  getCrisises(): Observable<Crisis[]> {
    // TODO: send the message _after_ fetching the crisises
    this.messageService.add("CrisisService: fetched Crisises");
    return of(CRISESES);
  }

  getCrisis(id: number | string) {
    return this.getCrisises().pipe(
      // (+) before `id` turns the string into a number
      map((crisises: Crisis[]) => crisises.find(crisis => crisis.id === +id))
    );
  }
}
