import {Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2} from '@angular/core';
import {DragData, DragDropService} from '../drag-drop.service';

@Directive({
  selector: '[app-droppable][dropTags][dragEnterClass]'
})
export class DropDirective {

  @Input() dragEnterClass: string;
  @Input() dropTags: string[] = [];

  @Output() droppedEmitter = new EventEmitter<DragData>();

  private data$;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private service: DragDropService) {
    this.data$ = this.service.getDragData().take(1);
  }

  // 拖拽_进入
  @HostListener('dragenter', ['$event'])
  onDragEnter(event: Event) {
    // 阻止默认行为
    event.preventDefault();
    // 让这个事件只有自己可以处理, 不会继续向下传递
    event.stopPropagation();

    if (event.target === this.element.nativeElement) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) != -1) {
          // 添加样式
          this.renderer.addClass(this.element.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  // drag_over
  @HostListener('dragover', ['$event'])
  onDragOver(event: Event) {

    event.preventDefault();
    event.stopPropagation();

    if (event.target === this.element.nativeElement) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) != -1) {
          this.renderer.setProperty(event, 'dataTransfer.effectAllowed', 'all');
          this.renderer.setProperty(event, 'dataTransfer.dropEffect', 'move');
        } else {
          this.renderer.setProperty(event, 'dataTransfer.effectAllowed', 'none');
          this.renderer.setProperty(event, 'dataTransfer.dropEffect', 'none');
        }
      });
    }
  }

  // drag_leave
  @HostListener('dragleave', ['$event'])
  onDragLeave(event: Event) {

    event.preventDefault();
    event.stopPropagation();

    if (event.target === this.element.nativeElement) {
      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) != -1) {
          // 添加样式
          this.renderer.removeClass(this.element.nativeElement, this.dragEnterClass);
        }
      });
    }
  }

  // drop
  @HostListener('drop', ['$event'])
  onDrop(event: Event) {

    event.preventDefault();
    event.stopPropagation();

    if (event.target === this.element.nativeElement) {

      this.data$.subscribe(dragData => {
        if (this.dropTags.indexOf(dragData.tag) != -1) {
          // 添加样式
          this.renderer.removeClass(this.element.nativeElement, this.dragEnterClass);
          // 发送数据
          this.droppedEmitter.emit(dragData);
          // 清空数据
          this.service.clearDragData();
        }
      });
    }
  }
}
