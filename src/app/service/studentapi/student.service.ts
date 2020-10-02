import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../model/Book';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly URL = 'http://localhost:8080/api/v1/student/list';
  private readonly getByBookId = 'http://localhost:8080/api/v1/student/';
  private bookId: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  public setBookIdForUpdate(bookIdToUpdate) {
    this.bookId = bookIdToUpdate;
  }

  public getBookIdForUpdate() {
    return this.bookId;
  }

  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    return this.http.get(this.URL, this.httpOptions);
  }

  retrieveBookById(): Observable<any> {
    return this.http.get(
      this.getByBookId.concat(this.bookId),
      this.httpOptions
    );
  }

  createOrUpdateBook(book: Book) {
    if (typeof book.id != 'undefined' && book.id) {
      return this.http.put(this.getByBookId, book, this.httpOptions);
    } else {
      return this.http.post(this.getByBookId, book, this.httpOptions);
    }
  }
}
