import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IPost, PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent {
  // variables for handling form
  lastId: number = 0;
  newPost: IPost | null = null;

  constructor(
    private postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  // setting validators for fields
  postForm = this.formBuilder.group({
    id: [0],
    userId: [0, Validators.required],
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  ngOnInit() {
    this.getLastId();
  }

  // getting the last id for ID of new post
  getLastId() {
    this.postService.getPosts().subscribe(
      (data) => {
        // getting the last post
        const lastPost = data[0];
        // fetching the id of the last post
        this.lastId = lastPost ? lastPost.id : 0;
        this.postForm.patchValue({ id: this.lastId + 1 });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // handling the Submit for Reactive form
  onSubmit() {
    if (this.postForm.valid) {
      const formData = this.postForm.value;

      // Create a new instance of the IPost interface
      this.newPost = {
        userId: formData.userId,
        id: formData.id,
        title: formData.title,
        body: formData.body,
      };

      // call service to add post
      this.postService.addPosts(this.newPost).subscribe({
        next: (reponse) => {
          console.log(reponse);
        },
        error: (error) => {
          console.log(error);
          alert('Please try again.');
        },
      });
    } else {
      // mark all form controls as touched to show error messages
      this.postForm.markAllAsTouched();
    }
  }
}
