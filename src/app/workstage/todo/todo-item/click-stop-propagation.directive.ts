import { Directive, HostListener } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';

@Directive({
  selector: "[click-stop-propagation]"
})
export class ClickStopPropagationDirective {
  constructor(public todoItemComponent: TodoItemComponent) {}

  @HostListener("click", ["$event"])
  public onClick(event: any): void {
    event.stopPropagation();
  }
}
