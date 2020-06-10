import { Component, OnInit } from '@angular/core';
import { DbconService } from '../dbcon.service';
import { Route } from '../model/route';

@Component({
  selector: 'app-route-get',
  templateUrl: './route-get.component.html',
  styleUrls: ['./route-get.component.css']
})
export class RouteGetComponent implements OnInit {
  routes: Route[];

  constructor(private pr: DbconService) {

   }

  ngOnInit() {
    this.pr
    .getRoutes()
    .subscribe((data: Route[]) => {
      this.routes = data;
  });
  }

}
