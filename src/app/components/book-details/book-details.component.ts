import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../../service/studentapi/student.service';

export interface PeriodicElement {
  firstName: string;
  id: string;
  lastName: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: '1', firstName: 'Hydrogen', lastName: 'H' },
  { id: '2', firstName: 'Helium', lastName: 'He' },
  { id: '10', firstName: 'Neon', lastName: 'Ne' },
];

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  dataSource;
  selectedRowIndex = -1;

  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.studentService.resolveItems().subscribe((data: {}) => {
      this.dataSource = data;
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.studentService.setBookIdForUpdate(this.selectedRowIndex);
  }
}
