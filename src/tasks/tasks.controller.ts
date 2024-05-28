import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
// import { CreateTaskDTO } from './dto/tasks-dto';
// import { UpdateTaskDTO } from './dto/update-task-dto';
// import { GetTaskByFilter } from './dto/task-filter-dto';
// import { TaskRepository } from './task.repository';
import { Task } from './task.entity';
// import { TaskStatusValidationPipe } from './pipes/tasks-validation.pipe';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getAllTasks(@Query(ValidationPipe) filterDto: GetTaskByFilter): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTaskwithfilters(filterDto);
  //   }
  //   return this.tasksService.getAllTasks();
  // }

  @Get('/:id')
  getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  // @Delete('/:id')
  // deleteOneTaskById(@Param('id') id: string): void {
  //   this.tasksService.deleteOneTaskById(id);
  // }

  // @Delete()
  // DeleteTask(): Task[] {
  //   return this.tasksService.DeleteAllTasks();
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // async createTask(@Body() createTaskDTO: CreateTaskDTO): Promise<Task> {
  //   return this.tasksService.createTask(createTaskDTO);
  // }

  // @Patch('/:id/status')
  // async updateTaskByID(
  //   @Param('id') id: string,
  //   @Body() updateTaskDTO: UpdateTaskDTO,
  // ): Promise<Task> {
  //   return this.tasksService.updateTaskStatus(id, updateTaskDTO);
  // }
}
