import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentService } from '../../service/studentapi/student.service';
import { Book } from '../../model/Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit {
  dataSource: Book[];
  selectedRowIndex = -1;

  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  constructor(private studentService: StudentService) {}

  /*
   * Retrieve all data on load
   */
  ngOnInit() {
    this.studentService.retrieveAllBooks().subscribe((data: {}) => {
      this.dataSource = data as Book[];
    });
  }

  highlight(row) {
    this.selectedRowIndex = row.id;
    this.studentService.setBookIdForUpdate(this.selectedRowIndex);
  }
}
