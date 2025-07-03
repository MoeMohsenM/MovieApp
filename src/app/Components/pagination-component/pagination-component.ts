import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-pagination-component',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './pagination-component.html',
  styleUrl: './pagination-component.scss'
})
export class PaginationComponent {
  @Input() rows: number = 20;
  @Input() totalRecords: number = 1000;
  @Input() first: number = 0;

  @Output() pageChange = new EventEmitter<number>();
  onPageChange(event: any) {
    const page = Math.floor(event.first / event.rows) + 1;
    this.pageChange.emit(page);
  }
}
// import { PaginatorModule } from 'primeng/paginator';
// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { PaginatorState } from 'primeng/paginator';

// @Component({
//   selector: 'app-pagination-component',
//   standalone: true,
//   templateUrl: './pagination-component.html',
//   styleUrls: ['./pagination-component.scss'],
//   imports: [PaginatorModule]
// })
// export class PaginationComponent {
//   @Input() rows: number = 20;
//   @Input() totalRecords: number = 0;
//   @Input() first: number = 0;

//   @Output() pageChange = new EventEmitter<number>();

//   onPageChange(event: PaginatorState) {
//     const first = event.first ?? 0;
//     this.pageChange.emit(first);
//   }
// }


