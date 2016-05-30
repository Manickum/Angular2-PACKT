System.register(['angular2/core', './highlight.directive', './task.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, highlight_directive_1, task_service_1;
    var MyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (highlight_directive_1_1) {
                highlight_directive_1 = highlight_directive_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            MyComponent = (function () {
                function MyComponent(_taskService) {
                    this._taskService = _taskService;
                    this.name = 'Angular 2 Rocks !';
                    this.today = new Date();
                    this.task = '';
                    this.taskList = this._taskService.getTasks();
                }
                MyComponent.prototype.sayMyName = function () {
                    alert(this.name);
                };
                MyComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        templateUrl: 'app/app.component.html',
                        directives: [highlight_directive_1.HighlightDirective],
                        providers: [task_service_1.TaskService]
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], MyComponent);
                return MyComponent;
            }());
            exports_1("MyComponent", MyComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map