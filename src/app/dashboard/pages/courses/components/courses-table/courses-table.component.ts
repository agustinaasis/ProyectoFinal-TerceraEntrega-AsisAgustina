import { Component, Input } from '@angular/core';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss']
})
export class CoursesTableComponent {

  @Input()
  dataSource: Course[] = [];


  displayedColumns = ['id', 'name', 'length', 'actions']
}
