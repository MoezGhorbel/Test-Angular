import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicePostService } from '../service-post.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent implements OnInit {
  FormUpdatePost: FormGroup;

  constructor(private servicePostService: ServicePostService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.FormUpdatePost = this.formBuilder.group({
      title: [''],
      categories: [''],
      description: ['']
    });

    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      const post = this.servicePostService.getPost(id);
      this.FormUpdatePost.patchValue(post);
    });
  }

  updatePost() {
    this.servicePostService.updatePost({
      ...this.FormUpdatePost.value,
      id: +this.activatedRoute.snapshot.params['id'],
      date: new Date().toLocaleDateString()
    });
    this.router.navigate(['']);
  }

}
