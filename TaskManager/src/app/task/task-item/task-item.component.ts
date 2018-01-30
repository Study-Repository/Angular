import {Component, OnInit, Input, Output, EventEmitter, HostListener} from '@angular/core';
import {taskItemAnimation} from '../../animations/taskItem.animation';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [
    taskItemAnimation
  ]
})
export class TaskItemComponent implements OnInit {

  @Input() item;

  @Output() itemClickedEmitter = new EventEmitter<void>();

  avatar: string;

  taskItemHoverState = 'normal';

  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'svg_unassigned';
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.taskItemHoverState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.taskItemHoverState = 'normal';
  }

  onItemClickedAction() {
    this.itemClickedEmitter.emit();
  }

  onCheckboxClickedAction(event: Event) {
    // 让这个事件只有自己可以处理, 不会继续向下传递
    event.stopPropagation();
  }

}
