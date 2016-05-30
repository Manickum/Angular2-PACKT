import {TASKS} from './sample.tasks';
import {Injectable} from 'angular2/core';

@Injectable()
export class TaskService {
  getTasks() {
    return TASKS;
  };
  addTask(task) {
    TASKS.push(task);
  };
  deleteTask (task) {
    for (var i=0; i<TASKS.length; i++) {
      if (TASKS[i].id === task.id) {
        TASKS.splice(i,1);
        break;
      }
    }    
  };
}