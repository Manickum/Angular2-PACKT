import {Component} from 'angular2/core';
import {HighlightDirective} from './highlight.directive';
import {TaskService} from './task.service';
import {Task} from './tasks';
import {OnInit} from 'angular2/core';

@Component({
  selector: 'my-component',
  templateUrl: 'app/app.component.html',
  directives: [HighlightDirective],
  providers: [TaskService]

})
export class MyComponent {
    public name: String;
    public today: Date;
    public task: String;
    public taskList: Task[];
    

  
    constructor(private _taskService: TaskService) {
        this.name = 'Angular 2 Rocks !';
        this.today = new Date();       
        this.task = '';
        this.taskList = this._taskService.getTasks();
        
    }
    sayMyName() {
	    alert (this.name);
    }
}
