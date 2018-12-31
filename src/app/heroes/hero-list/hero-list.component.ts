import { Component, OnInit } from "@angular/core";

import { Hero } from "../hero";
import { HeroService } from "../hero.service";

import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";

@Component({
  selector: "app-hero-list",
  templateUrl: "./hero-list.component.html",
  styleUrls: ["./hero-list.component.scss"]
})
export class HeroListComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  selectedId: number;

  constructor(private service: HeroService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get("id");
        return this.service.getHeroes();
      })
    );
  }
}