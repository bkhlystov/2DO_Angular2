/**
 * Created by User on 26.01.2017.
 */
import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.components.html',    //путь указывается относительно файла index.html без moduleId
    styleUrls: ['app.components.css']
})

export class AppComponent {
    title: string = 'Angular 2Do';

}