import { Injectable } from '@angular/core';
import { Post } from './Post-structure';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {
  public posts = [];

  constructor() { }

  getPosts() {
    this.posts = JSON.parse(localStorage.getItem('posts')) || [];
    return this.posts;
  }

  addPost(post: Post) {

    this.posts.push(post);
    this.updateLocalStorage();
  }

  getPost(id: number) {
    return this.getPosts().find(post => post.id === +id);
  }

  updatePost(post: Post) {
    const index = this.posts.findIndex(p => p.id === post.id);
    this.posts[index] = post;
    this.updateLocalStorage();
  }

  deletePost(id: number) {
    this.posts = this.posts.filter(post => post.id !== id);
    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('posts', JSON.stringify(this.posts));
  }
}
