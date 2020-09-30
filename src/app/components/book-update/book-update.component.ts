import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../service/studentapi/student.service';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css'],
})
export class BookUpdateComponent implements OnInit {
  constructor(private studentService: StudentService, fb: FormBuilder) {
    console.log('In constructor');
    console.log(this.id);
    this.form = fb.group({
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
    });
  }

  book;
  id: string;
  firstName: string;
  lastName: string;

  form: FormGroup;

  ngOnInit(): void {
    this.studentService
      .retrieveBookById(this.studentService.getBookIdForUpdate())
      .subscribe((data) => {
        this.book = data;
        this.id = this.book.id;
        this.firstName = this.book.firstName;
        this.lastName = this.book.lastName;

        this.form.patchValue({
          id: this.id,
          firstName: this.firstName,
          lastName: this.lastName,
        });
      });
  }
}
