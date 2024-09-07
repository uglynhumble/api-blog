import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class ResponsePostDto {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  tags: string[];

  @Expose()
  header: string;
}
