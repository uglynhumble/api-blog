import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ApiSuccessResponseDto {
  @Expose()
  readonly message: string;

  @Expose()
  readonly statusCode: number;
}
