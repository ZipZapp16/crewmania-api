import { Prisma } from "@prisma/client";
import { IsDate, IsEmail, IsOptional, IsString, IsUUID, Matches, MaxLength, MinLength } from "class-validator";


export class CreateUserDto {
    @MinLength(1)
    @IsString()
    name: string;

    @MinLength(1)
    @IsString()
    lastname: string;

    @IsString()
    @IsOptional()
    secondLastname?: string;

    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(50)
    @Matches(
        /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
        message: 'The password must have a Uppercase, lowercase letter and a number'
    })
    password: string;

    @IsDate()
    dateAdmission: Date; 

    @IsString()
    @MinLength(10)
    phone: string;

    @IsString()
    @IsOptional()
    profilePicture?: string;

    @IsString()
    loginOption: string;

    @IsString()
    @IsOptional()
    firebaseToken?: string;

    @IsString()
    position: Prisma.PositionCreateNestedOneWithoutPositionInput;

    @IsString()
    @IsUUID()
    herarchy: Prisma.HierarchyUpsertWithoutUserHerarchyInput;

    @IsString()
    @IsUUID()
    userValidationForm: Prisma.ValidationFormCreateNestedOneWithoutUserValidationFormInput;

    @IsString()
    @IsUUID()
    headquarter: Prisma.HeadquarterCreateNestedOneWithoutUserHeadQuarterInput;

    @IsString()
    @IsUUID()
    statusValidation: Prisma.StatusValidationCreateNestedOneWithoutUserStatusValidationInput;

    @IsString()
    @IsUUID()
    membership: Prisma.MembershipCreateNestedOneWithoutUserMembershipInput;
}