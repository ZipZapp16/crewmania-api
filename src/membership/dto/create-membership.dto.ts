import { Prisma } from "@prisma/client";
import { IsDecimal, IsNumber, IsOptional, IsString, IsUUID, MinLength } from "class-validator";


export class CreateMembershipDto {

    @MinLength(1)
    @IsString()
    level: string;

    @MinLength(1)
    @IsString()
    type: string;

    @IsDecimal()
    cost: number;

    @MinLength(1)
    @IsString()
    currency: string;

    @IsNumber()
    durationDays: number;

    @IsOptional()
    membershipOffersId?: string | null;
}
