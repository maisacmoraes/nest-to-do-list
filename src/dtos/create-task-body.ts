import { TaskStatus } from '@prisma/client';

import { IsNotEmpty } from 'class-validator';

export class CreateTaskBody {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  status: TaskStatus;
}
