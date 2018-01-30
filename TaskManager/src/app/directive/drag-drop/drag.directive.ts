import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[app-draggable][dragClass]'
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

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // 拖拽_开始
  @HostListener('dragstart', ['$event'])
  onDragStart(event: Event) {
    if (event.target === this.element.nativeElement) {
      // 添加拖拽时的样式
      this.renderer.addClass(this.element.nativeElement, this.dragClass);
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
