import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { TaskController } from './Tasks/task.controller';
import { TaskService } from './Tasks/task.service';
import { UserController } from './User/user.controller';
import { UserService } from './User/user.service';

@Module({
  imports: [],
  controllers: [TaskController, UserController],
  providers: [PrismaService, TaskService, UserService],
})
export class AppModule {}
