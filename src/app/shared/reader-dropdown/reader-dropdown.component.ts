import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ReaderService } from '../../home/readers/reader.service';

@Component({
  selector: 'app-reader-dropdown-component',
  templateUrl: 'reader-dropdown.component.html'
})

export class SelectReaderDropdownComponent implements OnInit {
  public readers: any;
  public reader: any;
  @Output() readerId = new EventEmitter<any>();
  constructor(private readerService: ReaderService) {
  }

  sendId(readerId) {
    this.readerId.emit(readerId);
  }

  ngOnInit() {
    this.readerService.loadReaders().subscribe(
      result => {
        this.readers = result;
      },
      error => {
        console.log(error);
      }
    );
  }
}
