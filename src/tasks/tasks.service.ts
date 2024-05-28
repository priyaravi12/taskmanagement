import { Injectable, NotFoundException } from '@nestjs/common';

// import { CreateTaskDTO } from './dto/tasks-dto';
// import { UpdateTaskDTO } from './dto/update-task-dto';
// import { GetTaskByFilter } from './dto/task-filter-dto';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
//import { FindOneOptions } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  //   private tasks: Task[] = [];
  //   getAllTasks(): Task[] {
  //     return this.tasks;
  //   }
  //   getTaskwithfilters(filterDto: GetTaskByFilter): Task[] {
  //     const { status, search } = filterDto;
  //     let tasks = this.getAllTasks();
  //     if (status) {
  //       tasks = tasks.filter((task) => task.status == status);
  //     }
  //     if (search) {
  //       tasks = tasks.filter(
  //         (task) =>
  //           task.title.includes(search) || task.description.includes(search),
  //       );
  //     }
  //     return tasks;
  //   }

  async getTaskById(id: number): Promise<Task> {
    const found = await this.taskRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`task with ${id} not found`);
    }
    return found;
  }

  //   getTaskById(id: string): Task {
  //     const found = this.tasks.find((task) => task.id == id);
  //     if (!found) {
  //       throw new NotFoundException(`task with ${id} not found`);
  //     }
  //     return found;
  //   }

  //   deleteOneTaskById(id: string): string {
  //     const found = this.getTaskById(id);
  //     const index = this.tasks.findIndex((task) => task.id == found.id);
  //     if (index === -1) {
  //       throw new NotFoundException(`task ${id} not found`);
  //     }
  //     this.tasks.splice(index, 1);
  //     return `task ${id} successfully deleted `;
  //   }
  //   DeleteAllTasks(): Task[] {
  //     this.tasks = [];
  //     console.log('all task deleted');
  //     return this.tasks;
  //   }
  //   async createTask(createTaskDTO: CreateTaskDTO): Promise<Task> {
  //     const { title, description } = createTaskDTO;
  //     const task: Task = {
  //       id: uuidv4(),
  //       title,
  //       description,
  //       status: TaskStatus.OPEN,
  //     };
  //     this.tasks.push(task);
  //     return task;
  //   }
  //   // async updateTaskStatus(
  //   //   id: string,
  //   //   updateTaskDTO: UpdateTaskDTO,
  //   // ): Promise<Task> {
  //   //   const taskIndex = this.tasks.findIndex((task) => task.id == id);
  //   //   if (taskIndex === -1) {
  //   //     throw new NotFoundException(`task ${id} not found`);
  //   //   } else {
  //   //     const updatedTask = { ...this.tasks[taskIndex], ...updateTaskDTO };
  //   //     return (this.tasks[taskIndex] = updatedTask);
  //   //   }
  //   // }
  //   async updateTaskStatus(
  //     id: string,
  //     updateTaskDTO: UpdateTaskDTO,
  //   ): Promise<Task> {
  //     const taskToUpdate = this.getTaskById(id);
  //     taskToUpdate.status = updateTaskDTO.status;
  //     return taskToUpdate;
  //   }
  //   //this.tasks.getTaskById(id)
  //   //   updateTaskByID(id: string, updateTaskDTO: UpdateTaskDTO): Task {
  //   //     const task = this.tasks.find((task) => task.id == id);
  //   //     if (!task) {
  //   //       throw new NotFoundException('id not exist');
  //   //     }
  //   //     Object.assign(task, updateTaskDTO);
  //   //     return task;
  //   //   }
}
