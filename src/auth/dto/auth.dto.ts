import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

@Exclude()
export class AuthDto {
  @Expose()
  @IsNumber()
  id: number;

  @Expose()
  @IsString()
  username: string;

  @Expose()
  @IsString()
  password: string;
}
