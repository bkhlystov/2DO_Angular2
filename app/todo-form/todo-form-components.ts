/**
 * Created by User on 27.01.2017.
 */
import { Component } from '@angular/core';

import { Todo } from '../share/todo';

import { todos } from '../share/data';

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form-components.html',
    styleUrls: ['todo-form-components.css']
})

export class TodoFormComponent {
    newTodoTitle: string ='';

    create(){       //event: Event ,input: HTMLInputElement  Вносится внутрь скобок обьекта
                    //event.preventDefault();   //станавливает отправку данных на сервер и перезагрузку страницы
                    //let todo: Todo = new Todo(input.value, false);
                    //this.todos.push(todo);
                    //input.value = '';
        let todo: Todo = new Todo(this.newTodoTitle, false);
        todos.push(todo);
        // this.newTodoTitle = '';
        // console.log(todo);
        // console.log(todos);
    }

}