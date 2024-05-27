import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { UpdateValidationDto } from './dto/update-validation-form.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';
import { ValidationResponse } from './interfaces/validation-response.interface';
import { StatusValidationResponse } from './interfaces/status-validation-response.interface';

@Injectable()
export class ValidationService {
  constructor(private readonly prismaService: PrismaService) { }

  async createValidationForm(createValidationDto: CreateValidationFormDto): Promise<ValidationResponse> {
    try {
      const validations = await this.prismaService.validationForm.create({ data: createValidationDto });

      return {
        status: "ok",
        message: "success",
        data: validations
      };
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllValidationForms(): Promise<ValidationResponse> {
    try {
      const validations = await this.prismaService.validationForm.findMany();

      return {
        status: "ok",
        message: "success",
        data: validations
      };
      
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`No se encontraron tipos de validaciones.`);
    }
  }

  // * Comienzan endpoints para statusValidations
  async createStatusValidation(createStatusValidationDto: CreateStatusValidationDto): Promise<StatusValidationResponse> {
    try {
      const status = await this.prismaService.statusValidation.create({ data: createStatusValidationDto });

      return {
        status: "ok",
        message: "success",
        data: status
      };
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllStatusValidation(): Promise<StatusValidationResponse> {
    try {
      const status = await this.prismaService.statusValidation.findMany();

      return {
        status: "ok",
        message: "success",
        data: status
      };
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`No se encontraron tipos de validaciones.`);
    }
  }
}
