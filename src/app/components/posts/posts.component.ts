import { Component } from '@angular/core';
import { IPost, PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  constructor(private postService: PostService) {}

  posts: IPost[] = [];

  // get call onInit of home page
  ngOnInit() {
    this.postService.getPosts().subscribe({
      next: (response) => {
        this.posts = response;
      },
      error: (error) => {
        console.log(error);
        alert('API call failed. Check the API URL again.');
      },
    });
  }
}
