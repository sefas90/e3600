import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReaderService } from '../reader.service';

@Component({
  selector: 'app-watch-view',
  templateUrl: './watch-view.component.html'
})
export class WatchViewComponent implements OnInit {
  private id = this.route.snapshot.params['id'];
  public readers: any;
  public date: any;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private readerService: ReaderService) {
    this.date = new Date().toLocaleDateString();
  }

  ngOnInit() {
    this.readerService.viewReader(this.id).subscribe(
      result => {
        this.readers = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
