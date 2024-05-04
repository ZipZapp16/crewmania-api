import { IsEmail, MinLength } from "class-validator";

export class AuthUserDto {
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;
}