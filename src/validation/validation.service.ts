import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateValidationFormDto } from './dto/create-validation-form.dto';
import { UpdateValidationDto } from './dto/update-validation-form.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateStatusValidationDto } from './dto/create-status-validation.dto';

@Injectable()
export class ValidationService {
  constructor( private readonly prismaService: PrismaService ) { }

  async createValidationForm(createValidationDto: CreateValidationFormDto) {
    try {
      const validations = await this.prismaService.validationForm.create({ data: createValidationDto });

      return validations;
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllValidationForms() {
    try {
      const validations = await this.prismaService.validationForm.findMany();

      return validations;
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`No se encontraron tipos de validaciones.`);
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} validation`;
  // }

  // update(id: number, updateValidationDto: UpdateValidationDto) {
  //   return `This action updates a #${id} validation`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} validation`;
  // }

  // * Comienzan endpoints para validationFormData
  // async createValidationFormData() {
  //   try {
  //     const validationData = await this.prismaService.validationFormData.create();
  //   } catch (error) {
      
  //   }
  // }


  // * Comienzan endpoints para statusValidations
  async createStatusValidation(createStatusValidationDto: CreateStatusValidationDto) {
    try {
      const status = await this.prismaService.statusValidation.create({ data: createStatusValidationDto });

      return status;
    } catch (error) {
      console.log(error)
      throw new BadRequestException(`Error al crear la validacion ${error}`);
    }
  }

  async findAllStatusValidation() {
    try {
      const status = await this.prismaService.statusValidation.findMany();

      return status;
    } catch (error) {
      console.log(error)
      throw new NotFoundException(`No se encontraron tipos de validaciones.`);
    }
  }
}
