import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface IPost {
  userId: number | null | undefined;
  id: number | null | undefined;
  title: string | null | undefined;
  body: string | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  // Get call for all the posts
  getPosts(): Observable<any> {
    return this.http
      .get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(map((posts) => posts.reverse()));
  }

  // Post call for adding new data
  addPosts(post: IPost): Observable<Object> {
    const body = {
      userId: post.userId,
      id: post.id,
      title: post.title,
      body: post.body,
    };
    return this.http.post(`https://jsonplaceholder.typicode.com/posts`, body);
  }

  // get post by id
  getPost(postId: number): Observable<Object> {
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
  }
}
