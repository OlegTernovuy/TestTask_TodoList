import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TodoStatus {
  Pending = 'Pending',
  InProgress = 'InProgress',
  Completed = 'Completed',
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: TodoStatus.Pending })
  status: TodoStatus;
}
