import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks() {
    const allTasks = await this.prisma.task.findMany();
    return allTasks;
  }

  // async getTaskById(id: number) {
  //   const task = await this.prisma.task.findUnique({
  //     where: { id },
  //   });
  //   return task;
  // }

  async createTask(data: {
    title: string;
    description: string;
    status: string;
  }) {
    const task = await this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        status: data.status,
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
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
