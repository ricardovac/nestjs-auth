import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Match } from "src/auth/decorators/match.decorator";
import { User } from "../entities/user.entity";

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Match('password')
  confirmPassword: string;

  @IsString()
  name: string;
}