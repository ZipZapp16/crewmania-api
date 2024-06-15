import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { UpdateValidationFormDto } from './dto/update-validation-form.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';
import { ValidationResponse } from './interfaces/validation-response.interface';
import { StatusValidationResponse } from './interfaces/status-validation-response.interface';
import { UpdateStatusValidationDto } from './dto/update-status-validation.dto';

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
      throw new BadRequestException(`Error to create the validation ${error}`);
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
      throw new NotFoundException(`There isn't validations registered.`);
    }
  }

  async findValidationForm(formId: string): Promise<ValidationResponse> {
    try {
      const validation = await this.prismaService.validationForm.findUnique({ where: { id: formId } });

      return {
        status: "ok",
        message: "success",
        data: validation
      };
    } catch (error) {
      throw new NotFoundException(`Validation form with id ${formId} doesn't exists.`)
    }
  }

  async updateValidationForm(formId: string, updateValidationFormDto: UpdateValidationFormDto): Promise<ValidationResponse> {
    try {
      const { data: validationFormToUpdate } = await this.findValidationForm(formId);

      const validationFormUpdated = await this.prismaService.validationForm.update({ where: { id: validationFormToUpdate['id'] }, data: updateValidationFormDto });

      return {
        status: "ok",
        message: "success",
        data: validationFormUpdated
      };
    } catch (error) {
      throw new BadRequestException(`Error to update the validation with id ${formId}. ${error}`);
    }
  }

  async deleteValidationForm(formId: string): Promise<ValidationResponse> {
    try {
      const { data: validationFormToDelete } = await this.findValidationForm(formId);

      const validationFormDeleted = await this.prismaService.validationForm.delete({ where: { id: validationFormToDelete['id'] }});

      return {
        status: "ok",
        message: "success",
        data: validationFormDeleted
      };
    } catch (error) {
      throw new BadRequestException(`Error to update the validation with id ${formId}. ${error}`);
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
      throw new BadRequestException(`Error to create the validation ${error}`);
    }
  }

  async findAllStatusValidation(): Promise<StatusValidationResponse> {
    try {
      const statusValidations = await this.prismaService.statusValidation.findMany();

      return {
        status: "ok",
        message: "success",
        data: statusValidations
      };
    } catch (error) {
      throw new NotFoundException(`No se encontraron tipos de validaciones.`);
    }
  }

  async findStatusValidation(statusValidationId: string): Promise<StatusValidationResponse> {
    try {
      const statusValidation = await this.prismaService.statusValidation.findUnique({ where: { id: statusValidationId }});

      return {
        status: "ok",
        message: "success",
        data: statusValidation
      };
    } catch (error) {
      throw new NotFoundException(`Status valiation with id ${statusValidationId} doesn't exist. ${error}`);
    }
  }

  async updateStatusValidation(statusValidationId: string, updateStatusValidationDto: UpdateStatusValidationDto): Promise<StatusValidationResponse> {
    try {
      const { data: statusValidationToUpdate } = await this.findStatusValidation(statusValidationId);

      const statusValidationUpdated = await this.prismaService.statusValidation.update({ where: { id: statusValidationToUpdate['id'] }, data: updateStatusValidationDto });

      return {
        status: "ok",
        message: "success",
        data: statusValidationUpdated
      };
    } catch (error) {
      throw new BadRequestException(`Error to update the validation with id ${statusValidationId} ${error}`);
    }
  }

  async deleteStatusValidation(statusValidationId: string): Promise<StatusValidationResponse> {
    try {
      const { data: statusValidationToDelete } = await this.findStatusValidation(statusValidationId);

      const statusValidationDeleted = await this.prismaService.statusValidation.delete({ where: { id: statusValidationToDelete['id'] } });

      return {
        status: "ok",
        message: "success",
        data: statusValidationDeleted
      };
    } catch (error) {
      throw new BadRequestException(`Error to delete the validation with id ${statusValidationId} ${error}`);
    }
  }
}
