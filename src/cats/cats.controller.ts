import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from 'src/http-exception.filter';

@Controller('cats')
export class CatsController {
  // injected
  // catsService 선언과 초기화
  constructor(private catsService: CatsService) {}

  @Post()
  @UseFilters(HttpExceptionFilter)
  create(@Body() createCatDto: CreateCatDto) {
    throw new ForbiddenException();
  }

  @Get()
  async findAll() {
    return new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
