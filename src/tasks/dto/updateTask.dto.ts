import {
  IsNotEmpty,
  Length,
  IsOptional,
  IsString,
  IsBoolean,
} from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(0, 30)
  title?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @Length(0, 255)
  description?: string;

  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
