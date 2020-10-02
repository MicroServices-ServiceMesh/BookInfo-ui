import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../model/Book';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
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

  retrieveAllBooks(): Observable<any> {
    return this.http.get(
      environment.bookServiceEndpoints.list,
      this.httpOptions
    );
  }

  retrieveBookById(): Observable<any> {
    return this.http.get(
      environment.bookServiceEndpoints.student.concat(this.bookId),
      this.httpOptions
    );
  }

  createOrUpdateBook(book: Book) {
    if (typeof book.id != 'undefined' && book.id) {
      return this.http.put(
        environment.bookServiceEndpoints.student,
        book,
        this.httpOptions
      );
    } else {
      return this.http.post(
        environment.bookServiceEndpoints.student,
        book,
        this.httpOptions
      );
    }
  }
}
