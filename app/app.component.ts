/**
 * Created by User on 26.01.2017.
 */
import {Component} from '@angular/core';

const todos = [
    'Изучить Javascript',
    'Изучить Angular2',
    'Написать приложение'
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.components.html',    //путь указывается относительно файла index.html без moduleId
    styleUrls: ['app.components.css']
})

export class AppComponent {
    title = 'Angular 2Do';
    todos = todos;
}