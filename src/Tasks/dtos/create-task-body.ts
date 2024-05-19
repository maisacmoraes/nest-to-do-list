import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '@prisma/client';

import { IsNotEmpty } from 'class-validator';

export class CreateTaskBody {
  @ApiProperty({
    example: 'Teste téncico',
    description: 'The title of the task',
  })
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: 'Teste téncico de desenvolvedor backend',
    description: 'The description of the task',
  })
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 'EM_ANDAMENTO',
    description: 'The status of the task',
  })
  @IsNotEmpty()
  status: TaskStatus;
}
