import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @Type(() => Number)
  @IsInt()
  age: number;

  @IsString()
  breed: string;
}
