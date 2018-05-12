import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ManuscriptService } from '../manuscript.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Manuscript } from '../manuscript';
import { BooksService } from '../../books/books.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})

export class ListViewComponent implements OnInit {
  public manuscripts: any;
  public manuscript: Manuscript;
  public message: any;
  public readerId: any;
  public readerDate: any;
  public editorId: any;
  public editorDate: any;
  public quantity: any;
  public isbn: any;
  public price: any;
  constructor(private router: Router,
              private manuscriptService: ManuscriptService,
              private booksService: BooksService,
              private modalService: NgbModal) {
    this.manuscript = new Manuscript(null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
    this.manuscriptService.loadManuscripts().subscribe(
      result => {
        this.manuscripts = result;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  openModal(manuscript) {
    this.manuscript = manuscript;
  }

  sendToReader() {
    const data = this.manuscript;
    data.id_status = 2;
    this.manuscriptService.updateManuscript(data, this.manuscript.id).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );

    const manuscriptReader = {
      id_manuscript: this.manuscript.id,
      id_reader: this.readerId.reader,
      date_end: this.readerDate
    };
    this.manuscriptService.sendToReader(manuscriptReader).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  receiveFromReader(manuscript) {
    const data = manuscript;
    data.id_status = 3;
    this.manuscriptService.updateManuscript(data, manuscript.id).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  sendToEditor() {
    const data = this.manuscript;
    data.id_status = 4;
    this.manuscriptService.updateManuscript(data, this.manuscript.id).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );

    const manuscriptEditor = {
      id_manuscript: this.manuscript.id,
      id_editor: this.editorId.editor,
      date_end: this.editorDate
    };
    this.manuscriptService.sendToEditor(manuscriptEditor).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  receiveReaderId($event) {
    this.readerId = $event;
  }

  receiveEditorId($event) {
    this.editorId = $event;
  }

  receiveFromEditor(manuscript) {
    const data = manuscript;
    data.id_status = 5;
    this.manuscriptService.updateManuscript(data, manuscript.id).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  approveManuscript() {
    const data = this.manuscript;
    data.id_status = 6;
    this.manuscriptService.updateManuscript(data, this.manuscript.id).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );

    const book = {
      id: null,
      title: this.manuscript.title,
      isbn: this.isbn,
      stock: this.quantity,
      price: this.price,
      id_manuscript: this.manuscript.id,
      id_gender: this.manuscript.id_gender,
      id_author: this.manuscript.id_author
    };
    this.booksService.createBook(book).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  rejectManuscript(manuscriptId) {
    this.manuscriptService.rejectManuscript(manuscriptId).subscribe(
      result => {
        this.message = result;
      },
      error => {
        console.log(error);
      }
    );
  }

  registerManuscript() {
    this.router.navigate(['/manuscripts/register', {id: 0}], {skipLocationChange: true});
  }

  editManuscript(manuscriptId) {
    this.router.navigate(['/manuscripts/register', {id: manuscriptId}], {skipLocationChange: true});
  }

  deleteManuscript() {
    this.manuscriptService.deleteManuscript(this.manuscript.id).subscribe(
      result => {
        this.router.navigate(['/manuscripts/']);
      }, error => {
        console.log(error);
      }
    );
  }
}
