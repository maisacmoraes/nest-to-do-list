import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { TaskController } from './Tasks/task.controller';
import { TaskService } from './Tasks/task.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [TaskController],
  providers: [PrismaService, TaskService],
})
export class AppModule {}
