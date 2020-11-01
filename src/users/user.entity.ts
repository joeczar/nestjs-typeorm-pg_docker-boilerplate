import { hash } from 'bcrypt';
import { Min, IsEmail } from 'class-validator';
import {
  Entity,
  Unique,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { UserInterface } from './user.interface';

@Entity()
@Unique(['email'])
export class User implements UserInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  username?: string;

  @Column()
  @Min(8)
  password: string;

  @Column({
    nullable: true,
  })
  name?: string;

  @Column()
  @IsEmail()
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @BeforeInsert()
  async hashPassword?() {
    this.password = await hash(this.password, 10);
  }
}
