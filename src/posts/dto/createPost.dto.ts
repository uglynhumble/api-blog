import { Exclude, Expose } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

@Exclude()
export class CreatePostDto {
  @Expose()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @Expose()
  @IsNotEmpty()
  @IsString()
  username: string;

  @Expose()
  @IsNotEmpty()
  @IsString()
  tags: string[];

  @Expose()
  @IsNotEmpty()
  @IsString()
  header: string;

  @Expose()
  @IsNotEmpty()
  @IsArray()
  text: string;
}
