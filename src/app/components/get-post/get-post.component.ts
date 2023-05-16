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
  dataLoaded: boolean = false; // Flag to track if data has been loaded

  constructor(private postService: PostService) {}

  onInit() {
    this.postData = 1;
  }

  // handling the get post submit
  onSubmit() {
    if (this.postId) {
      this.postService.getPost(this.postId).subscribe({
        next: (data) => {
          this.postData = data;
          this.dataLoaded = true; // Set the flag to true on API call
        },
        error: (error) => {
          console.log(error);
          this.postData = null; // Set postData to null when there is an error
          this.dataLoaded = true; // Set the flag even when there is error to indicate data is loaded
        },
      });
    }
  }
}
