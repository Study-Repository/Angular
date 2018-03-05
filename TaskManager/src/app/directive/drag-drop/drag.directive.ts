import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';
import {DragDropService} from '../drag-drop.service';

/**
 * 拖拽指令
 */

@Directive({
  selector: '[app-draggable][dragTag][dragData][dragClass]'
})
export class DragDirective {

  private _isDraggable = false;

  // 是否可以拖拽
  @Input('app-draggable')
  set isDraggable(draggable: boolean) {
    this._isDraggable = draggable;
    this.renderer.setAttribute(this.element.nativeElement, 'draggable', `${draggable}`);
  }
  get isDraggable(): boolean {
    return this._isDraggable;
  }

  // 拖拽样式
  @Input() dragClass: string;
  // 拖拽类型
  @Input() dragTag: string;
  // 拖拽数据
  @Input() dragData: any;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private service: DragDropService
  ) { }

  // 拖拽_开始
  @HostListener('dragstart', ['$event'])
  onDragStart(event: Event) {
    if (event.target === this.element.nativeElement) {
      // 添加拖拽时的样式
      this.renderer.addClass(this.element.nativeElement, this.dragClass);
      // 设置service
      this.service.setDragData({tag: this.dragTag, data: this.dragData})
    }
  }

  // 拖拽_结束
  @HostListener('dragend', ['$event'])
  onDragEnd(event: Event) {
    if (event.target === this.element.nativeElement) {
      // 移除拖拽时的样式
      this.renderer.removeClass(this.element.nativeElement, this.dragClass);
    }
  }

}
