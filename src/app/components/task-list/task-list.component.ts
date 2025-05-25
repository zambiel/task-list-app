import { Component } from '@angular/core';
import { ITask } from '../../models/task.model';
import { TaskComponent } from './components/task/task.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  taskListPending: ITask[] = [];
  taskListCompleted: ITask[] = [];
  showInputTask: boolean = false;

  errorInputTask: boolean = false;

  showInputTextTask() {
    this.showInputTask = true;
  }

  createTask(description: string) {

    if(description.trim()) {
      const task: ITask = {
        date: new Date(),
        description: description.trim(),
        completed: false,
      };
      this.errorInputTask = false;
      this.taskListPending.push(task);
      this.showInputTask = false;
    } else {
      this.errorInputTask = true;
    }
  }

}
