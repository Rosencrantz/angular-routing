import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Observable } from "rxjs";

import { CrisisService } from "../crisis.service";
import { Crisis } from "../Crisis";

@Component({
  selector: "app-crisis-detail",
  templateUrl: "./crisis-detail.component.html",
  styleUrls: ["./crisis-detail.component.scss"]
})
export class CrisisDetailComponent implements OnInit {
  crisis$: Observable<Crisis>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get("id");

    this.crisis$ = this.service.getCrisis(id);
  }

  gotoCrisises(crisis: Crisis) {
    let crisisId = crisis ? crisis.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.n.
    this.router.navigate(["../", { id: crisisId }], {relativeTo: this.route});
  }
}
