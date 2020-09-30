import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly URL = 'http://localhost:8080/v1/student/list';
  private readonly getByBookId = 'http://localhost:8080/v1/student/';
  bookId: string;

  constructor(private http: HttpClient) {}

  // create a method named: resolveItems()
  // this method returns list-of-items in form of Observable
  // every HTTTP call returns Observable object
  resolveItems(): Observable<any> {
    console.log('Request is sent!');
    return this.http.get(this.URL);
  }

  retrieveBookById(bookId): Observable<any> {
    return this.http.get(this.getByBookId.concat(bookId));
  }

  public setBookIdForUpdate(bookIdToUpdate) {
    this.bookId = bookIdToUpdate;
  }

  public getBookIdForUpdate() {
    return this.bookId;
  }
}
