"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by User on 27.01.2017.
 */
var core_1 = require('@angular/core');
var todo_1 = require('../share/todo');
var data_1 = require('../share/data');
var TodoFormComponent = (function () {
    function TodoFormComponent() {
        this.newTodoTitle = '';
    }
    TodoFormComponent.prototype.create = function () {
        //event.preventDefault();   //станавливает отправку данных на сервер и перезагрузку страницы
        //let todo: Todo = new Todo(input.value, false);
        //this.todos.push(todo);
        //input.value = '';
        var todo = new todo_1.Todo(this.newTodoTitle, false);
        data_1.todos.push(todo);
        // this.newTodoTitle = '';
        // console.log(todo);
        // console.log(todos);
    };
    TodoFormComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'todo-form',
            templateUrl: 'todo-form-components.html',
            styleUrls: ['todo-form-components.css']
        }), 
        __metadata('design:paramtypes', [])
    ], TodoFormComponent);
    return TodoFormComponent;
}());
exports.TodoFormComponent = TodoFormComponent;
//# sourceMappingURL=todo-form-components.js.map