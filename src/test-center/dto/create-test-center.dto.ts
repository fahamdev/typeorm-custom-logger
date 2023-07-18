import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTestCenterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  organizationName: string;
}
