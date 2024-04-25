import { IsEnum, IsNotEmpty } from 'class-validator';
import { TodoStatus } from '../todo.entity';

export class UpdateTodoStatusDto {
  @IsNotEmpty()
  @IsEnum(TodoStatus)
  status: TodoStatus;
}
