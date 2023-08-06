import { Component } from '@angular/core';
import { Todo } from '../../models/todo'
import { TodoService } from 'src/app/services/todo.service';
@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent {

  list: Todo[] = []

  constructor(private service: TodoService){}

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void{
    this.service.findAll().subscribe((resposta) => {
      this.list = resposta;
    })
  }

}
