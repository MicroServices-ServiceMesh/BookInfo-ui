import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StudentService } from '../../service/studentapi/student.service';
import { Book } from '../../model/Book';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css'],
})
export class BookUpdateComponent implements OnInit {
  book: Book = {} as Book;
  form: FormGroup;
  studentServiceSubscription: Subscription;

  constructor(private studentService: StudentService, fb: FormBuilder) {
    this.form = fb.group({
      id: '',
      firstName: '',
      lastName: '',
    });
  }

  public createOrUpdateStudent() {
    this.book = this.form.value;
    console.log(this.book);
    this.studentService.createOrUpdateBook(this.book).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.studentServiceSubscription = this.studentService
      .retrieveBookById()
      .subscribe((data) => {
        this.book = data;
        this.form.patchValue(this.book);
      });
  }

  ngOnDestroy() {
    this.studentServiceSubscription.unsubscribe();
  }
}
