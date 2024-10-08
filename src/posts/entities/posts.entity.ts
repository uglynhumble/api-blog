import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  header: string;

  @Column('text', { array: true })
  tags: string[];

  @Column()
  text: string;
}
