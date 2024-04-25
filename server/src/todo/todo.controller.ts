import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { UpdateTodoStatusDto } from '../todo/dto/update-todo-status.dto';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll() {
    return await this.todoService.findAll();
  }

  // @Post()
  // async create(@Body() title: string) {
  //   return await this.todoService.create(title);
  // }

  @Post()
  async create(@Body() dto: CreateTodoDto) {
    return await this.todoService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateTodoStatusDto) {
    return await this.todoService.update(id, dto.status);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.todoService.delete(id);
  }
}
