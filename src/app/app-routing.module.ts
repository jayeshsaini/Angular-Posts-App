import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { GetPostComponent } from './components/get-post/get-post.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'addpost', component: AddPostComponent },
  { path: 'getpost', component: GetPostComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
