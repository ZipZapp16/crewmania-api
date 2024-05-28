import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEmail, IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {
    @ApiProperty({ 
        default: 'Jhon', description: 'Name of the user'
    })
    @MinLength(1)
    @IsString()
    name: string;

    @ApiProperty({ 
        default: 'Doe', description: 'Lastname of the user'
    })
    @MinLength(1)
    @IsString()
    lastname: string;

    @ApiProperty({ 
        default: '', description: 'Second lastname of the user',
        nullable: true
    })
    @IsString()
    @IsOptional()
    secondLastname?: string;

    @ApiProperty({ 
        default: 'jhondoe@mail.com', description: 'Email of the user account'
    })
    @IsEmail()
    email: string;

    @ApiProperty({ 
        default: 'pa55w0rd123', description: 'Password choosen by the user for his account'
    })
    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @ApiProperty({ 
        default: '2024-09-12 00:00:00', description: 'Account date created'
    })
    @IsDate()
    @Type(() => Date)
    dateAdmission: Date; 

    @ApiProperty({ 
        default: '222566131', description: "User's phone"
    })
    @IsString()
    @MinLength(10)
    phone: string;

    @ApiProperty({ 
        default: '', description: "Profile picture of the user acccount"
    })
    @IsString()
    @IsOptional()
    profilePicture?: string;

    @ApiProperty({ 
        default: 'Google', description: "Login option of the user"
    })
    @IsString()
    loginOption: string;

    @ApiProperty({ 
        default: '', description: "Token provided by firebase for push notifications.",
        nullable: true
    })
    @IsString()
    @IsOptional()
    firebaseToken?: string;

    @ApiProperty({ 
        default: 'user', description: "Role of the user in the app."
    })
    @IsString()
    @MinLength(1)
    role: string;
}