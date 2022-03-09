import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  count$: Observable<number>;

  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.count$ = this.chartService.count$;
  }



}
