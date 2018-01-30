import {Component, EventEmitter, HostBinding, HostListener, Input, OnInit, Output} from '@angular/core';
import {cardAnimation} from '../../animations/card.animation';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    cardAnimation
  ]
})
export class ProjectItemComponent implements OnInit {

  @Input() item;

  @Output() inviteEmitter = new EventEmitter<void>();
  @Output() deleteEmitter = new EventEmitter<void>();

  @HostBinding('@cardHover') cardHoverState = 'normal';

  constructor() { }

  ngOnInit() {
  }

  // 邀请
  onInviteAction() {
    this.inviteEmitter.emit();
  }

  // 删除
  onDeleteAction() {
    this.deleteEmitter.emit();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.cardHoverState = 'hover';
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.cardHoverState = 'normal';
  }
}
