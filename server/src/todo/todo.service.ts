import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Todo, TodoStatus } from './todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  async findAll() {
    return await this.todoRepository.find();
  }

  // async create(title: string) {
  //   const todo = new Todo();
  //   todo.title = title;
  //   return await this.todoRepository.save(todo);
  // }

  async create(dto: CreateTodoDto) {
    const todo = new Todo();
    todo.title = dto.title;
    todo.status = dto.status;
    return await this.todoRepository.save(todo);
  }

  async update(id: number, status: TodoStatus) {
    const todo = await this.todoRepository.findOne({ where: { id: id } });
    if (todo) {
      todo.status = status;
      return await this.todoRepository.save(todo);
    }
    return null;
  }

  async delete(id: number) {
    return await this.todoRepository.delete(id).then(() => {});
  }
}
