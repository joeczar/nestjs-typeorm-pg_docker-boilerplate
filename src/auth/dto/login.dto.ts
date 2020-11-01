import { IsEmail, IsString, IsNotEmpty, Min } from 'class-validator';

export class LogInDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Min(8)
  password: string;
}

export default LogInDto;
