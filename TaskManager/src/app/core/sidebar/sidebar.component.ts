import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { getDate } from 'date-fns';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  today: string = 'svg_sidebar_day';

  @Output() itemClickedEmitter = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
    this.today = `svg_sidebar_day${getDate(new Date())}`;
  }

  onItemClicked() {
    this.itemClickedEmitter.emit();
  }

}
