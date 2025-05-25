import { Component, Input } from '@angular/core';
import { ITask } from '../../../../models/task.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input({ required: true }) task!: ITask;
  @Input() index: number = 0;
}
