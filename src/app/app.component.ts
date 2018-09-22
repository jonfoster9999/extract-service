import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private postService: PostService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getResources()
      .subscribe(data => {
        console.log(data);
      })
  }
}
