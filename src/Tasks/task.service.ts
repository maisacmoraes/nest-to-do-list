import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { TaskStatus } from '@prisma/client'; // Import the 'TaskStatus' type
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(userId: number) {
    const allTasks = await this.prisma.task.findMany({
      where: { userId: userId },
    });
    return allTasks;
  }

  async getTaskById(userId: number, id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({
      where: {
        userId: userId,
        id: id,
      },
    });
    return task;
  }

  async createTask(
    userId: number | undefined,
    data: {
      title: string;
      description: string;
      status: TaskStatus;
    },
  ) {
    const task = await this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status.toLocaleUpperCase() as TaskStatus,
        user: { connect: { id: userId } },
      },
    });

    return task;
  }

  async updateTask(userId: number, id: number, data): Promise<Task> {
    return this.prisma.task.update({
      data: {
        title: data.title,
        description: data.description,
        status: data.status.toLocaleUpperCase() as TaskStatus,
      },
      where: { userId: userId, id: id },
    });
  }

  async deleteTask(userId: number, id: number) {
    this.prisma.task.delete({
      where: { userId: userId, id: id },
    });
    return { messase: 'Task excluída' };
  }
}
