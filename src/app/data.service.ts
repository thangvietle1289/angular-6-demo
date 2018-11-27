import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  usersPath = 'https://jsonplaceholder.typicode.com/users';
  postsPath = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.usersPath);
  }

  getUser(userId) {
    return this.http.get(`${this.usersPath}/${userId}`);
  }

  getPosts() {
    return this.http.get(this.postsPath);
  }
}
