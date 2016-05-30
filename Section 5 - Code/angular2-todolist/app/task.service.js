System.register(['./sample.tasks', 'angular2/core'], function(exports_1, context_1) {
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
    var sample_tasks_1, core_1;
    var TaskService;
    return {
        setters:[
            function (sample_tasks_1_1) {
                sample_tasks_1 = sample_tasks_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService() {
                }
                TaskService.prototype.getTasks = function () {
                    return sample_tasks_1.TASKS;
                };
                ;
                TaskService.prototype.addTask = function (task) {
                    sample_tasks_1.TASKS.push(task);
                };
                ;
                TaskService.prototype.deleteTask = function (task) {
                    for (var i = 0; i < sample_tasks_1.TASKS.length; i++) {
                        if (sample_tasks_1.TASKS[i].id === task.id) {
                            sample_tasks_1.TASKS.splice(i, 1);
                            break;
                        }
                    }
                };
                ;
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], TaskService);
                return TaskService;
            }());
            exports_1("TaskService", TaskService);
        }
    }
});
//# sourceMappingURL=task.service.js.map