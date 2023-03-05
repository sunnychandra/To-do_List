import { Component} from '@angular/core';
import { moveItemInArray, transferArrayItem, CdkDragDrop } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  listadd = '';
  show = false;

  additem() {
    console.log('listadd before push:', this.listadd);
    this.tasks.push(this.listadd);
    console.log('tasks after push:', this.tasks);
    this.listadd = '';
    console.log('listadd after reset:', this.listadd);

  }

  clear() {
    this.completed = [];
  }

  tasks: string[] = ['Attend the meeting', 'Buy groceries', 'Pay bills'];
  completed: string[] = ['Fix the leaking faucet'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}


