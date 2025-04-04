import { IsNotEmpty, IsString, MaxLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(32)
    email: string;
}
