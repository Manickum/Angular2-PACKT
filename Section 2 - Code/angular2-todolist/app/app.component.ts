import {Component} from 'angular2/core'
import {HighlightDirective} from './highlight.directive';

@Component({
  selector: 'my-component',
  templateUrl: 'app/app.component.html',
  directives: [HighlightDirective]
})
export class MyComponent {
    public name: String;
    public today: Date;
    
    constructor() {
        this.name = 'Angular 2 Rocks !';
        this.today = new Date();       
    }
    sayMyName() {
	    alert (this.name);
    }
}
