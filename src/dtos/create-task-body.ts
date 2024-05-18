import { IsNotEmpty } from 'class-validator';

export class CreateTaskBody {
  @IsNotEmpty()
  title: string;

  @sNotEmpty()
  description: string;

  @isNotEmpty()
  status: string;
}
