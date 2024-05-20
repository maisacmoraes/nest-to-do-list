import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskBody } from '../Tasks/dtos/create-task-body';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get(':userId')
  getAllTasksr(@Param('userId') userId: number) {
    return this.taskService.getAllTasks(+userId);
  }

  @Get(':userId/:id')
  getTaskById(@Param('userId') userId: number, @Param('id') id: number) {
    return this.taskService.getTaskById(+userId, +id);
  }

  @Post(':userId/:id')
  async createTask(
    @Param('userId') userId: number,
    @Body() body: CreateTaskBody,
  ) {
    const { title, description, status } = body;

    const task = await this.taskService.createTask(+userId, {
      title,
      description,
      status,
    });

    return task;
  }

  @Patch(':userId/:id')
  updateTask(
    @Param('userId') userId: number,
    @Param('id') id: number,
    @Body() body: any,
  ) {
    return this.taskService.updateTask(+userId, +id, body);
  }

  @Delete(':userId/:id/')
  deleteTask(@Param('userId') userId: number, @Param('id') id: number) {
    return this.taskService.deleteTask(+userId, +id);
  }
}
