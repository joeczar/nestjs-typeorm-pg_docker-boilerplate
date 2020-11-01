import { IsEmail, IsString, IsNotEmpty, Min } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @Min(8)
  password: string;
}

export default RegisterDto;
