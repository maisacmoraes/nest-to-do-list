import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Task } from '@prisma/client';
import { TaskStatus } from '@prisma/client'; // Import the 'TaskStatus' type

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks() {
    const allTasks = await this.prisma.task.findMany();
    return allTasks;
  }

  async getTaskById(params: { where: number }): Promise<Task> {
    const { where } = params;
    const task = await this.prisma.task.findUnique({
      where: { id: where },
    });
    return task;
  }

  async createTask(data: {
    title: string;
    description: string;
    status: TaskStatus; // Fix: Change the type of 'status' to 'TaskStatus'
  }) {
    const task = await this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status.toLocaleUpperCase() as TaskStatus,
      },
    });
    return task;
  }

  async updateTask(params: { where: number; data }): Promise<Task> {
    const { where, data } = params;
    return this.prisma.task.update({
      data,
      where: { id: where },
    });
  }

  async deleteTask(id: number) {
    this.prisma.task.delete({
      where: { id },
    });
    return { messase: 'Task excluída' };
  }
}
