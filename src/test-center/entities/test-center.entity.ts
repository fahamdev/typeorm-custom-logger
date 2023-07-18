import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
@Index('unique_name_organizationName', ['name', 'organizationName'], {
  unique: true,
})
export class TestCenter {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  organizationName: string;
}
