import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tasks' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 30})
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  done: boolean;
}
