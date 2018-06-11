import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ReaderService } from '../reader.service';
import { Reader } from '../reader';
import { InformationService } from '../../../login/information.service';
import { CONSTANTS } from '../../../core/constants';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public readers: any;
  public reader: Reader;
  public permissions: any = {
    pcreate: 0,
    pread: 0,
    pwrite: 0,
    pdelete: 0,
    pexecute: 0
  };
  private CONSTANTS = CONSTANTS;
  private user = this.informationService.getAttributeFromData('user');
  constructor(private router: Router,
              private readerService: ReaderService,
              private informationService: InformationService) {
    this.reader = new Reader(null, null, null, null);
  }

  ngOnInit() {
    const data = {
      module: this.CONSTANTS.MODULES.READERS,
      role: this.user.id_role
    };
    this.informationService.getPermissions(data).subscribe(
      response => {
        this.permissions = response;
      },
      error => {
        console.log(error);
      }
    );
    this.readerService.loadReaders().subscribe(
      result => {
        this.readers = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  createReader() {
    this.router.navigate(['/readers/page', {id: 0}], {skipLocationChange: true});
  }

  editReader(id) {
    this.router.navigate(['/readers/page', {id: id}], {skipLocationChange: true});
  }

  viewReader(id) {
    this.router.navigate(['/readers/view', {id: id}], {skipLocationChange: true});
  }

  openModal(reader) {
    this.reader = reader;
  }

  deleteReader() {
    this.readerService.deleteReader(this.reader.id).subscribe(
      result => {
        this.router.navigate(['/readers/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
