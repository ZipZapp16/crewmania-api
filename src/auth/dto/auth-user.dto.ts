import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class AuthUserDto {
    @ApiProperty({ 
        default: 'prueba@mail.com', description: 'Email provided by the user'
    })
    @IsEmail()
    email: string;

    @ApiProperty({ 
        default: 'trypAssw0rd123', description: 'Password provided by the user'
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;
}