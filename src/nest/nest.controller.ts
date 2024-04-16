import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNestDto } from './dto/create-nest.dto';
import { UpdateNestDto } from './dto/update-nest.dto';
import { NestService } from './nest.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Nest')
@Controller('nests')
export class NestController {
  constructor(private readonly nestService: NestService) {}

  @Post()
  @ApiOperation({ summary: 'summary goes here' })
  create(@Body() createNestDto: CreateNestDto) {
    return this.nestService.create(createNestDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    type: CreateNestDto,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  findAll() {
    return this.nestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nestService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNestDto: UpdateNestDto) {
    return this.nestService.update(+id, updateNestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nestService.remove(+id);
  }
}
