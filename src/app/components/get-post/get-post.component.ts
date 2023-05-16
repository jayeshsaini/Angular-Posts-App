import { Component } from '@angular/core';
import { IPost, PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css'],
})
export class GetPostComponent {
  postId: number = 0;
  postData: any;

  constructor(private postService: PostService) {}

  // handling the get post submit
  onSubmit() {
    if (this.postId) {
      this.postService.getPost(this.postId).subscribe({
        next: (data) => {
          this.postData = data;
        },
        error: (error) => {
          console.log(error);
          this.postData = null; // Set postData to null when there is an error
        },
      });
    }
  }
}
