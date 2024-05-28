import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class CreateStatusValidationDto {

    @ApiProperty({ 
        default: 'En curso', description: "Status of the validation process"
    })
    @IsString()
    @MinLength(1)
    type: string;

    @ApiProperty({ 
        default: 'La validacion se encuentra en proceso, por favor, matente atento a tu correo electronico para recibir actualizaciones.', description: "Reason of status of the validation process"
    })
    @IsString()
    @MinLength(1)
    reason: string;
}
