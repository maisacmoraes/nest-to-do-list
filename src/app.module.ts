import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { TaskController } from './Tasks/task.controller';
import { TaskService } from './Tasks/task.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [TaskController],
  providers: [PrismaService, TaskService],
})
export class AppModule {}
