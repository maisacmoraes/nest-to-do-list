import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskBody } from '../Tasks/dtos/create-task-body';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  getAllTasksr() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: number) {
    return this.taskService.getTaskById({ where: Number(id) });
  }

  @Post()
  async createTask(@Body() body: CreateTaskBody) {
    const { title, description, status } = body;

    const task = await this.taskService.createTask({
      title,
      description,
      status,
    });

    return task;
  }

  @Post(':id')
  updateTask(@Param('id') id: number, @Body() body: any) {
    return this.taskService.updateTask({
      where: Number(id),
      data: body,
    });
  }

  @Delete(':id')
  deleteTask(@Param('id') id: number) {
    return this.taskService.deleteTask(Number(id));
  }
}
