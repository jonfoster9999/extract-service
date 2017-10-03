import { PostService } from './post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private postService: PostService) {
  }

  ngOnInit() {
    console.log(this.postService.getResource(2).subscribe(data => data ))
  }
}
