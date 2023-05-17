import { IsNotEmpty, Length } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty()
  @Length(0, 30)
  title: string;
  
  @IsNotEmpty()
  @Length(0, 255)
  description: string;
}
