import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-modal-basic',
    templateUrl: './modal-basic.html'
})
export class AppModalBasic {
    actualText = 'sorry';
    closeResult: string;
    constructor(private modalService: NgbModal) { }
    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' });
    }
}