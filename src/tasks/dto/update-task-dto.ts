import { IsEnum, IsNotEmpty } from 'class-validator';
import { TaskStatus } from '../task.model';

export class UpdateTaskDTO {
  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
