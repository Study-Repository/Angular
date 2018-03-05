import {Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHeaderComponent implements OnInit {

  @Input() header: string;

  @Output() newTaskEmitter = new EventEmitter<void>();

  @Output() moveListEmitter = new EventEmitter<void>();
  @Output() deleteListEmitter = new EventEmitter<void>();
  @Output() modifyListEmitter = new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onNewTaskAction() {
    this.newTaskEmitter.emit();
  }

  onMoveAction() {
    this.moveListEmitter.emit();
  }

  onDeleteAction() {
    this.deleteListEmitter.emit();
  }

  onModifyAction() {
    this.modifyListEmitter.emit();
  }
}
