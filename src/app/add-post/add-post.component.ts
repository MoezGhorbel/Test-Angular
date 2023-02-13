import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  FormAddPost = new FormGroup({
    title: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private servicePostService: ServicePostService, private router: Router) { }

  addPost() {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    const id = Date.now();
    const newPost = {
      id: id,
      title: this.FormAddPost.value.title,
      categories: this.FormAddPost.value.categories,
      description: this.FormAddPost.value.description,
      date: formattedDate
    };
    this.servicePostService.addPost(newPost);
    this.router.navigate(['']);
  }


  ngOnInit() {
  }

}
