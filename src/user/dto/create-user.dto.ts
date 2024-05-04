import { IsBoolean, IsDate, IsEmail, IsString, MinLength } from "class-validator";


export class CreateUserDto {
    @IsString()
    nombre: string;

    @IsString()
    apellidoPaterno: string;

    @IsString()
    apellidoMaterno: string;

    @IsString()
    fechaDeIngreso: string;

    @IsEmail()
    email: string;

    @MinLength(8)
    password: string;

    @IsString()
    puesto: string;

    @IsString()
    jerarquia: string;

    @IsString()
    baseDeOperaciones: string;

    @IsString()
    fotoPerfil: string;

    @IsString()
    fotoConUniforme: string;

    @IsString()
    fotoValidacion: string;

    @IsBoolean()
    cuentaVerificada: boolean;
}