import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { TodoStatus } from '../todo.entity';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsEnum(TodoStatus)
  status: TodoStatus;
}
