import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'angel-drag-container',
  templateUrl: './drag-container.component.html',
  styleUrls: ['./drag-container.component.scss']
})
export class DragContainerComponent implements OnInit {

  @Input() name: any;

  constructor() { }

  ngOnInit() {
  }

}
