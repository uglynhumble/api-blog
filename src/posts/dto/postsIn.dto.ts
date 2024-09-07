import { Exclude, Expose } from 'class-transformer';

@Exclude()
export class RequestPostDto {
  @Expose()
  id: number;

  @Expose()
  username: string;

  @Expose()
  tags: string[];

  @Expose()
  header: string;
}
