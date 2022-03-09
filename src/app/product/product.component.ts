import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  count$: Observable<number>; 

  constructor(
    private chartService: ChartService
  ) { }

  ngOnInit(): void {
    this.count$ = this.chartService.count$;
  }

  getCountValue(callback) {
    console.log(callback);
    this.chartService.count$
    .pipe(
      first()
    )
    .subscribe(callback)
  }

  addCount() {
    this.getCountValue(countValue => {
      this.chartService.setCount(++countValue)
    })
  }

}
