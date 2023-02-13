import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from '../Post-structure';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  public posts: Post[];

  constructor(private servicePostService: ServicePostService,
    private router: Router) { }

  ngOnInit() {
    this.posts = this.servicePostService.getPosts();
  }

  updatePost(id: number) {
    this.router.navigate(['/update/', id]);
  }

  deletePost(id: number) {
    this.servicePostService.deletePost(id);
    this.posts = this.servicePostService.getPosts();
  }

  addPost() {
    this.router.navigate(['/add']);
  }

}
