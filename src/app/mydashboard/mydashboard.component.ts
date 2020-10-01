import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-mydashboard',
  templateUrl: './mydashboard.component.html',
  styleUrls: ['./mydashboard.component.css']
})
export class MydashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Cartão 1', cols: 1, rows: 1 },
          { title: 'Cartão 2', cols: 1, rows: 1 },
          { title: 'Cartão 3', cols: 1, rows: 1 },
          { title: 'Cartão 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Cartão 1', cols: 2, rows: 1 },
        { title: 'Cartão 2', cols: 1, rows: 1 },
        { title: 'Cartão 3', cols: 1, rows: 2 },
        { title: 'Cartão 4', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
