import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TaskStatus } from '../task-status.enum';
import { UpdateTaskDTO } from '../dto/update-task-dto';

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowedStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE,
  ];

  transform(value: UpdateTaskDTO) {
    console.log('Valuire', value);

    value.status = value.status.toUpperCase() as any;

    if (!this.isStatusValid(value.status)) {
      throw new BadRequestException(`${value.status} is invalid`);
    }
    console.log('value', value);
    return value;
  }

  private isStatusValid(status: any) {
    const idx = this.allowedStatus.indexOf(status);
    return idx !== -1;
  }
}
