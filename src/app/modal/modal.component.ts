import {Component, ElementRef, HostBinding, Input, OnInit} from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() title: string;
  @Input() sizeBS: string;
  @Input() options: any = {};
  @HostBinding('class.modal') classModal = true;
  @HostBinding('class.fade') classFade = true;
  public showed: boolean = false;

  constructor(
    private el: ElementRef
  ) { }

  public show() {
    this.showed = true;
    $(this.el.nativeElement).modal(this.options);
  }

  public hide() {
    this.showed = false;
    $(this.el.nativeElement).modal('hide');
  }

  ngOnInit() {
    this.options = Object.assign({
      backdrop: 'static'
    }, this.options);
  }

}
